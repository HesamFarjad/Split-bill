import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(ff) {
    // setSelectedFriend(ff);
    setSelectedFriend((cur) => (cur?.id === ff.id ? null : ff));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
               key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((eleman) => (
        <Friend
          eleman={eleman}
          key={eleman.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ eleman, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === eleman.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={eleman.image} alt={eleman.name}></img>
      <h3> {eleman.name}</h3>

      {eleman.balance < 0 && (
        <p className="red">
          You owe {eleman.name} {Math.abs(eleman.balance)}€
        </p>
      )}

      {eleman.balance > 0 && (
        <p className="green">
          {eleman.name} ows you {eleman.balance}€
        </p>
      )}

      {eleman.balance === 0 && <p> You and {eleman.name} are even</p>}

      <Button onClick={() => onSelection(eleman)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯‍♀️ Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(h) => setName(h.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(h) => setImage(h.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(h) => setBill(Number(h.target.value))}
      ></input>

      <label>💸 Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(h) =>
          setPaidByUser(
            Number(h.target.value) > bill ? paidByUser : Number(h.target.value)
          )
        }
      ></input>

      <label>🤑 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend}></input>

      <label>💵 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(h) => setWhoIsPaying(h.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

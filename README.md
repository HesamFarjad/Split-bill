# Split-Bill
React application to efficiently manage expenses among friends. The application facilitates adding friends, tracking balances, and splitting bills seamlessly. 


🚀 React Application for Friends' Expenses Management
I recently developed a React application to efficiently manage expenses among friends. The application facilitates adding friends, tracking balances, and splitting bills seamlessly. Let me break down the key components of the code:
* 		Friend Management:
    * The initialFriends array contains sample friend data with attributes like id, name, image, and balance.
    * The FriendsList component renders a list of friends, and each friend is clickable to show/hide additional details.
    * The Friend component displays friend information, including the owed/owing amounts and allows friend selection.
* 		User Interface:
    * The UI includes a sidebar displaying the friends list and an option to add new friends.
    * The "Add Friend" button toggles the display of the form for adding new friends.
    * The selected friend's details are displayed in a form for splitting bills when a friend is selected.
* 		State Management:
    * React hooks such as useState manage the application state, including friend data, selected friend, and whether to show the add friend form.
    * State is updated using functions like setFriends, setSelectedFriend, and setShowAddFriend based on user interactions.
* 		Bill Splitting:
    * The FormSplitBill component handles the process of splitting bills between the user and a selected friend.
    * Users can input the total bill amount, their own expenses, and choose who is paying the bill. The form calculates the friend's share automatically.
* 		Dynamic Forms:
    * The FormAddFriend component allows users to dynamically add new friends with a name, image URL, and automatically generated ID.
    * The form includes input validation to ensure required fields are filled.
* 		Reusable Components:
    * Components such as Button and form elements are designed for reusability throughout the application.
This application is a practical tool for managing shared expenses and simplifying the process of splitting bills among friends. It leverages React's component-based architecture and state management to create a smooth and responsive user experience.

https://youtu.be/TKbffeOCd_U

#React #WebDevelopment #ExpenseManagement #JavaScript #ReactHooks #CodeSnippet
<img width="1439" alt="Screenshot 2023-12-11 at 14 28 55" src="https://github.com/HesamFarjad/Split-bill/assets/81914229/ce8383e5-6578-418f-a301-246bc3325f8c">
<img width="1440" alt="Screenshot 2023-12-11 at 14 29 06" src="https://github.com/HesamFarjad/Split-bill/assets/81914229/6bbcc87a-194d-43c5-aec2-6c143df29375">
<img width="1440" alt="Screenshot 2023-12-11 at 14 29 29" src="https://github.com/HesamFarjad/Split-bill/assets/81914229/3def3dcf-992f-4c31-8048-33a35ffbd831">



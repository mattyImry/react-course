import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserListHandler = (uName, uAge) => {
        setUsersList((prevList) => {
            return [...prevList, { name: uName, age: uAge }];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserListHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;

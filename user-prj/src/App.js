import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserListHandler = (uName, uAge) => {
        setUsersList((prevList) => {
            return [
                ...prevList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserListHandler} />
            <UserList users={usersList} />
        </React.Fragment>
    );
}

export default App;

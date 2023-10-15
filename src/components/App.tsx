import React, { useState } from 'react';
import "../css/style.css"
import SearchUser from '../partials/searchUser';
import UsersList from '../partials/UsersList';
import { IUserData } from '../models/IUserData';
import { getAllUsers, getUsersAPI } from '../http/userAPI';

function App() {

  const [users, setUsers] = useState<{ email: string; number: string }[] | undefined>();

  const fetchUsers = async(email:string, number?:string): Promise<IUserData[]> => {
    try {
      console.log(`userEmail: ${email} and userNumber: ${number}`)
      const data = await getUsersAPI(email, number);
      console.log(data)
      setUsers(data)
      return data;
    } catch (e: any) {
      alert(e.response.data.message);
      throw e;
    }
  }

  const getAll = async() => {
    try {
      const data = await getAllUsers();
      console.log(data)
      return data;
    } catch (e: any) {
      alert(e.response.data.message);
      throw e;
    }
  }

  return (
    <div className="wrapper ">
        <div className="container">
            <SearchUser fetchUsers = {fetchUsers}/>
            <UsersList users = {users}/>
        </div>
    </div>
  );
}

export default App;
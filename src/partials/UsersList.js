import React from "react";

const UsersList = ({ users }: { users: { email: string; number: string }[] | undefined }) => {
  console.log(users);

  if (!users) {
    return <div className="no-users">No users found</div>;
  }

  const listUsers = users.map((user) => {
    return (
      <div 
        className="user-card"
        key={user.number}
      >
        <div>Email: {user.email}</div>
        <div>Number: {user.number}</div>
      </div>
    );
  });

  return (
    <div className="user-list">
      {listUsers}
    </div>
  );
}

export default UsersList;

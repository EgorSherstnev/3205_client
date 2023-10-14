import React from "react";

const UsersList = ({ users }: { users: { email: string; number: string }[] | undefined }) => {
  console.log(users);

  if (!users) {
    return <div>No users found</div>;
  }

  const listUsers = users.map((user) => {
    return (
      <div key={user.email}>
        <div>{user.email}</div>
        <div>{user.number}</div>
      </div>
    );
  });

  return (
    <div>
      {listUsers}
    </div>
  );
}

export default UsersList;

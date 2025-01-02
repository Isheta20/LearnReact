import React, { useContext } from "react";
import { useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
function User() {
  const { userId } = useParams();
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="bg-gray-600 text-white text-3xl p-4 text-center flex flex-col gap-4">
        <p>User: {userId}</p>
        Please Login!
      </div>
    );
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center flex flex-col gap-4">
      <p>User: {userId}</p>
      Welcome {user.username}!
    </div>
  );
}

export default User;

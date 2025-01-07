import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="alltasks" className="bg-[#1c1c1c] p-5 rounded-xl mt-5 h-48 overflow-auto">
      <div className="bg-emerald-600 mb-2 py-2 px-4 flex justify-between rounded font-bold text-white">
        <h2 className="w-1/5">First Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      {userData?.length > 0 ? (
        userData.map((elem, index) => (
          <div
            key={index}
            className="border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded text-white"
          >
            <h2 className="w-1/5 font-semibold font-sans">{elem.firstname}</h2>
            <h3 className="font-semibold w-1/5 text-yellow-600">{elem.taskNumbers.newTask}</h3>
            <h5 className="font-semibold w-1/5 text-blue-400">{elem.taskNumbers.active}</h5>
            <h5 className="font-semibold w-1/5 text-green-600">{elem.taskNumbers.completed}</h5>
            <h5 className="font-semibold w-1/5 text-red-600">{elem.taskNumbers.failed}</h5>
          </div>
        ))
      ) : (
        <p className="text-center text-white mt-4">No employees found.</p>
      )}
    </div>
  );
};

export default AllTask;
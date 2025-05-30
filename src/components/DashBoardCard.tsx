import React from "react";

const DashBoardCard = () => {
  return (
    <div className="bg-white mt-5 mb-5 w-[50%] rounded-2xl">
      <div className="flex justify-between item-center pl-4 pr-4 pt-5">
        <h2 className="text-2xl font-bold">React Masters</h2>
        <div className="bg-[#fffbeb] text-[#bb642c] p-2  border-[#f3f3f4] rounded-2xl font-bold border-2">
          invited
        </div>
      </div>
      <div className="flex justify-between pl-4 mt-2 pr-4 ">
        <div className="flex items-center">
        <span className="material-symbols-outlined" style={{color:'gray'}}>group</span>
        <span className="text-gray-500">12 Members</span>

        </div>
        <span className="text-gray-500">Due 2024-01-15</span>
      </div>
      <div className="pl-4">
        <span>Invited By: John Doe</span>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#16a34a] text-white font-bold m-2 p-2 rounded-sm">
          Accept
        </button>
      </div>
    </div>
  );
};

export default DashBoardCard;

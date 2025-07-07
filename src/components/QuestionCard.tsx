import React from "react";
import SingleQuestion from "./SingleQuestion";

const QuestionCard = () => {
  return (
    <div className="w-[80%] shadow-md">
      <div className="bg-blue-500">
        <h2 className="text-white text-3xl pl-4 pb-2 pt-4 font-bold">
          Artificial Intelligence & Machine Learning
        </h2>
        <h4 className="text-gray-200 pl-4 pb-4">Test Your knowld;askd;aksd;aksd;askdaksdaskdaskd</h4>
      </div>
      <div>
        <div className="flex justify-between p-2">
          <span className="text-gray-500">Question 5 of 5</span>
          <span className="text-gray-500">100% Complete</span>
        </div>
        <div className="progress w-[100%] bg-black h-2 flex justify-center border-gray-50 rounded-lg"></div>
        <div className="p-2 text-2xl font-bold">What is your name?</div>
        <div className="">
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
          <SingleQuestion />
        </div>
      </div>
      <div className="progress w-[100%] bg-gray-200 h-[1px] flex justify-center rounded-lg"></div>
      <div className="flex justify-end mt-2">
        <button className="bg-black text-white p-3 rounded-sm m-2">Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;

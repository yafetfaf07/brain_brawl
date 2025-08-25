import React, { useState } from 'react';

interface QuestionCardProps {
  no: string;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  ans: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ no, question, a, b, c, d, ans }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Fallback values to prevent undefined errors
  const safeNo = no || '1'; // Default to '1' if no is undefined
  const safeQuestion = question || 'No question available';
  const safeA = a || '';
  const safeB = b || '';
  const safeC = c || '';
  const safeD = d || '';
  const safeAns = ans || '';

  return (
    <div className="w-[80%] shadow-md">
      <div className="bg-blue-500">
        <h2 className="text-white text-3xl pl-4 pb-2 pt-4 font-bold">
          Artificial Intelligence & Machine Learning
        </h2>
        <h4 className="text-gray-200 pl-4 pb-4">Test Your Knowledge</h4>
      </div>
      <div>
        <div className="flex justify-between p-2">
          <span className="text-gray-500">Question {safeNo} of</span>
        </div>
        <div className="p-2 text-2xl font-bold">{safeQuestion}</div>
        <div className="">
          <p>{safeA}</p>
          <p>{safeB}</p>
          <p>{safeC}</p>
          <p>{safeD}</p>
          <p>{safeAns}</p>
        </div>
      </div>
      <div className="progress w-[100%] bg-gray-200 h-[1px] flex justify-center rounded-lg"></div>
      <div className="flex justify-end mt-2">
        <button
          className="bg-black text-white p-3 rounded-sm m-2"
          onClick={handleSubmit}
          disabled={isSubmitted} // Disable submit button after submission
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
import { Button } from "./ui/button";

const QuizCard = () => {
  return (
    <div className="bg-orange-50 border-2 border-orange-300 p-4 mt-4 rounded-lg">
      <div className="flex justify-between mt-2 mb-4">
        <h2 className="font-semibold">DOM Manipulation</h2>
        <div className="bg-orange-100 rounded-4xl w-14 border-1 border-green-20 flex items-center justify-center">
          <span className="text-orange-700 text-[12px] font-medium">medium</span>
        </div>
      </div>
      <span className="mt-5">Working with the Document Object Model</span>
      <div className="flex justify-between mt-2">
        <span>2:00</span>
        <span>20 Questions</span>
      </div>
      <div className="flex justify-between mt-4">
    <span className="text-red-400 font-semibold">Due:2024-01-20</span>
    <Button className="bg-orange-500 text-white rounded-lg">Start Quiz</Button>
      </div>
    </div>
  );
};

export default QuizCard;

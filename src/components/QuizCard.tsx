import { Button } from "./ui/button";

interface QuizCardProps {
  name:string;
  desc:string;
  time:string;
  length:number
}

const QuizCard:React.FC<QuizCardProps> = ({name,desc,time, length}) => {
  return (
    <div className="bg-orange-50 border-2 border-orange-300 p-4 mt-4 rounded-lg">
      <div className="flex justify-between mt-2 mb-4">
        <h2 className="font-semibold">{name}</h2>
        <div className="bg-orange-100 rounded-4xl w-14 border-1 border-green-20 flex items-center justify-center">
          <span className="text-orange-700 text-[12px] font-medium">default</span>
        </div>
      </div>
      <span className="mt-5">{desc}</span>
      <div className="flex justify-between mt-2">
        <span>2:00</span>
        <span> {length} Questions</span>
      </div>
      <div className="flex justify-between mt-4">
    <span className="text-red-400 font-semibold">Quiz created at: {time}</span>
    <Button className="bg-orange-500 text-white rounded-lg">Start Quiz</Button>
      </div>
    </div>
  );
};

export default QuizCard;

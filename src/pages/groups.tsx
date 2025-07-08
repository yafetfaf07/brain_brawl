import CompletedQuizCard from "@/components/CompletedQuizCard";
import QuizCard from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import UpcomingQuizCard from "@/components/UpcomingQuizCard";
import { useNavigate } from "react-router";

const Groups = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-white p-5 rounded-lg w-[100%]">
        <div className="flex justify-between">
          <div
            className="bg-white text-black cursor-pointer border-1 border-gray-300 p-1 rounded-lg w-[47%] hover:shadow-lg"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Back to Dashboard
          </div>
          <div className="bg-[#f9f686] text-amber-800 w-[47%] p-1 font-semibold flex justify-between items-center rounded-lg md:w-20 text-[15px]">
            View Leaderboard
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-2">Javascript Ninjas</h2>
          <p className="text-[15px] text-gray-400 ">
            Mastering modern Javascript through interactive quizzes and
            challenges
          </p>
          <div className="flex justify-around mt-2">
            <div className="flex flex-col">
              <span className="text-violet-600 font-bold text-2xl">25</span>
              <span className="text-gray-600">Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-600 font-bold text-2xl">156</span>

              <span className="text-gray-600">Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-green-600 font-bold text-2xl">8/15</span>

              <span className="text-gray-600">Quizzes</span>
            </div>
          </div>
          <div className="flex justify-between mt-5 bg-gray-300">
            <div className="bg-gray-100 rounded-none text-black w-[32%] p-2 text-center">
              Quizzes
            </div>
            <div className="bg-inherit text-black w-[32%] p-2 text-center">
              Materials
            </div>
            <div className="bg-inherit text-black w-[32%] p-2 text-center">
              Flashcards
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <h2 className="text-2xl font-bold">Current Quizzes</h2>
            <div className="bg-orange-100 rounded-4xl w-14 border-1 border-green-20 flex items-center justify-center">
              <span className="text-orange-700 text-[12px] font-medium">
                2 active
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
          </div>
          <div className="flex mt-5 justify-between">
            <h2 className="text-2xl font-bold">Completed Quizzes</h2>
            <div className="bg-green-100 rounded-4xl  border-1 border-green-20 flex items-center justify-center p-2">
              <span className="text-green-700 text-[12px] font-medium">
                3 completed
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <CompletedQuizCard />
            <CompletedQuizCard />
            <CompletedQuizCard />
            <CompletedQuizCard />
            <CompletedQuizCard />
          </div>

          <div className="flex mt-5 justify-between">
            <h2 className="text-2xl font-bold">Upcoming Quizzes</h2>
            <div className="bg-blue-100 rounded-4xl  border-1 border-green-20 flex items-center justify-center p-2">
              <span className="text-blue-700 text-[12px] font-medium">
                3 upcoming
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <UpcomingQuizCard />
            <UpcomingQuizCard />
            <UpcomingQuizCard />
            <UpcomingQuizCard />
            <UpcomingQuizCard />
            <UpcomingQuizCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;

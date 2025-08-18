import CompletedQuizCard from "@/components/CompletedQuizCard";
import FlashCardSubPage from "@/components/FlashCardSubPage";
import QuizCard from "@/components/QuizCard";
import UpcomingQuizCard from "@/components/UpcomingQuizCard";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowLeft, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const Groups = () => {
  const navigate = useNavigate();
  const [quizzes, setquizzes] = useState<boolean>(true);
  const [flashcards, setflashcards] = useState<boolean>(false);

  return (
    <div className="">
      <div className="bg-white p-5 rounded-lg w-[100%]">
        <div className="flex justify-between">
          <div
            className="bg-gray-200 rounded-full p-2 text-black hover:shadow-lg"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
           <ArrowLeft/>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger><EllipsisVertical/></DropdownMenuTrigger>
            <DropdownMenuContent>
             
              <DropdownMenuItem className="bg-purple-200 text-purple-700">Create Quiz</DropdownMenuItem>
              <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
              <DropdownMenuItem className="bg-yellow-200 text-yellow-700">View LeaderBoard</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <div
              className="bg-gray-100 rounded-none text-black w-[32%] p-2 text-center"
              onClick={() => {
                setquizzes(true);
                setflashcards(false);
              }}
            >
              Quizzes
            </div>
            <div
              className="bg-inherit text-black w-[32%] p-2 text-center"
              onClick={() => {
                setquizzes(false);
                setflashcards(true);
              }}
            >
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
          {quizzes ? (
            <div>
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
          ) : flashcards ? (
            <FlashCardSubPage />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Groups;

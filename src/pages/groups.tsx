import CompletedQuizCard from "@/components/CompletedQuizCard";
import FlashCardSubPage from "@/components/FlashCardSubPage";
import QuizCard from "@/components/QuizCard";
import UpcomingQuizCard from "@/components/UpcomingQuizCard";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
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
} from "@/components/ui/drawer";
import { ArrowLeft, EllipsisVertical, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/utils/supabase";

const Groups = () => {
  const {id} = useParams<{id:string}>();
  const navigate = useNavigate();
  const [quizzes, setquizzes] = useState<boolean>(true);
  const [flashcards, setflashcards] = useState<boolean>(false);
  const[selectedMembers,setselectedMembers] = useState<string[]>([]);
  const[emailValue,setemailValue] = useState<string>("");
  const addMembers = () => {
    setselectedMembers((prevItems) => [...prevItems, emailValue])
    setemailValue("");
  }

  const inviteGroup = async() => {
    const{data:userData,error:userError} = await supabase.from('user').select("id,email").in("email",selectedMembers);
    if(userError) {
      console.error("Error in finding user emails: ",userError)
      return
    }
    if(userData?.length==0) {
      console.error("No data found");
      return
    }
    const insertUser = userData.map((user) => ({
      uid: user.id,
      gid: id,
      role:"user",
      hasJoined:true
    }));
    const{error:insertError} = await supabase.from('usergroup').insert(insertUser);
    if(insertError) {
      console.error("Error in inserting user into usergroup: ", insertError)
    }
    else {
      console.log("Members successfully added");
      
    }

  }
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
            <ArrowLeft />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="bg-purple-200 text-purple-700">
                Create Quiz
              </DropdownMenuItem>
              <Drawer>
                <DrawerTrigger>Add Members</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Add Members to Group</DrawerTitle>
                    <span className="text-gray-400">
                      Invite new members to join your group and start learning
                      together.
                    </span>
                    <DrawerDescription>
                      <div className="flex items-center">
                        <Mail className="text-black mr-2 mb-2" /> <span className="text-black mb-2 font-medium">Invite By Email</span>
                      </div>
                      <div className="flex items-center">
                        <Input value={emailValue} placeholder="Enter email" onChange={(e) => setemailValue(e.target.value)}/>
                        <Button className="bg-white border-gray-200 border-1 ml-2" onClick={() => addMembers()}><Plus className="text-gray-700"/></Button>
                      </div>
                      <div>
                        <span className="text-left">Selected Members({selectedMembers.length})</span>
                        <div className="rounded-sm p-2 flex border-2 border-gray-200">
                          {
                            selectedMembers.map((d) => {
                              return <div className="rounded-2xl border-1 border-gray-600 p-2 m-2 ">
                                <span className="text-black font-semibold">{d}</span>
                                <span className="font-semibold ml-2" onClick={() => {
                                  setselectedMembers(selectedMembers.filter((m) => m!=d))
                                }}>x</span>
                              </div>
                            })
                          }
                        </div>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button className="bg-gradient-to-r from-violet-500 to indigo-400" onClick={() => {
                      inviteGroup();
                    }}>Add Members</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <DropdownMenuItem className="bg-yellow-200 text-yellow-700">
                View LeaderBoard
              </DropdownMenuItem>
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

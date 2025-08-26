import RankingComponent from "@/components/RankingComponent"
import {  ChevronLeft, Trophy } from "lucide-react"

const LeaderBoard = () => {
  return (
    <div>
      <div className=" bg-gray-300 w-[40px] h-[40px] rounded-full flex items-center justify-center "><ChevronLeft/> </div>
      <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center flex-col bg-[#fffbea] w-[80%] p-5 rounded-lg border-2 border-amber-400">
        <div className="flex items-center">
          <Trophy className="text-[#f59e0b]" scale={10} size={36}/> 
          <h2 className="text-4xl font-semibold">Group LeaderBoard </h2>
          <Trophy className="text-[#f59e0b]" size={36}/>
        </div>
        <h2>Javascript Ninjas- Competition Rankings</h2>
      </div>
      <div className="mt-6 w-[100%] md:flex md:flex-wrap md:justify-around ">

      <RankingComponent/>
      <RankingComponent/>
      <RankingComponent/>

      </div>
      </div>
   
    </div>
  )
}

export default LeaderBoard
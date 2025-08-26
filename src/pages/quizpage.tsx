import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase";
import { useParams } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircle, XCircle } from "lucide-react";
import QuestionCard from "@/components/QuestionCard";
import { toast } from "sonner"
interface QuizItem {
  id: string;
  [key: string]: string;
}

type QuizData = QuizItem[];

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [questions, setQuestions] = useState<QuizData>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({}); // Store user answers

  useEffect(() => {
    const fetchQuizPage = async () => {
      const { data, error } = await supabase
        .from("quiz")
        .select("questions")
        .eq("id", quizId);
      if (error) {
        console.error("Quiz Data failed: ", error);
        toast.error("Failed to load quiz questions.");
        return;
      } else if (data) {
        console.log("Fetched data:", data[0].questions[0]);
        setQuestions(data[0].questions);
      }
    };
    fetchQuizPage();
  }, [quizId]);

  // Callback to update user answers
  const handleAnswerSelect = (questionId: string, selectedAnswer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  // Handle quiz submission
  const handleCompleteQuiz = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      const questionId = question.id;
      const correctAnswer = question.ans;
      const userAnswer = userAnswers[questionId];
      if (userAnswer && userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const totalQuestions = questions.length;
    const scorePercentage = ((correctCount / totalQuestions) * 100).toFixed(2);
    const message = `Quiz completed! You got ${correctCount} out of ${totalQuestions} correct (${scorePercentage}%).`;
console.log(`${correctCount} / ${totalQuestions}`);

    toast.success(message, {
      description: "Great job! Check your results or try another quiz.",
      duration: 5000,
    });
  };

  return (
    <div>
      <Toaster
        position="top-center"
        richColors
        icons={{
          success: <CheckCircle className="h-5 w-5 text-green-500" />,
          error: <XCircle className="h-5 w-5 text-red-500" />,
        }}
      />
      <h2 className="font-bold text-3xl">
        Ready to put your knowledge to the test? Let's dive in! 🚀🚀
      </h2>
      <div className="flex flex-col justify-center items-center">
        {questions.map((d, i) => {
          return (
            <QuestionCard
              totalQuestion={questions.length}
              no={d["id"]}
              question={d["question"]}
              a={d["A"]}
              b={d["B"]}
              c={d["C"]}
              d={d["D"]}
              ans={d["ans"]}
              key={i}
              onAnswerSelect={handleAnswerSelect} // Pass callback to QuestionCard
            />
          );
        })}
      </div>
      <Button
        className="bg-green-500 float-right m-2"
        onClick={handleCompleteQuiz}
      >
        Complete Quiz
      </Button>
    </div>
  );
};

export default QuizPage;
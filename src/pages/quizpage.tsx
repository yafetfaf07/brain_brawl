import QuestionCard from '@/components/QuestionCard';
import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';



interface QuizItem {
  id: string;
  [key: string]:string;
}

type QuizData = QuizItem[];

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [questions, setQuestions] = useState<QuizData>([]);

  useEffect(() => {
    const fetchQuizPage = async () => {
      const { data, error } = await supabase.from('quiz').select("questions").eq('id', quizId);
      if (error) {
        console.error("Quiz Data failed: ", error);
        return;
      } else if (data) {
        console.log("Fetched data:", data[0].questions[0]);

        console.log("Fetched data1:", data[0].questions[0]['id']);
        console.log("Fetched data2:", data[0].questions[0]['question']);
        console.log("Fetched data3:", data[0].questions[0]['A']);
        console.log("Fetched data4:", data[0].questions[0]['B']);
        console.log("Fetched data5:", data[0].questions[0]['C']);
        console.log("Fetched data6:", data[0].questions[0]['D']);
        console.log("Fetched data7:", data[0].questions[0]['ans']);

        setQuestions(data[0].questions);

      }
    };
    fetchQuizPage();
  }, []);

  return (
    <div>
      <h2>OOSE</h2>
  {
    questions.map((d,i) => {
      return <QuestionCard no={d['id']} question={d['question']} a={d['A']} b={d['B']} c={d['C']} d={d['D']} ans={d['ans']} key={i} />
    })
  }
    </div>
  );
};

export default QuizPage;
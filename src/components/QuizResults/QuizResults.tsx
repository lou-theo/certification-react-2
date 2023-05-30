import QuestionList from '@components/QuestionList/QuestionList.tsx';
import QuizScore from '@components/QuizScore/QuizScore.tsx';

export default function QuizResults() {
  return (
    <>
      <h1>RESULTS</h1>
      <QuestionList showCorrection />
      <QuizScore />
    </>
  );
}

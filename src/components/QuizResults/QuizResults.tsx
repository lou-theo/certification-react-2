import QuestionList from '@components/QuestionList/QuestionList.tsx';

export default function QuizResults() {
  return (
    <div>
      <h1>RESULTS</h1>
      <QuestionList showCorrection />
    </div>
  );
}

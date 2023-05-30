import QuestionList from '@components/QuestionList/QuestionList.tsx';
import QuizSelectors from '@components/QuizSelectors/QuizSelectors.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function QuizMaker() {
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const onQuizFinished = () => {
    setIsQuizFinished(true);
  };

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <QuizSelectors />
      <QuestionList onQuizFinished={onQuizFinished} />
      {isQuizFinished && (
        <Link role="button" to={'/results'}>
          Submit
        </Link>
      )}
    </>
  );
}

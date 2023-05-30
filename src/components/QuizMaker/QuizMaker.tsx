import QuestionList from '@components/QuestionList/QuestionList.tsx';
import QuizSelectors from '@components/QuizSelectors/QuizSelectors.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizMaker.module.scss';

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
        <Link to={'/results'} role="button" className={`buttonLink ${styles.marginLeft}`}>
          Submit
        </Link>
      )}
    </>
  );
}

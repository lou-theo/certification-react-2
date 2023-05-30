import { isQuizCompleted } from '@/helpers/quiz.helper.ts';
import { useQuestions } from '@/hooks/Questions.hooks.ts';
import QuestionList from '@components/QuestionList/QuestionList.tsx';
import QuizSelectors from '@components/QuizSelectors/QuizSelectors.tsx';
import { Link } from 'react-router-dom';
import styles from './QuizMaker.module.scss';

export default function QuizMaker() {
  const questions = useQuestions();

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <QuizSelectors />
      <QuestionList />
      {isQuizCompleted(questions) && (
        <Link to={'/results'} role="button" className={`buttonLink ${styles.marginLeft}`}>
          Submit
        </Link>
      )}
    </>
  );
}

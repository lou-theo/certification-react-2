import { useQuestionsDispatch } from '@/hooks/Questions.hooks.ts';
import QuestionList from '@components/QuestionList/QuestionList.tsx';
import QuizScore from '@components/QuizScore/QuizScore.tsx';
import { useNavigate } from 'react-router-dom';
import styles from './QuizResults.module.scss';

export default function QuizResults() {
  const dispatchQuestions = useQuestionsDispatch();
  const navigate = useNavigate();

  const resetQuiz = (): void => {
    dispatchQuestions({ type: 'reset' });
    navigate('/');
  };

  return (
    <>
      <h1>RESULTS</h1>
      <QuestionList showCorrection />
      <QuizScore />
      <button className={styles.createQuizButton} onClick={resetQuiz}>
        Create a new quiz
      </button>
    </>
  );
}

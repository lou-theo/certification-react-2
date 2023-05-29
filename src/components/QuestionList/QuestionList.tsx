import { useQuestions } from '@/hooks/Questions.hooks.ts';
import Question from '@components/Question/Question.tsx';
import styles from './QuestionList.module.scss';

export default function QuestionList() {
  const questions = useQuestions();

  return (
    <div className={styles.questionList}>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}

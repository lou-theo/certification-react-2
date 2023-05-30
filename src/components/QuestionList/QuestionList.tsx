import { useQuestions, useQuestionsDispatch } from '@/hooks/Questions.hooks.ts';
import Question from '@components/Question/Question.tsx';
import styles from './QuestionList.module.scss';

interface QuestionListProps {
  showCorrection?: boolean;
}

export default function QuestionList({ showCorrection = false }: QuestionListProps) {
  const questions = useQuestions();
  const dispatch = useQuestionsDispatch();

  const onQuestionAnswered = (questionId: string, optionId: string) => {
    dispatch({ type: 'answerQuestion', payload: { questionId: questionId, optionId } });
  };

  return (
    <div className={styles.questionList}>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          showCorrection={showCorrection}
          onQuestionAnswered={onQuestionAnswered}
        />
      ))}
    </div>
  );
}

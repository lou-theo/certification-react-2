import { useQuestions, useQuestionsDispatch } from '@/hooks/Questions.hooks.ts';
import Question from '@components/Question/Question.tsx';
import { useState } from 'react';
import styles from './QuestionList.module.scss';

interface QuestionListProps {
  onQuizFinished: () => void;
}

export default function QuestionList(props: QuestionListProps) {
  const questions = useQuestions();
  const dispatch = useQuestionsDispatch();

  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);

  const onQuestionAnswered = (questionId: string, optionId: string) => {
    dispatch({ type: 'answerQuestion', payload: { questionId: questionId, optionId } });

    const newUniqAnsweredQuestionIds = [...new Set([...answeredQuestionIds, questionId])];
    setAnsweredQuestionIds(newUniqAnsweredQuestionIds);

    if (newUniqAnsweredQuestionIds.length === questions.length) {
      props.onQuizFinished();
    }
  };

  return (
    <div className={styles.questionList}>
      {questions.map((question) => (
        <Question key={question.id} question={question} onQuestionAnswered={onQuestionAnswered} />
      ))}
    </div>
  );
}

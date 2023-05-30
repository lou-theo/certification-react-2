import { useQuestions } from '@/hooks/Questions.hooks.ts';
import styles from './QuizScore.module.scss';

export default function QuizScore() {
  const questions = useQuestions();
  const score = questions.filter(
    (question) => question.selectedOptionId === question.options.find((option) => option.isAnswer)?.id,
  ).length;

  let scoreClass;
  if ([4, 5].includes(score)) {
    scoreClass = styles.score__winner;
  } else if ([0, 1].includes(score)) {
    scoreClass = styles.score__loser;
  } else {
    scoreClass = styles.score__average;
  }

  return (
    <div className={scoreClass}>
      You scored {score} out of {questions.length}
    </div>
  );
}

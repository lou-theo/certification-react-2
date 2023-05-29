import QuizSelectors from '@components/QuizSelectors/QuizSelectors.tsx';
import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';

export default function QuizMaker() {
  const onQuizCreate = (categoryId: string, difficulty: DifficultyLevelEnum) => {
    categoryId + difficulty;
  };

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <QuizSelectors onQuizCreate={onQuizCreate} />
    </>
  );
}

import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';

export interface ApiQuestionModel {
  category: string;
  type: string;
  difficulty: DifficultyLevelEnum;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

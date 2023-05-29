import { QuestionModel } from '@models/Question.model.ts';

export type QuestionsAction = {
  type: 'create' | 'reset';
  payload: QuestionModel[];
};

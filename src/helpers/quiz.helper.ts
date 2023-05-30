import { QuestionModel } from '@models/Question.model.ts';

export const isQuizCompleted = (questions: QuestionModel[]) => {
  return questions.length > 0 && questions.every((question) => question.selectedOptionId);
};

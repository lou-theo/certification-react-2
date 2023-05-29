import { QuestionModel } from '@models/Question.model.ts';

export type QuestionsAction =
  | {
      type: 'create';
      payload: QuestionModel[];
    }
  | {
      type: 'answerQuestion';
      payload: {
        questionId: string;
        optionId: string;
      };
    }
  | {
      type: 'reset';
    };

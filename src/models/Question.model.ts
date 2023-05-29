import { QuestionOptionModel } from '@models/QuestionOption.model.ts';

export interface QuestionModel {
  id: string;
  text: string;
  options: QuestionOptionModel[];
  selectedOptionId?: string;
}

import { ApiQuestionModel } from '@models/api/ApiQuestion.model.ts';

export interface ApiQuestionListModel {
  response_code: number;
  results: ApiQuestionModel[];
}

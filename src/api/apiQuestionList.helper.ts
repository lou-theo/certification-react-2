import { getUrl } from '@/api/api.helper.ts';
import { ApiQuestionModel } from '@models/api/ApiQuestion.model.ts';
import { ApiQuestionListModel } from '@models/api/ApiQuestionList.model.ts';
import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';
import { QuestionModel } from '@models/Question.model.ts';
import { QuestionOptionModel } from '@models/QuestionOption.model.ts';
import { GenericAbortSignal } from 'axios';

export const fetchQuestionList = async (
  body: { categoryId: string; difficulty: DifficultyLevelEnum },
  options?: {
    abortAxiosSignal?: GenericAbortSignal;
  },
): Promise<QuestionModel[]> => {
  const apiQuestionListModel: ApiQuestionListModel | undefined = await getUrl<ApiQuestionListModel>(
    `https://opentdb.com/api.php?amount=5&category=${body.categoryId}&difficulty=${body.difficulty}&type=multiple`,
    options,
  );
  return apiQuestionListModel ? mapApiQuestionListToQuestionModelList(apiQuestionListModel) : [];
};

export const mapApiQuestionListToQuestionModelList = (apiQuestionList: ApiQuestionListModel): QuestionModel[] => {
  return apiQuestionList.results.map((apiQuestion: ApiQuestionModel, index: number) => {
    return mapApiQuestionToQuestionModel(apiQuestion, index.toString());
  });
};

export const mapApiQuestionToQuestionModel = (apiQuestion: ApiQuestionModel, id: string): QuestionModel => {
  const incompleteOptions: Partial<QuestionOptionModel>[] = [
    ...apiQuestion.incorrect_answers.map((incorrectAnswer: string) => {
      return {
        text: incorrectAnswer,
        isCorrect: false,
      };
    }),
    {
      text: apiQuestion.correct_answer,
      isCorrect: true,
    },
  ];

  const options: QuestionOptionModel[] = randomizeArray<Partial<QuestionOptionModel>>(incompleteOptions).map(
    (option: Partial<QuestionOptionModel>, index: number) => {
      return {
        id: index.toString(),
        ...option,
      } as QuestionOptionModel;
    },
  );

  return {
    id,
    text: apiQuestion.question,
    options,
  };
};

const randomizeArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

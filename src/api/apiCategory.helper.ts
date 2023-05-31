import { getUrl } from '@/api/api.helper.ts';
import { ApiCategoryModel } from '@models/api/ApiCategory.model.ts';
import { ApiTriviaCategoriesModel } from '@models/api/ApiTriviaCategories.model.ts';
import { SelectOptionModel } from '@models/SelectOption.model.ts';
import { GenericAbortSignal } from 'axios';

export const fetchCategories = async (options?: {
  abortAxiosSignal?: GenericAbortSignal;
}): Promise<ApiCategoryModel[]> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiTriviaCategoriesModel: ApiTriviaCategoriesModel | undefined = await getUrl<ApiTriviaCategoriesModel>(
    baseUrl + '/api_category.php',
    options,
  );
  return apiTriviaCategoriesModel?.trivia_categories ?? [];
};

export const mapCategoryToOption = (category: ApiCategoryModel): SelectOptionModel => {
  return {
    value: category.id.toString(),
    label: category.name,
  };
};

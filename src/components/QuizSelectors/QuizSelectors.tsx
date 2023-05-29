import { fetchCategories, mapCategoryToOption } from '@/api/apiCategory.helper.ts';
import Select from '@components/Select/Select.tsx';
import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';
import { SelectOptionModel } from '@models/SelectOption.model.ts';
import { useEffect, useState } from 'react';

export default function QuizSelectors() {
  const [categoryOptions, setCategoryOptions] = useState<SelectOptionModel[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const abortCategoryFetch = new AbortController();

    (async () => {
      const categories = await fetchCategories({ abortAxiosSignal: abortCategoryFetch.signal });
      const categoryOptions = categories.map(mapCategoryToOption);
      setCategoryOptions(categoryOptions);
    })();

    return () => {
      abortCategoryFetch.abort();
    };
  }, []);

  const difficultyOptions: SelectOptionModel[] = [
    { value: DifficultyLevelEnum.Easy },
    { value: DifficultyLevelEnum.Medium },
    { value: DifficultyLevelEnum.Hard },
  ];
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevelEnum | undefined>(undefined);

  return (
    <>
      <Select
        id="categorySelect"
        placeholder="Select a category"
        options={categoryOptions}
        value={selectedCategoryId}
        onChange={setSelectedCategoryId}
      />
      <Select
        id="difficultySelect"
        placeholder="Select difficulty"
        options={difficultyOptions}
        value={selectedDifficulty}
        onChange={(newValue: string) => setSelectedDifficulty(newValue as DifficultyLevelEnum)}
      />
    </>
  );
}

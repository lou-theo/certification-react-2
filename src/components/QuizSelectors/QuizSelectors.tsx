import { fetchCategories, mapCategoryToOption } from '@/api/apiCategory.helper.ts';
import { fetchQuestionList } from '@/api/apiQuestionList.helper.ts';
import { useQuestionsDispatch } from '@/hooks/Questions.hooks.ts';
import Select from '@components/Select/Select.tsx';
import { DifficultyLevelEnum } from '@models/DifficultyLevel.enum.ts';
import { SelectOptionModel } from '@models/SelectOption.model.ts';
import { useEffect, useState } from 'react';
import styles from './QuizSelectors.module.scss';

export default function QuizSelectors() {
  // region category select
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
  // endregion

  // region difficulty select
  const difficultyOptions: SelectOptionModel[] = [
    { value: DifficultyLevelEnum.Easy },
    { value: DifficultyLevelEnum.Medium },
    { value: DifficultyLevelEnum.Hard },
  ];
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevelEnum | undefined>(undefined);
  // endregion

  // region create button
  const questionsDispatch = useQuestionsDispatch();

  const onQuizCreate = async (categoryId: string, difficulty: DifficultyLevelEnum) => {
    const questions = await fetchQuestionList({ categoryId, difficulty });
    questionsDispatch({ type: 'create', payload: questions });
  };
  // endregion

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
      <button
        id="createBtn"
        className={styles.createButton}
        disabled={!selectedCategoryId || !selectedDifficulty}
        onClick={() => onQuizCreate(selectedCategoryId as string, selectedDifficulty as DifficultyLevelEnum)}
      >
        Create
      </button>
    </>
  );
}

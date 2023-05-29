import { QuestionsContext, QuestionsDispatchContext } from '@/store/QuestionsProvider.tsx';
import { useContext } from 'react';

export function useQuestions() {
  return useContext(QuestionsContext);
}

export function useQuestionsDispatch() {
  return useContext(QuestionsDispatchContext);
}

import { QuestionModel } from '@models/Question.model.ts';
import { QuestionsAction } from '@models/QuestionAction.type.ts';
import { createContext, Dispatch, ReactNode, useReducer } from 'react';

const initialQuestions: QuestionModel[] = [];

export const QuestionsContext = createContext<QuestionModel[]>(initialQuestions);
export const QuestionsDispatchContext = createContext<Dispatch<QuestionsAction>>(() => ({}));

function questionsReducer(questions: QuestionModel[], action: QuestionsAction): QuestionModel[] {
  switch (action.type) {
    case 'create': {
      return [...action.payload];
    }
    case 'reset': {
      return [];
    }
    default: {
      return questions;
    }
  }
}

export function QuestionsProvider({ children }: { children?: ReactNode }) {
  const [questions, dispatch] = useReducer(questionsReducer, initialQuestions);

  return (
    <QuestionsContext.Provider value={questions}>
      <QuestionsDispatchContext.Provider value={dispatch}>{children}</QuestionsDispatchContext.Provider>
    </QuestionsContext.Provider>
  );
}

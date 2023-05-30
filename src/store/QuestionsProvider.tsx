import { QuestionModel } from '@models/Question.model.ts';
import { QuestionsAction } from '@models/QuestionAction.type.ts';
import { createContext, Dispatch, ReactNode, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

const localStorageKey = 'questions';
const initialQuestions: QuestionModel[] = [];

export const QuestionsContext = createContext<QuestionModel[]>(initialQuestions);
export const QuestionsDispatchContext = createContext<Dispatch<QuestionsAction>>(() => ({}));

function questionsReducer(questions: QuestionModel[], action: QuestionsAction): void {
  switch (action.type) {
    case 'create': {
      questions.splice(0, questions.length, ...action.payload);
      return;
    }
    case 'answerQuestion': {
      const question = questions.find((question) => question.id === action.payload.questionId);
      if (!question) {
        return;
      }
      question.selectedOptionId = action.payload.optionId;
      return;
    }
    case 'reset': {
      // empty the array
      questions.splice(0, questions.length);
      return;
    }
  }
}

export function QuestionsProvider({ children }: { children?: ReactNode }) {
  const getInitialQuestionsFromLocalStorage = (): QuestionModel[] => {
    const storedQuestions = localStorage.getItem(localStorageKey);
    return storedQuestions ? JSON.parse(storedQuestions) : initialQuestions;
  };

  const [questions, dispatch] = useImmerReducer(questionsReducer, getInitialQuestionsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(questions));
  }, [questions]);

  return (
    <QuestionsContext.Provider value={questions}>
      <QuestionsDispatchContext.Provider value={dispatch}>{children}</QuestionsDispatchContext.Provider>
    </QuestionsContext.Provider>
  );
}

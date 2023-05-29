import { QuestionModel } from '@models/Question.model.ts';
import { QuestionsAction } from '@models/QuestionAction.type.ts';
import { createContext, Dispatch, ReactNode } from 'react';
import { useImmerReducer } from 'use-immer';

const initialQuestions: QuestionModel[] = [];

export const QuestionsContext = createContext<QuestionModel[]>(initialQuestions);
export const QuestionsDispatchContext = createContext<Dispatch<QuestionsAction>>(() => ({}));

function questionsReducer(questions: QuestionModel[], action: QuestionsAction): void {
  switch (action.type) {
    case 'create': {
      questions.push(...action.payload);
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
  const [questions, dispatch] = useImmerReducer(questionsReducer, initialQuestions);

  return (
    <QuestionsContext.Provider value={questions}>
      <QuestionsDispatchContext.Provider value={dispatch}>{children}</QuestionsDispatchContext.Provider>
    </QuestionsContext.Provider>
  );
}

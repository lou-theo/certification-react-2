import { isQuizCompleted } from '@/helpers/quiz.helper.ts';
import { useQuestions } from '@/hooks/Questions.hooks.ts';
import QuizMaker from '@components/QuizMaker/QuizMaker.tsx';
import QuizResults from '@components/QuizResults/QuizResults.tsx';
import * as React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.scss';
import Element = React.JSX.Element;

function IsQuizCompletedGuard({ children }: { children: Element }) {
  const questions = useQuestions();

  if (!isQuizCompleted(questions)) {
    return <Navigate replace to="/" />;
  }

  return children;
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <QuizMaker />,
    },
    {
      path: '/results',
      element: (
        <IsQuizCompletedGuard>
          <QuizResults />
        </IsQuizCompletedGuard>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

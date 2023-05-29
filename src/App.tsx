import './App.scss';
import { QuestionsProvider } from '@/store/QuestionsProvider.tsx';
import QuizMaker from '@components/QuizMaker/QuizMaker.tsx';
import QuizResults from '@components/QuizResults/QuizResults.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <QuizMaker />,
    },
    {
      path: '/results',
      element: <QuizResults />,
    },
  ]);

  return (
    <QuestionsProvider>
      <RouterProvider router={router} />
    </QuestionsProvider>
  );
}

export default App;

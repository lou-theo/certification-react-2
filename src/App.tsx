import './App.scss';
import { QuestionsProvider } from '@/store/QuestionsProvider.tsx';
import QuizMaker from '@components/QuizMaker/QuizMaker.tsx';

function App() {
  return (
    <QuestionsProvider>
      <QuizMaker />
    </QuestionsProvider>
  );
}

export default App;

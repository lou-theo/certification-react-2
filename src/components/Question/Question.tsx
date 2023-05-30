import QuestionOption from '@components/QuestionOption/QuestionOption.tsx';
import { QuestionModel } from '@models/Question.model.ts';
import { QuestionOptionStatusEnum } from '@models/QuestionOptionStatus.enum.ts';
import styles from './Question.module.scss';

interface QuestionProps {
  question: QuestionModel;
  onQuestionAnswered: (questionId: string, optionId: string) => void;
  showCorrection: boolean;
}

export default function Question(props: QuestionProps) {
  const onQuestionAnswered = (optionId: string) => {
    props.onQuestionAnswered(props.question.id, optionId);
  };

  const getQuestionOptionStatus = (optionId: string): QuestionOptionStatusEnum => {
    if (!props.showCorrection) {
      return props.question.selectedOptionId === optionId
        ? QuestionOptionStatusEnum.selected
        : QuestionOptionStatusEnum.unanswered;
    }
    const correctOption = props.question.options.find((option) => option.isAnswer);
    if (correctOption?.id === optionId) {
      return QuestionOptionStatusEnum.correct;
    }
    if (props.question.selectedOptionId === optionId && correctOption?.id !== optionId) {
      return QuestionOptionStatusEnum.incorrect;
    }
    return QuestionOptionStatusEnum.unanswered;
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: props.question.text }}></div>
      <div>
        {props.question.options.map((option) => (
          <QuestionOption
            key={option.id}
            option={option}
            status={getQuestionOptionStatus(option.id)}
            disabled={props.showCorrection}
            onClick={onQuestionAnswered}
          />
        ))}
      </div>
    </div>
  );
}

import QuestionOption from '@components/QuestionOption/QuestionOption.tsx';
import { QuestionModel } from '@models/Question.model.ts';
import { QuestionOptionStatusEnum } from '@models/QuestionOptionStatus.enum.ts';
import styles from './Question.module.scss';

interface QuestionProps {
  question: QuestionModel;
  onQuestionAnswered: (questionId: string, optionId: string) => void;
}

export default function Question(props: QuestionProps) {
  const onQuestionAnswered = (optionId: string) => {
    props.onQuestionAnswered(props.question.id, optionId);
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: props.question.text }}></div>
      <div>
        {props.question.options.map((option) => (
          <QuestionOption
            key={option.id}
            option={option}
            status={
              props.question.selectedOptionId === option.id
                ? QuestionOptionStatusEnum.selected
                : QuestionOptionStatusEnum.unanswered
            }
            onClick={onQuestionAnswered}
          />
        ))}
      </div>
    </div>
  );
}

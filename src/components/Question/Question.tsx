import QuestionOption from '@components/QuestionOption/QuestionOption.tsx';
import { QuestionModel } from '@models/Question.model.ts';
import { QuestionOptionStatusEnum } from '@models/QuestionOptionStatus.enum.ts';
import styles from './Question.module.scss';

interface QuestionProps {
  question: QuestionModel;
}

export default function Question(props: QuestionProps) {
  return (
    <div className={styles.question}>
      <div className={styles.questionText} dangerouslySetInnerHTML={{ __html: props.question.text }}></div>
      <div>
        {props.question.options.map((option) => (
          <QuestionOption
            status={QuestionOptionStatusEnum.unanswered}
            option={option}
            onClick={(optionId) => optionId}
          />
        ))}
      </div>
    </div>
  );
}

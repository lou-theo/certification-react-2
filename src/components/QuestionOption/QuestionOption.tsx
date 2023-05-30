import { QuestionOptionModel } from '@models/QuestionOption.model.ts';
import { QuestionOptionStatusEnum } from '@models/QuestionOptionStatus.enum.ts';
import styles from './QuestionOption.module.scss';

interface QuestionOptionProps {
  status: QuestionOptionStatusEnum;
  option: QuestionOptionModel;
  onClick: (optionId: string) => void;
  disabled?: boolean;
}

export default function QuestionOption(props: QuestionOptionProps) {
  const statusClassName = styles[`option__${props.status}`];

  return (
    <button
      onClick={() => props.onClick(props.option.id)}
      className={`${statusClassName} ${props.disabled ? styles.disabled : ''}`}
      disabled={props.disabled}
    >
      <span dangerouslySetInnerHTML={{ __html: props.option.text }}></span>
    </button>
  );
}

import { QuestionOptionModel } from '@models/QuestionOption.model.ts';
import { QuestionOptionStatusEnum } from '@models/QuestionOptionStatus.enum.ts';
import styles from './QuestionOption.module.scss';

interface QuestionOptionProps {
  status: QuestionOptionStatusEnum;
  option: QuestionOptionModel;
  onClick: (optionId: string) => void;
}

export default function QuestionOption(props: QuestionOptionProps) {
  const className = styles[`option__${props.status}`];

  return (
    <button onClick={() => props.onClick(props.option.id)} className={className}>
      <span dangerouslySetInnerHTML={{ __html: props.option.text }}></span>
    </button>
  );
}

import { SelectOptionModel } from '@models/SelectOption.model.ts';
import styles from './Select.module.scss';

interface SelectProps {
  id?: string;
  options: SelectOptionModel[];
  value: string | undefined;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

export default function Select(props: SelectProps) {
  return (
    <select
      id={props.id}
      value={props.value}
      onChange={($event) => props.onChange($event.target.value)}
      className={styles.customSelect}
    >
      <option value="" disabled selected>
        {props.placeholder ?? 'Select your option'}
      </option>
      {props.options.map((option: SelectOptionModel) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label ?? option.value}
          </option>
        );
      })}
    </select>
  );
}

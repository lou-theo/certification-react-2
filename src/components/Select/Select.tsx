import { SelectOptionModel } from '@models/SelectOption.model.ts';

interface SelectProps {
  id?: string;
  options: SelectOptionModel[];
  value: string | undefined;
  onChange: (newValue: string) => void;
}

export default function Select(props: SelectProps) {
  return (
    <>
      <select id={props.id} value={props.value} onChange={($event) => props.onChange($event.target.value)}>
        {props.options.map((option: SelectOptionModel) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label ?? option.value}
            </option>
          );
        })}
      </select>
    </>
  );
}

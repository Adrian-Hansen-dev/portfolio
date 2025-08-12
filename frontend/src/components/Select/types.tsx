export interface SelectProps {
  label?: string;
  placeholder?: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (event: any) => void;
}

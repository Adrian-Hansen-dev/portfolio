export interface SelectProps {
  label?: string;
  value: string;
  options: Option[];
  onChange: (event: any) => void;
}

interface Option {
  label: string;
  value: string;
}

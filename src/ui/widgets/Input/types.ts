export interface UiInputProps {
  placeholder: string;
  error?: string;
  type?: string;
  inputMode?: 'text' | 'url' | 'search' | 'email' | 'tel' | 'none' | 'numeric' | 'decimal';
}

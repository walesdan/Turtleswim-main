import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (value: string | number) => void;
  errorMessage: string;
  hasError: boolean;
  clearError: () => void;
  inputType?: 'text' | 'number';
}

export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  hasError,
  clearError,
  inputType = 'text'
}: TextInputProps) {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = inputType === 'number' ? parseInt(e.target.value) : e.target.value;
    onChange(newValue);
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-denim text-xs sm:text-sm">{label}</label>
        {hasError && <span className="text-red text-xs sm:text-sm">{errorMessage}</span>}
      </div>
      <input
        className={`
          px-4 py-3 rounded ${hasError ? 'border-red' : 'border-border-color'} border-[1px] text-base text-denim font-medium  
          placeholder:text-grey
          focus:outline-none focus:border-purple
        `}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={clearError}
      />
    </div>
  )
}

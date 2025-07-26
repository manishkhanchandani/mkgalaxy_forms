import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  name: string;
  label: string;
  value: string;
  handleChange: (
    n: string,
    v: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleKeyDown?: React.KeyboardEventHandler<
    HTMLDivElement | HTMLInputElement | HTMLTextAreaElement
  >;
  handleBlur?: (
    n: string,
    v: string,
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
  type?: string;
  helperText?: string;
  error?: string | boolean | string[];
  start?: string;
  end?: string;
  htmlInputs?: Pick<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "min" | "max" | "step" | "pattern" | "placeholder"
  >;
  customStyle?: React.CSSProperties;
}

const InputBox: React.FC<Readonly<Props>> = ({
  name,
  label,
  value,
  handleChange,
  handleKeyDown,
  handleBlur,
  disabled,
  type = "text",
  helperText,
  error,
  start,
  end,
  htmlInputs,
  customStyle = {},
}) => {
  let showError = false;
  let hT = helperText;
  if (typeof error === "string" || typeof error === "boolean") {
    showError = !!error;
    if (error && typeof error === "string") {
      hT = error;
    }
  } else if (typeof error === "object") {
    showError = !!error[0];
    hT = error[0];
  }
  return (
    <div style={customStyle || { marginBottom: "20px" }}>
      <TextField
        sx={{
          boxShadow: "none",
          "& .MuiInputBase-root": {
            height: "3.50em",
          },
        }}
        fullWidth
        type={type}
        label={label}
        name={name}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          handleChange?.(e.target.name, e.target.value, e);
        }}
        onBlur={(e) => {
          handleBlur?.(e.target.name, e.target.value, e);
        }}
        disabled={disabled}
        helperText={hT}
        error={showError}
        {...htmlInputs}
        {...{
          InputProps: {
            startAdornment: start ? (
              <InputAdornment position="start">{start}</InputAdornment>
            ) : null,
            endAdornment: end ? (
              <InputAdornment position="end">{end}</InputAdornment>
            ) : null,
          },
        }}
      />
    </div>
  );
};

export default React.memo(InputBox);

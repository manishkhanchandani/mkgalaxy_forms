import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  name: string;
  label: string;
  value: string;
  handleChange: (n: string, v: string) => void;
  handleKeyDown?: React.KeyboardEventHandler<
    HTMLDivElement | HTMLTextAreaElement
  >;
  handleBlur?: (n: string, v: string) => void;
  disabled?: boolean;
  type?: string;
  helperText?: string;
  error?: string;
  start?: string;
  end?: string;
  maxRows?: number;
  htmlInputs?: Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "rows" | "cols" | "placeholder" | "minLength" | "maxLength" | "wrap"
  >;
}

const TextAreaBox: React.FC<Readonly<Props>> = ({
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
  maxRows,
  htmlInputs,
}) => {
  let showError = false;
  let hT = helperText;
  if (typeof error === "string" || typeof error === "boolean") {
    showError = !!error;
    if (error) {
      hT = error;
    }
  } else if (typeof error === "object") {
    showError = !!error[0];
    hT = error[0];
  }
  return (
    <div
      className="common textarea-box"
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      <TextField
        sx={{
          boxShadow: "none",
          "& .MuiInputBase-root": {
            display: "flex",
            alignItems: "center",
            minHeight: "3em",
          },
        }}
        fullWidth
        type={type}
        label={label}
        name={name}
        value={value}
        onKeyDown={handleKeyDown}
        multiline
        maxRows={maxRows}
        onChange={(e) => {
          handleChange?.(e.target.name, e.target.value);
        }}
        onBlur={(e) => {
          handleBlur?.(e.target.name, e.target.value);
        }}
        disabled={disabled}
        helperText={hT}
        error={showError}
        {...htmlInputs}
        variant="outlined"
        {...(start || end
          ? {
              // Using input prop directly for adornments
              startAdornment: start ? (
                <InputAdornment position="start">{start}</InputAdornment>
              ) : null,
              endAdornment: end ? (
                <InputAdornment position="end">{end}</InputAdornment>
              ) : null,
            }
          : {})}
      />
    </div>
  );
};

export default React.memo(TextAreaBox);

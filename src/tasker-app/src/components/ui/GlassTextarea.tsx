import React from 'react';
import css from '../../styles/glass-input.module.css';

type GlassTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  fullWidth?: boolean;
  size?: 's' | 'm' | 'l';
};

export const GlassTextarea: React.FC<GlassTextareaProps> = ({
  label,
  helperText,
  errorText,
  fullWidth,
  size = 'm',
  className,
  ...rest
}) => {
  const wrapperClass = [css.wrapper, fullWidth ? css.fullWidth : '', className]
    .filter(Boolean)
    .join(' ');
  const textareaClass = [css.input, css[size], errorText ? css.error : '']
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClass}>
      {label && <span className={css.label}>{label}</span>}
      <textarea className={textareaClass} {...rest} />
      {errorText ? (
        <span className={css.errorRow}>
          <span className={css.errorText}>{errorText}</span>
        </span>
      ) : helperText ? (
        <span className={css.helperText}>{helperText}</span>
      ) : null}
    </label>
  );
};

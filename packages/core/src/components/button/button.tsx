import { forwardRef } from 'react';
import { ButtonProps } from './button.types';
import { cva } from 'class-variance-authority';
import clsx, { ClassValue } from 'clsx';

const buttonStyles = cva(['rounded-md','px-5', 'py-2', 'flex', 'flex-row', 'gap-2'],{
  variants: {
    size: {
      sm: ['text-sm', 'px-3', 'py-1'],
      md: ['text-md', 'px-5', 'py-2'],
      lg: ['text-lg', 'px-7', 'py-3'],
    },
    color: {
      primary: [],
      secondary: [],
    },
    variant: {
      filled: [],
      outlined: ['border-2'],
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed'],
      false: ['cursor-pointer'],
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'filled',
      class: ['bg-primary-main', 'text-white'],
    },
    {
      color: 'primary',
      variant: 'outlined',
      class: ['border', 'border-primary-main', 'bg-white', 'text-primary-main'],
    },
    {
      color: 'secondary',
      variant: 'filled',
      class: ['bg-secondary-main', 'text-white'],
    },
    {
      color: 'secondary',
      variant: 'outlined',
      class: ['border', 'border-secondary-main', 'bg-white', 'text-secondary-main'],
    }
  ]
});

function cn(...classes: ClassValue[]) {
  return clsx(classes);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      size = 'md',
      color = 'primary',
      variant = 'filled',
      disabled = false,
      leading,
      trailing,
      className,
      children,
      ...rest
    } = props;

    const classNames = cn(buttonStyles({ size, color, variant, disabled, className }));

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        className={classNames}
        {...rest}>
          {leading && <span>{leading}</span>}
          {children}
          {trailing && <span>{trailing}</span>}
      </button>
    );
  },
);

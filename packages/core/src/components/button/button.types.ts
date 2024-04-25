import { HTMLAttributes, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> & {
    /**
     * Size of the button
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Color of the button
     *
     * @default 'primary'
     */
    color?: 'primary' | 'secondary';
    /**
     * Variant of the button
     *
     * @default 'filled'
     */
    variant?: 'filled' | 'outlined';
    /**
     * Disabled state of the button
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Leading renderer of the button
     */
    leading?: React.ReactNode;
    /**
     * Trailing renderer of the button
     */
    trailing?: React.ReactNode;
  }
>;

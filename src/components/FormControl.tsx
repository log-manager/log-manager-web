import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { classNames } from '@utils/classNames';
export interface FormControlProps {
  name: string;
  label?: string;
  errors?: string[];
  children: ReactNode;
  className?: string;
}

export function FormControl({ name, label, errors, children, className }: FormControlProps) {
  const classes = classNames(
    'border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600',
    className,
  );

  return (
    <div className={classes}>
      {label && (
        <label className="block text-xs font-medium text-gray-900" htmlFor={name}>
          {label}
        </label>
      )}
      <div>{children}</div>
      {errors &&
        errors.length > 0 &&
        errors.map((error) => (
          <AnimatePresence key={error}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <p className="text-sm text-red-500">{error}</p>
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  );
}

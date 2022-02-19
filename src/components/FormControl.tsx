import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export interface FormControlProps {
  name: string;
  label?: string;
  errors?: string[];
  children: ReactNode;
}

export function FormControl({ name, label, errors, children }: FormControlProps) {
  return (
    <div>
      {label && (
        <label className="font-medium" htmlFor={name}>
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

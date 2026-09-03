import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

let toastId = 0;

export function toast(message: string, type: ToastType = 'info') {
  const id = String(++toastId);
  window.dispatchEvent(new CustomEvent('toast', { detail: { id, message, type } }));
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToast = (e: CustomEvent<Toast>) => {
      setToasts((prev) => [...prev, e.detail]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== e.detail.id));
      }, 5000);
    };

    window.addEventListener('toast', handleToast as EventListener);
    return () => window.removeEventListener('toast', handleToast as EventListener);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <AlertCircle className="w-5 h-5 text-blue-500" />,
  };

  return (
    <div className="fixed top-20 right-6 z-[70] flex flex-col gap-3 max-w-sm">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="bg-card border border-border rounded-xl shadow-xl p-4 flex items-start gap-3"
          >
            {icons[t.type]}
            <p className="text-sm text-foreground flex-1">{t.message}</p>
            <button
              onClick={() => removeToast(t.id)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
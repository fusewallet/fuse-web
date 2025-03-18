import { addToast, type ToastProps } from '@heroui/react';
import { useCallback } from 'react';
import { toast as sonner_toast } from 'sonner';

export const useHeroToast = () => {
    const toast = useCallback(
        (title: string | ToastProps, type: 'success' | 'error' | 'info' = 'info', duration = 3000) => {
            if (typeof title === 'string') {
                addToast({
                    title: (
                        <span
                            className={`text-[${type === 'success' ? '#00C431' : type === 'error' ? '#FF2C40' : '#FFCF13'}]`}
                        >
                            {title}
                        </span>
                    ),
                    icon: <></>,
                    timeout: duration,
                });
            } else {
                addToast({
                    timeout: duration,
                    ...title,
                });
            }
        },
        [],
    );
    return toast;
};

export const useSonnerToast = (): typeof sonner_toast => {
    return sonner_toast;
};

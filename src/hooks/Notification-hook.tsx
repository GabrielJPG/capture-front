import React from "react";
import { toast } from "react-toastify";
import { INotify } from "./interfaces/INotify";

// Represents a type of notification
export type NotificationType = 'default' | 'info' | 'warning' | 'error'

const customId = "custom-id-yes";
const toastConfig = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
} as any

/**
 * The notification hook is a simple wrapper around the toast notification
 * implements the INotify interface
 * @implements {INotify}
 * @param {NotificationType} type - The type of notification to display
 * 
 * @returns {INotify} implementation of INotify
*/
export const useNotify = (type: NotificationType): INotify => {
    const displayToast = (message: string) => {
        const notify: Record<string, (message: string) => void> = {
            'default': toastDefault,
            'info': toastInfo,
            'warning': toastWarning,
            'error': toastError,
        };
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const toastId = React.useRef(null);
        if (!toast.isActive((toastId as any).current)) {
            notify[type](message);
        }
    }

    return {
        show: displayToast
    }
}

const toastInfo = (message: string) => {
    toast.info(message, toastConfig);
}

const toastWarning = (message: string) => {
    toast.warning(message, toastConfig);
}

const toastError = (message: string) => {
    toast.error(message, toastConfig);
}

const toastDefault = (message: string) => {
    toast(message, toastConfig);
}
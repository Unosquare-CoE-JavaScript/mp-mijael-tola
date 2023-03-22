import React, {ReactNode} from "react";

export interface ModalProps {
    children?: React.ReactNode;
    open?: boolean;
    onClose?: Function,
    title?: ReactNode,
    className?: string
}
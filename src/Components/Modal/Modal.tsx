import React from 'react';
import {ModalBackground, ModalCloseIcon, ModalContent, ModalHeader, ModalHeaderSection} from "./Modal.styled";
import {ModalProps} from "./Modal.interface";

export const Modal = (props: ModalProps) => {
    return (
        props.open ?
        <ModalBackground>
            <ModalContent className={props.className}>
                <ModalHeader>
                    <ModalHeaderSection>
                        {props.title}
                    </ModalHeaderSection>
                    <ModalCloseIcon/>
                </ModalHeader>
                {props.children}
            </ModalContent>
        </ModalBackground> : <> </>
    )
}
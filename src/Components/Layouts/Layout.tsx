import React from 'react';
import {LayoutProps} from "./Layout.interfaces";
import {LayoutWrapper} from "./Layout.styled";

export const Layout = (props: LayoutProps) => {

    return (
        <LayoutWrapper style={props.style}>
            {props.children}
        </LayoutWrapper>
    )
}

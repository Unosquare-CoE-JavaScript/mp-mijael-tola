import {ReactNode} from "react";

interface Options {
    title: string,
    router: string
}
export interface NavbarProps {
    title?: ReactNode,
    routes?: Array<Options>
    options?: ReactNode
}
import {ReactNode} from "react";

export interface CardProps {
    image: string,
    name: string,
    id: string,
    price: number
}

export interface CardsProps {
    children: ReactNode,
    columns: number
}
import React, {Children, cloneElement, ReactElement, useEffect, useRef, useState} from 'react';
import {
    CardBody,
    CardBodyPrice,
    CardBodyTitle,
    CardImage,
    CardLayout,
    CardRow,
    CardSection,
    CardsLayout
} from "./Card.styled";
import {CardProps, CardsProps} from "./Card.interface";
import {Button} from "../Button/Button.styled";

export const Card = (props: CardProps) => {
    return (
        <CardLayout>
            <CardImage src={props.image} alt="" width="70%"/>
            <CardBody>
                <CardBodyTitle> {props.name} </CardBodyTitle>
                <CardBodyPrice>
                    ${props.price}
                </CardBodyPrice>
            </CardBody>
            <Button onClick={() => console.log(props.id)}>
                Add to cart
            </Button>
        </CardLayout>
    )
}

export const Cards = (props: CardsProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const childrenArray = Children.toArray(props.children);

    const rows: Array<Array<React.ReactNode>> = [];
    const column: Array<React.ReactNode> = [];

    childrenArray.forEach(val => {
        column.push(val);
        if(column.length === props.columns) {
            rows.push([...column])
            while(column.length > 0) {
                column.pop();
            }
        }
    });
    rows.push(column);

    return (
        <CardsLayout ref={ref}>
            {
                rows.map((values, index) => (
                    <CardRow key={index}>
                        {
                            values.map((card, index) =>
                                <CardSection key={index}> { card }</CardSection>
                            )
                        }
                    </CardRow>
                ))
            }
        </CardsLayout>
    )
}
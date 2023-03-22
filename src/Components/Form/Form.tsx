import React from "react";
import {FormCheckboxProps, FormInputProps} from "./Form.interface";
import {FormInputStyled, Input} from "./Form.styled";

export const FormInput = (props: FormInputProps) => {
    return (
        <FormInputStyled>
            <div>
                <label> {props.label} </label>
            </div>
            <Input type="text" value={props.value}/>
        </FormInputStyled>
    )
}

export const FormDate = () => {
    return (
        <FormInputStyled>
            <label> Date: </label>
            <input type="date"/>
        </FormInputStyled>
    )
}

export const FormCheck = (props: FormCheckboxProps) => {
    return (
        <FormInputStyled>
            <label> {props.label} </label>
            <input type="checkbox" checked={props.checked}/>
        </FormInputStyled>
    )
}
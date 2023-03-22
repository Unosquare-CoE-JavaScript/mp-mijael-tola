import styled from "styled-components";
import {COLORS} from "../../Constants/colors";

export const CardLayout = styled('div')`
    width: 240px;
    height: 300px;
    border: 1px solid ${COLORS.GRAY_200};
    border-radius: 5px;
    text-align: center;
    padding-bottom: 20px;
`

export const CardBody = styled('div')`
    height: 80px;
`

export const CardBodyTitle = styled('div')`
    font-weight: 650;
    font-size: 24px;
    height: 40px;
    padding-top: 5px;
`

export const CardBodyPrice = styled('div')`
    font-size: 16px;
    height: 20px;
`

export const CardImage = styled('img')`
`

export const CardsLayout = styled('div')`
    margin-top: 10px;
    max-height: 600px;
    overflow: auto;
`

export const CardRow = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

export const CardSection = styled('div')`
    margin-right: 8px;
`
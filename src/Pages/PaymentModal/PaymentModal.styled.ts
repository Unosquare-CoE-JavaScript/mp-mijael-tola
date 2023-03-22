import styled from "styled-components";
import {Modal} from "../../Components/Modal/Modal";
import {COLORS} from "../../Constants/colors";

export const PaymentModalLayout = styled(Modal)`
  width: 1100px;
  border-radius: 20px;
`;

export const PaymentSection = styled('div') `
    padding-top: 30px;
    height: 400px;
    display: flex;
    justify-content: space-between;
`

export const ShoppingList = styled('div')`
    width: 60%;
`

export const TotalPaymentInformation = styled('div')`
    width: 40%;
    overflow: auto;
    height: 400px;
`


export const ShoppingObjectSection = styled('div')`
    display: flex;
    height: 30px;
    border-bottom: 2px solid ${COLORS.BLUE_GRAY_500};
    margin-bottom: 30px;
`

export const ShoppingObjectName = styled('div')`
    width: 80%;
`

export const ShoppingObjectValue = styled('div')`
    font-weight: 600;
`

export const ShoppingObjectListLayout = styled('div')`
    overflow: auto;
    max-height: 300px;
`

export const ShoppingInformation = styled('div')`
    background-color: ${COLORS.BLUE_GRAY};
    border-radius: 10px;
    margin: 10px;
    padding: 10px
`

export const SubmitButton = styled('button')`
    background-color: ${COLORS.WHITE};
    border-radius: 5px;
    color: ${COLORS.BLACK};
    font-weight: 600;
    height: 35px;
    width: 150px;
    margin-left: 140px;
`
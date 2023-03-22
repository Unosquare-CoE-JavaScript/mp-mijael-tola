import React from 'react';
import {
    PaymentModalLayout,
    PaymentSection,
    ShoppingInformation,
    ShoppingList,
    ShoppingObjectListLayout,
    ShoppingObjectName,
    ShoppingObjectSection,
    ShoppingObjectValue,
    SubmitButton,
    TotalPaymentInformation
} from "./PaymentModal.styled";
import {ShoppingObject, ShoppingObjectList} from "./PaymentModal.interface";
import {FormCheck, FormDate, FormInput} from "../../Components/Form/Form";

const ShoppingObjectComponent = (props: ShoppingObject) => {
    return (
        <ShoppingObjectSection>
            <ShoppingObjectName>
                {props.name}
            </ShoppingObjectName>
            <ShoppingObjectValue>
                ${props.price}
            </ShoppingObjectValue>
        </ShoppingObjectSection>
    )
}

const ShoppingObjectListComponent = (props: ShoppingObjectList) => {
    return (
        <ShoppingObjectListLayout>
            {
                props.objects.map(obj => <ShoppingObjectComponent {...obj} />)
            }
        </ShoppingObjectListLayout>
    )
}

const ShoppingTotal = () => {
    return (
        <>
            <ShoppingInformation>
                <ShoppingObjectComponent name="Subtotal" price={40}/>
                <ShoppingObjectComponent name="Discount" price={40}/>
                <ShoppingObjectComponent name="Total" price={40}/>
            </ShoppingInformation>
            <ShoppingInformation>
                <SubmitButton>
                    Proceed
                </SubmitButton>
            </ShoppingInformation>
        </>
    )
}

const ShoppingPayment = () => {
    return (
        <>
            <ShoppingInformation>
                <div>
                    <FormCheck label="Visa" checked/>
                    <FormCheck label="Master" checked={false}/>
                </div>
                <FormInput label="Card Holder" value=""/>
                <FormInput label="Card Number" value=""/>
                <div style={{display: 'flex'}}>
                    <FormInput label="Exp Date" value=""/>
                    <FormInput label="CVV" value=""/>
                </div>
            </ShoppingInformation>
        </>
    )
}
export const PaymentModal = () => {
    return (
        <PaymentModalLayout title="Happy Fit" open >
            <PaymentSection>
                <ShoppingList>
                    <h1> Shopping Cart</h1>
                    <ShoppingObjectListComponent
                        objects={[
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 },
                            { name: 'hola mundo', price: 123 }
                        ]}
                    />
                </ShoppingList>
                <TotalPaymentInformation>
                    <ShoppingPayment/>
                    <ShoppingTotal/>
                </TotalPaymentInformation>
            </PaymentSection>
        </PaymentModalLayout>
    )
}

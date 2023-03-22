import React from 'react';
import {LayoutWrapper} from "../../Components/Layouts/Layout.styled";
import {Subtitle, Title, TitleSection} from "./Home.styled";
import {Card, Cards} from "../../Components/Card/Card";

export const Home = () => {
    return (
        <LayoutWrapper>
            <TitleSection>
                <Title> Happy Fit Shopping </Title>
                <Subtitle> Shop anything you desire!</Subtitle>
            </TitleSection>

            <Cards columns={3}>
                <Card id="id" image="/logo192.png" name="Testing 1" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 2" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 3" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 4" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
                <Card id="id" image="/logo192.png" name="Testing 5" price={123}/>
            </Cards>
        </LayoutWrapper>
    )
}
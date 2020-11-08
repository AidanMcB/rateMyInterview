import React from 'react'
import { bgImage } from '../assets/myrevImg.jpg'
import { tether, Avatar, BubbleButton, Surface, Section, Title, TextInput, List, Container, Heading, Button, Subheading } from '@triframe/designer'


export const HomePage = tether(function* ({ Api, redirect }) {

    const { Review } = Api;

    return(
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <Title style={{ fontFamily: "Arial" }}>Rate my InteRview</Title>
            <BubbleButton 
            small={true}
            onPress={() => redirect('/main')}>See Reviews</BubbleButton>
        </Container>
    )

})
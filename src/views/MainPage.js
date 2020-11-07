import React from 'react'
import { tether, Section, TextInput, List, Container, Heading, Button, Subheading} from '@triframe/designer'


export const MainPage = tether(function*({ Api, redirect }) {

        const { Review } = Api;

        const reviews = yield Review.list(`
        *,
        company {
            *
        }
    `)


    return (
        
        <Container>
            <Heading>Rate My Interview!</Heading>
            {reviews.map( review => (
                <List.Item
                title={review.title}
                description={review.description}
                onPress={() => redirect(`/companies/${review.company.id}`)}
                />
            ))}
        </Container>
    )
})  
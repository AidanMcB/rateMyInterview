import React from 'react'
import { tether, Button, List, Container, Heading, TextInput, Subheading, Session, Area } from '@triframe/designer'


export const CreateReview = tether(function* ({ Api, useParams, session }) {

    const { Review, User } = Api

    const form = yield {
        title: '',
        rating: '',
        description: ''
    }

    const { id } = yield useParams()
    const user = yield User.current()

    let handleSubmit = async () => {
        try {
            await Review.create({
                title: form.title, rating: form.rating, description: form.description,
                userId: user.id, companyId: id
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <Heading>Write a Review</Heading>
            <TextInput 
                label="Title"
                value={form.title}
                onChange={ value => form.title = value}
            />
               <TextInput 
                label="Rating"
                value={form.rating}
                onChange={ value => form.rating = parseInt(value)}
            />
            {/* prevent invalid input erros  */}
               <TextInput 
                label="Description"
                value={form.description}
                onChange={ value => form.description = value}
            />
            <Button 
                onPress={handleSubmit}>
                Submit Review
            </Button>
        </Container>

    )


})
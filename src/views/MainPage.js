import React from 'react'
import { tether, Section, TextInput, List, Container, Heading, Button } from '@triframe/designer'


export const MainPage = tether(function*({ Api }) {

    // const { Message } = Api;
        const { User, Review } = Api;
        const reviews = yield Review.list()
        const myUser = yield User.read(1)
        const users = yield User.list(`
        *,
        reviews{
            title,
            rating,
            description,
            company{
                name, 
                location,
                website
            }
        }
        `)
        

    // const messages = yield Message.list()

    // const form = yield { content: '' }

    // const handleSubmit = async () => {
    //     await Message.create({ content: form.content })
    //     form.content = ''
    // }
    console.log(users)
    return (
        <Container>
            Hello
            {users.map( user => (
                <p key={user.id}>{user.name}</p>
                // {user.reviews.map( review => (
                //     <p>{review.title}</p>
                // ))}
            ))}
            {reviews.map( review => (
                <p key={review.id}>{review.title}</p>
            ))}
            {myUser.reviews.map(rev => (
                <p> userRev: {rev.title}</p>
            ))}

        </Container>
    )
})  
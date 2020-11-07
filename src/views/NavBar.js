import React from 'react'
import { tether, Section, TextInput, List, Modal, Container, Heading, Button, Subheading, Appbar } from '@triframe/designer'


export const NavBar = tether(function* ({ Api, redirect }) {
    const { User } = Api
    const user = yield User.current()

    const modalView = yield {
        visible: false
    }

    const handleCreateReview = () => {
        if (user !== null) {
            redirect('/create-review')
        } else {
            modalView.visible = true
            console.log(modalView.visible)
        }
    }

    return (
        <Appbar>
            <Button onPress={handleCreateReview}>Create Review</Button>
            <Modal visible={modalView.visible} onDismiss={() => modalView.visible = false}>
                <Container>You Must Be logged in to create a review!</Container>
            </Modal>
            { user === null ? <Button onPress={async () => await redirect('/login')}>Login</Button>
                : <Button onPress={async () => User.logout()}>Log Out</Button>}
            <Button onPress={async () => await redirect('/signup')}>Sign Up</Button>
        </Appbar>
    )


})

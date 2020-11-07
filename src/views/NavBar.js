import React from 'react'
import { tether, Section, TextInput, List, Container, Heading, Button, Subheading, Appbar } from '@triframe/designer'


export const NavBar = tether(function*({ Api, redirect }) {


    return(
        <Appbar>
            <Button onPress={async () => await  redirect('/create-review') }>Create Review</Button>
            <Button onPress={async () => await redirect('/login')}>Login</Button>
            <Button onPress={async () => await redirect('/signup')}>Sign Up</Button>
        </Appbar>
    )


})

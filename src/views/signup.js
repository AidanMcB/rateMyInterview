import React from 'react'
import { tether, Section, TextInput, PasswordInput, Container, Heading, Button } from '@triframe/designer'
import { HelperText } from '@triframe/designer/dist/paper'


export const SignUp = tether(function* ({ Api, redirect }) {

    const { User } = Api
    
    const form = yield {
        username: '',
        password: '',
        errorMessage: null
    }

    return (
        <Container>
            <Heading>Sign Up</Heading>
            <TextInput
                label="Username"
                value={form.username}
                onChange={value => form.username = value}
                />
              <PasswordInput
                label="Password"
                value={form.password}
                onChange={value => form.password = value}
                />
            <Button 
                onPress={ async () => {
                    try{
                    await User.register(form.username, form.password)
                    redirect('/login')
                    }
                    catch(error){
                        form.errorMessage = error.message
                    }
                }}
                >Sign Up</Button>
                <HelperText type="error" visible={form.errorMessage !== null}>
                    {form.errorMessage}
                </HelperText>
        </Container>
    )

})

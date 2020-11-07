import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { MainPage } from './views/MainPage'

import { CompanyList } from './views/CompanyList'
import { CompanyProfile } from './views/CompanyProfile'

import { SignUp } from './views/SignUp'
import { Login } from './views/Login'

import { CreateReview } from './views/CreateReview'

import { NavBar } from './views/NavBar'



export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <NavBar />
        <Route exact path="/" component={MainPage} />

        <Route exact path="/companies" component={CompanyList}/>
        <Route exact path="/companies/:id" component={CompanyProfile} />

        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/create-review" component={CreateReview} />

    </Provider>
)
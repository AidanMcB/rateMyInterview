import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { MainPage } from './views/MainPage'
import { CompanyList } from './views/CompanyList'
import { CompanyProfile } from './views/CompanyProfile'

export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/companies" component={CompanyList}/>
        <Route exact path="/companies/:id" component={CompanyProfile} />
    </Provider>
)
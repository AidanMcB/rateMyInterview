/** @format */
import React from "react";
import { Provider, Route } from "@triframe/designer";
import { MainPage } from "./views/MainPage";
import { CreateReview } from "./views/CreateReview";

import { NavBar } from "./views/NavBar";
import { Footer } from "./views/Footer"

import { HomePage } from "./views/HomePage";

import { CompanyList } from "./views/CompanyList";
import { CompanyProfile } from "./views/CompanyProfile";

import { SignUp } from "./views/SignUp";
import { Login } from "./views/Login";
import { UserProfile } from "./views/UserProfile";

export default () => (
  <Provider url={process.env.REACT_APP_BACKEND_URL}>
    <NavBar />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/main" component={MainPage} />

    <Route exact path="/companies" component={CompanyList} />
    <Route exact path="/companies/:id" component={CompanyProfile} />
    <Route exact path="/user/:id" component={UserProfile} />

    <Route exact path="/create-review/:id" component={CreateReview} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
  </Provider>
);

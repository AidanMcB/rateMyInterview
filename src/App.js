/** @format */

import { CreateReview } from "./views/CreateReview";

import { NavBar } from "./views/NavBar";
import { HomePage } from "./views/HomePage";

import { CompanyList } from "./views/CompanyList";
import { CompanyProfile } from "./views/CompanyProfile";

import { SignUp } from "./views/SignUp";
import { Login } from "./views/Login";

export default () => (
  <Provider url={process.env.REACT_APP_BACKEND_URL}>
    <NavBar />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/main" component={MainPage} />

    <Route exact path="/companies" component={CompanyList} />
    <Route exact path="/companies/:id" component={CompanyProfile} />

    <Route exact path="/create-review" component={CreateReview} />
  </Provider>
);

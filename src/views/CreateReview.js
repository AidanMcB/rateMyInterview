/** @format */

import React from "react";
import {
  tether,
  Button,
  List,
  Container,
  Heading,
  HelperText,
  TextInput,
  Subheading,
  Session,
  Area,
} from "@triframe/designer";


export const CreateReview = tether(function* ({ Api, useParams, redirect }) {
  const { Review, User, Company } = Api;

  const form = yield {
    title: "",
    rating: "",
    description: "",
  };

  const errors = yield {
    message: null,
  }

  const { id } = yield useParams();
  const user = yield User.current();
  const company = yield Company.read(`${id}`)

  let handleSubmit = async () => {
    try {
      await Review.makeReview({
        title: form.title,
        rating: form.rating,
        description: form.description,
        companyId: id,
      });
      redirect('/main')
    } catch (error) {
      errors.message = error.message
      console.log(error);
    }
  };
  if(company === null){
    return <h1>Error !</h1>
  }
  return (
    <Container>
      <Heading>Write a Review for {company.name}</Heading>
      <TextInput
        label="Title"
        value={form.title}
        onChange={(value) => (form.title = value)}
      />
      <TextInput
        label="Rating"
        value={form.rating}
        onChange={(value) => (form.rating = value)}
      />
      <HelperText type="error" visible={errors.message !== null}>
        {errors.message}
      </HelperText>
      <TextInput
        label="Description"
        value={form.description}
        onChange={(value) => (form.description = value)}
      />
      <Button style={{ backgroundColor: "#420039" }} onPress={handleSubmit}>
        Submit Review
      </Button>
    </Container>
  );
});

/** @format */

import React from "react";
import {
  tether,
  Button,
  Container,
  Heading,
  TextInput,
} from "@triframe/designer";

export const CreateReview = tether(function* ({ Api, useParams, session }) {
  const { Review, User } = Api;
  const form = yield {
    title: "",
    rating: "",
    description: "",
  };
  const { id } = yield useParams();
  const user = yield User.current();
  let handleSubmit = async () => {
    try {
      await Review.makeReview({
        title: form.title,
        rating: form.rating,
        description: form.description,
        companyId: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Heading>Write a Review</Heading>
      <TextInput
        label="Title"
        value={form.title}
        onChange={(value) => (form.title = value)}
      />
      <TextInput
        label="Rating"
        value={form.rating}
        onChange={(value) => (form.rating = parseInt(value))}
      />
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

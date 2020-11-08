/** @format */

import React from "react";
import { bgImage } from "../assets/myrevImg.jpg";
import {
  tether,
  Avatar,
  Surface,
  Section,
  TextInput,
  List,
  Container,
  Heading,
  Button,
  Subheading,
} from "@triframe/designer";

import React from "react";
import {
  tether,
  Section,
  TextInput,
  List,
  Container,
  Heading,
  Button,
  Subheading,
  Appbar,
} from "@triframe/designer";

export const MainPage = tether(function* ({ Api, redirect }) {
  const { Review } = Api;

  const reviews = yield Review.list(`
        *,
        company {
            *
        }
    `);

  console.log(reviews[0].company);
  return (
    <Container style={{ backgroundColor: "green" }}>
      <Surface>
        <Heading size="large">Rate My Interview!</Heading>
      </Surface>
      {reviews.map((review) => (
        <List.Item
          title={review.title}
          description={review.description}
          onPress={() => redirect(`/companies/${review.company.id}`)}
        />
      ))}
    </Container>
  );
});

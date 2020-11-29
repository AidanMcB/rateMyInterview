/** @format */

import React from "react";
import {
  tether,
  List,
  Container,
  Heading,
  Subheading,
  Surface,
  Card,
  Modal,
} from "@triframe/designer";

export const UserProfile = tether(function* ({ Api, redirect, useParams }) {
  const { User } = Api;

  const selected = yield { review: false };
  const { id } = yield useParams();
  const user = yield User.read(
    id,
    `
    *,
    reviews{
      title,
      rating,
      description,
      company{
          name, 
          location,
          website
      }
  }
  `
  );

  if (user == null ) {
    return <h1>No User Logged In!</h1>;
  }
  return (
    <Container style={{ padding: "20px", height: "90vh" }}>
      <Surface>
        <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
          {user.username}
        </Heading>
      </Surface>
      <Subheading>Reviews</Subheading>
      {user.reviews.map((review) => (
        <Container key={review.id}>
          <Card>
            <List.Item
              style={{ backgroundColor: "#fffaf0" }}
              title={review.title}
              description={review.company.name}
              onPress={() => (selected.review = review)}
            />
          </Card>
        </Container>
      ))}
      <Modal
        visible={selected.review}
        onDismiss={() => (selected.review = false)}
      >
        <Container>
          <Heading>{selected.review.title}</Heading>
          <p>{selected.review.rating}/5 Stars</p>
          {selected.review.description}
        </Container>
      </Modal>
    </Container>
  );
});

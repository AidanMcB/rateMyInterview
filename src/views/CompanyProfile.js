/** @format */

import React from "react";
import {
  tether,
  Button,
  List,
  Modal,
  Container,
  Heading,
  Subheading,
  Session,
  Area,
  Surface,
  Icon,
} from "@triframe/designer";

export const CompanyProfile = tether(function* ({ Api, useParams, redirect }) {
  const { Company, User } = Api;
  const user = yield User.current();

  const { id } = yield useParams();

  const company = yield Company.read(
    id,
    `
    *,
    reviews {
        title,
        description,
        rating
    }
    `
  );


  const modalView = yield {
    visible: false,
  };

  const handleCreateReview = () => {
    if (user !== null) {
      redirect("/create-review");
    } else {
      modalView.visible = true;
      console.log(modalView.visible);
    }
  };

  return (
    <Container>
      {/* /<Area alignX="center"> */}
      <Surface>
        <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
          {company.name}
        </Heading>
      </Surface>
      <Subheading style={{}}>Company Reviews</Subheading>
      {company.reviews.map((review) => (
        <List.Item title={review.title} description={review.description} />
      ))}
      <Subheading>{company.location}</Subheading>
      <Icon name="web">
        <Subheading>{company.website}</Subheading>
        {/* </Area> */}
      </Icon>
      <Button small={true} style={{ background: "lightblue"}} onPress={handleCreateReview}>
        Write a Review
      </Button>
      <Modal visible={modalView.visible} onDismiss={() => modalView.visible = false}>
        <Container>You must be logged in to write a review!</Container>
      </Modal>
    </Container>
  );
});

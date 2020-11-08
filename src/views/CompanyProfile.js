/** @format */

import React from "react";
import {
  tether,
  List,
  Container,
  Heading,
  Subheading,
  Session,
  Area,
  Surface,
  Icon,
} from "@triframe/designer";

export const CompanyProfile = tether(function* ({ Api, useParams }) {
  const { Company } = Api;

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
    </Container>
  );
});

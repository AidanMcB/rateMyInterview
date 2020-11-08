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
  Grid,
  Card,
  Column,
} from "@triframe/designer";

export const MainPage = tether(function* ({ Api, redirect }) {
  const { Review } = Api;

  const reviews = yield Review.list(`
        *,
        company {
            *
        }
    `);
  return (
    <Container
      style={{ backgroundColor: "#8ca6a6", padding: "20px", height: "90vh" }}
    >
      <Surface>
        <Heading
          size="large"
          style={{ backgroundColor: "#00dbc4", padding: "10px" }}
        >
          Rate My Interview!
        </Heading>
      </Surface>
      <Grid gutter={3} base={3}>
        {reviews.map((review) => (
          <Column>
            <Card style={{ height: "70px" }}>
              <List.Item
                style={{ textOvereflow: "ellipsis" }}
                title={review.title}
                description={review.description}
                onPress={() => redirect(`/companies/${review.company.id}`)}
              ></List.Item>
            </Card>
          </Column>
        ))}
      </Grid>
    </Container>
  );
});

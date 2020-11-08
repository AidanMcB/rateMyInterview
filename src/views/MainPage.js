/** @format */
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
  Card,
  Surface,
  Column,
  Grid,
  Right
} from "@triframe/designer";
import { session } from "@triframe/scribe/dist/decorators";

export const MainPage = tether(function* ({ Api, redirect }) {
  const { Review } = Api;
  const reviews = yield Review.list(`
        *,
        company {
            *
        },
        user {
          *
        }
    `);

  return (

    <Container
      style={{ backgroundColor: "#8ca6a6", padding: "20px", height: "90vh" }}
    >
      <Surface >
        <Heading
          size="large"
          style={{ backgroundColor: "#00dbc4", padding: "10px" }}
        >
          Rate My Interview!
        </Heading>
      </Surface>
      <Grid gutter={3} base={3}>
        {reviews.map((review) => (
          <Column key={review.id}>
            <Card style={{ height: "70px" }}>
              <List.Item
                style={{ textOvereflow: "ellipsis" }}
                title={review.title}
                description={review.description}
                right={() => (
                  <Button onPress={() => redirect(`/user/${review.user.id}`)}>{review.user.username}</Button>
                )}
                onPress={() => redirect(`/companies/${review.company.id}`)}
              ></List.Item>
            </Card>
          </Column>
        ))}
      </Grid>
    </Container>
  );
});

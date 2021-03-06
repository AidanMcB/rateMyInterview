/** @format */
import React from "react";
import {
  tether,
  List,
  Container,
  Heading,
  Button,
  Card,
  Surface,
  Column,
  Grid,
} from "@triframe/designer";

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
      style={{
        padding: "20px",
        height: "90vh",
      }}
    >
      <Surface style={{ backgroundColor: "#e3f3e8" }}>
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
            <Card style={{ height: "70px", backgroundColor: "#fffaf0" }}>
              <List.Item
                style={{ textOvereflow: "ellipsis" }}
                title={review.title}
                description={review.description}
                right={() => (
                  <Button
                    style={{ backgroundColor: "#420039", padding: "10px" }}
                    onPress={() => redirect(`/user/${review.user.id}`)}
                  >
                    {review.user.username}
                  </Button>
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

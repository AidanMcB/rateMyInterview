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
  Card,
  Modal
} from "@triframe/designer";


export const UserProfile = tether(function* ({ Api, redirect, useParams }) {
    const { User } = Api;
    
    const selected = yield {review: false}

    const { id } = yield useParams();
    
    const user = yield User.read(id, `
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
  `);

    if(user == null){
        return <h1>No User Logged In!</h1>
    }

    return (
      <Container>
      
        <Surface>
          <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
            {user.username}
          </Heading>
        </Surface>
        <Subheading style={{}}>User Profile</Subheading>
        {user.reviews.map((review) => (
        <>
        <Card>
          <List.Item title={review.title} 
          description={review.company.name}
          onPress={() => selected.review = review} />
        </Card>
       
        </>
        ))}
     <Modal visible={selected.review} onDismiss={() => selected.review = false}>
        <Container>
          <Heading>{selected.review.title}</Heading>
            <p>{selected.review.rating}/5 Stars</p>
            {selected.review.description}
          </Container>
        </Modal>
      </Container>
    );
  });



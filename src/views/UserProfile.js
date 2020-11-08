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
import { Card, Modal } from "@triframe/designer/dist/paper";


export const UserProfile = tether(function* ({ Api, redirect, useParams }) {
    const { User } = Api;
    
    const modalView = yield {visible: false}

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
        <div>
        <Card>
          <List.Item title={review.title} 
          description={review.company.name}
          onPress={() => modalView.visible = true} />
        </Card>
        <Modal visible={modalView.visible}>
            {review.description}
        </Modal>
        </div>
        ))}
         {/* <Subheading>{user.reviews.company.location}</Subheading>
         <Icon >
           <Subheading>{company.website}</Subheading>
        
     </Icon> */}
      </Container>
    );
  });



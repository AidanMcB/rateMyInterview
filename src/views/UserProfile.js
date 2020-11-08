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
import { session } from "@triframe/scribe/dist/decorators";

export const UserProfile = tether(function* ({ Api, useParams }) {
    const { User } = Api;
  
    const user = yield User.read(session.loggedInUserId)
    // const users = yield User.list(`
    // *,
    // reviews{
    //     title,
    //     rating,
    //     description,
    //     company{
    //         name, 
    //         location,
    //         website
    //     }
    // }
    // `
    // )
  
    return (
      <Container>
      
        <Surface>
          <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
            {user.name}
          </Heading>
        </Surface>
        <Subheading style={{}}>User Profile</Subheading>
        {user.reviews.map((review) => (
          <List.Item title={review.title} description={review.description} />
        ))}
         {/* <Subheading>{user.reviews.company.location}</Subheading>
         <Icon >
           <Subheading>{company.website}</Subheading>
        
     </Icon> */}
      </Container>
    );
  });



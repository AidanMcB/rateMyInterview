import React from 'react'
import { tether, List, Container, Heading, Subheading, Session, Area } from '@triframe/designer'

export const CompanyProfile = tether(function* ({ Api, useParams }) {

    const { Company } = Api;

    const { id } = yield useParams()

    const company = yield Company.read(id, `
    *,
    reviews {
        title,
        description,
        rating
    }
    `)

    return (
        // <Container>
          <Area inline alignX="center">
          <Heading>{company.name}</Heading>
          <Subheading>Company Reviews</Subheading>
          {company.reviews.map( review => (
              <List.Item
            title={review.title}
            description={review.description}/>
          ))}
          <Subheading>
            {company.location}
          </Subheading>
          <Subheading>
            {company.website}
          </Subheading>
          </Area>
        // </Container>
      )

})  
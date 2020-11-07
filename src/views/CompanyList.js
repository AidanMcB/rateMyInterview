import React from 'react'
import {Paragraph, tether, List, Container, Heading} from '@triframe/designer'

export const CompanyList = tether(function* ({ Api, redirect }) {

    const { Company } = Api;

    const companies = yield Company.list(`
    *,
    reviews {
        title,
        description,
        rating
    }
`)

return (
    <Container>
        <Heading>Company List</Heading>
        {companies.map(company => (
            <List.Item 
            title={company.name}
            onPress={() => redirect(`/companies/${company.id}`)} />
                
        ))}
    </Container>
)
})

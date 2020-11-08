import React from 'react'
import { Paragraph, tether, List, TextInput, Container, Heading } from '@triframe/designer'

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
    const state = yield {
        searchTerm: '',
        companyList: [...companies]
    }

    const handleSearch = (value) => {
        state.searchTerm = value
        state.companyList = companies.filter(company => (
            company.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        ))
        // console.log(x)
    }

    return (
        <Container>
            <Heading>Company List</Heading>

            <TextInput label="Find a Company" onChange={(value) => handleSearch(value)} />

            {state.companyList.map(company => (
                <List.Item
                    title={company.name}
                    onPress={() => redirect(`/companies/${company.id}`)} />

            ))}
        </Container>
    )
})

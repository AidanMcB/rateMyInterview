import React from 'react'
import { Paragraph, tether, List, TextInput, Container, Heading } from '@triframe/designer'
import {
    Section,
    Button,
    Subheading,
    Appbar,
    Card,
    Surface,
    Column,
    Grid,
    Right
  } from "@triframe/designer";

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
        <Container
        style={{ backgroundColor: "#191970", padding: "20px", height: "90vh" }}>
        <Surface>
            <Heading
            size="large"
            style={{ backgroundColor: "#00dbc4", padding: "10px" }}
            >Company List
            </Heading>
        </Surface>
        
            <TextInput label="Find a Company" onChange={(value) => handleSearch(value)} style={{ backgroundColor: "#00BFFF", marginTop: "10px", padding: "10px", maxWidth: "500px", display: "table", margin: "auto" }}/>
            <Grid gutter={3} base={3}>
            {state.companyList.map(company => (
                        <Column key={company.id}>
                        <Card style={{ height: "70px", backgroundColor: "#ddedff"}}>
                          <List.Item
                            style={{ textOvereflow: "ellipsis"}}
                            title={company.name}
                            description={company.location}
                            onPress={() => redirect(`/companies/${company.id}`)}
                          ></List.Item>
                        </Card>
                      </Column>

            ))}</Grid>
        </Container>
    )
})


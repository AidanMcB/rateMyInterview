/** @format */

import React from "react";
import {
  tether,
  List,
  TextInput,
  Container,
  Heading,
} from "@triframe/designer";
import { Card, Surface, Column, Grid } from "@triframe/designer";

export const CompanyList = tether(function* ({ Api, redirect }) {
  const { Company } = Api;
  const companies = yield Company.list(`
    *,
    reviews {
        title,
        description,
        rating
    }
    `);
  const state = yield {
    searchTerm: "",
    companyList: [...companies],
  };

  const handleSearch = (value) => {
    state.searchTerm = value;
    state.companyList = companies.filter((company) =>
      company.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  return (
    <Container
      style={{ backgroundColor: "#fff", padding: "20px", height: "90vh" }}
    >
      <Surface>
        <Heading
          size="large"
          style={{ backgroundColor: "#00dbc4", padding: "10px" }}
        >
          Company List
        </Heading>
      </Surface>

      <TextInput
        label="Find a Company"
        onChange={(value) => handleSearch(value)}
        style={{
          backgroundColor: "#e3f3e8",
          marginTop: "10px",
          padding: "10px",
          maxWidth: "500px",
          display: "table",
          margin: "auto",
        }}
      />
      <Grid gutter={3} base={3}>
        {state.companyList.map((company) => (
          <Column key={company.id}>
            <Card style={{ height: "70px", backgroundColor: "#fffaf0" }}>
              <List.Item
                style={{ textOvereflow: "ellipsis" }}
                title={company.name}
                description={company.location}
                onPress={() => redirect(`/companies/${company.id}`)}
              ></List.Item>
            </Card>
          </Column>
        ))}
      </Grid>
    </Container>
  );
});

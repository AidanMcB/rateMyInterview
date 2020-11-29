/** @format */

import React from "react";
import { myrevImg } from "../assets/myrevImg.jpg";
import { tether, BubbleButton, Title, Container } from "@triframe/designer";

export const HomePage = tether(function* ({ Api, redirect }) {
  const { Review } = Api;

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <img
        src={
          "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
        style={{ width: "40vw", height: "40vh" }}
      ></img>
      <Title style={{ fontFamily: "Arial" }}>Rate My InteRview</Title>
      <BubbleButton
        style={{ backgroundColor: "#420039" }}
        small={true}
        onPress={() => redirect("/main")}
      >
        See Reviews
      </BubbleButton>
    </Container>
  );
});

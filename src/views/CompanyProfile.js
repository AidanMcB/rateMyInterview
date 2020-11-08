/** @format */

import React, { useState } from "react";
import {
  tether,
  Button,
  List,
  Modal,
  Container,
  Heading,
  Subheading,
  Session,
  Area,
  Surface,
  Icon,
} from "@triframe/designer";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export const CompanyProfile = tether(function* ({ Api, useParams, redirect }) {
  const { Company, User } = Api;
  const user = yield User.current();

  const { id } = yield useParams();

  let viewport = yield {
    latitude: 39.381266,
    longitude: -97.922211,
    width: "80vw",
    height: "100vh",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
    zoom: 3,
  };

  const company = yield Company.read(
    id,
    `
    *,
    reviews {
        title,
        description,
        rating
    }
    `
  );

  let REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoibmluamFzaW5wYWphbWFzIiwiYSI6ImNraDloYjVuYTAxcDAyeHVzdnhqaW91aHUifQ.2yd2gQjvKBwh6lp8mmmONA";

  const modalView = yield {
    visible: false,
  };

  const handleCreateReview = () => {
    if (user !== null) {
      redirect("/create-review");
    } else {
      modalView.visible = true;
      console.log(modalView.visible);
    }
  };

  return (
    console.log(REACT_APP_MAPBOX_TOKEN),
    (
      <Container>
        {/* /<Area alignX="center"> */}
        <Surface>
          <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
            {company.name}
          </Heading>
        </Surface>
        <Subheading style={{}}>Company Reviews</Subheading>
        {company.reviews.map((review) => (
          <List.Item title={review.title} description={review.description} />
        ))}
        <Icon name="web">{company.website}</Icon>
        <Icon name="map-marker">{company.location}</Icon>
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => (viewport = nextViewport)}
          mapBoxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
          mapStyle="https://api.mapbox.com/tokens/v2/NinjasInPajamas?access_token={mapBoxApiAccessToken}"
        ></ReactMapGL>

        <Button
          small={true}
          style={{ background: "lightblue" }}
          onPress={handleCreateReview}
        >
          Write a Review
        </Button>
        <Modal
          visible={modalView.visible}
          onDismiss={() => (modalView.visible = false)}
        >
          <Container>You must be logged in to write a review!</Container>
        </Modal>
      </Container>
    )
  );
});

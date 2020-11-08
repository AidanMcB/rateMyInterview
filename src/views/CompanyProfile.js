/** @format */

import React, { useState } from "react";
import {
  tether,
  BubbleButton,
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
import ReactMapGL, { Marker, Popup } from 'react-map-gl'



export const CompanyProfile = tether(function* ({ Api, useParams, redirect }) {
  const { Company, User } = Api;
  const user = yield User.current();

  const { id } = yield useParams();


  const company = yield Company.read(
    id,
    `
    *,
    reviews {
      title,
      description,
      rating,
    }
    `
  );
  let viewport = yield {
    latitude: parseFloat(company.lat),
    longitude: parseFloat(company.long),
    width: "30vw",
    height: "30vh",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
    zoom: 13,
  };


  let MAPBOX_TOKEN = 'pk.eyJ1IjoibmluamFzaW5wYWphbWFzIiwiYSI6ImNraDloYjVuYTAxcDAyeHVzdnhqaW91aHUifQ.2yd2gQjvKBwh6lp8mmmONA'


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
    <Container>
      <Surface>
        <Heading style={{ backgroundColor: "#00dbc4", padding: "10px" }}>
          {company.name}
        </Heading>
      </Surface>
      <Subheading style={{}}>Company Reviews</Subheading>
      {company.reviews.map((review) => (
        <List.Item title={review.title} description={review.description} />
      ))}
      <Icon name="web">
        {company.website}
      </Icon>
      <Icon name="map-marker">{company.location}</Icon>
      <Container style={{display: "inline"}}>
        <ReactMapGL
        {...viewport}
          onViewportChange={nextViewport => viewport = nextViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/ninjasinpajamas/ckh9f5vo310o819ma4rrhdpms" >
          <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
            <Icon name="map-marker" color="white" size={40} />
          </Marker>
        </ReactMapGL>
        <BubbleButton small={true} style={{ marginLeft: "60%", width: "30%" }} onPress={handleCreateReview}>
          Write a Review
      </BubbleButton>
      </Container>
      <Modal visible={modalView.visible} onDismiss={() => modalView.visible = false}>
        <Container>You must be logged in to write a review!</Container>
      </Modal>
    </Container>
  );
});

/** @format */

import React, { useState } from "react";
import {
  tether,
  Badge,
  BubbleButton,
  Card,
  Chip,
  Caption,
  Divider,
  HelperText,
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
    height: "40vh",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
    zoom: 13,
  };

  let MAPBOX_TOKEN =
    "pk.eyJ1IjoibmluamFzaW5wYWphbWFzIiwiYSI6ImNraDloYjVuYTAxcDAyeHVzdnhqaW91aHUifQ.2yd2gQjvKBwh6lp8mmmONA";

  const modalView = yield {
    visible: false,
  };

  const selected = yield {
    review: false
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
      <br />
      <Divider /><Divider />
      <Area inline={true} flex={true} style={{ padding: "10px" }}>
        <Container className="company-info-left">
          <Subheading>Reviews:</Subheading>
          <Container>
            {company.reviews.length > 0 ? company.reviews.map((review) => (
              <Card key={review.id} elevation={10} style={{ marginTop: "10px", width: "50%" }} >
                <List.Item title={review.title} description={review.description}
                  onPress={() => selected.review = review}
                />
              </Card>
            )) : <Caption>This company doesn't have any review's yet</Caption>}
          </Container>
          <BubbleButton
            
            style={{ margin: "auto", width: "40%" }}
            onPress={handleCreateReview}>
            Write a Review
        </BubbleButton>


        </Container>
        <Container className="company-info-right">
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport) => (viewport = nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/ninjasinpajamas/ckh9f5vo310o819ma4rrhdpms">
            <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
              <Icon name="map-marker" color="white" size={40} />
            </Marker>
          </ReactMapGL>
          <br/>

          <Chip>
            <Icon size={20} name="web">
              <a href={company.website}>Go to {company.name}'s website</a>
            </Icon>
          </Chip>
          <br />

          <Chip>
            <Icon size={20} name="map-marker">{company.location}</Icon>
          </Chip>
        </Container>
      </Area>

      <Modal visible={selected.review} onDismiss={() => selected.review = false}>
        <Container>
          <Heading>{selected.review.title}</Heading>
          <p>{selected.review.rating}/5 Stars</p>
          {selected.review.description}
        </Container>
      </Modal>

      <Modal
        visible={modalView.visible}
        onDismiss={() => (modalView.visible = false)}>
        <Heading style={{ margin: "auto" }}>You must be logged in to write a review!</Heading>
      </Modal>

    </Container>
  );
})

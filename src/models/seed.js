/** @format */

import { User } from "./User";
import { Company } from "./Company";
import { Review } from "./Review";
import { hash } from "bcrypt";
const bcrypt = require("bcrypt");

export const seed = async () => {
  await User.truncate();
  await Company.truncate();
  await Review.truncate();

  let passwordDigest = await hash("1234", 10);
  let faizah = await User.create({ username: "Faizah", passwordDigest });
  let terry = await User.create({ username: "Terry", passwordDigest });
  let johnny = await User.create({ username: "Johnny", passwordDigest });
  let francisco = await User.create({ username: "Francisco", passwordDigest });
  let melike = await User.create({ username: "Melike", passwordDigest });
  let aidan = await User.create({ username: "Aidan", passwordDigest });

  let google = await Company.create({
    name: "Google",
    location:
      "1600 Amphitheatre Parkway In Mountain View, California, United States",
    website: "google.com",
    lat: "37.419857",
    long: "-122.078827",
  });
  let facebook = await Company.create({
    name: "FaceBook",
    location: "Menlo Park, California",
    website: "facebook.com",
    lat: "37.453220",
    long: "-122.183220",
  });
  let twitter = await Company.create({
    name: "Twitter",
    location: "Market Square, 1355 Market St #900, San Francisco",
    website: "twitter.com",
    lat: "37.776553",
    long: "-122.417211",
  });
  let github = await Company.create({
    name: "GitHub",
    location: "88 Colin P Kelly Jr St, San Francisco, CA 94107",
    website: "github.com",
    lat: "37.782440",
    long: "-122.391188",
  });

  let rev1 = await Review.create({
    title: "Great Interview",
    rating: 5,
    description: "This was the best place I have ever interviewed at",
    userId: faizah.id,
    companyId: google.id,
  });

  let rev2 = await Review.create({
    title: "terrible",
    rating: 1,
    description:
      "They never called me back. I'll report them. I hate being ghosted and that's what the recruiters mostly do. I love being unemployed. ",
    userId: faizah.id,
    companyId: facebook.id,
  });

  let rev3 = await Review.create({
    title: "Not bad",
    rating: 3,
    description: "The questions were too easy",
    userId: melike.id,
    companyId: twitter.id,
  });

  let rev4 = await Review.create({
    title: "Awesome",
    rating: 4,
    description: "Great interview process",
    userId: francisco.id,
    companyId: github.id,
  });

  let rev5 = await Review.create({
    title: "It was okay",
    rating: 3,
    description: "Nothing special",
    userId: faizah.id,
    companyId: google.id,
  });

  let rev6 = await Review.create({
    title: "Not so great",
    rating: 2,
    description: "The process took over a month!",
    userId: aidan.id,
    companyId: github.id,
  });
};

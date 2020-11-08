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
    location: "San Francisco, CA",
    website: "google.com",
  });
  let facebook = await Company.create({
    name: "FaceBook",
    location: "Los Angeles., CA",
    website: "facebook.com",
  });
  let twitter = await Company.create({
    name: "Twitter",
    location: "Houston, TX",
    website: "twitter.com",
  });
  let github = await Company.create({
    name: "GitHub",
    location: "Newark, NJ",
    website: "github.com",
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

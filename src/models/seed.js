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
    website: "https://www.google.com",
    lat: "37.419857",
    long: "-122.078827",
  });
  let facebook = await Company.create({
    name: "FaceBook",
    location: "Menlo Park, California",
    website: "https://www.facebook.com",
    lat: "37.453220",
    long: "-122.183220",
  });
  let twitter = await Company.create({
    name: "Twitter",
    location: "Market Square, 1355 Market St #900, San Francisco, CA",
    website: "https://www.twitter.com",
    lat: "37.776553",
    long: "-122.417211",
  });
  let github = await Company.create({
    name: "GitHub",
    location: "88 Colin P Kelly Jr St, San Francisco, CA",
    website: "https://www.github.com",
    lat: "37.782440",
    long: "-122.391188",
  });

  let apple = await Company.create({
    name: "Apple",
    location: "1 Apple Park Way Cupertino, CA",
    website: "https://www.apple.com",
    lat: "37.334680",
    long: "-122.008980",
  });

  let twilio = await Company.create({
    name: "Twilio",
    location: "375 Beale St #300, San Francisco",
    website: "https://www.twilio.com",
    lat: "37.788140",
    long: "-122.392580",
  });

  let intel = await Company.create({
    name: "Intel",
    location: "2200 Mission College Blvd, Santa Clara, CA",
    website: "https://www.intel.com",
    lat: "37.387699",
    long: "-121.963501",
  });

  let BP = await Company.create({
    name: "BP",
    location: "580 Westlake Park Blvd #150, Houston, TX",
    website: "https://www.bp.com",
    lat: "29.781530",
    long: "-95.631430",
  });

  let phData = await Company.create({
    name: "phData",
    location: "400 S 4th St #401, Minneapolis, MN 55415",
    lat: "44.977643",
    long: "-93.263675",
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

  let rev7 = await Review.create({
    title: "Caring people and mission",
    rating: 4,
    description:
      "Great mission, Transparency, Caring, smart, passionate people",
    userId: terry.id,
    companyId: twilio.id,
  });

  let rev8 = await Review.create({
    title: "Great Design Team",
    rating: 5,
    description:
      "Love the flexibility and autonomy that I have. Excited about all of the upcoming product initiatives. Great benefits and unlimited PTO",
    userId: aidan.id,
    companyId: apple.id,
  });
};

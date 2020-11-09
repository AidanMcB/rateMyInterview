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
  let faizah = await User.create({ username: "Faizah Ahsan", passwordDigest });
  let terry = await User.create({ username: "Terry Smith", passwordDigest });
  let johnny = await User.create({
    username: "Johnny McGregor",
    passwordDigest,
  });
  let francisco = await User.create({
    username: "Francisco Sierra",
    passwordDigest,
  });
  let melike = await User.create({ username: "Melike Kilic", passwordDigest });
  let aidan = await User.create({ username: "Aidan McBride", passwordDigest });

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

  let bp = await Company.create({
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
    title: "Geology Interview",
    rating: 5,
    description:
      "Two steps process, first an online pre-recorded interview and if you pass that one a campus assessment.Study the company values and have clear examples and experiences in mind. For the assessment it will be a group exercise (not geology) and a technical interview.",
    userId: faizah.id,
    companyId: google.id,
  });

  // let rev2 = await Review.create({
  //   title: "terrible",
  //   rating: 1,
  //   description:
  //     "They never called me back. I'll report them. I hate being ghosted and that's what the recruiters mostly do. I love being unemployed. ",
  //   userId: faizah.id,
  //   companyId: facebook.id,
  // });
  let rev2 = await Review.create({
    title: "Reservoir Engineering Interview",
    rating: 2,
    description:
      "1st step-online interview, 2nd step-on site interview (Houston campus). The on campus interview was pretty straight forward. You meet and work with the others you're competing with for the position. There's a group (3 people) case study, & technical interview, each an hour long. Everyone was very professional and nice. The interview just happened so still in the waiting window to hear back.!",
    userId: faizah.id,
    companyId: bp.id,
  });

  let rev3 = await Review.create({
    title: "Data Scientist Interview",
    rating: 3,
    description:
      "Video interview followed by technical question. Both proctored via HireVue services. Took roughly ~1hour and 30 minutes to complete. The HireVue process allowed retakes for each question. Questions focused largely around personal experiences and projects. Nothing technical was asked in the interview itself",
    userId: melike.id,
    companyId: twitter.id,
  });

  let rev4 = await Review.create({
    title: "Business Analyst Interview",
    rating: 4,
    description:
      "From four years ago. Professional interview with the proper questions asked. Be ready to ask questions. They take it seriously and don't dismiss you if they do not get a good impression immediately.",
    userId: francisco.id,
    companyId: github.id,
  });

  let rev5 = await Review.create({
    title: "Marketing Manager Interview",
    rating: 5,
    description:
      "The interview process was excellent. The recruiter was so great to work with! She asked really great questions to ensure that the role would be a fit for me personally. I appreciated her follow up, attention to details, and the experience overall. She made me feel so comfortable throughout the whole process. My in-person interview was really informative and gave me a great picture of what it would be like to work at phData. He asked very great questions and had me prepare some materials prior to the interview so we could talk through my work and my thought-process around marketing strategy.",
    userId: faizah.id,
    companyId: google.id,
  });

  let rev6 = await Review.create({
    title: "DevOps Engineer Interview",
    rating: 2,
    description:
      "The Interview Process went through GD Round and these guys need freshers as well and if they are from Tamil Nadu they will consider more i did not get through the GD Round because of this as i am not Tamilian..",
    userId: aidan.id,
    companyId: github.id,
  });

  let rev7 = await Review.create({
    title: "Software Engineer Interview",
    rating: 1,
    description:
      "I got the interview at the Grace Hopper Conference then proceeded to go on to the second and final round of interviews. That was when they flew me to their offices in Seattle for the final round. It was all very quick the first interview was behavioral and the final round was technical. The final round was 4 hours long.",
    userId: terry.id,
    companyId: twilio.id,
  });

  let rev8 = await Review.create({
    title: "Associate Manager Machine Learning Interview",
    rating: 5,
    description:
      "Recruiter, 1 hr with hiring manager, full team 5-6 people. They had a coding interview first and didn’t tell me there will be one in advance. Rest of the interviews were mostly management and system design types and theoretical data science questions.",
    userId: aidan.id,
    companyId: apple.id,
  });

  let rev9 = await Review.create({
    title: "People Tech Lead Interview",
    rating: 5,
    description:
      "The hiring process was great! Definitely quicker than some other roles I had worked with. Everyone was super friendly and I always felt that they were rooting for me to be successful. I thought it was great that they sent out emails with interview tips, and reminded me that the interview goes both ways, both for Glassdoor to ensure that I'm a fit for them, but also for me to decide if Glassdoor is a fit for me too.",
    userId: terry.id,
    companyId: apple.id,
  });

  let rev10 = await Review.create({
    title: "Customer Success Manager Interview",
    rating: 3,
    description:
      "Process took about a week - call with recruiter, call with hiring manager, and then an in person presentation to a group of about 5 to present a kick off call with a client. Then after the presentation, had more time to interview with hiring manager",
    userId: melike.id,
    companyId: intel.id,
  });

  let rev11 = await Review.create({
    title: "Sr Software Engineer Interview",
    rating: 2,
    description:
      "Recruiter emails me and wants me to take a 1 hr Java test before he'll even talk to me. Really? You can't even talk to me for 15 minutes so I know if the position/company is even a fit before I waste an hour? Next...",
    userId: francisco.id,
    companyId: phData.id,
  });

  let rev12 = await Review.create({
    title: "Applecare At Home Advisor Interview",
    rating: 2,
    description:
      "I  applied in August and I was contacted in November. After they contacted me, they called me within 3 days for my first interview. It was a very laid back conversation that took about 30 minutes. I'm not very good at being put on the spot, but after some thought, I was able to pass the first round of the interview. The second interview was some time in December and it was through a video call. It took about 30-45 minutes to answer all the questions. The questions were a bit harder and you had to go into more detail. Again, the conversation was laid back and very casual. The interviewers I had really just wanted the best from me. I was also sick during the interview and didn't know half the things I was saying, but they were very understanding about that.",
    userId: aidan.id,
    companyId: apple.id,
  });

  // let rev13 = await Review.create({
  //   title: "Reservoir Engineering Interview",
  //   rating: 2,
  //   description:
  //     "1st step-online interview, 2nd step-on site interview (Houston campus). The on campus interview was pretty straight forward. You meet and work with the others you're competing with for the position. There's a group (3 people) case study, & technical interview, each an hour long. Everyone was very professional and nice. The interview just happened so still in the waiting window to hear back.!",
  //   userId: faizah.id,
  //   companyId: bp.id,
  // });
};

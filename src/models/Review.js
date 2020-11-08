/** @format */

import { Resource } from "@triframe/core";
import { Model, string, include, integer } from "@triframe/scribe";
import { belongsTo, session, hidden } from "@triframe/scribe/dist/decorators";

export class Review extends Resource {
  @string
  title = "";

  @integer
  rating = 0;

  @string
  description = "";

  @belongsTo({ a: "User" })
  user = null;

  @belongsTo({ a: "Company" })
  company = null;

  @session
  static async makeReview(session, reviewData) {
    return await Review.create({
      ...reviewData,
      userId: session.loggedInUserId,
    });
  }
  @hidden
  static create;
}

/** @format */
import { Resource } from "@triframe/core";
import {
  Model,
  string,
  include,
  integer,
  session,
  hidden,
} from "@triframe/scribe";
import { belongsTo } from "@triframe/scribe/dist/decorators";

export class Review extends Resource {
  @string
  title = "";

  @string
  description = "";

  @integer
  rating = 0;

  @belongsTo({ a: "User" })
  user = null;

  @belongsTo({ a: "Company" })
  company = null;

  @session
  static async makeReview(session, reviewData) {
    if (
      isNaN(parseInt(reviewData.rating)) ||
      reviewData.rating < 0 ||
      reviewData.rating > 5
    ) {
      throw Error("Rating must be a number from 0 to 5");
    }
    return await Review.create({
      ...reviewData,
      userId: session.loggedInUserId,
    });
  }
  @hidden
  static create;
}

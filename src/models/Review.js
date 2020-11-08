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
  @include(Model)
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
    return await Review.create({
      ...reviewData,
      userId: session.loggedInUserId,
    });
  }
  @hidden
  static create;
}

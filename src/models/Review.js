/** @format */

import { Resource } from "@triframe/core";
import { Model, string, include, integer } from "@triframe/scribe";
import { belongsTo } from "@triframe/scribe/dist/decorators";

export class Review extends Resource {
  @include(Model)
  @string
  title = "";

  @string
  title = "";

  @integer
  rating = 0;

  @belongsTo({ a: "User" })
  user = null;

  @belongsTo({ a: "Company" })
  company = null;

  @belongsTo({ a: "User", a: "Company" })
  user = null;
  company = null;
}

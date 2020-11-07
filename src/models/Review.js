/** @format */

import { Resource } from "@triframe/core";
import { Model, string, include } from "@triframe/scribe";
import { belongsTo } from "@triframe/scribe/dist/decorators";

export class Review extends Resource {
  @include(Model)
  @string
  title = "";

  @integer
  rating = 4;

  @string
  description = "";

  @belongsTo({ a: "User", a: "Company" })
  user = null;
  company = null;
}

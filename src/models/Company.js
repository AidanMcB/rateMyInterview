/** @format */

import { Resource } from "@triframe/core";
import { Model, string, include } from "@triframe/scribe";
import { hasMany, integer } from "@triframe/scribe/dist/decorators";

export class Company extends Resource {
  @include(Model)
  @string
  name = "";

  @string
  location = "";

  @string
  website = "";

  @string
  lat = "";

  @string
  long = "";

  @hasMany
  reviews = [];

  @hasMany({ through: (company) => company.reviews.user })
  users = [];
}

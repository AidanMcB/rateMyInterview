<<<<<<< HEAD
/** @format */
=======
import { Resource } from '@triframe/core'
import { Model, string, include, integer }  from '@triframe/scribe'
import { belongsTo, session, hidden} from '@triframe/scribe/dist/decorators'
>>>>>>> 9f830a5653e599c9e9f3bfd288cb2f96e63aaac0

import { Resource } from "@triframe/core";
import { Model, string, include, integer } from "@triframe/scribe";
import { belongsTo } from "@triframe/scribe/dist/decorators";

export class Review extends Resource {
  @include(Model)
  @string
  title = "";

  @integer
  rating = 0;

  @belongsTo({ a: "User" })
  user = null;

<<<<<<< HEAD
  @belongsTo({ a: "Company" })
  company = null;
}
=======

    @session
    static async makeReview(session, reviewData){
        return await Review.create({...reviewData, userId: session.loggedInUserId })
    }
    @hidden
    static create

}
>>>>>>> 9f830a5653e599c9e9f3bfd288cb2f96e63aaac0

import { Resource } from '@triframe/core'
import { Model, string, include, integer }  from '@triframe/scribe'
import { belongsTo } from '@triframe/scribe/dist/decorators'

export class Review extends Resource {

    @include(Model)

    @string
    title = "" 
    
    @integer
    rating = ""

    @string
    description = ""

    @belongsTo({a: "User"})
    user = null
    
    @belongsTo({a: "Company"})
    company = null

}
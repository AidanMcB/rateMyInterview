import { Resource } from '@triframe/core'
import { Model, string, include }  from '@triframe/scribe'
import { hasMany } from '@triframe/scribe/dist/decorators'

export class User extends Resource {

    @include(Model)

    @string
    name = "" 
    
    @string
    passwordDigest = ""

    @hasMany
    reviews = []

}
import { Resource } from '@triframe/core'
import { Model, string, include }  from '@triframe/scribe'
import { hasMany, session, stream } from '@triframe/scribe/dist/decorators'
import { hash, compare } from 'bcrypt'
export class User extends Resource {

    @include(Model)

    @string
    username = "" 
    
    @string
    passwordDigest = ""

    @hasMany
    reviews = []

    static async register(username, password) {
        let existingUser = await User.where({ username: username })
        if(existingUser.length > 0){
            throw Error('A usesr with this username already exists')
        }else if (password.length < 6 ){
            throw Error('Password must be atleasy 6 characters long')
        }
        let passwordDigest = await hash(password, 10)
        return User.create({ username: username, passwordDigest: passwordDigest })
    }

    @session
    static async login(session, username, password){
        let [ user ] = await User.where({ username: username })
        if(user == undefined){
            throw Error('Could not find a user with that username')
        }
        if(!await compare(password, user.passwordDigest)){
            throw Error('Incorrect password')
        }
        session.loggedInUserId = user.id 
        return true
    }

    @session
    static logout(session){
        session.loggedInUserId = null
    }
    

    @stream
    @session
    static *current(session){
        return(
            session.loggedInUserId !== null
                ? yield User.read(session.loggedInUserId,`
                *,
                reviews{
                    title,
                    rating,
                    description,
                    company{
                        name, 
                        location,
                        website
                    }
                }
                `)
                : null
        )
    }

}
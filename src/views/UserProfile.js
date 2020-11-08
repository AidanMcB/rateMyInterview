const myUser = yield User.read(1)
const users = yield User.list(`
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

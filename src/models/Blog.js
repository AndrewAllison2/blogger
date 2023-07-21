export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.tags = data.tags
    this.published = data.published
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.imgUrl = data.imgUrl || ''
    this.creator = data.creator

  }
}


// let bloger = {
//   "_id": "64b9e4ffeb84f17d842ed61a",
//   "title": "Fixing Everything I Just Broke",
//   "body": "Tried to make some progress and instead spent 30 minutes debugging what I broke! But it works now! Woooo!",
//   "imgUrl": "https://media.istockphoto.com/id/1152831007/photo/disappointed-office-worker-doing-face-palm-gesture-orange-background-problem.webp?b=1&s=170667a&w=0&k=20&c=PqE98zGBDAtfoxTOMayNLiehH6znpNphCZT7D8TIqG8=",
//   "tags": [],
//   "published": true,
//   "creatorId": "64b8a6fc2bf6d261c3ee91fb",
//   "createdAt": "2023-07-21T01:53:03.577Z",
//   "updatedAt": "2023-07-21T01:53:03.577Z",
//   "__v": 0,
//   "creator": {
//     "_id": "64b8a6fc2bf6d261c3ee91fb",
//     "subs": [
//       "auth0|64b8a6fc4e7031ba54ffd813"
//     ],
//     "email": "iliketurtles@turtles.turtles",
//     "name": "iliketurtles",
//     "picture": "https://s.gravatar.com/avatar/a64eeef825ff2e63157504e89c4e1733?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fil.png",
//     "bio": "",
//     "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//     "github": "",
//     "linkedin": "",
//     "resume": "",
//     "class": "",
//     "graduated": false,
//     "createdAt": "2023-07-20T03:16:31.549Z",
//     "updatedAt": "2023-07-20T03:16:31.549Z",
//     "__v": 0,
//     "id": "64b8a6fc2bf6d261c3ee91fb"
//   },
//   "id": "64b9e4ffeb84f17d842ed61a"
// }
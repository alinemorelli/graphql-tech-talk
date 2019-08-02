const CreateUser = require('../../../../Domain/UseCases/CreateUser')
const CreatePost = require('../../../../Domain/UseCases/CreatePost')

module.exports = {
  createUser: (_, user) => CreateUser(user),
  createPost: (_, post) => CreatePost(post)
}

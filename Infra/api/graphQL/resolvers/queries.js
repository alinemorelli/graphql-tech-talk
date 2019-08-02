const GetUser = require('../../../../Domain/UseCases/GetUser')
const GetPost = require('../../../../Domain/UseCases/GetPost')

module.exports = {
  user: (_, { id }) => GetUser(id),
  post: (_, { id }) => GetPost(id)

}

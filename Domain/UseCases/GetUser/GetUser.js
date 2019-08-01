const users = require('../../../mockUsers')
module.exports = function getUser (id, injection) {
  return id ? [users.find(user => user.id === Number(id))] : users
}

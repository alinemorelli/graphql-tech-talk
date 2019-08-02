const { posts } = require('../../../mockData')
module.exports = function getPost (id) {
  return id ? [posts.find(post => post.id === Number(id))] : posts
}

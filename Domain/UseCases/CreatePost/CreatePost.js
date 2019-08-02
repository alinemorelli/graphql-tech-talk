const { posts } = require('../../../mockData')
module.exports = async function createPost ({ title, content }) {
  const lastId = posts[posts.length-1].id
  const newPost = {
    id: lastId + 1,
    title,
    content
  }
  posts.push(newPost)
  return newPost
}

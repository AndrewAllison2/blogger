import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('blogs!', res.data)
    const blogs = res.data.map(b => new Blog(b))
    AppState.blogs = blogs
  }
  setActiveBlog(blog) {
    AppState.activeBlog = blog
    logger.log('Active Blog', AppState.activeBlog)
  }

  async createBlog(blogData) {
    const res = await api.post('api/blogs', blogData)
    logger.log('created blog', res.data)
    const newBlog = new Blog(res.data)
    AppState.blogs.unshift(newBlog)
  }
  async deleteBlog(blogToDelete) {
    const res = await api.delete(`api/blogs/${blogToDelete.id}`)
    const foundBlog = AppState.blogs.findIndex(b => b.id == blogToDelete.id)
    AppState.blogs.splice(foundBlog, 1)
  }
}


export const blogsService = new BlogsService()
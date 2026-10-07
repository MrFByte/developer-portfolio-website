export interface BlogPost {
  id: number;
  title: string;
  url: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

/**
 * Blog posts are served from the same GitHub Gist as the projects, so they can be edited
 * without a code change. Fetched at build time, so the cards are present in the static HTML.
 * Edit: https://gist.github.com/MrFByte/f8d4d8b982258cdc1097a0af05c3550d (blogs.json)
 */
const BLOGS_URL = 'https://gist.githubusercontent.com/MrFByte/f8d4d8b982258cdc1097a0af05c3550d/raw/blogs.json';

const response = await fetch(BLOGS_URL);
if (!response.ok) throw new Error(`Failed to load blog posts from gist: ${response.status}`);

const blogPosts: BlogPost[] = await response.json();

export default blogPosts;

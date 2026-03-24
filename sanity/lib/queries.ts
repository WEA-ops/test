import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug
}
`;

export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  publishedAt
}
`;
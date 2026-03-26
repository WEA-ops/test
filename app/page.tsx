import Link from "next/link";
import { client } from "../sanity/client";
import { POSTS_QUERY } from "../sanity/lib/queries";

export const revalidate = 60;

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main>
      <h2>Newsite</h2>

      {posts.map((post: any) => (
        <Link
          key={post._id}
          href={`/post/${post.slug.current}`}
        >
          <h2>{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}
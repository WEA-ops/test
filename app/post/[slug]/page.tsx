import { client } from "../../../sanity/client";
import { POST_QUERY } from "../../../sanity/lib/queries";

export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, {
    slug,
  });

  return (
    <article>
      <h1>{post.title}</h1>
      <pre>{JSON.stringify(post.body, null, 2)}</pre>
    </article>
  );
}
interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
}

export default async function Home() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/posts`);
  const posts: Post[] = await res.json();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2
              className="text-xl font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
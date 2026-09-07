export default async function Home() {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/posts`);
  const posts = await res.json();

  return (
    <pre style={{ padding: 20 }}>
      {JSON.stringify(posts, null, 2)}
    </pre>
  );
}
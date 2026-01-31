export default function PostsStaticPage({ posts, generatedAt }) {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Posts - Static (getStaticProps)</h1>

      <p>
        <strong>Generated at:</strong> {generatedAt}
      </p>

      <ul style={{ padding: 0 }}>
        {posts.map((p, index) => (
          <li
            key={p.id}
            style={{
              listStyle: "none",
              marginBottom: 20,
              border: "1px solid #ccc",
              borderRadius: 12,
              padding: 15,
              width: 300,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: 0 }}>{p.title}</h3>
            <p style={{ margin: "6px 0" }}>{p.body}</p>

            {/* الصورة محلية مباشرة في public */}
            <img
              src={`/post${index + 1}.jpg`}
              alt={p.title}
              style={{
                display:"flex",
                width: "100%",
                height: 100,
                
                objectFit: "cover",
                borderRadius: 8,
                marginTop: 10,
              }}
            />

             
          </li>
          
        ))}
      </ul>

      <p style={{ marginTop: 30 }}>
        {/* ما بتغير الجينيريت الا مع التحديث */}
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
      generatedAt: new Date().toISOString(),
    },
  };
}

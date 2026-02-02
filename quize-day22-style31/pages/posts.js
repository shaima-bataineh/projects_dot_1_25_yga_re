// pages/posts.js

// Component الرئيسي لعرض البوستات
export default function PostsPage({ posts }) {// postpageهاد الكمبوننت الرئيسي الي بعرض البوستات ياخد الpostsك porops يلي هي البيانات يلي تم جلبها سابقا من السيرفر
  return (
    <div style={{
      padding: "40px",
      maxWidth: "800px",
      marginTop: "30px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#c2adad",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      {/* عنوان الصفحة */}
      <h1 style={{
        textAlign: "center",
        color: "#edf0da",
        marginBottom: "30px"
      }}>Posts (Static Generation)</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {/* عرض كل بوست داخل قائمة */}
        {posts.map((post,index) => (
          <li key={post.id} style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
          }}>

            {/* صورة البوست */}
            <img 
              src={`/${index + 1}.jpg`} 
              alt={`Post ${post.id}`} 
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px"
              }} 
            />
            {/* عنوان البوست */}
            <strong style={{ fontSize: "18px", color: "#333" }}>{post.title}</strong>
            {/* محتوى البوست */}
            <p style={{ marginTop: "8px", color: "#555", lineHeight: "1.5" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// جلب البيانات مسبقًا أثناء بناء الصفحة (Static Generation)
export async function getStaticProps() {
  // استدعاء API لجلب 5 بوستات فقط
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // تحويل الرد إلى JSON
  const posts = await res.json();

  return {
    // تمرير البيانات للـ component كـ props
    props: {
      posts,
    },
  };
}

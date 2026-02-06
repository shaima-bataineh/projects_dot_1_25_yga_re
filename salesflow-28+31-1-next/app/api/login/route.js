// app/api/login/route.js
export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  if (email === "test@test.com" && password === "123456") {
    return new Response(JSON.stringify({ success: true, message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: false, message: "Invalid credentials" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

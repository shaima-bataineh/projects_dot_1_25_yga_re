import { addProduct, getProducts } from "@/lib/ProductStore";

export async function GET() // get return the products list
 {
    return Response.json(getProducts());
}

export async function POST(request) // post to add a new product
{
 let body;
 
 try{

    body =await request.json();
} catch {
    return Response.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
    const result = addProduct(body.name, body.price);
if (!result.ok) {
    return Response.json(
      { error: result.error },
      { status: 400 }
    );
  }

  return Response.json(result.product, { status: 201 });
}

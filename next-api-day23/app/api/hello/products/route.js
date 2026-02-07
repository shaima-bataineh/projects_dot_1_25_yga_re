// function of this code is to handel the products api to get the products list and add new product to the list.


import { addProduct, getProducts } from "@/lib/ProductStore";

export async function GET() // get return the products list
 {
    return Response.json(getProducts());
}

export async function POST(request) // post to add a new product
{
 let body;
 
 try{

    body =await request.json(); // to get the data from the request body and parse it as json
} catch (error) {
    return Response.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
    const result = addProduct(body.name, body.price);// to add the new product to the list and get the result of the operation
if (!result.ok) {
    return Response.json(
      { error: result.error },
      { status: 400 }
    );
  }

  return Response.json(result.product, { status: 201 });// return the new product with status 201 to indicate that the product was created succesfully.
}

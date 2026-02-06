export default function GET()
{
    //DB call
    const products =[
        {"id":1, "name":"Keyboard", "price":25},
        {"id":2, "name":"Mouse", "price":15},
        {"id":3, "name":"Monitor", "price":120},


    ];

    return Response.json(products);
}
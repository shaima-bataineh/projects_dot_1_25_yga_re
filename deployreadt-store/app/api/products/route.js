//هاد باك اند بسيط مافي jsx جهزنا البيانات كانها داتا بيز ورجعناها json 


export async function GET(request) {
    const limit = Number(process.env.LIMIT || 12);

    const products = Array.from({length: 30}).map((_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            price: (10 + i * 1.25).toFixed(2),
            inStock: i % 3 !== 0,
            image:`/${i +1}.jpg`,
        }
    ));

    return Response.json({
        ok: true,
        total: products.length,
        products: products.slice(0, limit),
    });

}
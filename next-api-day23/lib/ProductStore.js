let products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Samsung", price: 95 },
];

export function getProducts() {
  return products;
}

export function addProduct(name, price) {
  const cleanName = String(name || "").trim();
  const cleanPrice = Number(price);

  if (!cleanName) {
    return { ok: false, error: "Name is required" };
  }

  if (!cleanPrice || cleanPrice <= 0) {
    return { ok: false, error: "Price must be a valid number" };
  }

  const newProduct = {
    id: products.length
      ? products[products.length - 1].id + 1
      : 1,
    name: cleanName,
    price: cleanPrice,
  };

  products = [...products, newProduct];
  return { ok: true, product: newProduct };
}

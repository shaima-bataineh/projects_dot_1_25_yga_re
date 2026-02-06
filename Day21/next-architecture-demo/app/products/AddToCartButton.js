"use client";

import { useCart } from "./CartContext";// path of cartcontext should be ./CartContext this file in app folder not on product

export default function AddToCartButton({ product }) {
    const { addItem } = useCart();

    return (
        <button onClick={() => addItem(product)}>
            Add to cart
        </button>
    );
}

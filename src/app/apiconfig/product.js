import React from 'react';
export async function getData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?limit=32&offset=0",{ cache: "no-store"})
    const data = await res.json();
    return data;
}


export async function getProductDetails(id) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id} `);
    const data = await res.json();
    return data;
}


//user

export async function getUserData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=6")
    const data = await res.json();
    return data;
}
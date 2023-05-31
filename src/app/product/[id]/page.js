import React from 'react';
import Image from "next/image";
import {getProductDetails} from "@/app/apiconfig/product";


 export async function generateMetadata({ params }) {
    const id = params.id;
    const product = await getProductDetails(id)
    return {
        title: product.title,
        description: product.description,
        category: product.category.name,
        openGraph: {
            title: product.title,
            description: product.description,
            url: '/',
            siteName: 'DinoShop',
            images: [
                product.images[product.images.length - 1]
            ],
            locale: 'en-US',
            type: 'website',
        },
        twitter: {
            card: 'product_quality',
            title: product.title,
            description: product.description,
            images: [
                product.images[0]
            ],
        }
    };
}

export default async function ProductDetails({ params }) {

    const { id } = params;
    const product = await getProductDetails(id);
    return (
<>

        <div className="flex min-h-screen flex-wrap items-center justify-between p-20  ">
            <div className="grid grid-rows-3 grid-flow-col gap-4 bg-gray-50  ">
                <div className="row-span-3">
                    <a
                        href="#"
                    >
                        {product.images && (
                            <Image unoptimized   width={250} height={250}
                                className="object-cover w-full "
                                src={product.images[0]}
                                alt=""
                            />
                        )}
                    </a>
                </div>
                    <div className="col-span-2">
                        <h5 className="mb-2 text-2xl text-center ">
                            {product.title ? product.title : "No Info"}
                        </h5>
                    </div>
                        <div className="row-span-2 col-span-2 text-center   ">
                                <p className=" my-12  ">
                                    {product.description ? product.description : " Description "}
                                </p>
                        </div>
                    </div>
        </div>
</>
    );
}
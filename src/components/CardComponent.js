import React from 'react';
import Image from "next/image";

function CardComponent({id,title,image,price,category}) {
    console.log(image)
    return (
<>
    <div className="bg-white ">
        <div className="w-full mt-10 max-w-full bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="group relative">
                    <div
                        className="aspect-h-3 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <a href={`/product/${id}`}>
                            <Image unoptimized  width={500} height={500} src={image? image:"/placeholder.png"}
                             alt="No image"
                             className="h-full w-full object-cover object-center lg:h-96 lg:w-72"/>
                        </a>
                    </div>
                    <div className="mb-5 mt-3 flex justify-between container">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className=" text-lg  ml-2"></span>
                                    {title}
                                </a>
                            </h3>

                        </div>
                        <p className="text-lg  mr-2 font-medium text-gray-900">$ {price? price:"35"}</p>
                    </div>

                </div>


            </div>

        </div>


</>
    );
}

export default CardComponent;
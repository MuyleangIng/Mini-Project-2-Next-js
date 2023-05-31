
import React from 'react';
import Image from "next/image";

function CategoryComponent({id,nameofcategory,imageofcategory}) {
    return (
        <div>
            <div
                className="w-full max-w-sm p-4 bg-white  ">
                <ul className="my-4 ">
                    <li>
                        <a href={`/categories/${id}`}
                           className="w-10 h-10 rounded-full">
                            <Image unoptimized width={500} height={500} className="rounded-full w-10 h-10" src={imageofcategory? imageofcategory:"placeholder.png"} alt=" image"/>

                        </a>
                    </li>


                </ul>

            </div>

        </div>
    );
}

export default CategoryComponent;
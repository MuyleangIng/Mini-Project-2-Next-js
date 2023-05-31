import CardComponent from "@/components/CardComponent";
import CategoryComponent from "@/components/CategoryComponent";
import {getData} from "@/app/apiconfig/product";

export const metadata = {
    title: 'Home ',
    description: "Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.",
    locale: 'en-US',
    manifest: '/manifest.json',
    type: 'website',
    siteName: 'FigureShop',
    category: 'education',
    openGraph:{
        title: 'Home - FigureShop',
        description: " Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.",
        url: '/',
        siteName: 'FigureShop',
        images: [
            {
                url: "#",
                width: 700,
                height: 500,
            },
        ]
    },
}

export async function getCategoryList() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=8&offset=0")
    const categoryData = await res.json();
    return categoryData;
}

export default async function Home() {

    const products = await getData();
    const categorys = await getCategoryList();
    return (
        <>
            <div className="container mx-auto mt-16">
                <h1 className=" font-bold  mb-10 "> CATEGORY </h1>
                <div className="my-4 mt-10-6  flex-row grid grid-cols-4 gap-4">
                    {categorys.map((categories) => (
                        <CategoryComponent
                            key={categories.id}
                            id={categories.id}
                            nameofcategory={categories.name}
                            imageofcategory={categories.image}
                        />
                    ))}
                </div>
            </div>

            <div>
            <div className={"flex min-h-screen flex-wrap items-center justify-between container mx-auto "}>
                {products.map((product) => (
                    <CardComponent
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.images[0]}
                        price={product.price}
                        category={product.category.name}

                    />
                ))}
            </div>
            </div>
        </>

    );
}

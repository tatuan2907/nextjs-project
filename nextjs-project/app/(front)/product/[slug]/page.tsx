import AddToCart from "@/components/products/AddToCart";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


export default function ProductDetails({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const product = data.products.find((x) => x.slug === params.slug);
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <>
            <div className="my-2">
                <Link href={"/"}>Back to product</Link>
            </div>
            <h2 className="text-2xl py-2">{product.name}</h2>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    ></Image>
                </div>
                <div className="space-y-4">
                    <ul>
                        <li>
                            <h1 className="text-xl">{product.name}</h1>
                        </li>
                        <li>
                            {product.rating} of {product.numReviews} reviews
                        </li>
                        <li>
                            {product.brand}
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
                        <div className="card-body">
                            <div className="mb-2 flex justify-between">
                                <div>Price</div>
                                <div>${product.price}</div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>Status</div>
                                <div>
                                    {product.countInStock > 0 ? (
                                        <span className="text-success">In Stock</span>
                                    ) : (
                                        <span className="text-error">Unavailable</span>
                                    )}
                                </div>
                            </div>
                            {product.countInStock !== 0 && (
                                <div className="card-actions justify-center">
                                    <AddToCart
                                        item={{ ...product, quantity: 0, color: "", size: "" }}

                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

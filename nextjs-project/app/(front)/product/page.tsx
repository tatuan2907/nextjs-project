import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";

const Prodcut = () => {
    return (
        <div className="">
            <h2 className="text-2xl py-2">Latest Products</h2>
            <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {
                    data.products.map((product) => (
                        <ProductItem key={product.slug} product={product} />
                    ))
                }
            </div>
        </div>)
}

export default Prodcut
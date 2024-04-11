import Productitem from "@/components/products/ProductItem"
import data from "@/lib/data"

export default function Product() {
    return(
        <div className="">
        <h2 className="text-2xl py-2">Latest Products</h2>
        <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {
                data.products.map((product) => (
                    <Productitem key={product.slug}  product={product} />
                ))
            }
        </div>
    </div>
    )}
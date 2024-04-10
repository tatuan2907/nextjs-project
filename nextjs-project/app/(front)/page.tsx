import Productitem from "@/components/products/Productitem";
import data from "@/lib/data";
import productService from "@/lib/services/productService";
import { converDocToObj } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Amazona',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'ABC'
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latesProducts = await productService.getLatest()
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} alt={product.name} className="w-full" />
            </Link>
            <div
              className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${index === 0 ? featuredProducts.length - 1 : index - 1
                  }`}
                className="btn btn-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a
                href={`#slide-${index === featuredProducts.length - 1 ? 0 : index + 1
                  }`}
                className="btn btn-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full">
        <div className="divider"><h2 className="text-2xl py-2">Latest Products</h2></div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latesProducts.map((product) => (
          <Productitem key={product.slug} product={converDocToObj(product)} />
        ))}
      </div>
    </>
  );
}

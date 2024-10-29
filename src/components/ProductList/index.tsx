import { FC } from "react";
import { Product } from "../ProductCard/types";
import ProductCard from "../ProductCard";
import Button from "../Button";

interface ProductListProps {
    products: Product[];
    pageNumber: number;
    itemsPerPage: number;
}

const ProductList: FC<ProductListProps> = ({ products, pageNumber, itemsPerPage }) => {
    // Calculate the start and end index for the current page
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handleScroll = (a: string) => {

    }
    return (
        <>
            <div className="flex items-center mt-5">
                <div className="flex items-center gap-10 flex-1">
                    <h3 className="text-3xl font-semibold">Products of electronics category</h3>
                </div>
                <div className="flex h-fit items-center gap-5">
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={() => handleScroll("left")}
                    >
                        <i className="block fa-solid fa-chevron-left text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={() => handleScroll("right")}
                    >
                        <i className="block fa-solid fa-chevron-right text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                {currentProducts.map((product) => (
                    <ProductCard key={product.product_id} data={product} className="mt-10" />
                ))}
            </div>
            <div className="flex w-full justify-center mt-20">
                <Button className="text-white max-w-fit px-10" text="View All Products" />
            </div>
        </>
    );
};

export default ProductList;

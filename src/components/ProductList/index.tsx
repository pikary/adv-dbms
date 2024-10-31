import { FC, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Button from "../Button";
import { useTypedSelector, useAppDispatch } from "../../store/hooks";
import { getCategoryProducts } from "../../store/entities/Product/api";
import Spinner from "../Spinner";


const ProductList: FC = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, totalItems } = useTypedSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(8); // Set limit for products per page

    useEffect(() => {
        const getProducts = async () => {
            await dispatch(getCategoryProducts({
                categoryId: '001',
                page: currentPage,
                limit: limit,
            }));
        };
        getProducts();
    }, [dispatch, currentPage, limit]);

    const handleNextPage = () => {
        if (currentPage * limit < totalItems) { // Ensure not to exceed total products
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) { // Ensure not to go below page 1
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className="flex items-center mt-5">
                <div className="flex items-center gap-10 flex-1">
                    <h3 className="text-3xl font-semibold">Products of electronics category</h3>
                </div>
                <div className="flex h-fit items-center gap-5">
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1} // Disable button on first page
                    >
                        <i className="block fa-solid fa-chevron-left text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                    <p className="text-xl font-semibold">{currentPage}</p>
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={handleNextPage}
                        disabled={currentPage * limit >= totalItems} // Disable button if at last page
                    >
                        <i className="block fa-solid fa-chevron-right text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8" style={{ height: 860 }}>
                {isLoading ? (
                    <div className="min-w-full h-full flex justify-center items-center">
                        <Spinner height={100} width={100} ></Spinner>
                    </div>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.product_id} data={product} className="mt-10" />
                    ))
                )}
            </div>
            <div className="flex w-full justify-center mt-20">
                <Button className="text-white max-w-fit px-10" text="View All Products" />
            </div>
        </>
    );
};

export default ProductList;

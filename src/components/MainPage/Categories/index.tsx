import { FC, useEffect, useState, useRef } from 'react';
import data from './data.json'; // Import the JSON data
import './styles.css'

interface Subcategory {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    subcategories: Subcategory[];
}

const Categories: FC = () => {
    const dropdownRef = useRef<HTMLUListElement | null>(null); // Create a reference for the dropdown element
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedcategory] = useState<Category | null>(null);


    const handleCategorySelect = (cat: Category) => {
        if (selectedCategory?.id === cat.id) {
            // If the category is already selected, deselect it
            setSelectedcategory(null);
        } else {
            // Otherwise, set the selected category
            setSelectedcategory(cat);
        }
    };

    // On component mount, set categories from the JSON file
    useEffect(() => {
        setCategories(data as Category[]); // Set the categories from the imported JSON data
    }, []);

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            console.log('clicked outsei');

            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setSelectedcategory(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [selectedCategory])

    return (
        <ul className="category-list pr-5 ">
            {categories.map((category) => (
                <li
                    onClick={(e) => {
                        handleCategorySelect(category)
                    }}
                    className={`flex justify-between items-center px-2 py-2 cursor-pointer relative hover:bg-gray-200 transition-colors duration-300 ${selectedCategory?.id === category.id && 'text-primary'} `}
                    key={category.id}
                >
                    <h3 className='font-semibold'>{category.name}</h3>
                    <i
                        className={`block fa-solid fa-chevron-right text-xl text-black hover:text-primary transition-colors duration-150 ${selectedCategory?.id === category.id && 'text-primary'}`}
                    ></i>
                    {selectedCategory?.id === category.id && (
                        <ul ref={dropdownRef} id='selected-categories-subcategories' className={`absolute w-[200px] z-10 top-0 left-full bg-white rounded-sm shadow-2xl `}>
                            {selectedCategory.subcategories.map((subcategory) => (
                                <li className='cursor-pointer px-4 py-2 hover:bg-gray-100 text-black hover:text-primary transition-colors duration-150' key={subcategory.id}>
                                    {subcategory.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Categories;

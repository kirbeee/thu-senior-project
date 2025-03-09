import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";

interface Category {
    id: number;
    name: string;
    // Define other properties of a category if your API response includes them
}

const CategorySidebar = () => {
    // Use type string | null to allow setError to accept string error messages
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            startLoading(); // Indicate loading state
            resetError();    // Clear any previous errors

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/categories/`);
                handleCategoryFetchSuccess(response.data.results); // Handle successful category fetch
            } catch (err: any) { // Use 'any' or specify Error type for err
                handleCategoryFetchError(err); // Handle category fetch error
            } finally {
                stopLoading(); // Ensure loading stops regardless of success or failure
            }
        };

        fetchCategories();
    }, []);

    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    const resetError = () => {
        setError(null);
    };

    const handleCategoryFetchSuccess = (categoryData: any) => { // Consider typing 'categoryData' more specifically if possible
        setCategories(categoryData);
    };

    const handleCategoryFetchError = (err: any) => { // Consider a more specific type for 'err'
        console.error("Error fetching categories:", err);
        setError("Failed to load categories."); // Now setError accepts a string
    };


    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <CategoryTitle /> {/* Extracted title into a separate component */}
            <CategoryList categories={categories} /> {/* Extracted category list rendering */}
        </div>
    );
};

// Extracted Category Title Component for better readability and reusability
const CategoryTitle = () => (
    <h3 className="font-bold mb-2 text-lg">Categories</h3>
);

// Extracted Category List Component for better organization and potentially reusability
const CategoryList = ({ categories }: { categories: Category[] }) => (
    <ul>
        {categories.map((category) => (
            <li key={category.id} className="mb-1">
                <CategoryLink category={category} /> {/* Extracted link rendering */}
            </li>
        ))}
    </ul>
);

// Extracted Category Link Component to encapsulate link logic
const CategoryLink = ({ category }: { category: Category }) => (
    <Link
        href={`/bbs/?category_id=${category.id}`}
        className="block px-3 py-2 hover:bg-gray-200 rounded-md"
    >
        {category.name}
    </Link>
);


export default CategorySidebar;
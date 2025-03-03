// components/CategorySidebar.js
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import axios from "axios";

const CategorySidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/categories/`);
                setCategories(response.data.results); // Assuming your API returns results in a 'results' array, adjust if needed
            } catch (err) {
                console.error("Error fetching categories:", err);
                setError("Failed to load categories.");
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold mb-2 text-lg">Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id} className="mb-1">
                        <Link href={`/bbs/Board?category_id=${category.id}`}  // You can adjust the link as per your routing needs
                              className="block px-3 py-2 hover:bg-gray-200 rounded-md"
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategorySidebar;
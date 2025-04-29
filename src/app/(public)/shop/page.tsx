"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Filter, ArrowLeft, ArrowRight } from 'lucide-react'
import PageBanner from "@/components/public/page-banner"

// Sample product data
const allProducts = [
    {
        id: 1,
        name: "Baked Potato Pizza",
        price: 17.45,
        image: "/g1.jpg?height=600&width=600",
        category: "Pizza",
        rating: 4.5,
        popularity: 95,
        date: "2023-04-15",
    },
    {
        id: 2,
        name: "Crab With Curry Sources",
        price: 13.55,
        image: "/g2.jpg?height=600&width=600",
        category: "Seafood",
        rating: 4.8,
        popularity: 88,
        date: "2023-05-20",
    },
    {
        id: 3,
        name: "Fresh Crab With Lemon",
        price: 12.55,
        image: "/g3.jpg?height=600&width=600",
        category: "Seafood",
        rating: 4.2,
        popularity: 75,
        date: "2023-06-10",
    },
    {
        id: 4,
        name: "Grilled Salmon Steak",
        price: 18.90,
        image: "/g4.jpg?height=600&width=600",
        category: "Seafood",
        rating: 4.7,
        popularity: 92,
        date: "2023-03-25",
    },
    {
        id: 5,
        name: "Chicken Alfredo Pasta",
        price: 15.75,
        image: "/g5.jpg?height=600&width=600",
        category: "Pasta",
        rating: 4.4,
        popularity: 85,
        date: "2023-07-05",
    },
    {
        id: 6,
        name: "Vegetable Lasagna",
        price: 14.25,
        image: "/g6.jpg?height=600&width=600",
        category: "Pasta",
        rating: 4.3,
        popularity: 78,
        date: "2023-06-18",
    },
    {
        id: 7,
        name: "Beef Burger Deluxe",
        price: 16.50,
        image: "/st-1.jpg?height=600&width=600",
        category: "Burgers",
        rating: 4.6,
        popularity: 90,
        date: "2023-05-12",
    },
    {
        id: 8,
        name: "Mushroom Risotto",
        price: 14.95,
        image: "/st-2.jpg?height=600&width=600",
        category: "Rice",
        rating: 4.1,
        popularity: 72,
        date: "2023-04-30",
    },
    {
        id: 9,
        name: "Chocolate Lava Cake",
        price: 8.95,
        image: "/rv.jpg?height=600&width=600",
        category: "Desserts",
        rating: 4.9,
        popularity: 96,
        date: "2023-07-01",
    },
    {
        id: 10,
        name: "Caesar Salad",
        price: 11.25,
        image: "/g1.jpg?height=600&width=600",
        category: "Salads",
        rating: 4.0,
        popularity: 70,
        date: "2023-06-25",
    },
    {
        id: 11,
        name: "Margherita Pizza",
        price: 15.95,
        image: "/g1.jpg?height=600&width=600",
        category: "Pizza",
        rating: 4.7,
        popularity: 93,
        date: "2023-05-05",
    },
    {
        id: 12,
        name: "Tiramisu",
        price: 9.50,
        image: "/g3.jpg?height=600&width=600",
        category: "Desserts",
        rating: 4.8,
        popularity: 91,
        date: "2023-06-15",
    },
]

// Get unique categories
const categories = ["All", ...new Set(allProducts.map(product => product.category))]

export default function ShopPage() {
    const [products, setProducts] = useState(allProducts)
    const [sortOption, setSortOption] = useState("default")
    const [showSortDropdown, setShowSortDropdown] = useState(false)
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 9

    // Filter and sort products
    useEffect(() => {
        let filteredProducts = [...allProducts]

        // Apply category filter
        if (selectedCategory !== "All") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory)
        }

        // Apply sorting
        switch (sortOption) {
            case "popularity":
                filteredProducts.sort((a, b) => b.popularity - a.popularity)
                break
            case "rating":
                filteredProducts.sort((a, b) => b.rating - a.rating)
                break
            case "latest":
                filteredProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                break
            case "price-low-high":
                filteredProducts.sort((a, b) => a.price - b.price)
                break
            case "price-high-low":
                filteredProducts.sort((a, b) => b.price - a.price)
                break
            default:
                // Default sorting by ID
                filteredProducts.sort((a, b) => a.id - b.id)
        }

        setProducts(filteredProducts)
        setCurrentPage(1) // Reset to first page when filters change
    }, [sortOption, selectedCategory])

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(products.length / productsPerPage)

    // Handle sort option change
    const handleSortChange = (option: string) => {
        setSortOption(option)
        setShowSortDropdown(false)
    }

    // Handle category change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        setShowCategoryDropdown(false)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header */}
            <PageBanner
                title="SHOP"
                subtitle="Check out"
                backgroundImage="/rv.jpg?height=1000&width=2000"
                height="large"
            />
            <div className="container mx-auto px-4 py-8">
                {/* Filters and Sorting */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <p className="text-gray-700 mb-4 sm:mb-0">
                        Showing all {products.length} results
                    </p>

                    <div className="flex space-x-4">
                        {/* Category Filter */}
                        <div className="relative">
                            <button
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded bg-white"
                                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                            >
                                <Filter size={16} />
                                <span>Category: {selectedCategory}</span>
                                <ChevronDown size={16} />
                            </button>

                            {showCategoryDropdown && (
                                <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedCategory === category ? "bg-[#d8b78e] text-white" : ""
                                                }`}
                                            onClick={() => handleCategoryChange(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sorting Dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded bg-white"
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                            >
                                <span>
                                    {sortOption === "default" && "Default sorting"}
                                    {sortOption === "popularity" && "Sort by popularity"}
                                    {sortOption === "rating" && "Sort by average rating"}
                                    {sortOption === "latest" && "Sort by latest"}
                                    {sortOption === "price-low-high" && "Sort by price: low to high"}
                                    {sortOption === "price-high-low" && "Sort by price: high to low"}
                                </span>
                                <ChevronDown size={16} />
                            </button>

                            {showSortDropdown && (
                                <div className="absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "default" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("default")}
                                    >
                                        Default sorting
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "popularity" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("popularity")}
                                    >
                                        Sort by popularity
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "rating" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("rating")}
                                    >
                                        Sort by average rating
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "latest" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("latest")}
                                    >
                                        Sort by latest
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "price-low-high" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("price-low-high")}
                                    >
                                        Sort by price: low to high
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "price-high-low" ? "bg-[#d8b78e] text-white" : ""
                                            }`}
                                        onClick={() => handleSortChange("price-high-low")}
                                    >
                                        Sort by price: high to low
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative h-[300px] mb-4 overflow-hidden">
                                <Image
                                    src={product.image || "/g1.jpg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-[#d8b78e]">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 border ${currentPage === 1
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                <ArrowLeft/>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-4 py-2 border ${currentPage === page
                                            ? "bg-[#d8b78e] text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 border ${currentPage === totalPages
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                <ArrowRight/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


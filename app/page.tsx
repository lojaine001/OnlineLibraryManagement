"use client";  // Add this directive to mark the component as client-side

import Hero from './components/Hero';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import CustomFilter from './components/CustomFilter';
import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('harry potter'); // Default query to fetch books initially
  const [books, setBooks] = useState<any[]>([]);  // To store the fetched books
  const [loading, setLoading] = useState<boolean>(false);  // Loading state
  const [error, setError] = useState<string>('');  // Error state

  useEffect(() => {
    const fetchBooks = async () => {
      if (!searchQuery) return;  // Skip fetching if searchQuery is empty

      try {
        setLoading(true);  // Show loading spinner
        setError('');      // Clear previous errors

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();
        setBooks(data.items || []);  // Set books data or empty array
      } catch (error: any) {
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);  // Hide loading spinner
      }
    };

    fetchBooks();
  }, [searchQuery]);  // Refetch books when searchQuery changes

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim());  // Update the search query
  };

  return (
<main className="overflow-hidden">
  <Hero />
  <div className="mt-12 padding-x padding-y max-width" id="discover">
    <div className="home__text-container">
      <h1 className="text-4xl font-extrabold">Books</h1>
      <p>Discover your next read with the library at your fingertips!</p>
    </div>

    <section id="middle-section" className="mt-32">
        <div className="home__filters">
      <SearchBar onSearch={handleSearch} />

      <div className="home__filter-container">
        <CustomFilter title="author" />
        <CustomFilter title="genre" />
        <CustomFilter title="year" />
      </div>
    </div>

    {/* Add margin-top here */}
    <div className="home__book-list mt-8">
      {loading ? (
        <p>Loading...</p> // Show loading state
      ) : error ? (
        <p>Error: {error}</p> // Show error message
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book: any) => (
            <div
              key={book.id}
              className="p-4 border border-gray-200 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.png'}
                alt={book.volumeInfo.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="font-bold text-lg">{book.volumeInfo.title}</h2>
              <p className="text-sm text-gray-600">
                Authors: {book.volumeInfo.authors?.join(', ') || 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found</p> // Show message if no books are available
      )}
    </div>
      </section>
  </div>
</main>

  );
}

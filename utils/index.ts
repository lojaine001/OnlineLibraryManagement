import { FilterProps } from "@/types";
import { BookProps } from "@/types"

export const calculateBookRent = (book: BookProps) => {
  const basePricePerDay = 2; // Base rental price per day in dollars
  const ageFactor = 0.1; // Additional rate based on book's publication year

  // Calculate additional rate based on book's publication year
  const ageRate = (new Date().getFullYear() - book.year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + ageRate;

  return rentalRatePerDay.toFixed(2);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Construct the updated URL pathname with new search params
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Get the current search params
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchBooks(filters: FilterProps) {
  const { title, author, year,genre , limit} = filters;

  // Set the required headers for the API request (you don't need an API key here)
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${
      title ? `intitle:${title}` : ""
    }${author ? `+inauthor:${author}` : ""}${
      year ? `+publishedDate:${year}` : ""
    }${genre ? `+subject:${genre}` : ""}&maxResults=${limit}`,
    {
      method: "GET",
    }
  );
  

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const result = await response.json();
  
  // Return the list of books
  return result.items?.map((item: any) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors || ['Unknown Author'],
    description: item.volumeInfo.description || 'No description available',
    thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'No image available',
    year: item.volumeInfo.publishedDate,
  }));
}

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset"; 
    }

export interface CustomFilterProps {
    title: string;
  }

  export interface BookProps {
    title: string;               // Title of the book
    author: string;              // Author's name
    genre: string;               // Genre of the book
    year: number;    // Year of publication
    publisher: string;           // Publisher's name
    page_count: number;          // Total number of pages
    isbn: string;                // ISBN number
    language: string;            // Language the book is written in
    summary: string;             // Brief summary or description
    cover_type: string;          // e.g., Hardcover, Paperback, etc.
    available_copies: number;    // Number of available copies
  }
  
  export interface FilterProps {
    title?: string;
    year?: number;
    author?: string;
    limit?: number;
    genre?: string;
  }
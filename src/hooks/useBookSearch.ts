import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Book } from "../common/book.type";
import { SearchResult } from "../common/search.type";

export const useBookSearch= (query: string): UseQueryResult<SearchResult<Book>> => {
    const fetchBooks = (): Promise<SearchResult<Book>> =>
        axios.get('https://openlibrary.org/search.json', {
            params: { q: query },
          }).then((response) => {
            return response.data
        })

    return useQuery({
      queryKey: ['books', query],
      queryFn: fetchBooks,
      enabled: !!query, // don’t run if query is empty
    });
  };
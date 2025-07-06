import React, { useCallback, useState } from "react";
import { useBookSearch } from './hooks/useBookSearch';
import { Button, List, ListItem, TextField } from "@mui/material";
import { BookListItem } from "./books/listItem";
import { Book } from "./common/book.type";
const App = () => {

  const [query, setQuery] = useState('');
  const { data, isLoading, isError }  = useBookSearch(query);
  const [input, setInput] = useState('');
  
    const handleChange= useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('e?', e.currentTarget.value)
        setInput(e.currentTarget.value)
    }, []);

    return (
        <>
            <TextField
                variant='standard' 
                autoComplete="off"
                name="query"
                type="text"
                onChange={handleChange}
            />
            <Button variant='contained' onClick={() => setQuery(input)}> Search </Button>
            
            {isLoading && <p>Loading...</p>}
            
            {isError && <p>Something went wrong!</p>}
      {data && (
        <>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {data.docs.slice(0, 50).map((book: Book) => (
            <BookListItem {...book} />
          ))}
        </List>
        <p>Showing results <strong>50</strong> of <strong>{data.numFound}</strong></p>
        </>
      )}
        </>
    );
}

export default App;
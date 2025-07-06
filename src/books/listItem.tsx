import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { Book } from "../common/book.type"
import React from "react"

interface BookListItemProps extends Book {

};

export const BookListItem: React.FC<BookListItemProps> = ({title, author_name, cover_i}) => {
    const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : null;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                variant="square"
                src={coverUrl || undefined}
                alt={title}
                sx={{ width: 102, height: 102 }}
              >
                {title?.[0]}
              </Avatar>
            </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {author_name?.join(', ') || 'Unknown'}
              </Typography>
            </>
          }
        />
      </ListItem>
    )
} 

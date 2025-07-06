import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BookListItem } from "./listItem";

describe('ListItem', () => {
  it('should render without crashing', () => {
    render(
      <BookListItem
        key='123'
        title="Test Book"
        author_name={['Author One', 'Author Two']}
        cover_i={'123456'}
      />);

      expect(screen.getByText('Test Book')).toBeInTheDocument();
      expect(screen.getByText('Author One, Author Two')).toBeInTheDocument();
  });
});
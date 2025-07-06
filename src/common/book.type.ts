export type Book = {
      key: string;
      title: string;
      // used for additional fetch to get cover art
      cover_i: string;
      author_name?: string[];
 };

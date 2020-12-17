DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED AS IDENTITY PRIMARY KEY,
    books_title TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    rating TEXT NOT NULL,
    price TEXT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

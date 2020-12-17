const pool = require('../utils/pool');

module.exports = class Book {
    id;
    title;
    coverImage;
    rating;
    price;
    inStock;
  
    constructor(row) {
      this.id = row.id;
      this.title = row.books_title;
      this.coverImage = row.cover_image;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;
    }
    
    static async insert({ title, coverImage, rating, price, inStock }) {
      const { rows } = await pool.query(
        'INSERT into books (books_title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, coverImage, rating, price, inStock]
      );
    
      return new Book(rows[0]);
    }
};

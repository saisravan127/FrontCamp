import { books } from "../../DB/books";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
// import { useState } from "react";
import Book from "./Book/Book";
import React from "react";
const Books = (props) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    navigate("/book/" + id);
  };

  return (
    <>
      <Header></Header>
      <div className="conatainer">
        <div className="row">
          <div className="card-columns">
            {books.slice(0, 20).map((book) => (
              <div className="col-md-3 col-sm-4 col-xs-6" key={book.id}>
                <Book
                  book={book}
                  clicked={(event) => onClickHandler(book.id)}
                ></Book>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;

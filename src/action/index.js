import React from "react";
export const AddBook = (BookName) => {
  return {
    type: "ADD_BOOK",
    payload: {
      Bookname: BookName,
    },
  };
};

//
export const BookDelete = (id) => {
  return {
    type: "BOOK_Delete",
    payload: {
      id: id,
    },
  };
};

//

export const BookEdit = (id, Book, Outher) => {
  return {
    type: "EDIT",
    payload: {
      id: id,
      Book: Book,
      Outher: Outher,
    },
  };
};

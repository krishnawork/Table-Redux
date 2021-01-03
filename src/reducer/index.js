import { combineReducers } from "redux";

let BookData = [
  {
    id: 1,
    Book: "Mahabhart",
    Outher: "Bhagvan Shree Krishna",
  },
  {
    id: 2,
    Book: "Shree Vachanamrut",
    Outher: "Bhagvan Shree Swaminarayan",
  },
];

// let BookData = ["Mahabhart", "Shree Vachanamrut"];
const BookList = (BookName = BookData, action) => {
  if (action.type === "ADD_BOOK") {
    return [...BookName, action.payload.Bookname];
  } else if (action.type === "BOOK_Delete") {
    return BookName.filter((d) => {
      if (d.id !== action.payload.id) {
        return d;
      }
    });
  } else if (action.type === "EDIT") {
    return BookName.map((d) => {
      if (d.id === action.payload.id) {
        return {
          ...d,
          Book: action.payload.Book,
          Outher: action.payload.Outher,
        };
      } else {
        return d;
      }
    });
  }
  return BookName;
};

export default combineReducers({
  Active_Book: BookList,
});

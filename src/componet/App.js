import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { AddBook, BookDelete, BookEdit } from "./../action/index";

function App() {
  let index = 1;
  const Allbook = useSelector((state) => state.Active_Book);
  //
  const dispatch = useDispatch();
  let Delete = (id) => {
    alert(id);
    dispatch(BookDelete(id));
  };
  //
  const Edit = (id, Book, Outher) => {
    let BookName = prompt("Book Name", Book);
    let OtherName = prompt("Other Name", Outher);
    if (BookName && OtherName) {
      dispatch(BookEdit(id, BookName, OtherName));
      console.log("Allbook", Allbook);
    }
  };
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Book_No</th>
            <th>Book_Name</th>
            <th>Other</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr key={d}>
                <td>{d}</td>
                <td>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      Delete(d);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr> */}

          {Allbook.map((d, key) => {
            return (
              <tr key={d.id}>
                <td>{index++}</td>
                <td>{d.Book}</td>
                <td>{d.Outher}</td>
                <td>
                  <button
                    onClick={() => {
                      Edit(d.id, d.Book, d.Outher);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      Delete(d.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

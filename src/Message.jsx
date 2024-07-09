import { useState } from "react"

function Library()  {
            const [books,setBooks]=useState([
             {id: 1,  title:"مقدمة ابن خلدون ",   author: "ابن خلدون ", isbn: "1289499030" },
            { id: 2,  title :"الحاوي في الطب ",      author: "ابو بكر الرازي ",    isbn : "893847239479"  }  ,
            {  id: 3,  title :"الحاوي في الطب ",  author: "ابو بكر الرازي ",  isbn : "893847239477"  } ,  
             {  id: 4,  title :"الحاوي في الطب ",  author: "ابو بكر الرازي ",  isbn : "893847239478"}
    ]);

    return (
        <div className="cont">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.isbn}</p>
            </div>
          ))}
        </div>
      );
}
export default Library ;
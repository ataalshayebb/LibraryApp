import React, { useRef, useState } from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {
  const [showAlert, setShowAlert] = useState(false);
  const titleRef = useRef();
  const authorRef = useRef();
  const isbnRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const isbn = isbnRef.current.value;

    if (!title || !author || !isbn) {
      setShowAlert(true);
      return;
    }

    const bookData = {
      title: title,
      author: author,
      isbn: isbn
    };

    try {
      const response = await axios.post(`https://library2-4e19d-default-rtdb.europe-west1.firebasedatabase.app//books/boooks/boooks/${isbn}.json`, bookData);
      
      // Clear input fields
      titleRef.current.value = '';
      authorRef.current.value = '';
      isbnRef.current.value = '';
      setShowAlert(false);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen flex-col">
        <form className="w-80 p-6 border border-gray-300 rounded bg-gray-100" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4 text-2xl">Add a book :</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Book Name:</label>
            <input
              type="text"
              id="title"
              name="title"
              ref={titleRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block mb-2">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              ref={authorRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isbn" className="block mb-2">ISBN:</label>
            <input
              type="number"
              id="isbn"
              name="isbn"
              ref={isbnRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <Link to="/catalog">
            <button type="submit" className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Add
            </button>
          </Link>
        </form>
        {showAlert && (
          <div className="text-red-500 mt-4">
            Please fill out all fields.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Update;

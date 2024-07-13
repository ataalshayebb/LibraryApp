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

    console.log('Posting bookData:', bookData);

    try {
      const response = await axios.post(`https://reacttask-2bf93-default-rtdb.europe-west1.firebasedatabase.app/books/boooks/boooks/${isbn}.json`, bookData);
      console.log('Data successfully posted:', response.data);
      
      // Clear input fields
      titleRef.current.value = '';
      authorRef.current.value = '';
      isbnRef.current.value = '';
      setShowAlert(false);
    } catch (error) {
      console.error('Error posting data:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>Add a book :</h2>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              Book Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              ref={titleRef}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="author" style={styles.label}>
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              ref={authorRef}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="isbn" style={styles.label}>
              ISBN:
            </label>
            <input
              type="number"
              id="isbn"
              name="isbn"
              ref={isbnRef}
              style={styles.input}
            />
          </div>
          <Link to = "catalog">
          <button type="submit" style={styles.button}>
            Add
          </button>
          </Link>
        </form>
        {showAlert && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            Please fill out all fields.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column',
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Update;

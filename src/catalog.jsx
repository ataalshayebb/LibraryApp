import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import { Link } from 'react-router-dom';

function Cataloh() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reacttask-2bf93-default-rtdb.europe-west1.firebasedatabase.app/books/boooks/boooks.json"
        );
        if (response.data) {
          const formattedData = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            isbn={item.isbn}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <Link to='/update'>
        <button style={styles.uploadButton}>
          Upload Book
        </button>
      </Link>
      <Footer />
    </>
  );
}

function Card({ id, title, author, isbn, onDelete }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title || "No Title"}</h3>
      <p style={styles.cardText}>Author: {author || "No Author"}</p>
      <p style={styles.cardText}>ISBN: {isbn || "No ISBN"}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  },
  card: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  cardTitle: {
    fontSize: '18px',
    margin: '0 0 10px',
    color: '#333',
  },
  cardText: {
    fontSize: '14px',
    margin: '5px 0',
    color: '#666',
  },
  uploadButton: {
    margin: '20px auto',
    display: 'block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Cataloh;

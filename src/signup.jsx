import React, { useRef, useState } from 'react';
import Header from './header';
import Footer from './footer';

function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameRef.current.value && emailRef.current.value && passwordRef.current.value) {
            localStorage.setItem('name', nameRef.current.value);
            localStorage.setItem('email', emailRef.current.value);
            localStorage.setItem('password', passwordRef.current.value);
            
            setShowWelcome(true);
          
            
            setTimeout(() => {
                window.location.href = '/';
            }, 2000); 
        } else {

            setShowAlert(true);
        }
    };

    return (
        <>
            <Header />
            <div style={styles.container}>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <h2 style={styles.heading}>Signup</h2>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            ref={nameRef}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </form>
                {showAlert && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        Please fill out all fields.
                    </div>
                )}

                {showWelcome && (
                    <div style={{ marginTop: '10px' ,fontSize:'100px'}}>
                        <p>Welcome, {localStorage.getItem('name')}</p>
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

export default Signup;

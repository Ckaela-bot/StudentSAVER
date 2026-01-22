Here are the contents for the `styles.css` file:

/* styles.css */
/* This file contains the styles for the UpWe application, defining the visual appearance of the various components and layouts. */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8ff;
    color: #333;
    margin: 0;
    padding: 0;
}

.header {
    background-color: #4a90e2;
    color: white;
    padding: 20px;
    text-align: center;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-section h1 {
    margin: 0;
}

.tagline {
    font-size: 1.2em;
}

.nav {
    display: flex;
    flex-direction: column;
}

.nav button {
    background: none;
    border: none;
    color: white;
    font-size: 1em;
    cursor: pointer;
    padding: 10px;
}

.nav button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.carousel-page {
    display: none;
}

.carousel-page.active {
    display: block;
}

.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 20px;
    padding: 20px;
    width: 100%;
    max-width: 600px;
}

.btn-primary {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #357ab8;
}

.hidden {
    display: none;
}

/* Add more styles as needed for other components */
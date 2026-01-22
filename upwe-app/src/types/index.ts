Here are the contents for the `styles.css` file:

/* styles.css */
/* This file contains the styles for the UpWe application, defining the visual appearance of the various components and layouts. */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8ff;
    color: #333;
}

.header {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-content {
    display: flex;
    align-items: center;
}

.logo-section h1 {
    margin: 0;
}

.tagline {
    font-size: 0.9em;
    margin: 0;
}

.nav {
    display: flex;
    gap: 10px;
}

.nav button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    width: 100%;
    max-width: 600px;
}

.btn-primary {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #45a049;
}

.hidden {
    display: none;
}

.footer {
    text-align: center;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}
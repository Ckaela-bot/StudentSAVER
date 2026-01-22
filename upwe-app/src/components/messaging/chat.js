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
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-section h1 {
    margin: 0;
    font-size: 24px;
}

.tagline {
    font-size: 14px;
    color: #666;
}

.nav {
    display: flex;
    gap: 10px;
}

.nav button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
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

.hero-card {
    text-align: center;
    margin-bottom: 20px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.feature {
    background-color: #eaeaea;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.hidden {
    display: none;
}

.footer {
    text-align: center;
    padding: 10px;
    background-color: #f1f1f1;
    position: relative;
    bottom: 0;
    width: 100%;
}
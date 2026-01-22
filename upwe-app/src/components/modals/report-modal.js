/* Styles for UpWe Application */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8ff;
    color: #333;
}

/* Header Styles */
.header {
    background-color: #fff;
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
}

.tagline {
    font-size: 14px;
    color: #666;
}

/* Navigation Styles */
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

/* Carousel Styles */
.auth-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel-page {
    display: none;
}

.carousel-page.active {
    display: block;
}

/* Card Styles */
.card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
}

/* Button Styles */
.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Footer Styles */
.footer {
    text-align: center;
    padding: 10px;
    background-color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
}
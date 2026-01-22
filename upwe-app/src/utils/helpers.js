/* styles.css - Styles for UpWe Application */

/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8ff;
    color: #333;
    margin: 0;
    padding: 0;
}

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
}

.carousel-page {
    display: none;
}

.carousel-page.active {
    display: block;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Additional styles for other components can be added here */
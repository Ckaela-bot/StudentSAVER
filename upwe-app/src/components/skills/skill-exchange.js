Here are the contents for the `styles.css` file:

/* styles.css */
/* This file contains the styles for the UpWe application, defining the visual appearance of the various components and layouts. */

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

.card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    width: 100%;
    max-width: 600px;
}

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

.photo-preview {
    width: 100px;
    height: 100px;
    border: 2px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
}

.photo-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.photo-hint {
    font-size: 12px;
    color: #888;
}

.skills-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.skills-badges span {
    background-color: #e0e0e0;
    border-radius: 12px;
    padding: 5px 10px;
}

.messages-container {
    display: flex;
    gap: 20px;
}

.messages-sidebar {
    width: 30%;
}

.chat-window {
    width: 70%;
}

.chat-input-area {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.chat-messages {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
}

.call-controls {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
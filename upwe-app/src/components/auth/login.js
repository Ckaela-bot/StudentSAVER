Here are the contents for the `styles.css` file based on the provided project specification:

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
    font-size: 24px;
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
    margin: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #007bff;
    color: #ffffff;
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
    background-color: #ffffff;
    position: relative;
    bottom: 0;
    width: 100%;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
}

.feature {
    text-align: center;
}

.icon {
    font-size: 30px;
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
}

.messages-sidebar {
    width: 30%;
    border-right: 1px solid #ccc;
}

.chat-window {
    width: 70%;
    padding: 10px;
}

.chat-input-area {
    display: flex;
    gap: 10px;
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
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
}

.call-controls {
    display: flex;
    justify-content: space-between;
}

.call-control-btn {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.call-control-btn:hover {
    background-color: #0056b3;
}
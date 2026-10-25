# Paradise Nursery – e-plantShopping

## About the Project

**Paradise Nursery** is an online plant shopping application built with React. It provides a simple and user-friendly platform where customers can explore a variety of houseplants, learn about their characteristics, and add plants to a shopping cart.

The application organizes plants into different categories to make browsing easier. Customers can manage their cart by increasing or decreasing quantities, removing products, and viewing updated subtotals and the total cart amount.

**Repository Name:** `e-plantShopping`

## Features

### 1. Landing Page
- Displays the Paradise Nursery name and welcome message.
- Presents the nursery's purpose and introduction.
- Includes a **Get Started** button to navigate to the product listing page.
- Uses a background image to enhance the landing page.

### 2. Product Listing
- Displays houseplants in individual product cards.
- Shows each plant's image, name, description, and price.
- Organizes plants into the following categories:
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Provides an **Add to Cart** button for each plant.
- Disables the Add to Cart button and changes its label to **Added to Cart** after the plant is added.
- Displays a navigation bar with links to Home, Plants, and Cart.

### 3. Shopping Cart
- Displays the plants added to the cart.
- Shows each plant's thumbnail, name, unit price, and quantity.
- Calculates the subtotal for each plant type.
- Calculates the total cost of all items in the cart.
- Provides buttons to increase and decrease item quantities.
- Includes a **Delete** button to remove a plant from the cart.
- Provides a **Continue Shopping** button to return to the product listing page.
- Includes a **Checkout** button with a placeholder message for future functionality.

### 4. Dynamic Cart Management
- Displays the total quantity of plants in the navigation bar.
- Updates item quantities, subtotals, and the overall cart total dynamically.
- Uses Redux Toolkit to manage the global shopping cart state.

## Technologies Used

- **React** – Building the user interface using reusable components.
- **JavaScript** – Implementing application logic and event handlers.
- **Redux Toolkit** – Managing the shopping cart state and reducers.
- **React Redux** – Connecting React components to the Redux store.
- **HTML and CSS** – Structuring and styling the application.
- **Git and GitHub** – Version control and source code hosting.

## Project Structure

The main project files include:

```text
e-plantShopping/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── ProductList.css
│   ├── CartSlice.jsx
│   ├── CartItem.jsx
│   ├── CartItem.css
│   ├── store.js
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

*Note: The exact directory structure may vary depending on the files included in the repository.*

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your computer.
- Git installed on your computer.

### 1. Clone the Repository

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping.git
```

### 2. Navigate to the Project Directory

```bash
cd e-plantShopping
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

For local development, use the following command if the project defines a `dev` script:

```bash
npm run dev
```

In the Skills Network environment, follow the course instructions and use the configured preview command:

```bash
npm run preview
```

The preview application in the course environment is available through port `4173`.

## Redux State Management

The application uses Redux Toolkit to maintain a centralized shopping cart state.

The `CartSlice.jsx` file defines the following actions:

- **`addItem`** – Adds a plant to the cart or increases its quantity if it already exists.
- **`removeItem`** – Removes a plant from the cart.
- **`updateQuantity`** – Updates the quantity of a plant.

The `store.js` file configures the Redux store, and `main.jsx` uses the React Redux `Provider` to make the store accessible to the application's components.

## How to Use the Application

1. Open the Paradise Nursery landing page.
2. Click **Get Started** to browse the available plants.
3. Explore plants in the different categories.
4. Click **Add to Cart** to add a plant to the shopping cart.
5. Click the cart icon to view the selected plants.
6. Use the `+` and `-` buttons to adjust quantities.
7. Click **Delete** to remove a plant.
8. Review the item subtotals and total cart amount.
9. Click **Continue Shopping** to browse more plants.
10. Click **Checkout** to view the current placeholder message.

## Project Links

- **GitHub Repository:** https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping
- **Live Application:** YOUR_DEPLOYED_APPLICATION_URL

*Replace the placeholder links above with your actual public GitHub repository URL and deployed application URL before submission.*

## Future Enhancements

- Implement a complete checkout process.
- Integrate payment processing.
- Add product search and filtering.
- Provide product details and plant care recommendations.
- Persist cart data across browser sessions.

## Conclusion

Paradise Nursery demonstrates the use of React components, Redux Toolkit, and global state management to build an interactive online plant shopping application. It provides product browsing, cart management, quantity updates, and dynamic price calculations in a user-friendly interface.

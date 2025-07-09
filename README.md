This is a responsive News Aggregator built with Next.js, TypeScript, Tailwind CSS, and Axios. It fetches and displays general market news using the Finnhub API.

🚀 Technologies Used
Next.js – React framework for SSR & SSG

TypeScript – Strongly-typed JavaScript

Tailwind CSS – Utility-first CSS framework

Axios – Promise-based HTTP client for the browser and Node.js

🔧 Features
Fetches General category market news from Finnhub API

Displays news in a clean, scrollable list with:

Thumbnail (image)

Source (source)

Date (datetime)

Title (headline)

Fully responsive UI, optimized for mobile, tablet, and desktop

Clicking on a news item opens the full article in a new tab

Error handling: Displays a user-friendly message if the API request fails

📡 API Details
Endpoint: https://finnhub.io/api/v1/news?category=general&token=crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg

Category: general

Fields mapped:

Thumbnail: image

Source: source

Date: datetime (converted to readable format)

Title: headline

🖼️ UI/UX
The app matches the provided design mockups pixel-perfectly, maintaining:

Visual consistency

Clear spacing and hierarchy

Responsive layout for all screen sizes and orientations

⚠️ Error Handling
If the API request fails:

A clear error message is shown to the user

The app will not crash or break the UI
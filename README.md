# Updated-Candidate-Search-App

## Overview

The Candidate Search Application is a web-based tool for searching and saving GitHub users. It provides a user-friendly interface to explore GitHub users and manage a list of saved candidates. The application integrates with the GitHub API to fetch user data and allows users to view their saved candidates.

## Description

This application enables users to:

- Search for GitHub users.
- View details of individual users.
- Save users to a list for later reference.
- Access saved candidates through a dedicated page.
The application is built using React and Vite, with React Router for navigation and GitHub's API for data retrieval.

## Changes Made

- Implemented routing using React Router.
- Configured API calls to GitHub for fetching user data.
- Added functionality to save and display user data.
- Refactored code to handle API errors and edge cases.

## Mock-Up Comparison

The application UI is designed to align with the provided mock-ups. The navigation, search functionality, and saved candidates page match the expected layout and functionality. Any discrepancies between the mock-ups and the actual application have been addressed in the implementation phase.

## Installation

1. Clone the repository:

bash
Copy code
git clone https://github.com/PeruvPowWow/Updated-Candidate-Search-App.git

2. Navigate to the project directory:

bash
Copy code
cd Updated-Candidate-Search-App

3. Install dependencies:

bash
Copy code
npm install

4. Set up environment variables:

Create a .env file in the root of the Develop directory.
Add your GitHub Personal Access Token:
env
Copy code
VITE_GITHUB_TOKEN=your_github_token_here

## Starting the Application

Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to:

arduino
Copy code
http://localhost:5173

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: Fast build tool and development server.
- React Router: Declarative routing for React applications.
- GitHub API: RESTful API for accessing GitHub user data.

## Test

The application has been tested locally to ensure the following functionalities work as expected:

- Navigation between pages.
- Fetching and displaying GitHub user data.
- Saving and retrieving candidates from local storage.

## Future Improvements

- Add User Authentication: Implement user login to manage saved candidates.
- Enhanced Error Handling: Improve error messages and user feedback.
- UI/UX Enhancements: Refine design for better user experience.

## Conclusion

The Candidate Search Application successfully provides a functional interface for searching and saving GitHub users. With a clean and responsive design, it offers users a convenient way to manage their candidate searches. Future updates will focus on expanding features and improving user experience.


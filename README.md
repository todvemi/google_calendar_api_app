# Node.js Google Calendar API App

This minimalist Node.js application is designed to fetch Google Calendar events from the Google Calendar API and serve them as JSON. The events are organized into two lists: upcoming events and past events. This information can be utilized on the frontend to display a list of events for users. This particular version is used to serve events for the frontend to display upcoming and past gigs on a musician's personal website.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/google-calendar-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd google-calendar-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Create a project on the [Google Developers Console](https://console.developers.google.com/).
2. Enable the Google Calendar API for your project.
3. In your project, store the API key and Calendar ID in environment variables.

### Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open your browser and go to [http://localhost:3001/api/events](http://localhost:3001/api/events) to see the list of upcoming and past events in JSON format.

### Frontend Integration

Integrate the JSON data into your frontend to display upcoming and past events to users.

API endpoint:
- All events: `http://localhost:3001/api/events`

### Notes

- Ensure that your Google Calendar events have the appropriate visibility settings for the service account to access them.
- This is a basic example and may need additional security measures for a production environment.
- Customize the application as needed for your specific use case.
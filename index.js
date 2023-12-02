const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const { CAL_ID, API_KEY } = process.env

const formatDateTime = (dateTimeString) => {
  if (dateTimeString) {
    const eventDate = new Date(dateTimeString)
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    const date = eventDate.toLocaleDateString('de-DE', options)
    return date
  }
}

app.use(cors())

app.get('/', (request, response) => {
    response.send('<h2>how did you end up in here?</h2>')
  })

app.get('/api/events', (req, res) => {
  axios.get(`https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?&orderBy=startTime&singleEvents=true&alt=json&key=${API_KEY}`)
    .then((response) => {
      const currentDate = new Date()
      const upcomingEvents = []
      const pastEvents = []
      response.data.items.forEach((event) => {
        const eventStartDate = new Date(event.start.date);
        if (eventStartDate > currentDate) {
          upcomingEvents.push({
            summary: event.summary,
            start: formatDateTime(event.start.dateTime || event.start.date)
          })
        } else {
          pastEvents.push({
            summary: event.summary,
            start: formatDateTime(event.start.dateTime || event.start.date)
          })
        }
    })
    pastEvents.reverse()
    // past events are now shown from the most recent to oldest
    res.json({upcomingEvents, pastEvents})
  })
    .catch((error) => {
      console.error('error fetching data from google calendar API:', error.message);
      res.status(500).json({ error: 'internal server error' });
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
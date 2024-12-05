import axios from 'axios';

class GoogleCalendarService {
  private accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }

  async createEvent(eventDetails) {
    const response = await axios.post(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      eventDetails,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  }
}

export default GoogleCalendarService;
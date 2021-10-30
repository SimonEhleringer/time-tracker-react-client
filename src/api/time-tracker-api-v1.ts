import axios from 'axios';

const timeTrackerApiV1 = axios.create({
  baseURL: 'https://localhost:5001/api/v1',
});

export default timeTrackerApiV1;

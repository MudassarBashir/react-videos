import axios from 'axios';

const KEY = 'AIzaSyB-r9Cbk12Q_aRcyTuWWhPXkULvs2edacg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    KEY: KEY
  }
});

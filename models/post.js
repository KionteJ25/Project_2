import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/track/null',
  headers: {
    'x-rapidapi-key': '417f65f595mshd24ee7a487a52bfp1536b8jsnf5bd98b47b85',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
import apiUrl from "../config";

const handleResponse = (response) => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);

      if (!data.success) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  };
  
const getScoreboard = (index) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "index": index,
      },
      credentials: "include",
    };
    return fetch(`${apiUrl}/scoreboard/${index}`, requestOptions).then(handleResponse);
  }

  export default getScoreboard;
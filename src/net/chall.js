import apiUrl from "../config";

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.status) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

export const submitChall = (name, flag) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      flag: flag,
    }),
    credentials: "include",
  };
  return fetch(`${apiUrl}/submit`, requestOptions).then(handleResponse);
}

export const getChallenges = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  return fetch(`${apiUrl}/challenges`, requestOptions).then(handleResponse);
};
export default {getChallenges,submitChall};
import apiUrl from "../config";

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const logout = () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };
  fetch(`${apiUrl}/user/logout`, requestOptions);
};

export const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      password: password,
    }),
    credentials: "include",
  };

  return fetch(`${apiUrl}/user/login`, requestOptions).then(
    handleResponse
  );
};

export const register = (username, password, email) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username,
      password: password,
      email: email,
    }),
  };

  return fetch(`${apiUrl}/user/register`, requestOptions).then(
    handleResponse
  );
};


export default {
  logout,
  login,
  register,
};

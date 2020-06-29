import apiUrl from "../config";

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data);

    if (!response.status) {
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
  return fetch(`${apiUrl}/user/logout`, requestOptions).then(handleResponse);
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

export const register = (teamName, inviteCode, createTeam, name, password, email) => {
  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      teamName: teamName,
      inviteCode: inviteCode,
      createTeam: createTeam,
      name: name,
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

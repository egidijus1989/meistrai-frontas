const backendDomain = "http://localhost:8888/api/v1/auth/";
//////////////////////////////////////////////
export const signup = async (signUpData) => {
  try {
    const res = await fetch(`${backendDomain}signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const login = async (loginData) => {
  try {
    const res = await fetch(`${backendDomain}login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};

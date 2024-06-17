const backendDomain = "http://localhost:8888/api/v1/mechanic/";
//////////////////////////////////////////////
export const createMechanic = async (data, token) => {
  try {
    const res = await fetch(`${backendDomain}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const updateMechanic = async (mechanic, id, token) => {
  try {
    const res = await fetch(`${backendDomain}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(mechanic),
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const likeMechanic = async (id, token) => {
  try {
    const res = await fetch(`${backendDomain}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const deleteMechanic = async (id, token) => {
  try {
    const res = await fetch(`${backendDomain}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    const dataResponse = await res.json();
    return dataResponse;
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const getAllMechanic = async (token) => {
  try {
    const res = await fetch(`${backendDomain}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const getMechanic = async (id, token) => {
  try {
    const res = await fetch(`${backendDomain}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};

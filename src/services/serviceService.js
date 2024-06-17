const backendDomain = "http://localhost:8888/api/v1/services/";
//////////////////////////////////////////////
export const createService = async (serviceData, token) => {
  try {
    const res = await fetch(`${backendDomain}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(serviceData),
    });
    return await res.json();
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////
export const updateService = async (data, id, token) => {
  try {
    const res = await fetch(`${backendDomain}${id}`, {
      method: "PATCH",
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
export const deleteService = async (id, token) => {
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
export const getAllService = async (token) => {
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
export const getService = async (serviceId, token) => {
  try {
    const res = await fetch(`${backendDomain}${serviceId}`, {
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

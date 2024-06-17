import React, { useState, useEffect } from "react";
import * as serviceService from "../services/serviceService";
import * as mechanicService from "../services/mechanicService";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MechanicPage = () => {
  const [service, setService] = useState([]);
  const [mechanic, setMechanic] = useState({
    name: "",
    lastname: "",
    speciality: "",
    city: "",
    service: "",
  });
  console.log(mechanic);
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;

  useEffect(() => {
    loadService();
    loadMechanic();
  }, []);

  const loadMechanic = async () => {
    try {
      const res = await mechanicService.getMechanic(id, token);
      setMechanic(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadService = async () => {
    try {
      const res = await serviceService.getAllService(token);
      setService(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMechanic((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mechanicService.updateMechanic(mechanic, id, token);
      //navigate()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="w-full max-w-lg flex flex-col gap-5 px-3"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="name"
              type="text"
              value={mechanic.name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Lastname */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Lastname
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="lastname"
              type="text"
              value={mechanic.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Speciality */}
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="speciality"
          >
            Speciality
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="speciality"
            type="text"
            value={mechanic.speciality}
            onChange={handleChange}
          />
        </div>
        {/* city */}
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="city"
          >
            Miestas
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="city"
            type="text"
            value={mechanic.city}
            onChange={handleChange}
          />
        </div>
        {/* Service */}
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="autoService"
          >
            Service
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="autoService"
              name="autoService"
            >
              {service.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        {/* SUBMIT BUTTON */}
        <button
          className="text-white font-bold w-full rounded px-4 py-2 bg-gradient-to-br
  from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600
                disabled:opacity-70 disabled:cursor-not-allowed"
          type="submit"
        >
          Update mechanic
        </button>
      </form>
    </div>
  );
};

export default MechanicPage;

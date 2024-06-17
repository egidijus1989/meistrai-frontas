import { toast } from "react-toastify";
import * as serviceService from "../services/serviceService";
import * as mechanicService from "../services/mechanicService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MechanicForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;
  const [services, setServices] = useState([]);
  console.log(services);

  const importServices = async () => {
    try {
      const res = await serviceService.getAllService(token);
      setServices(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const mechanicData = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      speciality: formData.get("speciality"),
      city: formData.get("city"),
      autoService: formData.get("autoService"),
    };
    try {
      await mechanicService.createMechanic(mechanicData, token);
      form.reset();
      toast.success("Automechanic added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    importServices();
  }, []);
  return (
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
            id="name"
            name="name"
            type="text"
            required
            placeholder="Mechaniko vardas"
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
            id="lastname"
            name="lastname"
            type="text"
            required
            placeholder="Mechaniko pavarde"
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
          id="speciality"
          name="speciality"
          type="text"
          placeholder="Mechaniko specialybe"
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
          id="city"
          name="city"
          type="text"
          placeholder="Mechaniko miestas"
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
            {services.map((service) => (
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
        Add auto mechanic
      </button>
    </form>
  );
};

export default MechanicForm;

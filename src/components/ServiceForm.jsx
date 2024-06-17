import { toast } from "react-toastify";
import * as serviceService from "../services/serviceService";
import { useSelector } from "react-redux";

const ServiceForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = {
      name: formData.get("name"),
      address: formData.get("address"),
      bossman: formData.get("bossman"),
    };
    try {
      await serviceService.createService(serviceData, token);
      form.reset();
      toast.success("Autoservice added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
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
            placeholder="Autoserviso pavadinimas"
          />
        </div>
      </div>
      {/* address */}
      <div className="w-full flex-1 mb-6 md:mb-0">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="address"
          name="address"
          type="text"
          placeholder="Autoserviso adresas"
        />
      </div>

      {/* LOCATION */}
      <div className="w-full flex-1 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="bossman"
        >
          Vadovo pavadinimas
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="bossman"
          name="bossman"
          type="text"
          placeholder="Jonas Jonaitis"
        />
      </div>
      {/* SUBMIT BUTTON */}
      <button
        className="text-white font-bold w-full rounded px-4 py-2 bg-gradient-to-br
      from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600
                    disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
      >
        Add auto service
      </button>
    </form>
  );
};

export default ServiceForm;

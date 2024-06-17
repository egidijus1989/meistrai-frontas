import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import * as serviceService from "../services/serviceService";
import * as mechanicService from "../services/mechanicService";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const Card = ({ mechanic }) => {
  const [service, setService] = useState("");
  const id = mechanic._id;
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;
  const serviceId = mechanic.autoService[0];

  const loadService = async () => {
    try {
      const res = await serviceService.getService(serviceId, token);
      setService(res?.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const likeMechanic = async () => {
    try {
      const res = await mechanicService.likeMechanic(id);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMechanic = async () => {
    try {
      const res = await mechanicService.deleteMechanic(id, token);
      loadService();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadService();
  }, []);

  return (
    <div
      className={`rounded-md p-4 bg-gradient-to-br bg-red-400 to via-violet-400`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          {currentUser.data.role === "admin" ? (
            <Link to={`/mechanic/${id}`}>
              <h2 className="text-lg font-bold text-gray-700 hover:text-violet-600">
                {mechanic.name}
              </h2>
            </Link>
          ) : (
            <h2 className="text-lg font-bold text-gray-700 hover:text-violet-600">
              {mechanic.name}
            </h2>
          )}
          {currentUser.data.role === "admin" && (
            <FaTrash onClick={deleteMechanic} />
          )}
          <AiFillLike onClick={likeMechanic} />
        </div>
        <p className="text-gray-700 flex items-center gap-1">
          City: {mechanic.city}
        </p>
        <p className="text-gray-700 flex items-center gap-1">
          Speciality: {mechanic.speciality}
        </p>
        <p className="text-gray-700 flex items-center gap-1">
          Lastname: {mechanic.lastname}
        </p>
        <p className="text-gray-700 flex items-center gap-1">
          Likes: {mechanic.numberOfLikes}
        </p>
        <p className="text-gray-700 flex items-center gap-1">
          Service: {service?.name}
        </p>
      </div>
    </div>
  );
};
export default Card;

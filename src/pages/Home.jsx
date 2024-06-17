import React, { useEffect, useState } from "react";

import * as mechanicService from "../services/mechanicService";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Home = () => {
  const [mechanics, setMechanics] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;

  const loadMechanic = async () => {
    try {
      const res = await mechanicService.getAllMechanic(token);
      setMechanics(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadMechanic();
  }, []);
  return (
    <div className="w-full px-10 min-h-[40vh]">
      <p className="text-5xl font-bold text-center my-10">Mechanikai</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20">
        {mechanics.map((mechanic) => (
          <Card key={mechanic._id} mechanic={mechanic} />
        ))}
      </div>
      {mechanics?.length === 0 && (
        <p className="text-2xl font-bold text-center w-full">
          No transaction history found
        </p>
      )}
    </div>
  );
};

export default Home;

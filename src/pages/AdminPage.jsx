import React from "react";
import MechanicForm from "../components/MechanicForm";
import ServiceForm from "../components/ServiceForm";

const AdminPage = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row">
      <MechanicForm />
      <ServiceForm />
    </div>
  );
};

export default AdminPage;

import React from "react";
import { AppLayout } from "../layouts";
import ServicesGroup from "../components/services/ServicesGroup";

const ServicesPage = () => {
  return (
    <div className="events-parent">
      <AppLayout>
        <div className="home-body"></div>
        <ServicesGroup/>
        <br/>
        <br/>
        <br/>
      </AppLayout>
    </div>
  );
};

export default ServicesPage;

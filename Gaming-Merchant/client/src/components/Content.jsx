import React from "react";
import ProfileCard from "./ProfileCard";
import Accordion from "./Accordion";
import MerchandiseForm from "./MerchandiseForm";
import ToggleSide from "./ToggleSide";

const Content = () => {
  return (
    <div>
      <section style={{ margin: "2px 300px" }}>

        <div className="row">
          <ProfileCard />
          <ToggleSide />
          <MerchandiseForm />
        </div>
      </section>
    </div>
  );
};

export default Content;

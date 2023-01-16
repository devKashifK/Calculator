import React, { useState } from "react";
import Options from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Welcome() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="toggle_sidebar" onClick={() => setSidebar(!sidebar)}>
        {" "}
        <GiHamburgerMenu />
      </div>
      <div
        className={
          sidebar === true
            ? "sidebar_container_toggle sidebar_container_toggle_show"
            : "sidebar_container_toggle"
        }
      >
        <Options />
      </div>
    </>
  );
}

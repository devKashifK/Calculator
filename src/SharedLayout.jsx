import React from  "react";
import { Outlet } from "react-router-dom";
import Welcome from "./Welcome/Welcome";

export default function Sharedlayout () {
    return(
        <>
        <Welcome />
        <Outlet />
        </>
    )
}
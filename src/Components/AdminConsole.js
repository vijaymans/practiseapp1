import React from "react";
import "./AdminConsole.css";
import UserManagement from "../AdminConsole/UserManagement";
import { useState } from "react";
import BranchMaster from "../AdminConsole/BranchMaster";
import TeamsMaster from "../AdminConsole/TeamsMaster"
import RoleMapping from "../AdminConsole/RoleMapping";

function AdminConsole() {
  const [compo, setCompo] = useState("");

  const adminconsoledata = [
    "User Management",
    "Branch Master",
    "Teams Master",
    "Role Mapping",
    "Export",
    "Task Type Master",
  ];



  const handleClick = (compo1) => {
    setCompo(compo1);
  };

  return (
    <div className="admin-container">
      <div className="admin-console">
        {adminconsoledata.map((ele,i) => {
          return <button key ={i} onClick={() => handleClick(ele)}>{ele}</button>;
        })}
      </div>

      <div className="admin-component">
        <h2>Component to be rendered</h2>
        {compo == "User Management" ? (
          <UserManagement />
        ) : compo == "Branch Master" ? (
          <BranchMaster />
        ) : compo == "Teams Master" ? (
          <TeamsMaster />
        ) : compo == "Role Mapping" ? (
            <RoleMapping/>
          )  : null
        }
      </div>
    </div>
  );
}

export default AdminConsole;

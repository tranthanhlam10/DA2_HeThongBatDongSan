import React from "react";
import ManagerStatistic from "./ManagerStatistic/ManagerStatistic";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import UserDetail from "./UserDetail/UserDetail";
import RealEstateManagement from "./RealEstateManagement/RealEstateManagement";
import UserManagement from "./UserManagement/UserManagement";
const adminRoutes = [
  {
    pathadmin: "managestatistic",
    exact: true,
    mainadmin: () => <ManagerStatistic />,
  },
  {
    pathadmin: "projectdetail",
    exact: false,
    mainadmin: () => <ProjectDetail />,
  },
  {
    pathadmin: "projectmanagement",
    exact: false,
    mainadmin: () => <ProjectManagement />,
  },
  {
    pathadmin: "realestatemanagement",
    exact: false,
    mainadmin: () => <RealEstateManagement />,
  },
  {
    pathadmin: "userdetail",
    exact: false,
    mainadmin: () => <UserDetail />,
  },
  {
    pathadmin: "usermanagement",
    exact: false,
    mainadmin: () => <UserManagement />,
  },
];

export default adminRoutes;

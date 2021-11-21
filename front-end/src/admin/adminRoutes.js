import React from "react";

import ProjectDetail from "./ProjectDetail/ProjectDetail";
import ManagerStatistic from "./ManagerStatistic/ManagerStatistic";
import RealEstateManagement from "./RealEstateManagement/RealEstateManagement";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import UserManagement from "./UserManagement/UserManagement";
import RealEstateDetail from "./RealEstateDetail/RealEstateDetail";
import UserDetail from "./UserDetail/UserDetail";
const adminRoutes = [
  {
    path: "",
    exact: true,
    main: () => <ProjectManagement />, //http://localhost:3000/admin
  },
  {
    path: "/abc",
    exact: true,
    main: () => <ManagerStatistic />, //http://localhost:3000/admin/abc
  },

  {
    path: "/realestatemanagement",
    exact: true,
    main: () => <RealEstateManagement />,
  },
  {
    path: "/projectmanagement",
    exact: true,
    main: () => <ProjectManagement />,
  },

  {
    path: "/usermanagement",
    exact: true,
    main: () => <UserManagement />,
  },
  {
    path: "/projectdetail",
    exact: true,
    main: () => <ProjectDetail />,
  },
  {
    path: "/realestatedetail",
    exact: true,
    main: () => <RealEstateDetail />,
  },
  {
    path: "/userdetail",
    exact: true,
    main: () => <UserDetail />,
  },
];

export default adminRoutes;

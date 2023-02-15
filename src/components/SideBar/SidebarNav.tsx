import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@aws-amplify/ui-react";

export interface NavItemData {
  eventKey?: string;
  title?: string;
  icon?: any;
  to?: any;
  target?: string;
  children?: NavItemData[];
}

export interface SidebarNavProps {
  navs?: NavItemData[];
}

const SideBarNav = (props: SidebarNavProps) => {
  const { navs } = props;

  let activeClassName = "active";

  return (
    <div className="sidebar-nav">
      <ul>
        {navs?.map((item) => {
          const { children, ...rest } = item;

          if (children) {
            return (
              <li key={item.eventKey}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Icon>{item.icon}</Icon>
                  {item.title}
                </NavLink>
                <ul>
                  {children.map((child) => {
                    return (
                      <li key={child.eventKey}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                          }
                        >
                          {child.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }

          if (rest.target === "_blank") {
            return <></>;
          }

          return (
            <li key={item.eventKey}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <Icon>{item.icon}</Icon>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarNav;

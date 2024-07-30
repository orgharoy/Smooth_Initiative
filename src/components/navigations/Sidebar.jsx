import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLink } from "react-router-dom";
import { navItems } from "../SidebarNavItems";

const Sidebar = ({ sideBarSize }) => {
  return (
    <div
      className={`hidden md:block z-50 sticky top-16 h-[calc(100vh-64px)] bg-background transition-all overflow-y-scroll no-scrollbar ${
        sideBarSize === "large" ? " w-64 px-5" : "w-20"
      }`}
    >
      <ul className={`pt-5 pb-8 space-y-2 `}>
        {navItems.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            {section.heading && (
              <p
                className={`font-semibold text-muted-foreground text-sm py-2 ${
                  sideBarSize === "large" ? "inline-block" : "hidden"
                }`}
              >
                {section.heading}
              </p>
            )}
            {section.subItems.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`flex ${
                  sideBarSize === "large" ? "justify-between" : "justify-center"
                }`}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `p-2 aspect-square flex items-center justify-center rounded-xl transition-all hover:bg-primary hover:text-white
                    ${isActive ? "bg-primary text-white" : ""}
                    ${sideBarSize === "large" ? "hidden" : "inline-block"}`
                  }
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <item.icon className="h-5 flex-shrink-0" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavLink>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `py-2 w-full flex items-center gap-2 px-2 transition-all hover:bg-primary hover:text-white rounded-xl 
                    ${isActive ? "bg-primary text-white" : ""}
                    ${sideBarSize === "large" ? "inline-block" : "hidden"}`
                  }
                >
                  <item.icon className="h-5 flex-shrink-0" />
                  <p className="whitespace-nowrap">{item.label}</p>
                </NavLink>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

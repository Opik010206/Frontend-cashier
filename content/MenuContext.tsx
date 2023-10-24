"use client";

import React, { createContext, useState, ReactNode } from "react";

export const MenuContext = createContext<any | undefined>(undefined);

type MenuContextProviderProps = {
  children: ReactNode;
};

const MenuContextProvider: React.FC<MenuContextProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return <MenuContext.Provider value={{ open, toggle }}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
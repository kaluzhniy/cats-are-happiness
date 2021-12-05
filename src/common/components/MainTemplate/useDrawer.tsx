import { useState } from "react";

export const useDrawer = (): {
  openDrawer: () => void;
  closeDrawer: () => void;
  isOpen: boolean;
} => {
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => {
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return { openDrawer, closeDrawer, isOpen };
};

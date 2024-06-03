import classNames from "classnames";
import { useRef } from "react";
import useClickOutside from "src/utils/useClickOutside";

type MenuProps = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Menu = ({ open, children, onClose, className }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, onClose);

  if (!open) return null;
  return (
    <div
      ref={menuRef}
      className={classNames(
        "origin-top-right absolute right-0 rounded-lg shadow-xl bg-surface w-36 p-1",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Menu;

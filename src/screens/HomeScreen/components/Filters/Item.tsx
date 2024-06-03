import classNames from "classnames";
import { IoMdCheckmark } from "react-icons/io";

const Item = ({
  children,
  onClick,
  selected,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
  className?: string;
}) => (
  <div
    className={classNames(
      "px-2 py-1 cursor-pointer ml-1 flex items-center justify-between",
      selected && "bg-primary text-surface rounded-md text-bold",
      className,
    )}
    onClick={onClick}
  >
    {children}
    {selected && <IoMdCheckmark />}
  </div>
);

export default Item;

import { useEffect, RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mouseup", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;

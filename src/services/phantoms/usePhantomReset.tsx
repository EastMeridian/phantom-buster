import { IPhantoms } from "src/models/phantom";
import { useStorage } from "src/utils/useStorage";
import { PHANTOMS_STORAGE } from "./constants";
import { useNavigate } from "react-router-dom";

export const usePhantomReset = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPhantoms] = useStorage<IPhantoms>(PHANTOMS_STORAGE, []);
  const navigate = useNavigate();

  return () => {
    setPhantoms([]);
    navigate(0);
  };
};

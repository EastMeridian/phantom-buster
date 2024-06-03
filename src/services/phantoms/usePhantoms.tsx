import { useState } from "react";
import { IPhantoms } from "src/models/phantom";
import { useStorage } from "src/utils/useStorage";
import { useMountEffect } from "src/utils/useMountEffect";
import { data } from "../data";
import { PHANTOMS_STORAGE } from "./constants";
import Phantoms from "./phantoms";

export const fetchPhantoms = (): Promise<IPhantoms> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 250));

export const usePhantoms = () => {
  const [phantoms, setPhantoms] = useStorage<IPhantoms>(PHANTOMS_STORAGE, []);
  const [loading, setLoading] = useState(true);

  useMountEffect(() => {
    const initialized = phantoms.length > 0;
    if (initialized) return;

    (async () => {
      try {
        const nextPhantoms = await fetchPhantoms();
        setPhantoms(nextPhantoms);
        setLoading(false);
      } catch (e) {
        console.log(e);
        // handle error here, could send it to sentry, display it and more
      }
    })();
  });

  const renamePhantom = (phantomId: string, name: string) => {
    setPhantoms((prev) => Phantoms.rename(prev, phantomId, name));
  };

  const duplicatePhantom = (phantomId: string) => {
    setPhantoms((prev) => Phantoms.duplicate(prev, phantomId));
  };

  const removePhantom = (phantomId: string) => {
    setPhantoms((prev) => Phantoms.remove(prev, phantomId));
  };

  return { phantoms, loading, renamePhantom, removePhantom, duplicatePhantom };
};

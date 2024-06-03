import { useState } from "react";
import { IPhantoms } from "../../models/phantom";
import { useStorage } from "../../utils/useStorage";
import { useMountEffect } from "../../utils/useMountEffect";
import { data } from "../data";
import { generateRandomId } from "../../utils/id";
import { PHANTOMS_STORAGE } from "./constants";

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
    setPhantoms((prev) =>
      prev.map((phantom) => {
        const { id } = phantom;
        if (id !== phantomId) return phantom;
        return {
          ...phantom,
          name,
        };
      }),
    );
  };

  const duplicatePhantom = (phantomId: string) => {
    const phantom = phantoms.find(({ id }) => id === phantomId);
    if (!phantom) return null;
    setPhantoms((prev) => [...prev, { ...phantom, id: generateRandomId() }]);
  };

  const removePhantom = (phantomId: string) => {
    setPhantoms((prev) =>
      prev.filter((phantom) => {
        const { id } = phantom;
        return phantomId !== id;
      }),
    );
  };
  return { phantoms, loading, renamePhantom, removePhantom, duplicatePhantom };
};

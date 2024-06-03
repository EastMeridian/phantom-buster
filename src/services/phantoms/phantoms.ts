import { IPhantoms } from "src/models/phantom";
import { generateRandomId } from "src/utils/id";

const rename = (phantoms: IPhantoms, phantomId: string, name: string) =>
  phantoms.map((phantom) => {
    const { id } = phantom;
    if (id !== phantomId) return phantom;
    return {
      ...phantom,
      name,
    };
  });

const duplicate = (phantoms: IPhantoms, phantomId: string) => {
  const phantom = phantoms.find(({ id }) => id === phantomId);
  if (!phantom) return phantoms;
  return [...phantoms, { ...phantom, id: generateRandomId() }];
};

const remove = (phantoms: IPhantoms, phantomId: string) =>
  phantoms.filter((phantom) => {
    const { id } = phantom;
    return phantomId !== id;
  });

const Phantoms = {
  rename,
  duplicate,
  remove,
};

export default Phantoms;

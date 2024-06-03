import { usePhantoms } from "src/services/phantoms";
import PhantomCard from "./components/PhantomCard/PhantomCard";
import SearchField from "src/components/SearchField";
import { useFuseSearch } from "src/utils/useFuse";
import RenameModal from "./components/RenameModal";
import { useState } from "react";
import Filters from "./components/Filters";
import { useFilters } from "src/services/filters";
import { useNavigate } from "react-router-dom";

const fuseOptions = { keys: ["name"] };

const HomeScreen = () => {
  const navigate = useNavigate();
  const [renameOptions, setRenameOptions] = useState<{
    name: string;
    id: string;
  } | null>(null);

  const { phantoms, removePhantom, renamePhantom, duplicatePhantom } =
    usePhantoms();

  const { term, search, list } = useFuseSearch(phantoms, fuseOptions);

  const filteredList = useFilters(list);

  const handleClose = () => {
    setRenameOptions(null);
  };

  const handleRename = (name: string) => {
    if (!renameOptions) return null;
    renamePhantom(renameOptions.id, name);
    handleClose();
  };

  return (
    <div className="bg-background flex flex-col pt-12 min-h-screen px-8">
      <div className="flex-col mx-auto w-full max-w-7xl">
        <h1 className="text-3xl text-primaryText font-bold mb-8">Dashboard</h1>
        <div className="flex flex-row gap-12">
          <div className="w-64 hidden lg:flex flex-col gap-8">
            <SearchField value={term || ""} onChange={search} />
            <Filters />
          </div>
          <div className="w-full gap-4 flex flex-col">
            {filteredList.map((phantom) => (
              <PhantomCard
                key={phantom.id}
                phantom={phantom}
                onDuplicate={() => duplicatePhantom(phantom.id)}
                onRemove={() => removePhantom(phantom.id)}
                onRename={() => setRenameOptions(phantom)}
                onClick={() => navigate(`phantoms/${phantom.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <RenameModal
        onRename={handleRename}
        isOpen={Boolean(renameOptions)}
        name={renameOptions?.name}
        onClose={handleClose}
      />
    </div>
  );
};

export default HomeScreen;

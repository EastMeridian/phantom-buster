import { useParams } from "react-router-dom";
import { usePhantoms } from "src/services/phantoms";

const PhantomScreen = () => {
  const params = useParams();
  const { phantoms } = usePhantoms();

  const phantom = phantoms.find(({ id }) => params.id);

  console.log(phantom, params);
  return (
    <div className="bg-background flex flex-col pt-12 min-h-screen px-8">
      salut
    </div>
  );
};

export default PhantomScreen;

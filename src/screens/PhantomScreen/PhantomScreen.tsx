import { useParams } from "react-router-dom";
import { usePhantoms } from "src/services/phantoms";

const PhantomScreen = () => {
  const params = useParams();
  const { phantoms } = usePhantoms();

  const phantom = phantoms.find(({ id }) => id === params.id);
  if (!phantom) return null;

  const { name, nextLaunchIn, repeatedLaunchTimes, launchType } = phantom;

  console.log(phantom, params);

  const launchFrenquency = repeatedLaunchTimes
    ? repeatedLaunchTimes.simplePreset
    : launchType;

  return (
    <div className="bg-background flex flex-col pt-12 min-h-screen px-8">
      <h1 className="text-3xl text-primaryText font-bold mb-8">{name}</h1>
      <div className="flex gap-2 items-center">
        <div className="text-secondaryText text-xs">{launchFrenquency}</div>
        {nextLaunchIn && (
          <div className="text-primaryText text-sm opacity-50">|</div>
        )}
        {nextLaunchIn && (
          <div className="text-primaryText text-xs">{launchFrenquency}</div>
        )}
      </div>
    </div>
  );
};

export default PhantomScreen;

import useQueryParams from "src/utils/useQueryParams";
import Section from "./Section";
import Item from "./Item";
import { usePhantomReset } from "src/services/phantoms/usePhantomReset";

const launchTypes = ["repeatedly", "manually"];
const platforms = ["linkedin", "salesNavigator", "mail", "instagram"];

const Filters = () => {
  const { searchParams, addParam, removeParam } = useQueryParams();
  const reset = usePhantomReset();

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold  text-sm mb-2">Filters</div>
      <Section>Launch Type</Section>
      <div className="flex flex-col gap-2">
        {launchTypes.map((launchtype) => {
          const selected = Boolean(
            searchParams.get("launchtype") === launchtype,
          );
          return (
            <Item
              key={launchtype}
              selected={selected}
              onClick={() =>
                selected
                  ? removeParam("launchtype")
                  : addParam("launchtype", launchtype)
              }
            >
              {launchtype}
            </Item>
          );
        })}
      </div>
      <Section>Platforms</Section>
      <div className="flex flex-col gap-2">
        {platforms.map((platform) => {
          const selected = Boolean(searchParams.get("platform") === platform);
          return (
            <Item
              key={platform}
              selected={selected}
              onClick={() =>
                selected
                  ? removeParam("platform")
                  : addParam("platform", platform)
              }
            >
              {platform}
            </Item>
          );
        })}
      </div>
      <Item onClick={reset} className="mt-8">
        reset cache
      </Item>
    </div>
  );
};

export default Filters;

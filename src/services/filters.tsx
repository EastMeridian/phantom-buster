import { useSearchParams } from "react-router-dom";
import { IPhantom } from "../models/phantom";
import { useMemo } from "react";

export const useFilters = (list: IPhantom[]) => {
  const [searchParams] = useSearchParams();
  const launchtype = searchParams.get("launchtype");
  const platform = searchParams.get("platform");

  return useMemo(() => {
    const withLaunchtype = launchtype
      ? list.filter(({ launchType }) => launchType === launchtype)
      : list;
    const withPlatform = platform
      ? withLaunchtype.filter(({ manifest }) =>
          manifest.tags.categories.includes(platform),
        )
      : withLaunchtype;
    return withPlatform;
  }, [list, platform, launchtype]);
};

import Fuse, { IFuseOptions } from "fuse.js";
import { useCallback, useMemo } from "react";
import useQueryParams from "./useQueryParams";

const baseOptions = { threshold: 0.45, minMatchCharLength: 1 };

export const useFuseSearch = <T>(
  initialList: T[],
  options: IFuseOptions<T>,
) => {
  const { searchParams, addParam, removeParam } = useQueryParams();
  const term = searchParams.get("search");

  const search = (value: string) => {
    if (value === "") return reset();
    addParam("search", value);
  };

  const reset = useCallback(() => {
    removeParam("search");
  }, [removeParam]);

  const list = useMemo(() => {
    if (!term) return initialList;
    const fuse = new Fuse<T>(initialList, { ...baseOptions, ...options });
    const nextList = fuse.search(`${term}`);
    const result = nextList.map(({ item }) => item);
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialList, options, term]);

  return { list, search, term };
};

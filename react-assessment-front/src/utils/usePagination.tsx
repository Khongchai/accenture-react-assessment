import { useMemo } from "react";
import { Paginator } from "./Paginator";

export default function usePagination<T>(
  items: T[],
  page: number,
  extraDependencies = [] as any[]
) {
  const paginator = useMemo(() => new Paginator(items, 6, 0), []);

  const res = useMemo(() => {
    paginator.setPage(page);
    paginator.setArray(items);
    const { data: paginatedItems } = paginator.getItemsAtCurrentPage();
    const { page: currentPagePos, of: totalPages } =
      paginator.getPagePosition();

    return { currentPagePos, totalPages, paginatedItems };
  }, [items, page, ...extraDependencies]);

  return { ...res };
}

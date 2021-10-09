export class Paginator<T> {
  readonly limit: number;
  page: number;
  skip: number;
  array: T[];
  constructor(array: T[], limit: number, skip?: number) {
    this.limit = limit;
    this.array = array;
    this.skip = skip ? skip : 0;
    this.page = 1 + (skip || 0);
  }

  setArray(array: T[]) {
    this.array = array;
  }

  setPage(page: number) {
    this.page = page;
  }

  getItemsAtCurrentPage() {
    const start = this.limit * (this.page - 1);
    const data = this.array.slice(start, start + this.limit);
    return this.checkZeroReturn(data);
  }

  paginateForward() {
    this.page = this.page + this.limit;

    const data = this.array.slice(this.page - 1, this.page - 1 + this.limit);
    return this.checkZeroReturn(data);
  }

  paginateBackward() {
    this.page = this.page - this.limit;

    const data = this.array.slice(this.page - 1, this.page - 1 + this.limit);
    return this.checkZeroReturn(data);
  }

  getPagePosition() {
    const length = this.array.length;
    const totalPages = Math.ceil(length / this.limit);
    return {
      page: this.page,
      of: totalPages,
    };
  }

  getAllItems() {
    return this.array;
  }

  private checkFirstAndLast(data: T[]) {
    return {
      isFirst: this.page === 0,
      isLast: data.length < this.limit,
    };
  }

  /**
   * If returns 0, something is wrong, because pagination should always return soemthing
   */
  private checkZeroReturn(data: T[]) {
    if (data.length < 0) {
      console.error("Pagination position is less than 0");
    }
    return {
      data,
      ...this.checkFirstAndLast(data),
    };
  }
}

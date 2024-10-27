export type changeHandlerType<T> = (
  original: T,
  rowindex: number,
  totalPageDataLen: number,
) => void;

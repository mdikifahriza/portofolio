// types/page-props.ts
export type PageProps<TParams extends Record<string, any> = {}, TSearchParams extends Record<string, any> = {}> = {
  params: TParams;
  searchParams?: TSearchParams;
};

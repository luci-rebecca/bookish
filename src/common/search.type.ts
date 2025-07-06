
export type SearchResult<T> = {
  readonly documentation_url: string,
  readonly q: string,

  numFound: number,
  start: number,
  numFoundExact: boolean,
  num_found: number,
  offset: boolean,
  docs: T[]
}
// deno-fmt-ignore
export type Pluralize<T extends string> =
  T extends Capitalize<T>
    ? Capitalize<PluralizeLowercase<Lowercase<T>>>
    : T extends Uppercase<T>
      ? Uppercase<PluralizeLowercase<Lowercase<T>>>
      : T extends Lowercase<T>
        ? PluralizeLowercase<T>
        : never;

type PluralizeLowercase<T extends Lowercase<string>> = T extends `${string}s`
  ? T
  : `${T}s`;

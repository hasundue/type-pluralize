export type Pluralize<T extends string> = T extends Capitalize<T>
  ? Capitalize<PluralizeLowercase<Lowercase<T>>>
  : T extends Uppercase<T> ? Uppercase<PluralizeLowercase<Lowercase<T>>>
  : T extends Lowercase<T> ? PluralizeLowercase<T>
  : never;

type PluralizeLowercase<T extends Lowercase<string>> = T extends `${string}s`
  ? T
  : `${T}s`;

export type Singularlize<T extends string> = T extends Capitalize<T>
  ? Capitalize<SingularlizeLowercase<Lowercase<T>>>
  : T extends Uppercase<T> ? Uppercase<SingularlizeLowercase<Lowercase<T>>>
  : T extends Lowercase<T> ? SingularlizeLowercase<T>
  : never;

type SingularlizeLowercase<T extends Lowercase<string>> = T extends
  `${infer S extends string}s` ? S
  : T;

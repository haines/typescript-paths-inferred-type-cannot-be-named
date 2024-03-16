import type { Service } from "./service.js";

export type Client<T extends Service> = {
  [K in keyof T["methods"]]: Method<T["methods"][K]>;
};

interface MethodInfo<I = unknown, O = unknown> {
  readonly I: new () => I;
  readonly O: new () => O;
}

type Method<T> =
  T extends MethodInfo<infer I, infer O> ? (request: I) => O : never;

export function client<T extends Service>(_service: T): Client<T> {
  return undefined as unknown as Client<T>;
}

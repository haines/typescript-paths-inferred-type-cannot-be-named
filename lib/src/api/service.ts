import { Service as ExampleService } from "./protobuf/example_connect.js";

export const services = [ExampleService] as const;

export type Service = (typeof services)[number];

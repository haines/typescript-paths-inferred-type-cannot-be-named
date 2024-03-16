import { client } from "@ahaines/lib/api/client";
import { Service } from "@ahaines/lib/api/protobuf/example_connect";

export const example = client(Service).example;

import { Request, Response } from "./example_pb.js";

export const Service = {
  methods: {
    example: {
      I: Request,
      O: Response,
    },
  },
} as const;

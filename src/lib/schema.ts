import { z } from "zod";

export const createPostSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain atleast 3 characters." }),
  email: z
    .string()
    .email({ message: "Please enter corrent email." })
    .min(3, { message: "Email must contain atleast 3 characters." }),
  title: z
    .string()
    .min(10, { message: "Post title must contain atleast 10 characters." }),
  body: z
    .string()
    .min(60, { message: "Post body must contain atleast 60 characters." }),
});

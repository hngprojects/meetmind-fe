import { z } from 'zod';

// Define your schema
export const Signupschema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email'),
  password: z
    .string()
    .min(6, 'Password is required for sign up 1 uppercase is required'),
});

export type SignUpType = z.infer<typeof Signupschema>;

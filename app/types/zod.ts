import type {z} from 'zod'

// This type is generic, can be placed in another file
export type GenericSchemaErrors<T extends z.ZodType, U = string> = {
    formErrors: U[],
    fieldErrors: {
      [P in keyof z.infer<T>]?: U[]
    }
  }

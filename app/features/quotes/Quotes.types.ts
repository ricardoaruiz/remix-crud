import type { GenericSchemaErrors } from '~/types/zod';
import {z} from 'zod'

export namespace QuoteModel {
  export type Quote = {
    id: number;
    quote: string;
    author: string;
  }
}

export namespace QuoteView {
  export const QuoteSchema = z.object({
    quote: z.string().min(10, { message: 'this field must be 10 charactes minimum length'}),
    author: z.string().min(5, { message: 'this field must be 5 charactes minimum length'})
  })

  export type QuoteErrors = GenericSchemaErrors<typeof QuoteSchema>
}

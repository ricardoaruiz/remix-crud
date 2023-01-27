import type { QuoteModel } from '../Quotes.types'
import * as sqlite from './sqlite'
import * as supabase from './supabase'

type Actions = {
    findAll: (delay?: number) => Promise<QuoteModel.Quote[]>;
    findOne: (id?: string, delay?: number) => Promise<QuoteModel.Quote | null>;
    create: (quote: Omit<QuoteModel.Quote, 'id'>, delay?: number) => Promise<void>;
    update: (quote: QuoteModel.Quote, delay?: number) => Promise<void>;
    remove: (id: string, delay?: number) => Promise<void>
}

const api: {[key:string]: Actions} = {
    development: sqlite,
    production: supabase
} 

export const getApi = () => {
    return api[process.env.NODE_ENV]
}


import invariant from "tiny-invariant";
import { supabase } from "~/lib/supabase.server"; 
import type { QuoteModel } from "./Quotes.types"

/**
 * Return all quotes from DB
 * @returns list of all quotes
 */
export const findAll = async (delay?: number): Promise<QuoteModel.Quote[]> => {  
  const { data } = await supabase.from('quote').select('*')
  const quotes = data as QuoteModel.Quote[]

  return quotes
}

/**
 * Load a specific quote by id
 * @param id
 * @returns quote
 */
export const findOne = async (id?: string, delay?: number): Promise<QuoteModel.Quote | null> => {
  invariant(id, 'Please provide an id as string')

  const { data } = await supabase.from('quote').select('*').eq('id', id)
  const quote = data?.length ? data[0] as QuoteModel.Quote : null

  return quote
}

/**
 * Insert a new quote on DB
 * @param quote new quote
 */
export const create = async (quote: Omit<QuoteModel.Quote, 'id'>, delay?: number): Promise<void> => {
  
  await supabase.from('quote').insert(quote)
}

/**
 * Update a quote
 * @param quote changed quote
 */
export const update = async(quote: QuoteModel.Quote, delay?: number): Promise<void> => {
  
  await supabase.from('quote').update(quote).eq('id', quote.id)
}

/**
 * Remove a quote
 * @param quote remove quote
 */
export const remove = async(id: string, delay?: number): Promise<void> => {
 
  await supabase.from('quote').delete().eq('id', id)
}




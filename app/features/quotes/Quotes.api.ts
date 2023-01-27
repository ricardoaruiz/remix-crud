import invariant from "tiny-invariant";
import { getApi } from "./api/api-facotry";
import type { QuoteModel } from "./Quotes.types"

/**
 * Return all quotes from DB
 * @returns list of all quotes
 */
export const findAll = async (delay?: number): Promise<QuoteModel.Quote[]> => {
  const quotes = await getApi().findAll(delay)
  return quotes
}

/**
 * Load a specific quote by id
 * @param id
 * @returns quote
 */
export const findOne = async (id?: string, delay?: number): Promise<QuoteModel.Quote | null> => {
  invariant(id, 'Please provide an id as string')
  const quote = await getApi().findOne(id, delay)
  return quote
}

/**
 * Insert a new quote on DB
 * @param quote new quote
 */
export const create = async (quote: Omit<QuoteModel.Quote, 'id'>, delay?: number): Promise<void> => {
  await getApi().create(quote, delay)
}

/**
 * Update a quote
 * @param quote changed quote
 */
export const update = async(quote: QuoteModel.Quote, delay?: number): Promise<void> => {
  await getApi().update(quote, delay)
}

/**
 * Remove a quote
 * @param quote remove quote
 */
export const remove = async(id: string, delay?: number): Promise<void> => {
  await getApi().remove(id, delay)
}


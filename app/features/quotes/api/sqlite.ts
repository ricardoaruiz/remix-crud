import invariant from "tiny-invariant";
import { getModels } from "~/lib/db.server"
import { v4 as uuidv4 } from 'uuid';
import type { QuoteModel } from "../Quotes.types"

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time);
  })
}

/**
 * Return all quotes from DB
 * @returns list of all quotes
 */
export const findAll = async (delay?: number): Promise<QuoteModel.Quote[]> => { 
  if (delay) await sleep(delay)
  const { Quote } = await getModels()
  const quotes = await Quote.find() as QuoteModel.Quote[]

  return quotes
}

/**
 * Load a specific quote by id
 * @param id
 * @returns quote
 */
export const findOne = async (id?: string, delay?: number): Promise<QuoteModel.Quote | null> => {
  invariant(id, 'Please provide an id as string')
  if (delay) await sleep(delay)
  const { Quote } = await getModels()
  const quote = await Quote.findOne({id}) as QuoteModel.Quote

  return quote
}

/**
 * Insert a new quote on DB
 * @param quote new quote
 */
export const create = async (quote: Omit<QuoteModel.Quote, 'id'>, delay?: number): Promise<void> => {
  if (delay) await sleep(delay)
  const { Quote } = await getModels()
  await Quote.create({ id: uuidv4(), ...quote })
}

/**
 * Update a quote
 * @param quote changed quote
 */
export const update = async(quote: QuoteModel.Quote, delay?: number): Promise<void> => {
  if (delay) await sleep(delay)
  const { Quote } = await getModels()
  await Quote.update({ id: quote.id }, quote)
}

/**
 * Remove a quote
 * @param quote remove quote
 */
export const remove = async(id: string, delay?: number): Promise<void> => {
  if (delay) await sleep(delay)
  const { Quote } = await getModels()
  await Quote.remove({ id })
}

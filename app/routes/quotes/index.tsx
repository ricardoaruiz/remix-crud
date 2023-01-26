import { type LoaderFunction, type ActionFunction, json  } from '@remix-run/node';
import { useActionData, useLoaderData } from '@remix-run/react';

import { QuotesTypes, QuoteForm, QuotesApi } from '~/features/quotes';
import { QuoteList } from '~/features/quotes/components/QuoteList';

// Loader function return type
type LoaderData = {
  quotes: QuotesTypes.QuoteModel.Quote[]
}

// Action function return type
type ActionData = {
  quote: Omit<QuotesTypes.QuoteModel.Quote, 'id'>
  errors: QuotesTypes.QuoteView.QuoteErrors
}

/**
 * Loader function
 * @param context
 * @returns LoaderData
 */
export const loader: LoaderFunction = async () => {
  const quotes = await QuotesApi.findAll()
  return json<LoaderData>({ quotes })
}

/**
 * Action function
 * @param context
 * @returns ActionData
 */
export const action: ActionFunction = async ({ request }) => {

  if (request.method === 'POST') {
    const formData = await request.formData()

    const quoteFormData = {
      quote : formData.get('quote')?.toString() || '',
      author: formData.get('author')?.toString() || ''
    }
    const parsedQuote = QuotesTypes.QuoteView.QuoteSchema.safeParse(quoteFormData)

    if (parsedQuote.success) {
      await QuotesApi.create(quoteFormData, 1000)
      return null
    }

    return json<ActionData>({
      quote: quoteFormData,
      errors: parsedQuote.error.flatten()
    })
  }

  if (request.method === 'DELETE') {
    const formData = await request.formData()

    const id  = Number(formData.get('quoteId')?.toString() || 0)
    await QuotesApi.remove(id, 1000)

    return null
  }

}

/**
 * View
 * @returns
 */
export default function () {
  const loaderData = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()

  return (
    <>
      <QuoteForm
        title="Quotes"
        data={actionData?.quote}
        errors={actionData?.errors}
      />

      <QuoteList data={loaderData.quotes} />
    </>
  );
}

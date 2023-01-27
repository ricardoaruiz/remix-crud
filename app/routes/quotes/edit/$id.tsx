import { type ActionFunction, json, type LoaderFunction, redirect } from "@remix-run/node"
import { Link, useActionData, useLoaderData } from "@remix-run/react"

import { QuotesTypes, QuoteForm, QuotesApi } from "~/features/quotes"

// Loader function return type
type LoaderData = {
  quote: QuotesTypes.QuoteModel.Quote | null
}

// Action function return type
type ActionData = {
  quote: QuotesTypes.QuoteModel.Quote
  errors: QuotesTypes.QuoteView.QuoteErrors;
}

/**
 * Loader function
 * @param context
 * @returns LoaderData
 */
export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params
    const quote = await QuotesApi.findOne(id)
    return json<LoaderData>({ quote })
}

/**
 * Action function
 * @param context
 * @returns ActionData
 */
export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()

  const id = params.id || '0'
  const quoteFormData = {
    quote : formData.get('quote')?.toString() || '',
    author: formData.get('author')?.toString() || ''
  }
  const parsedQuote = QuotesTypes.QuoteView.QuoteSchema.safeParse(quoteFormData)

  if (parsedQuote.success) {
    await QuotesApi.update({ id, ...quoteFormData }, 1000)
    return redirect('/')
  }

  return json<ActionData>({
    quote: { id, ...quoteFormData },
    errors: parsedQuote.error.flatten()
  })
}

export const handle = {
  breadcrumb: (data: { quote: QuotesTypes.QuoteModel.Quote}) => {
    return <span>{data.quote.quote}</span>
  }
}

/**
 * View
 * @returns
 */
export default function() {
  const loaderData = useLoaderData<LoaderData>()
  const actionData = useActionData<ActionData>()
  const quote = actionData?.quote || loaderData.quote

  return (
    <>
      <Link to="/quotes">Voltar</Link>
      <QuoteForm
        title={`Edit Quote #${loaderData.quote?.id}`}
        data={quote}
        errors={actionData?.errors}
      />
    </>
  )
}



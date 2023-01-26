import { Form, Link, useTransition } from '@remix-run/react'
import { useMemo } from 'react'
import type { QuotesTypes } from '~/features/quotes'

import * as S from './styles'

type QuoteItemProps = {
  data: QuotesTypes.QuoteModel.Quote
}

export const QuoteItem = ({ data: { id, quote, author } }: QuoteItemProps) => {
  const transition = useTransition()
  const processedId = transition.submission?.formData.get('quoteId')?.toString() || '0'
  const isRemoving = transition.submission?.method === 'DELETE'

  const deleteButtonLabel = useMemo(() => id === Number(processedId) && isRemoving ? 'Removing...' : 'Remove',[id, isRemoving, processedId])

  return (
    <S.QuoteItem>
      <Link to={`/quotes/edit/${id}`} prefetch='intent'>
        <div>#{id}</div>
        <div>{quote}</div>
        <div>{author}</div>
      </Link>

      <Form method='delete'>
        <input type="hidden" name="quoteId" value={id} />
        <button>{deleteButtonLabel}</button>
      </Form>
    </S.QuoteItem>
  )
}

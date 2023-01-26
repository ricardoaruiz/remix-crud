import { useTransition } from '@remix-run/react'
import { useEffect, useMemo, useRef } from 'react'
import type { QuotesTypes } from '../..'

import * as S from './styles'

type QuoteFormProps = {
  title?: string;
  data?: Omit<QuotesTypes.QuoteModel.Quote, 'id'> & { id?: number };
  errors?:QuotesTypes.QuoteView.QuoteErrors;
}

export const QuoteForm = ({ title, data, errors }: QuoteFormProps) => {
  const transition = useTransition()
  const formRef = useRef<HTMLFormElement | null>(null)
  const inputQuote = useRef<HTMLInputElement | null>(null)

  const isIdle = transition.state === 'idle'
  const isCreating = transition.state === 'submitting' && transition.submission?.method === 'POST'
  const isUpdating = transition.state === 'submitting' && transition.submission?.method === 'PUT'
  const isSubmitting = isCreating || isUpdating

  const submitButtonLabel = useMemo(() => {
    if (isCreating) return 'Creating...'
    if (isUpdating) return 'Updating...'
    return data?.id ? 'Update Quote' : 'Create Quote'
  }, [data?.id, isCreating, isUpdating])

  useEffect(() => {
    if (isIdle) {
      formRef.current?.reset()
      inputQuote.current?.focus()
    }
  }, [isIdle])

  return (
    <S.FormContainer>
      {title && <h1>{title}</h1>}

      <S.Form method={data?.id ? 'put' : 'post'} ref={formRef} disabled={isSubmitting} >

        {data?.id && <input type="hidden" name="id" value={data.id} />}

        <S.FieldContainer>
          <S.FieldLabel htmlFor='quote'>Quote</S.FieldLabel>
          <S.Field type="text" name="quote" id="quote" ref={inputQuote} defaultValue={data?.quote} disabled={isSubmitting} />
          {errors?.fieldErrors.quote && <S.FieldError>{errors.fieldErrors.quote.map(error => error)}</S.FieldError>}
        </S.FieldContainer>

        <S.FieldContainer>
          <S.FieldLabel htmlFor='author'>Author</S.FieldLabel>
          <S.Field type="text" name="author" id="author" defaultValue={data?.author} disabled={isSubmitting}/>
          {errors?.fieldErrors.author && <S.FieldError>{errors.fieldErrors.author.map(error => error)}</S.FieldError>}
        </S.FieldContainer>

        <S.Button disabled={isSubmitting}>
          {submitButtonLabel}
        </S.Button>
      </S.Form>
    </S.FormContainer>
  )
}

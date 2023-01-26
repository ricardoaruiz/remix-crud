import type { QuotesTypes } from '../..'
import { QuoteItem } from './components/QuoteItem'

import * as S from './styles'

type QuoteListProps = {
  data: QuotesTypes.QuoteModel.Quote[]
}

export const QuoteList = ({ data }: QuoteListProps) => {
  return (
    <S.QuoteList>
      {data.map((data) => (
        <QuoteItem key={data.id} data={data} />
      ))}
  </S.QuoteList>
  )
}

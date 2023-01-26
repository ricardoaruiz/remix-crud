import { styled } from "~/config/stitcjes.config";

export const QuoteItem = styled('li', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 10px',
  borderRadius: '4px',

  '& a': {
    display: 'flex',
    columnGap: '20px',
    padding: '15px 0',
    textDecoration: 'none',
    color: 'black',
    flex: '1',
  },

  '& button': {
    border: 'none',
    padding: '10px 8px',
    borderRadius: '4px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'red',
      color: 'white'
    }
  },

  '&:hover': {
    backgroundColor: 'blue',

    '& a': {
      color: 'white'
    }
  },
})

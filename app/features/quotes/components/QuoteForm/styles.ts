import { styled } from "~/config/stitches.config";
import { Form as RemixForm } from '@remix-run/react'

export const FormContainer = styled('div', {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: '1.4'
})

export const Form = styled(RemixForm, {
  maxWidth: '800px',
  display: 'flex',
  flexFlow: 'column',
  gap: '10px',

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      }
    }
  },
  defaultVariants: {
    disabled: false
  }
})

export const FieldContainer = styled('div', {
  display: 'flex',
  flexFlow: 'column',
})

export const FieldLabel = styled('label', {})

export const Field = styled('input', {
  padding: '5px 10px',
})

export const FieldError = styled('div', {
  color: 'red',
  fontSize: '0.7rem',
  fontWeight: '500',
})

export const Button = styled('button', {
  display: 'inline-block',
  padding: '5px 10px',
  fontWeight: 'bold',
  cursor: 'pointer'
})

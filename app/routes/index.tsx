import { type LoaderFunction, redirect  } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  return redirect('/home')
}

//https://www.notion.so/Organizando-fc6ca30bc097428dbe4ac033c492958c

import { NotFoundPage } from 'nextra-theme-docs'
import { LogoIcon } from '../icons/Logo'
import { Button } from 'nextra/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <LogoIcon />
      <h1>The page you are looking for does not exist.</h1>
      <p>Please check the URL or return to the home page.</p>
      <Button variant='outline' asChild>
        <Link href="/">Home</Link>
      </Button>
    </NotFoundPage>
  )
}

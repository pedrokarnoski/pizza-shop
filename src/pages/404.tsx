import { ShieldX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 space-y-4">
      <h1 className="text-8xl font-extrabold tracking-widest">404</h1>
      <ShieldX className="h-16 w-16" />
      <h2 className="text-3xl font-bold">Página não encontrada</h2>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="font-medium text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}

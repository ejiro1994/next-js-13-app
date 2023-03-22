'use client'

import { DropdownMenu, DropdownMenuTrigger } from '@/ui/DropdownMenu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Button from './ui/Button'

type ThemeToggleProps = {}

const ThemeToggle: React.FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Sun className='transition-all scale-100 rotate-0 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
          <Moon className='absolute transition-all scale-0 rotate-90 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:slate-400 dark:hover:text-slate-100' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default ThemeToggle

import { getServerSession } from 'next-auth'
import Link from 'next/link'
import SignInButton from '@/components/SignInButton'
import { buttonVariants } from '@/ui/Button'
import SignOutButton from '@/components/SignOutButton'
import ThemeToggle from './ThemeToggle'

const Navbar = async ({}) => {
  const session = await getServerSession()

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 bg-white shadow-sm border-slate-300 dark:border-slate-700 backdrop-blur-sm/75 dark:bg-slate-900'>
      <div className='container flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link href='/' className={buttonVariants({ variant: 'link' })}>
          Ejiro Lennox
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        <div className='hidden gap-4 md:flex'>
          <ThemeToggle />
          <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href='/dashboard'
                className={buttonVariants({ variant: 'ghost' })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

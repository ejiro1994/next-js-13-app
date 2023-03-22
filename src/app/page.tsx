import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Paragraph from '../components/ui/Paragraph'
import LargeHeading from '../components/ui/LargeHeading'
import Grid from '@/components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Paragraph size={'default'}>hello</Paragraph>
      <Grid />
      {/* <LargeHeading>Heading</LargeHeading> */}
    </main>
  )
}

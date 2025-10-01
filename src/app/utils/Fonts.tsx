import { Oswald } from 'next/font/google'

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  variable: '--font-oswald',
  display: 'swap',
})
'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LogoProps {

}

export const Logo: React.FC<LogoProps> = () => {
  const router = useRouter()

  return(
      <Image 
        alt='Logo'
        className='hidden md:block cursor-pointer'
        height={100}
        width={100}
        src="/images/logo.png"
      />
  )
}
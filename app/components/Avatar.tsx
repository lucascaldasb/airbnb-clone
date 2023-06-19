'use client'

import Image from "next/image"

interface AvatarProps {

}

export function Avatar(props : AvatarProps){
    return(
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="Avatar"
          src="/images/placeholder.jpg"
        />
    )
}
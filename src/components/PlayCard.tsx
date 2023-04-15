import { Play } from 'lucide-react';
import Image from 'next/image';
export interface IPlayCard{
  title: string
}

export function PlayCard({title}:IPlayCard){
  return(
    <a href='#' className='group flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded overflow-hidden'>
      <Image src='/album.jpg' width={120} height={120} alt='Capa do album'/>
      <strong>{title}</strong>
      <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
        <Play/>
      </button>
    </a>
  )
}
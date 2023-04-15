import Image from 'next/image';

export interface IPlaylist{
  title: string
  content: string
}

export function Playlist({content,title}:IPlaylist){
  return(
    <a href='#' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
      <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album'/>
      <strong className='font-semibold'>{title}</strong>
      <span className='text-sm text-zinc-500'>{content}</span>
    </a>
  )
}
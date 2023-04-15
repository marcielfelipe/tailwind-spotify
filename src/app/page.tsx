import { Footer } from '@/components/Footer'
import { PlayCard } from '@/components/PlayCard'
import { Playlist } from '@/components/Playlist'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function Home() {
  const playlists=[
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
    {
      title: 'Top Brasil',
      content: 'Brasil: seu relatório diário das faixas mais tocadas..'
    },
  ]
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar/>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {
              playlists?.map(({title},index)=>(
                <PlayCard key={index} title={title} />
              ))
            }
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Marciel Felipe</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            {
              playlists?.map(({title,content},index)=>(
                <Playlist key={index} title={title} content={content} />
              ))
            }
          </div>
        </main>
      </div>

      <Footer/>
      
    </div>
  )
}

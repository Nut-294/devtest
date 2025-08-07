import SearchForm from '@/components/explore/SearchFrom'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row  gap-8 px-6 lg:px-20 lg:py-16 pt-0 pb-16 bg-white">
      
      {/* ซ้าย: ข้อมูล */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <SearchForm />
        <h1 className='text-blue-800 font-semibold text-3xl'>What Are You Looking For?</h1>
        <div>SEARCH</div>
        <div>SEARCH</div>
        <div>SEARCH</div>
        <div>SEARCH</div>
       
      </div>

      {/* ขวา: รูปภาพ */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/file.svg"
          alt="Hero"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full max-w-[600px] h-auto"
          priority
        />
      </div>
    </div>
  )
}

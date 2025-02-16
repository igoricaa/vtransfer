import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-screen h-screen px-side relative flex flex-col justify-center'>
      <Image
        src='/v-transfer-home.jpg'
        alt='hero'
        fill
        sizes='100vw'
        quality={100}
        className='object-cover -z-10'
      />
      <div className='flex flex-col gap-y-12 relative'>
        <h1 className='text-white text-6xl font-medium uppercase'>Discover</h1>
        <div className='relative w-[50vw] aspect-[1177/111]'>
          <Image src='/v-transfer-text.svg' alt='hero' fill sizes='800px' />
        </div>
        <div className='absolute -bottom-[25vh]'>
          <p className='text-white text-4xl'>Where comfort meets class.</p>
          <p className='text-white text-4xl mt-4'>Belgrade, Serbia.</p>
        </div>
      </div>
    </main>
  );
}

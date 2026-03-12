"use client";
import ExploreBtn from '@/components/ExploreBtn'

const Home = () => {
  return (
    <section>
      <h1 className='text-center'> The Hub for Every Developer <br /> You Cannot Afford To Miss</h1>
      <p className='text-center mt-2'>Hackathons, Meetups and so much more. All in one place</p>
      <ExploreBtn />

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
      </div>
    </section>
  )
}

export default Home
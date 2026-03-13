'use client'

import Image from 'next/image'
import Icon from "../public/icons/arrow-down.svg"
import posthog from 'posthog-js'

const ExploreBtn = () => {
  const handleClick = () => {
    posthog.capture('explore_events_clicked')
  }

  return (
    <button type='button' id="explore-btn" className='mt-7 mx-auto' onClick={handleClick}>
        <a href="#events">Explore Events

        <Image src={Icon} width={24} height={24} alt='arrow-down' />
        </a>
    </button>
  )
}

export default ExploreBtn
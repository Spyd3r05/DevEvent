'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

const FeaturedEventsTracker = ({ eventCount }: { eventCount: number }) => {
  useEffect(() => {
    posthog.capture('featured_events_viewed', {
      event_count: eventCount,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default FeaturedEventsTracker

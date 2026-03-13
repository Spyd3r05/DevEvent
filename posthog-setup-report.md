<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. PostHog was initialized using `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), which provides automatic pageview tracking, session replay, and exception capture. A reverse proxy was configured in `next.config.ts` to route PostHog ingestion through `/ingest`, improving ad-blocker resilience and data accuracy. Three custom events were instrumented across key user interaction points in the app, covering the full event discovery funnel from homepage view through to event card click-through.

| Event Name | Description | File |
|---|---|---|
| `featured_events_viewed` | User viewed the featured events section on the homepage (top of conversion funnel) | `app/page.tsx` (via `components/FeaturedEventsTracker.tsx`) |
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details (includes `event_title`, `event_slug`, `event_location`, `event_date` properties) | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/340227/dashboard/1355188)
- **Insight**: [Event Discovery Funnel](https://us.posthog.com/project/340227/insights/EmV46Lur) — Ordered conversion funnel: viewed featured events → clicked explore → clicked event card
- **Insight**: [Event Engagement Overview](https://us.posthog.com/project/340227/insights/CYQ61CoY) — Daily trend of all three events side-by-side
- **Insight**: [Unique Users Exploring Events (DAU)](https://us.posthog.com/project/340227/insights/7YEFvTVc) — Daily unique users who clicked Explore Events
- **Insight**: [Most Clicked Events Breakdown](https://us.posthog.com/project/340227/insights/4X6yXH5S) — Event card clicks broken down by event title
- **Insight**: [Event Card Click-Through Rate](https://us.posthog.com/project/340227/insights/EgOXBkI3) — Weekly view of page views vs. card clicks to gauge listing-to-detail conversion

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

# PostHog post-wizard report

The wizard has completed a deep integration of your Next.js Dev Events project. PostHog has been configured using the modern `instrumentation-client.ts` approach (available in Next.js 15.3+), with a reverse proxy setup for improved reliability against tracking blockers. The integration includes automatic pageview tracking, session recording, error tracking, and custom event capture for key user interactions.

## Integration Summary

### Files Created
- `.env.local` - Environment variables for PostHog API key and host
- `instrumentation-client.ts` - Client-side PostHog initialization

### Files Modified
- `next.config.ts` - Added reverse proxy rewrites for PostHog ingestion
- `components/ExploreBtn.tsx` - Added event tracking for Explore button clicks
- `components/EventCard.tsx` - Added event tracking for event card clicks with event details
- `components/Navbar.tsx` - Added event tracking for navigation link clicks

## Events Tracked

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the Explore Events button to scroll to the events section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details | `components/EventCard.tsx` |
| `nav_home_clicked` | User clicked the Home link in the navigation bar | `components/Navbar.tsx` |
| `nav_events_clicked` | User clicked the Events link in the navigation bar | `components/Navbar.tsx` |
| `nav_create_event_clicked` | User clicked the Create Event link in the navigation bar | `components/Navbar.tsx` |
| `logo_clicked` | User clicked on the Dev Events logo in the navigation bar | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/275293/dashboard/958145) - Main dashboard with all insights

### Insights
- [Event Card Clicks Over Time](https://us.posthog.com/project/275293/insights/JYEBHYFE) - Track how many users are clicking on event cards
- [Explore to Event Card Funnel](https://us.posthog.com/project/275293/insights/mPnFM2Rj) - Conversion funnel from Explore button to event card clicks
- [Navigation Clicks Breakdown](https://us.posthog.com/project/275293/insights/UIewyTo9) - Breakdown of navigation link clicks
- [Top Clicked Events](https://us.posthog.com/project/275293/insights/c2aeeW8x) - Which events are getting the most clicks
- [User Engagement Overview](https://us.posthog.com/project/275293/insights/7v98WKQ7) - Total counts of all tracked user interactions

## Getting Started

1. Run your development server with `npm run dev`
2. Interact with your app to generate events
3. View your analytics at the dashboard link above

## Additional Features Enabled

- **Automatic Pageview Tracking**: PostHog will automatically track page views
- **Session Recording**: User sessions are recorded for replay analysis
- **Error Tracking**: Unhandled exceptions are automatically captured via `capture_exceptions: true`
- **Reverse Proxy**: All PostHog requests are proxied through `/ingest` to avoid ad blockers

# Student Dashboard

A high-fidelity, dark-mode learning dashboard built for the **Frontend Intern Challenge: Next-Gen Learning Dashboard**.

The project focuses on a premium SaaS-style student experience: server-rendered Supabase data, a responsive Bento grid, smooth Framer Motion interactions, animated progress indicators, graceful loading/error states, and a modular codebase ready for Vercel deployment.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database/BaaS:** Supabase with PostgreSQL
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** `clsx`, `tailwind-merge`
- **Deployment target:** Vercel

## Features

- Dark-only futuristic dashboard UI
- Slim responsive sidebar with animated active state
- Desktop sidebar collapse that resizes the main dashboard content
- Tablet icons-only navigation
- Mobile bottom navigation
- Bento dashboard layout
- Hero tile with greeting and learning streak
- Dynamic course tiles fetched from Supabase
- Dynamic Lucide icon rendering from the `icon_name` database field
- Animated progress bars from `0%` to the stored course progress
- Activity tile with an animated mock weekly chart
- Skeleton loading route
- Graceful error route with retry action
- Semantic HTML using `nav`, `main`, `section`, `article`, and `aside`

## Project Structure

```text
app/
  error.tsx
  globals.css
  layout.tsx
  loading.tsx
  page.tsx

components/
  course/
    course-card.tsx
    progress-bar.tsx
  dashboard/
    activity-tile.tsx
    dashboard-grid.tsx
    dashboard-shell.tsx
    hero-tile.tsx
  sidebar/
    sidebar.tsx
    sidebar-item.tsx
  ui/
    error-state.tsx
    skeleton-card.tsx

lib/
  supabase/
    server.ts
  utils.ts

types/
  course.ts
```

## Architecture

The app keeps data fetching server-first and interaction client-focused.

`app/page.tsx` is an async Server Component. It creates the Supabase server client, fetches rows from the `courses` table, and passes the typed result into the dashboard UI.

`components/dashboard/dashboard-shell.tsx` is a small Client Component that owns interactive layout state, such as the collapsible sidebar. This lets the main content resize when the sidebar opens or closes.

Framer Motion is isolated to Client Components that need animation:

- `Sidebar`
- `SidebarItem`
- `DashboardGrid`
- `HeroTile`
- `ActivityTile`
- `CourseCard`
- `ProgressBar`

The shared course data shape lives in `types/course.ts`:

```ts
export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}
```

## Supabase Setup

Create a free Supabase project and run this SQL in the Supabase SQL editor:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamp default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 84, 'BookOpen'),
  ('System Design Basics', 62, 'Brain'),
  ('Machine Learning Foundations', 47, 'Laptop'),
  ('TypeScript Mastery', 91, 'Code');
```

The app expects these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Use `.env.example` as the template and create your own `.env.local`.

Important: `.env.local` is intentionally ignored by git and should not be committed.

## Data Flow

```text
Supabase PostgreSQL
  ↓
lib/supabase/server.ts
  ↓
app/page.tsx Server Component
  ↓
DashboardShell
  ↓
DashboardGrid
  ↓
CourseCard components
```

No course data is hardcoded in the UI. Course cards are generated from the Supabase `courses` table.

## Animation Decisions

The challenge requires performant motion with no layout shifts, so animations use transform and opacity-based techniques:

- Bento tiles stagger in with `opacity` and `y` transform.
- Cards scale subtly on hover with spring physics.
- Progress bars animate with `scaleX`, not `width`.
- Activity bars animate with `scaleY`.
- Sidebar active navigation uses Framer Motion `layoutId`.
- Hover glow effects animate opacity instead of changing layout.

Example motion style:

```ts
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

## Responsive Behavior

- **Desktop greater than 1024px:** full Bento grid, visible sidebar, collapsible sidebar, main content resizes with sidebar width.
- **Tablet 768px to 1024px:** sidebar becomes icons-only, grid uses two columns.
- **Mobile below 768px:** navigation moves to a bottom bar and the Bento grid stacks into one column.

## Loading and Error Handling

`app/loading.tsx` renders skeleton cards that match the final dashboard layout and use a subtle pulse animation.

`app/error.tsx` renders a clean error state with a retry button if Supabase data fetching fails.

## Local Setup

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```bash
cp .env.example .env.local
```

Add your Supabase values:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verification

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deployment

Deploy the project to Vercel.

In Vercel project settings, add:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Then submit:

- Public GitHub repository URL
- Live Vercel deployment URL

## Requirement Checklist

- Next.js App Router: implemented
- TypeScript: implemented
- Tailwind CSS: implemented
- Supabase PostgreSQL: implemented
- Server Component data fetching: implemented
- Framer Motion: implemented
- Lucide React icons: implemented
- Dynamic course cards: implemented
- Animated progress bars: implemented
- Bento grid layout: implemented
- Dark-only futuristic theme: implemented
- Sidebar navigation: implemented
- `layoutId` active nav animation: implemented
- Loading skeletons: implemented
- Error state with retry: implemented
- Responsive desktop/tablet/mobile layout: implemented
- Modular components: implemented
- `.env.example`: included
- `.env.local` ignored: implemented

## Challenges Faced

- Keeping the UI animated without layout jank required using `scaleX`, `scaleY`, opacity, and transform-based movement instead of layout-changing animations.
- The sidebar needed shared state with the main dashboard shell so the content could resize correctly when the sidebar collapsed or expanded.
- The visual design needed to feel futuristic without becoming noisy, so the dashboard uses restrained gradients, glass surfaces, and high-contrast content layers.

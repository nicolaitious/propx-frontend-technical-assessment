
## Getting Started

First, install the necessary dependencies for the project to run:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Lastly, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions

* Each component is available in their own route, as specified in the instructions, but I also included them both in the root directory, in order to show how the components behave together in a more real use case.

* Implemented timeouts (with different delay times) when fetching the data from the imaginary server, in order to show dynamic rendering in the root page (React Suspense with fallback a component) when rendering both tables at the same time.

* Made a different structure and design for the tables in mobile, showing the data as "cards" rather than actual table rows.

* I made the Table component with pagination as generic as possilbe, being able to receive the following custom components:
    - Mobile Body Component (optional)
    - Header Component
    - Body Component
    - Mobile TableRows Skeleton Component (optional)
    - Table Rows Skeleton Component (optional)
  apart from a custom fetch function, initial data, and items per page.

* I initially considered using server-side fetching for the pagination by updating the searchParams with each page change and having the Server Components detect the updates, but being a more real use case of these components to be coexisting with others, I opted for a hybrid approach instead. First data fetches happen on the server-side, and page changes trigger client-side fetches. This avoids modifying the searchParams, which I found could get confusing when multiple components are doing it at the same time.

* In order to do this I had to make a client component for each table, 'DailyUsersTable' and 'AllTimeUsersTable', apart from their page server components, in order to pass the table sub-components and functions as props to the Table component (Next won't let you do this from a server component).

* I took the pagination logic from a Nextjs example available on their website, didn't do it myself.

* Had to set reactStrictMode to false in next.config.mjs, in order to prevent useEffect hook to execute twice on render.

**This is a [Next.js](https://nextjs.org/) project in TypeScript** with the following stack:

- [React](https://reactjs.org/) (frontend)
- [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)
- [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend).
- [NextAuth.js](https://next-auth.js.org/) for authentication.
- [PostgreSQL](http://postgresql.org/) as the database of choice.

Ensure you
- Create a PostgreSQL database
- Create a separate Google OAuth application

## Getting started

### 1. Download and install dependencies

Install npm dependencies:

```
npm install
```

</details>


### 2. Create and seed the database

```
npm run db-migrate
```

Run the following command to create your PostgreSQL database. This also creates tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 3. Configuring .env file

The resulting section in the .env file might look like the following example in .env.sample


### 4. Configuring your authentication provider

You need to configure the [Google](https://next-auth.js.org/providers/google) authentication provider from NextAuth.js.

[How you can configure the Google authentication provider](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)


</details>


### 5. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

Root layout `app/[locale]/layout.tsx`.

Home page `app/[locale]/page.tsx`.

More information about folder structure at src/app/README.md


## Learn More

App router
[App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)

Project structure
[Project Structure](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

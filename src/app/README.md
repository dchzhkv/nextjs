### Pages and Layout

The App Router inside Next.js 13 introduced new file conventions to easily create pages, shared layouts, and templates. This page will guide you through how to use these special files in your Next.js application.

[Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)
A page is UI that is unique to a route. You can define pages by exporting a component from a page.js file. Use nested folders to define a route and a page.js file to make the route publicly accessible.

[Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)
A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.


### App Routing Conventions
[Routing files](https://nextjs.org/docs/getting-started/project-structure#routing-files)

layout         -    A layout is UI that is shared between routes.

page	         -	  Page

loading	       -    Loading UI

not-found	     -    Not found UI

error	         -    Error UI

global-error	 -    Global error UI

route	         -   	API endpoint

template	     -   	Re-rendered layout

default	       -  	Parallel route fallback page


[Nested Routes](https://nextjs.org/docs/getting-started/project-structure#nested-routes)

folder	       -    Route segment

folder/folder  -    Nested route segment


[Dynamic Routes](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes)

[folder]	     -    Dynamic route segment

[...folder]	   -    Catch-all route segment

[[...folder]]	 -    Optional catch-all route segment


[Route Groups and Private Folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders)

(folder)	     -    Group routes without affecting routing

_folder	       -    Opt folder and all child segments out of routing


[Parallel and Intercepted Routes](https://nextjs.org/docs/getting-started/project-structure#parallel-and-intercepted-routes)

@folder	       -    Named slot

(.)folder	     -    Intercept same level

(..)folder	   -    Intercept one level above

(..)(..)folder -    Intercept two levels above

(...)folder	   -    Intercept from root


### Nesting Layouts

[Nesting Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)

By default, layouts in the file hierarchy are nested, which means they wrap child layouts via their children prop.


### When to use Server and Client Components?

[When to use Server and Client Components?](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components)

If you want to create a client-side component, add 'use client' at the beginning of the file. By default, components are server-side.

### How to add page

1. Create a new folder inside [locale] with a sensible name. If it's another common page, create a new folder inside [locale]/(pages).

2. Inside the new folder, create a file named page.tsx.

3. If you need multiple pages, create a folder for each and add a layout to the root folder that uses other folders as children. For example, refer to [locale]/(auth).

4. For each folder, you can add layout, page, template, and error files.
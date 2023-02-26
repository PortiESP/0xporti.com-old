
# API docs

----------------------------------------------------------

## Endpoints

> [`/api/blog/posts`](#endpoint-apiblogposts-docs) ~ Server the metadata about the blog posts

----------------------------------------------------------

## Endpoint `/api/blog/posts` docs

This endpoints server an array of objects with the *metadata* of the posts of the blog, (*the content is not served*)

> *Query endpoint*
> ```sh
> curl https://www.porti.dev/api/blog/posts
> ```

The fields of the **post object** are:
```js
{
    id: "my-example-post",            // Unique ID of the post
    category: ["Info", "Tips"],       // Post categories
    title: "My post title",           // Title of the post
    description: "This is an example post for the API docs",  // Post description
    thumbnail: "",                    // This is ONLY the filename (and extension) of the image in the /public/assets/blog/thumnails/* path    
    label: {                          // Displays a label on the thumnail
        text: "New post!"                   // Text shown on the label
        style: {}                           // Custom style
    }    
    keywords: ["something", "extra"], // Post keywords
    hidden: "false",                  // Show post on the /blog page
    lastUpdate: ""                    // Date of the last update (DD/MM/YYYY) 
    author: "",                       // Authon of the post
    hidden: "false"                   // Hides the post at the blog page but not at the API
    lastUpdate: "31/12/2022"          // Last update date (DD/MM/YYYY)
    disableThumbnail: true            // Dont show thumbnail on the post
}
```

### Parameter filters

We can set some parameters to filter the output data (*string fields are **not** case sensitive*)

The available filters are the following

> **Metadata filters**
> 
> - `id`  Match exact ID
> - `title`  Match substring in title
> - `description`  Match substring in description
> - `category`  Match category (*use this parameter again to filter by 2 or more categories*)
> - `keywords`  Match substring keywords
> - `author`  Match substring of the author
> - `hidden`  *true* or *false*
> - `date`  Match exact date of *lastUpdate* (DD/MM/YYYY)
> - `any` Macth substrings in any of the previous fields
  
> **Other filters**
> 
> - `olderthat`  Match posts with *lastUpdate* older or exact date than the query date (DD/MM/YYYY)
> - `youngerthat`  Match posts with *lastUpdate* younder or exact date than the query date (DD/MM/YYYY)
> - `order`  Return the output data order, default order from oldest to newest, supported values:
>   - `recent`  Return posts from newest to oldest
> - `limit`  Number of posts returned by the API

### Example URLs
```sh
# Query API by EXACT ID
https://porti.dev/api/blog/posts?id=website-steps
```
```sh
# Query API by title and category
https://porti.dev/api/blog/posts?title=string&catergory=command
```
```sh
# Query API by multiple categories
https://porti.dev/api/blog/posts?category=docs&category=cibersecurity
```
```sh
# Query by any field with the given substring
https://porti.dev/api/blog/posts?any=command
```
```sh
# Query by EXACT date
https://porti.dev/api/blog/posts?date=26/08/2022
```
```sh
# Query by reference date
https://porti.dev/api/blog/posts?olderthan=26/08/2022
```
```sh
# Query by reference date and ordered from the most recent post
https://porti.dev/api/blog/posts?olderthan=26/08/2022&order=recent
```
```sh
# Set query limit to return up to X posts
https://porti.dev/api/blog/posts?any=command&limit=4
```
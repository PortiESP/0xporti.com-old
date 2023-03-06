
# 0xPorti 🌐

This site is available at [0xPorti.com](www.0xporti.com)

--------------------------------------------------------------------------

## How to add new posts 🆕

### Post content 📄
Posts contents are stored at `./app/blog/post/(posts)/*`

### Post thumbnail 🖼️
We should have a thumbnail for our post, thumbnails are stored at `./public/assets/blog/thumbnails/*`

> It is recommended to save thumnails as `.svg` files and a size of (900x300)

### Post medatata & tags 🏷️
For a post to appear in the `/blog` page, they need to de declared at the *metadata* file at `./pages/api/blog/postData.js`

> Any tags should have a style defined in the `./pages/api/blog/categoriesStyle.js` files unles we want the default styles to be applied

---------------------------------------------------------------------------

## API

This project uses the Next.JS 13 `/api` directory to store dynamic contents of the site

> ⚠️ The API has no endpoint, the data is imported directly from the API path

- `/api/blog/tagsStyles` → The posts *tags* styles are defined here, if no styles is defined, a default gray style is applied
- `/api/blog/postsData` → The posts metadata is defained here. (**The key value should match with the page path**), then fill the required fields of the post (*additional info if commented in the `/api/blog/postsData` file*)
- `/api/blog/featuredPost` → This file will select the features post that is shown in the aside, the only part of the file that should be changed is the post key
- `/api/about/skills` → Information shown as part of the *skills* section of the `/about` page
- `/api/about/work` → Information shown as part of the *work* section of the `/about` page
- `/api/resources/sections` → Sections and items shown in the `/resources` page
- `/api/headMetadata` → Values of the tags that will be added inside the `<head></head>` tag

---------------------------------------------------------------------------

## Components

In this project is use my own external components (*all puublished at [my github](https://github.com/PortiESP)*)

- [**BubbleScrollBar**](https://github.com/PortiESP/BubbleScrollBar) → Replaces the default scrollbar with one based in sections
- [**MarkdownWidgets**](https://github.com/PortiESP/Notion2MarkdownWidgets) → React component for styled tags
- [**GithubButton**](https://github.com/PortiESP/GithubButton) → Github button that redirects to a github user page, also shows a bubble with user the GH public repos
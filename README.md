# ReackerNews

## Project Overview

Reackernews is a Hackernews Clone project using ReactJS as UI Framework. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project fetching data from [Hackernews API](https://github.com/HackerNews/API)

## Packages

- ReactJS (Framework)
- React Router (For easy navigating page)
- React Bootstrap (React UI Component base on bootstrap 4)
- Axios (HTTP Client request for fetching data)
- url (url string parser)

## Folder Structure

```
reackernews/
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    components/
      Comment.js
      Comments.js
      Header.js
      Link.js
      Loader.js
      Story.js
    hooks/
      storiesFetcher.js
      storyFetcher.js
      userFetcher.js
    pages/
      Home.js
      PageNotFound.js
      ShowStories.js
      StoryDetail.js
      UserDetail.js
    router/
      AppRouter.js
    utils
      apis.js
      helper.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
  .gitignore
  package.json
  README.md
  yarn.lock
```

## Feature
- Display Top Stories
- Display New Stories
- Display Best Stories
- Display Ask Stories
- Display Show Stories
- Display Job Stories
- Display User Detail
- Display Story Detail
- Pagination

## Build Setup

Requires Node.js 12+

```
# if you dont have yarn, first install yarn
npm install -g yarn

# install dependencies
yarn

# serve in dev mode on local machine
yarn start

# build for production
yarn build
```

## License

MIT
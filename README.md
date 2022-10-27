<div  style='display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-around; gap: 1rem'>
  <div>
    <img src='https://toolhub-rms.vercel.app/og-image.jpg' width='200' height='200' alt='Toolhub RMS' />
  </div>
  <div>
    <h1>Toolhub Record Management System</h1>
    <p>A dedicated web application for editing <a href="https://toolhub.wikimedia.org/" target='_blank'> Toolhub </a> records in a fun and easy way</p>
    <p>Project link - (<a href='https://toolhub-rms.vercel.app' _target='blank'>https://toolhub-rms.vercel.app</a>)
    </p>
  </div>
</div>

## 1. What this is about

As  mentioned above, this is a management system which helps you find useful tools in WikiMedia's Toolhub, which are particularly used to work with data on WikiMedia. You can explore these tools, as well as edit them, provided they have missing or incorrect Information. This will go a long way to aid in the comprehensibility of the tools, as well as increase productivity as a result.
<br />

For now, it contains mock data, and makes no calls to external APIs (for demo purposes). Soon coming will be a full fledge record management system, with improved User Interfaces and Experience, as well as it will be much more dynamic features and auth services.

## 2. Setup Instructions

- run with local server by:
  - First ensure you have atleast node.js 16 installed
  - Then, install the dependencies by running:

  ```bash
  npm install
  # or
  yarn install
  ```

  - Then run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- You can also run the application direction by entering the project link into your preferred browser

## 3. Core Technology and Libraries Used

- ### **Next.js**

It is a react framework built as an open-source on top of React library. It is created by vercel. NextJS framework creates fast search engine optimize react applications with zero configuration. A traditional react application is rendered client-side where the browser starts with a shell of an HTML page lacking any rendered content from which the browser extracts the JS file which consists of ReactJS files to display the content to the webpage. NextJS helps you create production-ready apps and provides you the best experience with its features like server-side rendering, route pre-fetching, smart bundling, etc.

  [Know more about Next.js](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
  [See why Next.js is far better than React](https://www.geeksforgeeks.org/nextjs-vs-reactjs-which-one-to-choose/#:~:text=React%20is%20a%20library%2C%20not,learn%20without%20prior%20ReactJS%20knowledge)

- ### **Chakra UI**

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

  [Read More](https://chakra-ui.com/)

- ### **Jest**

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
It is perfect for Unit Tests
  [Read More](https://jestjs.io/)

## 4. System requirements

- For running the application with the project link, any modern browser will do the job
- For running the application locally, a system with atleast node.js 16 should be install, and at least npm 8

## 5. Summary of the user work flow

Using the project link (`https://toolhub-rms.vercel.app`) as base url, which is accessible for everyone (replace with `http://localhost:3000/` if you are working locally):

### links explained

- #### Nav Links/Main Pages

  - [`/`](https://toolhub-rms.vercel.app/) is a link to the homepage, where the user can get more information about the tool, and what to do for newbies.
  It also has a section which presents to us tools with incomplete information, where we can either explore or edit the tool.
  <br />

  - [`/leaderboard`](https://toolhub-rms.vercel.app/leaderboard) is a link to a page which shows the rankings of all contributors in the system (that is, those who have at least edited a tool once, it counts as a contribution)
  <br />
  - [`/leaderboard`](https://toolhub-rms.vercel.app/dashboard) is a a link to a page which presents the user with statistics and analytics of his activities in miniature and the system at large. It has key metrics like Total number of Tools in the records, number of tools with missing information, percentage of tools with missing information compared with the total number of tools in the records, number of tools edited using this record management tool

- #### Subordinate Views

  - [`/tools`](https://toolhub-rms.vercel.app/tools) is a a link to a page which displays all tools in the system by category. A user can then browse the tools by category, as well as explore and edit these tools
  <br />

  - [`/tools/preview/:tool-name`](https://toolhub-rms.vercel.app/tools/preview/tool-1) is a a link to a page with route parameter being the unique tool name, (an id could be used in the future).
  We get to see a broad description about the tool, the authors, and other information such as links to tool, repository, bug tracker, etc
  <br />

  - [`/tools/edit/:tool-name`](https://toolhub-rms.vercel.app/tools/edit/tool-1) is a link to a page with route parameter being the unique tool name, (an id could be used in the future).
  We get to edit the tool here, especially adding missing information, or adding to existing one, provided its validity can be verified.
  <br />

  - [`/search?q=somequery`](https://toolhub-rms.vercel.app/search?q=tool) is a link to a page which display the results of any search made (if found).

## 6. Features to work on

- improve UI/UX
- integrate backend APIs
- integrate auth services
- create more test cases
- large scale deployment


# ![Recruiterflow](./public/images/recruiterflow.png)

## Recruiterflow Assignment

### Tasks:

- Create a list of items and display them to look like cards.
- Use mock APIs to get the data.
- Keep a delete icon or a button inside each card.
- When the delete button is pressed, the corresponding card has to be removed from the UI (it's a plus if you use an API).The UI has to be re-arranged on each delete (kudos for using transition/animation)
- Place new cards in the UI on click of an add icon or button.

### Stack

- Vite (React)
- TailwindCSS (For CSS)
- Framer Motion (For Animations)
- Redux (For Global State Store and Fetch API Data using RTK)
- React Router Dom (Routes)
- Radix (For Radix Primitives to use accessiblity optimised components)

### How it works

1. On the homepage you can look at the news you post and world business news section.
2. Click on Post a News button to create a new post.
3. The posts create are stored in local storage so they persist.
4. You can remove your posts by clicking the delete button.
5. You can read world business news by clicking Read More button and it will open the particular news.

### How to Run

#### Production

The app is hosted on vercel and can be accessed through the domain <https://recruiterflow.harshsandhu.com>

#### Local Server

Use the following steps to run the app on local server.

1. Install Dependencies using `npm install`
2. Run the dev command `npm run dev` to start a local development server.
3. To run tests use `npm run test` and to view test reports use `npm run test:ui`

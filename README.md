# Testing @prisma/nuxt module

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the dev server and type in `y` to agree to all the prompts:

   ```bash
   npm run dev
   ```

3. Go to http://localhost:3000 and check the browser console for the following error:

    ```bash
    prisma.mjs:1 Uncaught SyntaxError: The requested module '/_nuxt/node_modules/@prisma/client/index-browser.js?v=4086a8c0' does not provide an export named 'PrismaClient' (at prisma.mjs:1:10)
    ```
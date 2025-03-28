# Main actions

## Sources

* [youtube](https://youtu.be/GOHUi53UDLc?si=qyUNBcYyx4UAqLFY)
* [expressjs.com](https://expressjs.com/ru/starter/hello-world.html)

## Main command

* `public/index.html`:
  *  press bookmark `Run and Debag` or press keys `fn + F5`
    * see `localhost:3000`

## Starter

* `npm init -y` and `npm i express`
  * `package.json`
* create
  * `.gitignore`
  * `public/`
    * `client.js`
    * `index.html`:
      *  press bookmark `Run and Debag` or press keys `fn + F5`
        * `localhost:3000`
          * `Hello World!` (see `server.js`)
* git commit -m "Hello world!"

## Express.static

* change `server.js` and `public/index.html`
  * `public/index.html`:
    *  press bookmark `Run and Debag` or press keys `fn + F5`
      * `localhost:3000`
        * `11. Deploy on server`
      * `http://localhost:3000/api/weather`
        * `{"temperature":26,"status":"cloudy"}`
* `git commit -m "06:11 express.static"`

## Github repo

* press bookmark `Source control`
  * `CHANGES`
    * write `init` and press `Commit`
  * `GRAPH`
    * `Publish branch`
  * Publish to GitHub `public` repository
* go to <https://github.com/AleksandrKrasovski/11>
  * ok

## Vercel

* <https://vercel.com/alivs-projects>
  * `Add new...` 
    * `Project`
  * connect with GitHub
  * `Import Git Repository` named `11`
  * <https://fullstackjs-express.vercel.app> works
  * <https://fullstackjs-express.vercel.app/api/weather> does not work
    * <https://stackoverflow.com/questions/72133185/deploy-an-express-server-that-uses-express-static-to-serve-a-build-folder-to-ver>
      * create `vercel.json`
      * git commit `vercel and vercel.json`
      * push
  * <https://fullstackjs-express.vercel.app/api/weather> work
  * add `server.js` by `currency`
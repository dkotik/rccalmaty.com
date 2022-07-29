# Russian Bible Church Website

Built using `astro.build` static site generator.

- [ ] Get an HTTPS certificate for .com redirect.
- [ ] Recut CSS.
- [ ] Use `import i18next, { t } from "i18next";` to translate contact form.
- [ ] Github actions supports cron: see https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-first-deployment-with-github_token
- [ ] https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule
  ```
  schedule:
      - cron: "22 22 * * *"
  ```

## DNS Configuration

Old A record pointed to `195.201.40.193`.

- **russianbiblechurch.org A** Record pointing to Github servers IP set
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **russianbiblechurch.org AAAA** Record pointing to Github servers IPv6 set
  ```
  2606:50c0:8000::153
  2606:50c0:8001::153
  2606:50c0:8002::153
  2606:50c0:8003::153
  ```
- **www.russianbiblechurch.org CNAME** Record to redirect traffic to the apex domain
  ```
  russianbiblechurch.org.
  ```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:8081`  |
| `npm run build`   | Build your production site to `./docs/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

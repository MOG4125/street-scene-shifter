# GHETTOSLOP

## Host on GitHub Pages

The `docs` folder is a complete static website with both photos included. It needs no server and works on a repository URL or a custom domain.

1. Connect this project to GitHub using Lovable's **+ → GitHub → Connect project**, or upload the project to your repository.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your branch (usually **main**) and the **/docs** folder, then click **Save**.
5. GitHub will show the website address on that page when deployment finishes.

To update the static website after changing its design, run `bun run export:pages` and push the updated `docs` folder. The original street photo is already included in that folder. The gang animation is CSS-only, and the email opens your email app. Fonts load from Google Fonts with a local fallback.

## Lovable development

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

# VoyagerUi

This repository was built as a POC to handle a package-based monorepo with pnpm workspaces and storybook for components preview.

Stack used:
- React
- Typescript
- [Storybook](https://storybook.js.org/docs/get-started)
- [Tailwindcss](https://tailwindcss.com/)
- [cva](https://cva.style/docs)
- [clsx](https://www.npmjs.com/package/clsx)
- [nx](https://nx.dev/)

The idea of using nx was to leverage it for the build system and of its [generators](https://nx.dev/features/generate-code), even though it was not implemented.

## Getting started

1. Install dependencies

  ```bash
  pnpm install
  ```

2. Running the **storybook**

  ```bash
  pnpm sb:run
  ```

## Publishing to npm repository

1. Add the `.npmrc` content. Example:

  ```
  @voyager-ui:registry=https://registry.npmjs.org/
  //registry.npmjs.org/:_authToken={{ your_token }}
  ```

2. Publish to registry

  ```bash
  // publish tailwind package
  $ pnpm tailwind:publish

  // publish core package
  $ pnpm core:publish
  ```

> Make sure to create an organization as *voyager-ui*, or to change the references to this organization name to publish under whatever name you like.

## Using the packages in another app

1. Install the packages
   
  ```bash
  $ pnpm add @voyager-ui/tailwind @voyager-ui/core
  ```
  

2. Add the following to your `tailwind.config.js`

  ```js
  import voyagerTailwind from "@voyager-ui/tailwind";

  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./src/**/*.{ts,tsx,html,js}",
      voyagerTailwind.content(),
    ],
    theme: {
      ...voyagerTailwind.theme(),
      extend: {},
    },
    plugins: [],
  };
  ```

## Further reading:

- [Pnpm Workspace](https://pnpm.io/workspaces)
- [Adding Nx to NPM/Yarn/PNPM Workspace](https://nx.dev/recipes/adopting-nx/adding-to-monorepo)

## Further enhancing:

- [Add semantic release for automating packages release](https://github.com/semantic-release/semantic-release);
- Add [husky](https://typicode.github.io/husky/) and/or [commitlint](https://commitlint.js.org/) for commit linting and enhanement;
- [Add chromatic for visual and interaction testing of the UI components](https://www.chromatic.com/)

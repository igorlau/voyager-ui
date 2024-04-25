/// <reference types='vitest' />
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/packages/core",

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.lib.json"),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../dist/packages/core",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "core",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es"],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}")
          .filter((file) => !file.includes(".stories."))
          .map((file) => [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            path.relative(
              "src",
              file.slice(0, file.length - path.extname(file).length)
            ),
            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/core",
      provider: "v8",
    },
  },
});

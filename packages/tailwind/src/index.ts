interface TailwindContent {
  /**
   * Path to `node_modules` where `@voyager-ui` packages are installed
   *
   * ===============================================
   *
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * const voyagerTailwind = require("@voyager-ui/tailwind");
   * // esm
   * import voyagerTailwind from "@voyager-ui/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     voyagerTailwind.content({ base: "../src/" })
   *   ],
   *   theme: [
   *     // ...
   *     ...voyagerTailwind.theme()
   *   ]
   * }
   * ```
   *
   * @default "./"
   */
  base?: string;
}

function content({ base = "./" }: TailwindContent = {}) {
  const path = "node_modules/@voyager-ui/**/*.{ts,tsx,html,js}";

  const endsWithSlash = base.endsWith("/");

  if (!endsWithSlash) {
    return [base, path].join("/");
  }

  return [base, path].join("");
}

const theme = {
  colors: {
    primary: {
      dark: "#917bb8",
      main: "#9222dd",
      light: "#fb7aff",
      container: "#f3e9f1",
    },
    secondary: {
      dark: "#a2b87b",
      main: "#6ddd22",
      light: "#7eff7a",
      container: "#e9f3eb",
    },
  },
};

export default {
  content,
  theme,
};

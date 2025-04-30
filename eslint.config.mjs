import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "storybook/recommended"],
    ignorePatterns: ["/lib/proto-buf/tribune/**"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      curly: ["error", "all"],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["sibling", "parent"], "index"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "prefer-template": "warn",
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  }),
]

export default eslintConfig

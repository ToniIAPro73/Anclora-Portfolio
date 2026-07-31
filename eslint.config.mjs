import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "prefer-const": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "eqeqeq": ["warn", "always"]
    }
  },
  {
    files: ["src/app/page.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  {
    files: [
      "src/components/ui/*chart*.tsx",
      "src/components/ui/advanced-*.tsx",
      "src/components/ui/animated-counter.tsx",
      "src/components/ui/interactive-3d-gallery.tsx"
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off"
    }
  },
  {
    files: ["src/lib/performance.ts", "scripts/**/*.ts", "src/hooks/use-contact-form.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-console": "off"
    }
  },
  {
    files: ["src/hooks/use-gallery.ts", "src/hooks/use-toast.ts", "src/data/translations.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "examples/**",
      "archive/**",
      "skills",
      "coverage/**",
      "scripts/run-eslint.cjs",
      "scripts/copy-standalone.cjs",
      "scripts/check-next-swc-version.cjs"
    ]
  }
];

export default eslintConfig;

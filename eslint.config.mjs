import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: ["dist/**", ".next/**", "next-env.d.ts"],
  },
];

export default eslintConfig;

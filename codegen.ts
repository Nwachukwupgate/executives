import { CodegenConfig } from "@graphql-codegen/cli";

console.log(
  "--------------------------------------",
  process.env.VITE_APP_BACKEND_SCHEMA_URL
);

const Config: CodegenConfig = {
  overwrite: true,
  schema: "https://ghm-server.vercel.app/graphql", // use import.meta.env for Vite
  documents: ["./src/graphql/**/*.graphql"],
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default Config;

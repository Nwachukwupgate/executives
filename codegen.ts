// eslint-disable-next-line import/no-import-module-exports
import { CodegenConfig } from "@graphql-codegen/cli";

console.log(
  "--------------------------------------",
  process.env.VITE_APP_BACKEND_SCHEMA_URL
);

const Config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_APP_BACKEND_SCHEMA_URL,
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

module.exports = Config;

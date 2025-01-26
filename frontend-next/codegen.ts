import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL,
  documents: "./src/**/*.graphql",
  generates: {
    "src/graphql/graphql-generated-types/types.ts": {
      plugins: ["typescript"],
    },
    "src/graphql/graphql-generated-types": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.ts",
        baseTypesGlobal: "Types",
        dedupeOperationSuffix: true,
      },
      plugins: ["typescript-operations", "typescript-react-query"],
      config: {
        fetcher: {
          endpoint: "process.env.NEXT_PUBLIC_GRAPHQL",
          fetchParams: {
            headers: {
              "content-type": "application/json",
            },
          },
        },
        reactQueryVersion: 5,
      },
    },
  },
};
export default config;

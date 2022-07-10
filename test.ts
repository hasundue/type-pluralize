// deno-lint-ignore-file

import { Pluralize } from "./mod.ts";

const test: Pluralize<"test"> = "tests";
const tests: Pluralize<"tests"> = "tests";

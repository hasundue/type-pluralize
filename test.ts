// deno-lint-ignore-file

import { Pluralize, Singularlize } from "./mod.ts";

const pluralize_test: Pluralize<"test"> = "tests";
const pluralize_tests: Pluralize<"tests"> = "tests";

const singularlize_tests: Singularlize<"tests"> = "test";
const singularlize_test: Singularlize<"test"> = "test";

# type-pluralize

![test](https://github.com/hasundue/type-pluralize/actions/workflows/test.yml/badge.svg)

A TypeScript library providing Pluralize and Singularize utility type.

## Usage

```typescript
import {
  Pluralize,
  Singularlize,
} from "https://denopkg.com/hasundue/type-pluralize/mod.ts";

const pluralize_test: Pluralize<"test"> = "tests";
const pluralize_tests: Pluralize<"tests"> = "tests";

const singularlize_tests: Singularlize<"tests"> = "test";
const singularlize_test: Singularlize<"test"> = "test";
```

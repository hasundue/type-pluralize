# type-pluralize

![test](https://github.com/hasundue/type-pluralize/actions/workflows/test.yml/badge.svg)

A TypeScript library providing Pluralize utility type.

## Usage

```typescript
import { Pluralize } from "https://denopkg.com/hasundue/type-pluralize/mod.ts";

const test: Pluralize<"test"> = "tests";
const tests: Pluralize<"tests"> = "tests";
```

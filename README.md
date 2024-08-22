# Vapi TypeScript SDK

This TypeScript SDK provides a type-safe way to interact with the [Vapi API](https://docs.vapi.ai/api-reference/assistants/create-assistant). It offers a convenient and strongly-typed interface for making HTTP requests to Vapi's REST endpoints, making it easier for developers to integrate Vapi services into their TypeScript or JavaScript projects.

To get started, install the package and refer to the documentation for usage examples and API reference.

## Install

```bash
npm add vapi-typescript-sdk
```


## Use
```ts
import { vapiClient } from "vapi-typescript-sdk";

export const { GET, POST, PUT, PATCH, DELETE } = vapiClient({
  headers: {
    "Content-Type": "application/json",
  },
});

// Fully typed + Autocompletion 🎉
const calls = await GET("/call", {
  params: {
    query: {
      limit: 1000,
    },
  },
});
```

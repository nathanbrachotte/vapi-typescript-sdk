# Vapi TypeScript SDK

This SDK provides a type-safe way to interact with the [Vapi API](https://docs.vapi.ai/api-reference/assistants/create-assistant). It offers a convenient and strongly-typed interface for making HTTP requests to Vapi's REST endpoints, making it easier for developers to integrate Vapi services into their TypeScript or JavaScript projects.

> [!WARNING]
> This is an unofficial SDK and is not endorsed by Vapi.

## Install

Install the package using npm:

```bash
npm install vapi-typescript-sdk
```

Or using yarn:

```bash
yarn add vapi-typescript-sdk
```

Or using pnpm:

```bash
pnpm add vapi-typescript-sdk
```

## Use

### Example

<img src="https://github.com/user-attachments/assets/453f4307-75bf-4081-aadc-3f8f4565f082" width="400">

### Boilerplate

```ts
import { vapiClient } from 'vapi-typescript-sdk';

export const { GET, POST, PUT, PATCH, DELETE } = vapiClient({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_API_KEY_HERE',
  },
});

// Fully typed + Autocompletion 🎉
const calls = await GET('/call', {
  params: {
    query: {
      limit: 1000,
    },
  },
});
```

## API Reference

For detailed information on available methods and their parameters, please refer to the Vapi API documentation.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This SDK is not officially associated with or endorsed by Vapi. Use at your own risk.

## Support

For issues, feature requests, or questions, please open an issue on the GitHub repository.

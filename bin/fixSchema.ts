import * as fs from 'fs';

function processObject(obj: Record<string, unknown>): void {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  if (
    Array.isArray(obj.enum) &&
    obj.enum.every((item) => typeof item === 'string')
  ) {
    obj.type = 'string';
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'object') {
        const value = obj[key];
        if (value === null) {
          continue;
        }

        processObject(value as Record<string, unknown>);
      }
    }
  }
}

function fixOpenApiSpec(inputFile: string, outputFile: string) {
  try {
    const data = fs.readFileSync(inputFile, 'utf8');
    const openApiSpec = JSON.parse(data);

    processObject(openApiSpec);

    fs.writeFileSync(outputFile, JSON.stringify(openApiSpec, null, 2));
    console.log(`OpenAPI spec has been processed and saved to ${outputFile}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fixOpenApiSpec('./vapi-schema.json', './src/generated/fixed-vapi-schema.json');

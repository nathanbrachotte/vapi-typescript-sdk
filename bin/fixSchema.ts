import * as fs from 'fs';

// Function to recursively process objects
function processObject(obj: Record<string, unknown>): void {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  // Check if the current object is a property with an enum
  if (
    Array.isArray(obj.enum) &&
    obj.enum.every((item) => typeof item === 'string')
  ) {
    // If it has an enum of strings, ensure the type is set to "string"
    obj.type = 'string';
  }

  // Recursively process all properties of the object
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

// Main function to read, process, and write the OpenAPI spec
function fixOpenApiSpec(inputFile: string, outputFile: string) {
  try {
    // Read the OpenAPI spec file
    const data = fs.readFileSync(inputFile, 'utf8');
    const openApiSpec = JSON.parse(data);

    // Process the entire OpenAPI spec object
    processObject(openApiSpec);

    // Write the modified spec back to a file
    fs.writeFileSync(outputFile, JSON.stringify(openApiSpec, null, 2));
    console.log(`OpenAPI spec has been processed and saved to ${outputFile}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fixOpenApiSpec('./vapi-schema.json', './src/generated/fixed-vapi-schema.json');

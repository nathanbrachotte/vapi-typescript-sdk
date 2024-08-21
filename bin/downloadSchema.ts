import * as fs from 'fs';

async function downloadJsonSchema(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const schema = await response.json();
    return schema;
  } catch (error) {
    console.error('Failed to download JSON schema:', error);
    throw error;
  }
}

try {
  const schema = await downloadJsonSchema('https://api.vapi.ai/api-json');
  fs.writeFileSync('./vapi-schema.json', JSON.stringify(schema, null, 2));

  console.log('✅ Successfully downloaded schema');
} catch (error) {
  console.error('❌ Error:', error);
}

import { generateFiles } from 'fumadocs-openapi';
import { openapi } from '../../lib/openapi';

async function run() {
  console.log('🚀 Starting documentation generation...');
  try {
    await generateFiles({
      input: openapi,
      output: './content/API',
      includeDescription: true,
    });
    console.log('✅ Documentation generated successfully!');
  } catch (error) {
    console.error('❌ Generation failed:', error);
    process.exit(1);
  }
}
run();
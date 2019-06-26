const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const YAML = require('yamljs');

const inputPath = path.resolve(__dirname, '../../swagger.yaml');
const outputPath = path.resolve(__dirname, './swagger.json');

async function main() {
	const content = JSON.stringify(YAML.load(inputPath));
	fs.writeFileSync(outputPath, prettier.format(content, { parser: 'json' }));
	return `Done!`;
}

main()
	.then(console.log)
	.catch(console.error);

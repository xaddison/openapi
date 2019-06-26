const { default: dtsGenerator } = require('dtsgenerator');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const YAML = require('yamljs');

const inputPath = path.resolve(__dirname, '../../swagger.yaml');
const outputPath = path.resolve(__dirname, './index.d.ts');

async function main() {
	const content = YAML.load(inputPath);
	const types = await dtsGenerator({ contents: [content] });
	const typesNoDeclare = types.replace(new RegExp('declare ', 'g'), '');
	const namespace = `declare namespace APIZeit {${typesNoDeclare}}`;
	const prettyResult = prettier.format(namespace, { parser: 'typescript' });
	fs.writeFileSync(outputPath, prettyResult);
	return `Done!`;
}

main()
	.then(console.log)
	.catch(console.error);

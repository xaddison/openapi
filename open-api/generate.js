const fs = require('fs');
const path = require('path');
const prettier = require("prettier");
const YAML = require('yamljs');

const inputPath = path.resolve(__dirname, '../swagger.yaml');
const outputPath = path.resolve(__dirname, './swagger.json');

async function main() {
  const content = YAML.load(inputPath);
  const prettyResult = prettier.format(JSON.stringify(content), {parser: 'json'});
  fs.writeFileSync(outputPath, prettyResult);
  return `Done!`
}

main()
  .then(console.log)
  .catch(console.error);

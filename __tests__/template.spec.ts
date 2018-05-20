/* eslint-disable import/no-extraneous-dependencies, no-console */

// native
const fs = require('fs');
const path = require('path');
// external
const YAML = require('yamljs');
const handlebars = require('handlebars');
// scope
const coco = path.resolve(process.cwd(), 'coco.yml');
const { templates } = YAML.load(coco);
const context = {
  scope: 'coco-template',
  package: 'web-package',
  author: 'huang.jian',
  email: 'hjj491229492@hotmail.com',
  provider: 'github.com',
};

describe('template', () => {
  it('should render standard workflow', () => {
    const reflection = templates.map((template: string) => {
      const hbs = path.resolve(process.cwd(), `${template}.hbs`);
      const options = { encoding: 'utf-8' };

      return fs.readFileSync(hbs, options);
    });

    reflection.forEach((hbs: string) => {
      expect(handlebars.compile(hbs)(context)).toMatchSnapshot();
    });
  });
});

module.exports = {
  '*.ts': [
    'lint:source',
    'git add'
  ],
  '*.js': [
    'lint:test',
    'git add'
  ]
};
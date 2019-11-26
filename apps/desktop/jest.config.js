module.exports = {
  name: 'admin-desktop',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/admin/desktop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

var current_version = '1.0.4';
var new_version = '1.0.5';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-replace');

  grunt.initConfig({
    replace: {
      task1: {
        options: {
          patterns: [
            {
              match: current_version,
              replacement: new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'VERSION.md'
            ]
          }
        ]
      },
      task2: {
        options: {
          patterns: [
            {
              match: 'dockerizedrupal/puppet-debian-jessie:' + current_version,
              replacement: 'dockerizedrupal/puppet-debian-jessie:' + new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'README.md',
              'tests/puppet-debian-jessie.yml'
            ]
          }
        ]
      },
      task3: {
        options: {
          patterns: [
            {
              match: 'git checkout ' + current_version,
              replacement: 'git checkout ' + new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'README.md'
            ]
          }
        ]
      },
      task4: {
        options: {
          patterns: [
            {
              match: '"version": "' + current_version + '"',
              replacement: '"version": "' + new_version + '"'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'package.json'
            ]
          }
        ]
      }
    }
  });

  grunt.registerTask('bump', 'replace');
  grunt.registerTask('default', 'replace');
};

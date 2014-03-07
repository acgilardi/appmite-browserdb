/*global module:false*/
module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            all: ['build']
        },

        copy: {
            vendor: {
                src: 'bower_components/underscore/underscore.js',
                dest: 'src/underscore.js'
            }
        },

        browserify: {
            app: {
                files: {
                    'build/module.js': ['src/**/*.js']
                }
            },
            spec: {
                files: {
                    'build/spec.js': ['spec/**/*.test.js']
                }
            }
        },

        watch: {
            files: [
                ['src/**/*.js', 'spec/**/*.js']
            ],
            tasks: ['build'],
            karma: {
                files: ['src/**/*.js', 'spec/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },

        karma: {
            unit: {
                configFile: './karma.conf.js',
                background: false,
                autoWatch: true
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-browserify');


    // Custom tasks
    grunt.registerTask('build', ['clean:all', 'copy:vendor', 'browserify' ]);
    grunt.registerTask('test', ['karma:unit']);

    // Default task
    grunt.registerTask('default', ['watch']);
};


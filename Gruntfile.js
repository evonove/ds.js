/*global module:false*/
module.exports = function(grunt) {

  // Load all plugins
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    concat: {
      hashmap: {
        src: 'lib/hashmap.js',
        dest: 'dist/hashmap.js'
      },
      set: {
        src: 'lib/set.js',
        dest: 'dist/set.js'
      }
    },
    uglify: {
      options: {
        report: 'gzip'
      },
      hashmap: {
        src: '<%= concat.hashmap.dest %>',
        dest: 'dist/hashmap.min.js'
      },
      set: {
        src: '<%= concat.set.dest %>',
        dest: 'dist/set.min.js'
      }
    },
    clean: {
      dist: {
        src: ['dist/']
      }
    },
    jshint: {
      options: grunt.file.readJSON('.jshintrc'),
      lib_test: {
        src: ['lib/{,*/}*.js']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // Build task
  grunt.registerTask('build', ['jshint', 'clean:dist', 'mochaTest', 'concat', 'uglify']);

  // Specific tasks
  grunt.registerTask('test', ['mochaTest']);

  // Default
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};

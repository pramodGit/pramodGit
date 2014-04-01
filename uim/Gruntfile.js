/*
 * Grunt Task Runner Build Tool
 * @author	Pramod Kumar
 * http://userinterfacemedia.com/
 *
 */
 
/*global module:false*/

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	// You can set arbitrary key-value pairs.
    distFolder: 'paths',
	// You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),
	// Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
	clean: {
		src: [ 'build/css' ],
	},
    concat: {
      options: {
        separator: ';'
      },
      paths: {
        src: [ 'js/*.js' ],
        dest: 'build/js/uim.production.js'
      }
    },
	uglify: {
		options: {
			mangle: false
		},
		paths: {
			src: [ 'js/pr.main.js' ],
			dest: 'build/js/pr.main.js'
		}	
	},
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			eqnull: true,
			browser: true,
			globals: {
				require: true,
				define: true,
				requirejs: true,
				describe: true,
				expect: true,
				it: true,
				jQuery: true,
				$: true,
				console: true
			}
		},
		src: [ 'js/pr.config.js', 'js/pr.main.js' ]
	},
	processhtml: {
		paths: {
			files: {
				'build/index.html': ['index.html'],
				'build/about.html': ['about.html'],
				'build/contact.html': ['contact.html']
			}
		}
	},
	uncss: {
		options: {
			ignore: ['#post-feed #data-template .heading']
		},
		paths: {
			src: [ 'index.html', 'about.html', 'contact.html' ],
			dest: 'build/css/uim.tidy.css',
			options: {
				ignore: ['#post-feed #data-template .heading']
			}
		}
	},
	cssmin: {
		paths: {
			src: [ 'build/css/uim.tidy.css' ],
			dest: 'build/css/uim.min.css'
		}
	}
  }); // The end of grunt.initConfig

  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  
  // Register our own custom task alias.
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['clean', 'concat', 'uglify', 'processhtml', 'uncss', 'cssmin']);
  
  grunt.registerTask('default', ['test', 'build']);

};
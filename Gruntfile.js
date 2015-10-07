module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: "public/**/*.scss",
				tasks: ["sass"]
			},
			html: {
				files: ['public/*.html'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: "compressed"
				},
				files: {
					"public/css/style.css" : "public/sass/style.scss"
				}
			}
		}
	});
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask("default", ["sass", "watch"]);
};
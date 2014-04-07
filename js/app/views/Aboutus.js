// Aboutus.js
// -------
define(["jquery", "backbone", "text!templates/aboutus.html", "text!templates/sidebar.html"],

    function($, Backbone, template, sidebar){

        var Aboutus = Backbone.View.extend({

            el: "#page-content",

            initialize: function() {

                this.render();

            },

            events: {

            },

            render: function() {

				// sidebar
				this.sidebar = _.template(sidebar, {});
				// Append the result to the view's element.
				$('#sidebar').html(sidebar);
				// Maintains chainability
				
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});
                // Dynamically updates the UI with the view's template
                this.$el.html(template);
				// $('#page-content').html(template);

				this.$el.trigger('create');
				// $('#body').trigger('create');

                return this;

            }

        });

        return Aboutus;

    }

);
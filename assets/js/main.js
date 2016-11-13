/*
	Binary by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

function GetValue()
{
  var quotearray = new Array(
  	"An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud.",
  	"You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.",
  	"It’s freezing and snowing in New York – we need global warming!");

  var orgarray = new Array(
  	"credible source quote org",
  	"piece org",
  	"freezing org");

  var descarray = new Array(
  	"credible source description",
  	"piece description",
  	"freezing description");

  var random = Math.floor(Math.random() * quotearray.length);
  var randomquote = quotearray[random];
  var randomorg = orgarray[random];
  var randomdesc = descarray[random];
  document.getElementById("quote").innerHTML=randomquote;
  document.getElementById("org").innerHTML=randomorg;
  document.getElementById("desc").innerHTML=randomdesc;
}

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Fix: IE.
			if (skel.vars.browser == 'ie')
				$body.addClass('is-ie');

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: $header.outerHeight() -1
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Posts.
			var $posts = $('.post');

			$posts.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					x;

				// Set image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

			});

	});

})(jQuery);

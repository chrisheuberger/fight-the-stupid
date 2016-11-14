/*
	Binary by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

function GetValue() {

  var quotearray = new Array(
  	"He’s not a war hero. He’s a war hero because he was captured. I like people that weren’t captured.",
  	"You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful piece of ass.",
  	"Our great African-American President hasn’t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore.",
  	"You have people coming in, and I’m not just saying Mexicans, I’m talking about people that are from all over that are killers and rapists and they’re coming into this country.",
  	"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
  	"What do I know about it? All I know is what's on the internet.",
  	"Donald J. Trump is calling for a complete and total shutdown of Muslims entering the United States until our country’s representatives can figure out what the hell is going on.",
  	"We cannot let them into this country, period. Our country has tremendous problems. We can’t have another problem.",
  	"It’s really cold outside, they are calling it a major freeze, weeks ahead of normal. Man, we could use a big fat dose of global warming!",
  	"A child, a beautiful child went to have the vaccine and came back and a week later had a tremendous fever, got very, very sick, now is autistic.",
  	"If she gets to pick her judges — nothing you can do, folks. Although, the Second Amendment people. Maybe there is. I don’t know.",
  	"Why can’t we use nuclear weapons?",
  	"There has to be some form of punishment... you go back to a position like they had where they would perhaps go to illegal places, but we have to ban it.",
  	"I don’t know what I said... I don’t remember.",
  	"I’ve been treated very unfairly by this judge. Now, this judge is of Mexican heritage.",
  	"They don’t write good. They don’t know how to write good.",
  	"I always wanted to get the Purple Heart. This was much easier.",
  	"There were people that were cheering on the other side of New Jersey, where you have large Arab populations.",
  	"I’m putting the people here on notice that are coming here from Syria as part of this mass migration that if I win, if I win, they’re going back.",
  	"I love the old days, you know? You know what I hate? There's a guy totally disruptive, throwing punches, we’re not allowed punch back anymore... I’d like to punch him in the face, I’ll tell ya.",
  	"I’m in total support of waterboarding. It has to be within the law, but I have to expand the law.",
  	"I know more about ISIS than the generals do, believe me... I would bomb the shit out of them.",
  	"It used to be: ‘To the victors go the spoils’... But I always said: Take the oil.",
  	"Laziness is a trait in blacks. It really is, I believe that. It’s not anything they can control.",
  	"I would like to think she would find another career or find another company if that was the case."
  );

  var quotelinkarray = new Array(
    "http://www.businessinsider.com/donald-trump-john-mccain-war-hero-2015-7",
    "http://www.nytimes.com/2016/03/26/us/politics/donald-trump-women.html",
    "https://twitter.com/realdonaldtrump/status/592910662424223744?lang=en",
    "http://www.cnn.com/2015/06/28/politics/donald-trump-immigration-gay-marriage-2016/",
    "https://www.theguardian.com/environment/2016/nov/11/trump-presidency-a-disaster-for-the-planet-climate-change",
  	"http://www.politifact.com/truth-o-meter/statements/2016/mar/13/donald-trump/donald-trump-wrongly-links-campaign-event-proteste/",
  	"https://www.washingtonpost.com/news/post-politics/wp/2015/12/07/donald-trump-calls-for-total-and-complete-shutdown-of-muslims-entering-the-united-states/",
  	"http://www.cnn.com/2015/11/16/politics/donald-trump-syrian-refugees/",
  	"http://www.cnn.com/2015/10/19/politics/donald-trump-global-warming-tweet/",
  	"http://www.slate.com/blogs/xx_factor/2015/09/16/donald_trump_suggested_vaccines_cause_autism_during_the_cnn_gop_debate_he.html",
  	"http://www.nytimes.com/2016/08/10/us/politics/donald-trump-hillary-clinton.html",
  	"http://www.cnbc.com/2016/08/03/trump-asks-why-us-cant-use-nukes-msnbcs-joe-scarborough-reports.html",
  	"http://www.realclearpolitics.com/video/2016/03/30/trump_some_form_of_punishment_for_women_if_abortion_becomes_illegal.html",
  	"http://www.cnn.com/videos/tv/2015/11/26/donald-trump-mocks-reporter-with-disability-berman-sot-ac.cnn",
  	"http://talkingpointsmemo.com/livewire/donald-trump-gonzalo-curiel-attacks",
  	"http://www.politico.com/story/2016/08/trump-new-york-times-226546",
  	"http://www.nbcnews.com/politics/2016-election/trump-jokes-he-always-wanted-purple-heart-n621661",
  	"http://www.businessinsider.com/donald-trump-911-cheering-fact-check-2015-11",
  	"http://time.com/4056951/trump-syria-refugees/",
  	"https://www.washingtonpost.com/news/morning-mix/wp/2016/02/23/donald-trump-on-protester-id-like-to-punch-him-in-the-face/",
  	"http://time.com/4384038/donald-trump-immigration-position-shifting-policies/",
  	"https://www.youtube.com/watch?v=Q26ikbTlQn0",
  	"http://blogs.wsj.com/washwire/2016/09/08/trumps-take-the-oil-plan-would-violate-geneva-conventions-experts-say/",
  	"https://www.washingtonpost.com/news/fact-checker/wp/2016/07/25/did-donald-trump-really-say-those-things/",
  	"http://www.usatoday.com/story/opinion/2016/08/01/ailes-trump-sexual-harassment-fox-news-women-gretchen-kelly-greta-news-column/87915454/"
  );

  var orgarray = new Array(
  	"Wounded Warriors Project",
  	"National Women’s Law Center",
  	"Campaign Zero",
   	"Border Angels",
  	"EarthJustice",
  	"DonorsChoose.org",
  	"International Rescue Committee",
  	"American Refugee Committee",
  	"350.org",
  	"UNICEF",
  	"The Brady Campaign",
  	"International Peace Bureau",
  	"Planned Parenthood",
  	"Disability Rights Education and Defense Fund",
  	"National Immigration Law Center",
  	"826 National",
  	"Homes for Our Troops",
  	"Council on American-Islamic Relations",
  	"Helping Hand for Relief and Development",
  	"American Civil Liberties Union",
  	"Human Rights Watch",
  	"Embrace the Middle East",
  	"Center for Civilians in Conflict",
  	"NAACP",
  	"National Organization for Women"
  );

  var orglinkarray = new Array(
    "http://www.joincampaignzero.org/",
    "https://nwlc.org/",
  	"http://www.joincampaignzero.org/",
  	"http://www.borderangels.org/",
  	"http://earthjustice.org/",
  	"https://www.donorschoose.org/",
  	"https://www.rescue.org/article/how-help-syrian-refugees",
  	"http://arcrelief.org/",
  	"https://350.org/",
  	"https://www.unicef.org/immunization/",
  	"http://www.bradycampaign.org",
  	"http://www.ipb.org/",
  	"https://www.plannedparenthood.org/",
  	"https://dredf.org/",
  	"https://www.nilc.org/",
  	"http://826national.org/",
  	"https://www.hfotusa.org/",
  	"https://www.cair.com/",
  	"http://www.hhrd.org/caravan",
  	"https://www.aclu.org/",
  	"https://www.hrw.org/",
  	"http://www.embraceme.org/",
  	"http://civiliansinconflict.org/",
  	"http://www.naacp.org/",
  	"now.org/"
  );

  var descarray = new Array(
  	"Advocates for policy solutions to end police violence in America.",
  	"Helping enact of policies and laws, for over 40 years, that help women and families.",
  	"Advocates for policy solutions to end police violence in America.",
  	"Advocates for immigration reform and social justice focusing on the U.S.–Mexico border.",
  	"Working to protect wildlife and the planet for healthier communities and for cleaner energy options.",
  	"Allows individuals to donate directly to public school classroom projects.",
  	"Responds to the world’s worst humanitarian crises and helps people to survive and rebuild their lives.",
  	"Providing humanitarian assistance to millions of beneficiaries for over 35 years.",
  	"International effort to raise awareness of the need to decrease carbon dioxide concentration in the atmosphere.",
  	"Provides technical assistance to governments for their vaccine delivery programs.",
  	"Advocating for a dramatic reduction in gun deaths and injuries.",
  	"Works on building a world without war.",
  	"Resources on sexual and reproductive health.",
  	"Advancing the rights of people with disabilities through advocacy, training, education, and public policy.",
  	"Information on the law, and the employment and public benefits rights of immigrants.",
  	"A network of writing and tutoring centers for children and teens.",
  	"Helping severely injured veterans returning home from Iraq and Afghanistan.",
  	"The country’s largest Muslim civil liberties organization.",
  	"Providing proper shelter, food, and medical assistance to refugees.",
  	"Defends the individual rights and liberties guaranteed by the Constitution and laws of the United States.",
  	"Conducts research and advocacy on human rights and peacebuilding.",
  	"Tackling poverty and injustice in the Middle East.",
  	"Focused on helping civilians caught in the midst of armed conflict.",
  	"Ensuring the political, educational, social, and economic equality and fighting against race-based discrimination.",
  	"The largest organization of feminist activists in the United States."
  );

  var random = Math.floor(Math.random() * quotearray.length);
  var randomquote = quotearray[random];
  var randomquotelink = quotelinkarray[random];
  var randomorg = orgarray[random];
  var randomorglink = orglinkarray[random];
  var randomdesc = descarray[random];
  document.getElementById("quote").innerHTML=randomquote;
  document.getElementById("quote").href=randomquotelink;
  document.getElementById("org").innerHTML=randomorg;
  document.getElementById("org").href=randomorglink;
  document.getElementById("desc").innerHTML=randomdesc;

}

window.onload = GetValue();

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

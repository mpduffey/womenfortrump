import {Component} from '@angular/core';

@Component({
    selector:   'my-app',
    template:   `<single-page-scrolling [app]="app"></single-page-scrolling>`
})

export class AppComponent {
	app = {
		navMenu:		[
			{link: "#intro", label: "Home"},
			{link: "#about", label: "About"},
			{link: "#calendar", label: "Calendar"},
			{link: "#gallery", label: "Gallery"},
			{link: "https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform", label: "Sign-up", external: true},
			{link: "#contact", label: "Contact"}
		],
		intro:			{
			title:				"Wisconsin Women for Trump",
			buttonTitle:	"I Support Donald Trump! Sign Me Up!",
			buttonLink:		"https://docs.google.com/forms/d/e/1FAIpQLSfjiqYbdEAR7KZbRGCiiJCGUIsr-QR2tZnSKVl2o5qs0vtaTQ/viewform"
		},
		about:			{
			smallTitle:	"America First",
			boldTitle:	"Wisconsin Women ",
			lightTitle:	"for Trump",
			img:				"img/gallery/wi-1.jpg",
			text:				"We are women in the state of Wisconsin who support the election of Donald Trump and Governor Mike Pence to be President and Vice President of the United States. We believe in a strong national defense, a growing and robust economy, protection of our freedoms, and an America that is safe, secure, and prosperous for our futures, our children and our grandchildren."
		},
		calendar:		{
			events:				[
				{
					date:				new Date(2016,9,5,17,30),
					endDate:		new Date(2016,9,5,20),
					name:				"Ladies' Night at Milwaukee's North Shore Victory Center",
					location:		"500 West Brown Deer Road, Suite 104, Bayside, WI"
				},
				{
					date:				new Date(2016,9,5,8),
					endDate:		new Date(2016,9,5,10),
					name:				"Coffee and Roundtable with Donald Trump, Jr.",
					location:		"Embassy Suites Brookfield - 1200 S Moreland Rd, Brookfield, WI 53005",
					contact:		{
						name:				"Morgan Duffey",
						email:			"wwft2016@gmail.com"
					}
				},
				{
					date:				new Date(2016,9,5,18,30),
					endDate:		new Date(2016,9,5,21),
					name:				"Ladies' Night at the Victory Center",
					location:		"Select RPW Victory Offices",
					contact:		"Your Victory Office Field Director"
				},
				{
					date:				new Date(2016,9,12,17,30),
					endDate:		new Date(2016,9,12,20),
					name:				"Ladies' Night at Milwaukee's North Shore Victory Center",
					location:		"500 West Brown Deer Road, Suite 104, Bayside, WI"
				},
				{
					date:				new Date(2016,9,12,18,30),
					endDate:		new Date(2016,9,12,21),
					name:				"Ladies' Night at the Victory Center",
					location:		"Select RPW Victory Offices",
					contact:		"Your Victory Office Field Director"
				},
				{
					date:				new Date(2016,9,19,17,30),
					endDate:		new Date(2016,9,19,20),
					name:				"Ladies' Night at Milwaukee's North Shore Victory Center",
					location:		"500 West Brown Deer Road, Suite 104, Bayside, WI"
				},
				{
					date:				new Date(2016,9,19,18,30),
					endDate:		new Date(2016,9,19,21),
					name:				"Ladies' Night at the Victory Center",
					location:		"Select RPW Victory Offices",
					contact:		"Your Victory Office Field Director"
				},
				{
					date:				new Date(2016,9,26,17,30),
					endDate:		new Date(2016,9,26,20),
					name:				"Ladies' Night at Milwaukee's North Shore Victory Center",
					location:		"500 West Brown Deer Road, Suite 104, Bayside, WI"
				},
				{
					date:				new Date(2016,9,26,18,30),
					endDate:		new Date(2016,9,26,21),
					name:				"Ladies' Night at the Victory Center",
					location:		"Select RPW Victory Offices",
					contact:		"Your Victory Office Field Director"
				},
				{
					date:				new Date(2016,10,2,17,30),
					endDate:		new Date(2016,10,2,20),
					name:				"Ladies' Night at Milwaukee's North Shore Victory Center",
					location:		"500 West Brown Deer Road, Suite 104, Bayside, WI"
				},
				{
					date:				new Date(2016,10,2,18,30),
					endDate:		new Date(2016,10,2,21),
					name:				"Ladies' Night at the Victory Center",
					location:		"Select RPW Victory Offices",
					contact:		"Your Victory Office Field Director"
				},
				{
					date:				new Date(2016,10,8,7),
					endDate:		new Date(2016,10,8,20),
					name:				"Election Day",
					location:		"Your Local Voting Location"
				},
			]
		},
		gallery: 		{
			imgs:			[
				{src: "img/gallery/wi-1.jpg"},
				{src: "img/gallery/wi-2.jpg"},
				{src: "img/gallery/wwft-waukesha.jpg"},
				{src: "img/gallery/appleton-const-day-2.jpg"},
				{src: "img/gallery/appleton-const-day.jpg"},
				{src: "img/gallery/appleton-const-say-3.jpg"},
				{src: "img/gallery/candee-patty-gop.jpg"},
				{src: "img/gallery/darling-const-day.jpg"},
				{src: "img/gallery/lax-const-day.jpg"},
				{src: "img/gallery/mke-const-day-2.jpg"},
				{src: "img/gallery/mke-const-day-3.jpg"},
				{src: "img/gallery/mke-const-day.jpg"},
				{src: "img/gallery/mke-women-trump.jpg"},
				{src: "img/gallery/moore-waukesha-const-day.jpg"},
				{src: "img/gallery/north-shore-ofc-2.jpg"},
				{src: "img/gallery/north-shore-office.jpg"},
				{src: "img/gallery/rj-for-trump.jpg"},
				{src: "img/gallery/wash-cty-const-day.jpg"},
				{src: "img/gallery/waukesha-const-day.jpg"},
				{src: "img/gallery/west-bend-rally.jpg"},
				{src: "img/gallery/wausau-labor-day-parade.jpg"},
				{src: "img/gallery/appleton-const-day-4.jpg"},
			]
		},
		membership_off:	{
			members:	[
				{img: {src: null}, name: "Candee Arndt", title: "Waukesha"},
				{img: {src: null}, name: "Joanne Aulenbacher", title: "Shawano"},
				{img: {src: null}, name: "Andrea Azzolina", title: "Ozaukee"},
				{img: {src: null}, name: "Tara Balts", title: "Eau Claire"},
				{img: {src: null}, name: "Nancy Bartlett", title: "Dane"},
				{img: {src: null}, name: "Maey Bartosic", title: "Outagamie"},
				{img: {src: null}, name: "Crystal Berg", title: "Washington"},
				{img: {src: null}, name: "Renee Brey", title: "Winnebago"},
				{img: {src: null}, name: "Leslie Brown", title: "Marathon"},
				{img: {src: null}, name: "Carol Brunner", title: "Milwaukee"},
				{img: {src: null}, name: "Mary Buestrin ", title: "Ozaukee"},
				{img: {src: null}, name: "Bernice Burris", title: "Brown"},
				{img: {src: null}, name: "Kathleen Bush", title: "Washington"},
				{img: {src: null}, name: "Caroline Carter", title: ""},
				{img: {src: null}, name: "Trish Coriden", title: "La Crosse"},
				{img: {src: null}, name: "Maggie Cronin", title: "Marathon"},
				{img: {src: null}, name: "Rose Ann Dieck", title: "Milwaukee"},
				{img: {src: null}, name: "Heidi Dirks", title: "Dodge"},
				{img: {src: null}, name: "Betty Dotseth", title: "Marathon"},
				{img: {src: null}, name: "Sandy Duckett", title: "Brown"},
				{img: {src: null}, name: "Morgan Duffey", title: "Dane"},
				{img: {src: null}, name: "Elizabeth Elser", title: "Milwaukee"},
				{img: {src: null}, name: "Fran Frigo", title: "Brown"},
				{img: {src: null}, name: "Bronwyn Glojek", title: "Waukesha"},
				{img: {src: null}, name: "Beverly Griswold", title: "Ozaukee"},
				{img: {src: null}, name: "Jennifer Hayden", title: "Milwaukee"},
				{img: {src: null}, name: "Janet Herrick", title: "Portage"},
				{img: {src: null}, name: "Audrey Hilgendorf", title: "Washington"},
				{img: {src: null}, name: "Susan Hitchler", title: "Waukesha"},
				{img: {src: null}, name: "Virginia Jesse", title: "Shawano"},
				{img: {src: null}, name: "Gail Johnson", title: "Winnebago"},
				{img: {src: null}, name: "Darleen Kandel", title: "Washington"},
				{img: {src: null}, name: "Kathleen Kiernan", title: "Washington"},
				{img: {src: null}, name: "Debbie Krostue", title: "Waupaca"},
				{img: {src: null}, name: "Marian Krumberger", title: "Brown"},
				{img: {src: null}, name: "Ellen Levickis", title: "Portage"},
				{img: {src: null}, name: "Sue Lynch", title: "La Crosse"},
				{img: {src: null}, name: "Beverly Maddrell", title: "Dane"},
				{img: {src: null}, name: "Diane Malecki", title: "Winnebago"},
				{img: {src: null}, name: "Ginny Marschman", title: "Waukesha"},
				{img: {src: null}, name: "Gayle Marshall", title: "Marathon"},
				{img: {src: null}, name: "Connie Mell", title: "La Crosse"},
				{img: {src: null}, name: "Jean Merry", title: "Washington"},
				{img: {src: null}, name: "Robin Moore", title: "Waukesha"},
				{img: {src: null}, name: "Jodie Mueller", title: "Waukesha"},
				{img: {src: null}, name: "Judie Mueller", title: "Milwaukee"},
				{img: {src: null}, name: "Janet Murphy", title: "Outagamie"},
				{img: {src: null}, name: "Brenda Myers", title: "Shawano"},
				{img: {src: null}, name: "Phyllis Nanstad", title: "Eau Claire"},
				{img: {src: null}, name: "Linda Nelson", title: "Washington"},
				{img: {src: null}, name: "Kristine Newhouse", title: "Winnebago"},
				{img: {src: null}, name: "Colleen O'Brien", title: "Outagamie"},
				{img: {src: null}, name: "Kathy O'Connell", title: "Washington"},
				{img: {src: null}, name: "Margaret O'Toole-Somenske", title: "Brown"},
				{img: {src: null}, name: "Mary Patterson", title: "Racine"},
				{img: {src: null}, name: "Diane Pedersen", title: "Washington"},
				{img: {src: null}, name: "Pam Pendzich", title: "Milwaukee"},
				{img: {src: null}, name: "Donna Peters", title: "Dane"},
				{img: {src: null}, name: "Deb Pokel", title: "Sheboygan"},
				{img: {src: null}, name: "Kate Proctor", title: "La Crosse"},
				{img: {src: null}, name: "Charlotte Rasmussen", title: "Chippewa"},
				{img: {src: null}, name: "Patty Reiman", title: "Milwaukee"},
				{img: {src: null}, name: "Jane Roberts", title: "Dodge"},
				{img: {src: null}, name: "Darlene Ross", title: "Shawano"},
				{img: {src: null}, name: "Doris Ruiter", title: "Rusk"},
				{img: {src: null}, name: "Marjorie Savana", title: "Washington"},
				{img: {src: null}, name: "Kim Simac", title: "Vilas"},
				{img: {src: null}, name: "Debra Stein", title: "Jefferson"},
				{img: {src: null}, name: "Ruth Streck", title: "Winnebago"},
				{img: {src: null}, name: "MARLYS TAUCHEN", title: "Shawano"},
				{img: {src: null}, name: "Mary Jo thompson", title: "Washington"},
				{img: {src: null}, name: "Pam Travis", title: "Clark"},
				{img: {src: null}, name: "Susan Tully", title: "Vernon"},
				{img: {src: null}, name: "Judy Westrate-Klus", title: "Dane"},
				{img: {src: null}, name: "Mary Willett", title: "Price"},
				{img: {src: null}, name: "Darlene Wink ", title: "Milwaukee"},
			]
		},
		contact:		{
			text:			"Contact Wisconsin Women for Trump",
			email:		"wwft2016@gmail.com"
		},
		footer:			{
			text:			"Paid For By Donald J. Trump for President"
		}
	};
}
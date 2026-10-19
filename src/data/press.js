// Press coverage grouped by client. Clients with `showOnPressPage` are listed on
// /press (in this order) with their `featured` articles; every client's full list
// is shown on /press/:slug. Images live in public/images/press.
const pressClients = [
  {
    name: "cleancult",
    slug: "cleancult",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Clean Cleaning: How Eco-Friendly Companies Are Rebranding Your Least Favorite Chore",
        url: "https://www.refinery29.com/en-us/natural-green-cleaning-products-trend",
        source: "refinery29",
        logo: "/images/press/logos/refinery29.jpg",
        image:
          "/images/press/cleancult/clean-cleaning-how-eco-friendly-companies-are-rebranding.jpg",
        featured: false,
      },
      {
        title:
          "Puerto Rico needs more entrepreneurs. What's being done to help them?",
        url: "https://www.nbcnews.com/news/latino/puerto-rico-entrepreneurs-forge-ahead-despite-setbacks-n889331",
        source: "nbc news",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/cleancult/puerto-rico-needs-more-entrepreneurs-what-s-being-done-to.jpg",
        featured: false,
      },
      {
        title:
          "5 Starter Products For Your Nontoxic Home (That Won't Break The Bank)",
        url: "https://www.mindbodygreen.com/articles/5-affordable-nontoxic-home-products",
        source: "mindbodygreen",
        logo: "/images/press/logos/mindbodygreen.jpg",
        image:
          "/images/press/cleancult/5-starter-products-for-your-nontoxic-home-that-won-t-break.jpg",
        featured: false,
      },
      {
        title: "Cleancult Packages Their Soap Refills In Milk Cartons",
        url: "https://beta.thedieline.com/blog/2019/2/21/cleancult-packages-their-soap-refills-in-milk-cartons",
        source: "dieline",
        logo: "/images/press/logos/dieline.jpg",
        image:
          "/images/press/cleancult/cleancult-packages-their-soap-refills-in-milk-cartons.jpg",
        featured: false,
      },
      {
        title: "From Spontaneous to Successful",
        url: "https://www.americanexpress.com/en-us/business/trends-and-insights/videos/from-spontaneous-to-successful/",
        source: "amex",
        logo: "/images/press/logos/amex.jpg",
        image: "/images/press/cleancult/from-spontaneous-to-successful.jpg",
        featured: false,
      },
      {
        title: "Meet cleancult: The Latest Natural Cleaner on the Block",
        url: "http://www.cottages-gardens.com/Over-the-Wire/December-2018/Meet-Cleancult/index.php?previewmode=on",
        source: "cottages & gardens",
        logo: "/images/press/logos/cottages-gardens.jpg",
        image:
          "/images/press/cleancult/meet-cleancult-the-latest-natural-cleaner-on-the-block.jpg",
        featured: false,
      },
      {
        title: "We Spring-Cleaned With Natural Cleaners & These 14 Worked Best",
        url: "https://www.mindbodygreen.com/articles/14-natural-cleaners-that-actually-work",
        source: "mindbodygreen",
        logo: "/images/press/logos/mindbodygreen.jpg",
        image:
          "/images/press/cleancult/we-spring-cleaned-with-natural-cleaners-these-14-worked-best.jpg",
        featured: false,
      },
      {
        title:
          "This Subscription Box Of Non-Toxic Cleaning Products Gives Back To Puerto Rico",
        url: "https://www.greenmatters.com/home/2018/07/25/as9MC/cleaning-subscription-puerto-rico",
        source: "green matters",
        logo: "/images/press/logos/green-matters.jpg",
        image:
          "/images/press/cleancult/this-subscription-box-of-non-toxic-cleaning-products-gives.jpg",
        featured: false,
      },
      {
        title:
          "cleancult’s Non-Toxic Cleaning Product Subscription Service Gets Your House Clean & Gives Back At The Same Time",
        url: "https://www.bustle.com/p/cleancults-non-toxic-cleaning-product-subscription-service-gets-your-house-clean-gives-back-at-the-same-time-9685172",
        source: "bustle",
        logo: "/images/press/logos/bustle.jpg",
        image:
          "/images/press/cleancult/cleancults-non-toxic-cleaning-product-subscription-service.jpg",
        featured: false,
      },
      {
        title:
          "37 Products Under $15 That Are Basically Already In Your Shopping Cart",
        url: "https://www.buzzfeed.com/mallorymcinnis/37-products-under-15-that-are-basically-already-in-your?utm_term=.eiqdnk75l#.rxml4o6dE",
        source: "buzz feed",
        logo: "/images/press/logos/buzz-feed.jpg",
        image:
          "/images/press/cleancult/37-products-under-15-that-are-basically-already-in-your.jpg",
        featured: false,
      },
      {
        title: "2018 ECO HOME GUIDE: PLANT BASED NATURAL CLEANERS",
        url: "https://www.elephantjournal.com/?giftcat=eco-home-guide-2018",
        source: "elephant journal",
        logo: "/images/press/logos/elephant-journal.jpg",
        image:
          "/images/press/cleancult/2018-eco-home-guide-plant-based-natural-cleaners.jpg",
        featured: false,
      },
      {
        title:
          "A relatively painless guide to cutting plastic out of your life",
        url: "https://www.fastcompany.com/90312169/a-totally-achievable-relatively-painless-guide-to-cutting-plastic-out-of-your-life",
        source: "fast company",
        logo: "/images/press/logos/fast-company.jpg",
        image:
          "/images/press/cleancult/a-relatively-painless-guide-to-cutting-plastic-out-of-your.jpg",
        featured: false,
      },
      {
        title:
          "Why green cleaning start-up cleancult is banking on Puerto Rico and milk cartons",
        url: "https://finance.yahoo.com/video/green-cleaning-company-cleancult-expands-183408326.html",
        source: "yahoo finance",
        logo: "/images/press/logos/yahoo-finance.jpg",
        image:
          "/images/press/cleancult/why-green-cleaning-start-up-cleancult-is-banking-on-puerto.jpg",
        featured: false,
      },
      {
        title: "Walk the Talk Show: Live with Cleancult CEO Ryan Lupberger",
        url: "https://www.evensi.com/walk-talk-show-live-cleancult-ceo-ryan-lupberger/253251173",
        source: "elephant journal",
        logo: "/images/press/logos/elephant-journal-2.jpg",
        image:
          "/images/press/cleancult/walk-the-talk-show-live-with-cleancult-ceo-ryan-lupberger.jpg",
        featured: false,
      },
      {
        title: "This Is Environmentally-Conscious Laundry Detergent",
        url: "https://www.facebook.com/watch/?v=2057026354387478",
        source: "Now This",
        logo: "/images/press/logos/now-this.jpg",
        image:
          "/images/press/cleancult/this-is-environmentally-conscious-laundry-detergent.jpg",
        featured: true,
      },
      {
        title: "An Eco-Friendly Swap For  Home Goods You're Constantly Buying",
        url: "https://www.mindbodygreen.com/articles/eco-friendly-cleaners-detergents-paper-towels-and-more",
        source: "Mind Body Green",
        logo: "/images/press/logos/mindbodygreen.jpg",
        image:
          "/images/press/cleancult/an-eco-friendly-swap-for-home-goods-you-re-constantly-buying.jpg",
        featured: true,
      },
      {
        title: "Joining the 'Cleancult'",
        url: "https://cheddar.com/media/joining-the-cleancult",
        source: "Cheddar",
        logo: "/images/press/logos/cheddar.jpg",
        image: "/images/press/cleancult/joining-the-cleancult.jpg",
        featured: true,
      },
      {
        title:
          "Trying to quit plastic? This startup sells soap in milk cartons",
        url: "https://www.fastcompany.com/90306181/trying-to-quit-plastic-this-startup-sells-soap-in-milk-cartons",
        source: "fast company",
        logo: "/images/press/logos/fast-company-2.jpg",
        image:
          "/images/press/cleancult/trying-to-quit-plastic-this-startup-sells-soap-in-milk.jpg",
        featured: true,
      },
      {
        title: "Want to Cut Down Your Plastic Use? These 3 Startups Can Help",
        url: "https://www.domino.com/content/plastic-pollution-solutions/",
        source: "domino",
        logo: "/images/press/logos/domino.jpg",
        image:
          "/images/press/cleancult/want-to-cut-down-your-plastic-use-these-3-startups-can-help.jpg",
        featured: false,
      },
      {
        title: "The best last-minute gifts in Health, Beauty, and Fitness",
        url: "https://hbfit.com/the-best-last-minute-gifts-in-health-beauty-and-fitness/",
        source: "hbfit",
        logo: "/images/press/logos/hbfit.jpg",
        image:
          "/images/press/cleancult/the-best-last-minute-gifts-in-health-beauty-and-fitness.jpg",
        featured: false,
      },
      {
        title:
          "Teen Is Fundraising to Equip 1,000 Puerto Rican Families With Solar Lights and Washing Machines",
        url: "http://remezcla.com/culture/hurricane-maria-teen-raising-money/",
        source: "Remezcla",
        logo: "/images/press/logos/remezcla.jpg",
        image:
          "/images/press/cleancult/teen-is-fundraising-to-equip-1-000-puerto-rican-families.png",
        featured: false,
      },
      {
        title: "Start-up Cleancult Doubles Down On Its Move To Puerto Rico",
        url: "https://cheddar.com/videos/start-up-cleancult-doubles-down-on-its-move-to-puerto-rico",
        source: "Cheddar",
        logo: "/images/press/logos/cheddar.jpg",
        image:
          "/images/press/cleancult/start-up-cleancult-doubles-down-on-its-move-to-puerto-rico.jpg",
        featured: false,
      },
      {
        title:
          "This eco-friendly start-up is finding new ways to help Puerto Rico",
        url: "https://finance.yahoo.com/video/eco-friendly-start-finding-ways-191802056.html",
        source: "Yahoo Finance",
        logo: "/images/press/logos/yahoo-finance-2.jpg",
        image:
          "/images/press/cleancult/this-eco-friendly-start-up-is-finding-new-ways-to-help.jpg",
        featured: false,
      },
      {
        title:
          "In Puerto Rico, Program Attracts Young Entrepreneurs, Sees Results",
        url: "https://www.nbcnews.com/news/latino/puerto-rico-parallel-18-entrepreneurship-program-sees-results-n787186",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/cleancult/in-puerto-rico-program-attracts-young-entrepreneurs-sees.jpg",
        featured: false,
      },
      {
        title:
          "Founder of eco-friendly detergent maker: We will rebuild in Puerto Rico",
        url: "https://www.google.com/url?hl=en&q=http://money.cnn.com/2017/09/29/smallbusiness/puerto-rico-cleancult-small-business-hurricane/index.html&source=gmail&ust=1508361310699000&usg=AFQjCNGfzr1Hnf8FRbAdCskmeeeC13iVCA",
        source: "CNN MONEY",
        logo: "/images/press/logos/cnn-money.jpg",
        image:
          "/images/press/cleancult/founder-of-eco-friendly-detergent-maker-we-will-rebuild-in.jpg",
        featured: false,
      },
      {
        title:
          "What Happens When You Can't Deliver Your Kickstarter Project to Backers?",
        url: "https://www.entrepreneur.com/article/305312#",
        source: "Entrepreneur",
        logo: "/images/press/logos/entrepreneur.jpg",
        image:
          "/images/press/cleancult/what-happens-when-you-can-t-deliver-your-kickstarter.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "be gutsy",
    slug: "be-gutsy",
    showOnPressPage: true,
    articles: [
      {
        title: "Campaña de concienciación sobre el uso de opioides en recetas",
        url: "https://www.diariolasamericas.com/eeuu/marta-mcolon-la-presion-social-lleva-jovenes-latinos-consumir-opiaceos-n4173089",
        source: "Diario Las Americas",
        logo: null,
        image:
          "/images/press/be-gutsy/campana-de-concienciacion-sobre-el-uso-de-opioides-en.jpg",
        featured: false,
      },
      {
        title: "La presión social lleva a jóvenes latinos a consumir opiáceos",
        url: "https://www.efe.com/efe/usa/sociedad/marta-m-colon-la-presion-social-lleva-a-jovenes-latinos-consumir-opiaceos/50000101-3914357?utm_source=wwwefecom&utm_medium=rss&utm_campaign=rss",
        source: "EFE",
        logo: "/images/press/logos/efe.jpg",
        image:
          "/images/press/be-gutsy/la-presion-social-lleva-a-jovenes-latinos-a-consumir.jpg",
        featured: true,
      },
      {
        title: "La presión social lleva a jóvenes latinos a consumir opiáceos",
        url: "https://www.latimes.com/efe-3914357-15189602-20190303-story.html",
        source: "la times",
        logo: "/images/press/logos/la-times.jpg",
        image:
          "/images/press/be-gutsy/la-presion-social-lleva-a-jovenes-latinos-a-consumir-2.jpg",
        featured: true,
      },
      {
        title: "Be Gutsy tackles opioid addiction among Latino youth",
        url: "https://www.instagram.com/p/Bu4ooa8n_xr/",
        source: "fox 5",
        logo: "/images/press/logos/fox-5.jpg",
        image:
          "/images/press/be-gutsy/be-gutsy-tackles-opioid-addiction-among-latino-youth.jpg",
        featured: true,
      },
      {
        title:
          'Founder of "Be Gutsy," discusses impact of prescribed opioid epidemic',
        url: "https://business.facebook.com/UnivisionNews/videos/783639765326358/",
        source: "fusion",
        logo: "/images/press/logos/fusion.jpg",
        image:
          "/images/press/be-gutsy/founder-of-be-gutsy-discusses-impact-of-prescribed-opioid.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "Beamina",
    slug: "beamina",
    showOnPressPage: true,
    articles: [
      {
        title: "“Beamina” la firma de bolsos fundada por una niña de 6 años",
        url: "https://www.youtube.com/watch?v=NfePkuWGN1s",
        source: "HOLA!",
        logo: "/images/press/logos/hola.jpg",
        image:
          "/images/press/beamina/beamina-la-firma-de-bolsos-fundada-por-una-nina-de-6-anos.jpg",
        featured: true,
      },
      {
        title: "Día de la Madre: regalos para una mamá fashion",
        url: "http://serpadres.com/mama-todo/dia-de-la-madre-regalos-para-una-mama-fashion/51815/",
        source: "Ser Padres",
        logo: "/images/press/logos/ser-padres.jpg",
        image:
          "/images/press/beamina/dia-de-la-madre-regalos-para-una-mama-fashion.jpg",
        featured: false,
      },
      {
        title:
          "Beamina, una línea de bolsos creada por madre e hija para empoderar a las mujeres",
        url: "http://siempremujer.com/moda/beamina-una-linea-de-bolsos-creada-por-madre-e-hija-para-empoderar-a-las-mujeres/90940/",
        source: "Siempre Mujer",
        logo: "/images/press/logos/siempre-mujer.jpg",
        image:
          "/images/press/beamina/beamina-una-linea-de-bolsos-creada-por-madre-e-hija-para.jpg",
        featured: true,
      },
      {
        title:
          "Beatriz Martínez y su hija, Paulina Anchia, se abren paso como empresarias puertorriqueñas con el diseño de bolsos para mujeres de todas las edades, que venden a través de la web y con cuyas ganancias ayudan a la Fundación Ricky Martin a combatir la...",
        url: "http://www.latimes.com/efe-3613967-14161379-20180512-story.html",
        source: "Los Angeles Times",
        logo: "/images/press/logos/los-angeles-times.jpg",
        image:
          "/images/press/beamina/beatriz-martinez-y-su-hija-paulina-anchia-se-abren-paso.jpg",
        featured: false,
      },
      {
        title:
          "Madre e hija puertorriqueña diseñan bolsos para combatir la trata humana",
        url: "https://www.efe.com/efe/usa/puerto-rico/madre-e-hija-puertorriquena-disenan-bolsos-para-combatir-la-trata-humana/50000110-3613967?utm_source=wwwefecom&utm_medium=rss&utm_campaign=rss",
        source: "EFE USA",
        logo: "/images/press/logos/efe-usa.jpg",
        image:
          "/images/press/beamina/beatriz-martinez-y-su-hija-paulina-anchia-se-abren-paso.jpg",
        featured: false,
      },
      {
        title:
          "La historia de emprendimiento de una madre y su hija que donan a la Fundación Ricky Martin",
        url: "https://www.univision.com/nueva-york/wxtv/la-historia-de-emprendimiento-de-una-madre-y-su-hija-que-donan-a-la-fundacion-ricky-martin-video",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/beamina/la-historia-de-emprendimiento-de-una-madre-y-su-hija-que.jpg",
        featured: false,
      },
      {
        title:
          "Puerto Rican mother and daughter design handbags to combat human trafficking",
        url: "https://thesunpost.com/2018/05/14/puerto-rican-mother-and-daughter-design-handbags-to-combat-human-trafficking/",
        source: "The SunPost",
        logo: "/images/press/logos/the-sunpost.jpg",
        image:
          "/images/press/beamina/puerto-rican-mother-and-daughter-design-handbags-to-combat.jpg",
        featured: false,
      },
      {
        title:
          "Niña de 10 años diseña bolsos para luchar contra el tráfico humano",
        url: "http://www.ntn24america.com/internacionales/el-informativo-ntn24/eeuu/nina-de-10-anos-disena-bolsos-para-luchar-contra-el",
        source: "NTN24",
        logo: "/images/press/logos/ntn24.jpg",
        image:
          "/images/press/beamina/nina-de-10-anos-disena-bolsos-para-luchar-contra-el-trafico.jpg",
        featured: false,
      },
      {
        title: "Mother Daughter Purse Business Sparking Change",
        url: "https://www.nbcmiami.com/on-air/as-seen-on/Mother-Daughter-Purse-Business-Sparking-Change_Miami-484942191.html",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/beamina/mother-daughter-purse-business-sparking-change.jpg",
        featured: true,
      },
      {
        title:
          "Estos bolsos diseñados por una niña y su mamá tienen muy feliz a Ricky Martin",
        url: "https://peopleenespanol.com/ponte-bella/carteras-por-una-causa-beamina-fundacion-ricky-martin/",
        source: "People en Español",
        logo: "/images/press/logos/people-en-espanol.jpg",
        image:
          "/images/press/beamina/estos-bolsos-disenados-por-una-nina-y-su-mama-tienen-muy.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "COCOA V",
    slug: "cocoa-v",
    showOnPressPage: true,
    articles: [
      {
        title: "Dairy-Free Vegan Chocolates in Chelsea",
        url: "https://www.nytimes.com/2017/02/13/dining/vegan-chocolate-cocoa-v-chocolat-chelsea.html",
        source: "The New York Times",
        logo: "/images/press/logos/the-new-york-times.jpg",
        image:
          "/images/press/cocoa-v/dairy-free-vegan-chocolates-in-chelsea.jpg",
        featured: true,
      },
      {
        title: "Vegan Chocolate Shop to Open on Valentine's Day",
        url: "http://insidecrowd.co/inthepress/2017/2/23/veg-news",
        source: "Veg News",
        logo: "/images/press/logos/veg-news.jpg",
        image:
          "/images/press/cocoa-v/vegan-chocolate-shop-to-open-on-valentine-s-day.jpg",
        featured: false,
      },
      {
        title:
          "Meet the Female Founder Battling Food and Gender Stereotypes to Build a Vegan Empire",
        url: "http://observer.com/2017/05/blossom-vegan-restaurant-pamela-elizabeth/",
        source: "The Observer",
        logo: "/images/press/logos/the-observer.jpg",
        image:
          "/images/press/cocoa-v/meet-the-female-founder-battling-food-and-gender.jpg",
        featured: false,
      },
      {
        title: "BuzzFeed’s Top Gift Ideas For Your Loved Ones",
        url: "https://www.buzzfeed.com/janeseo14/buzzfeeds-top-gift-ideas-for-your-loved-ones-1yxia?utm_term=.axK83R782#.dj2B7XrBg",
        source: "BuzzFeed",
        logo: "/images/press/logos/buzzfeed.jpg",
        image:
          "/images/press/cocoa-v/buzzfeeds-top-gift-ideas-for-your-loved-ones.jpg",
        featured: false,
      },
      {
        title: "A Golden Ticket to a Vegan Chocolate Factory",
        url: "http://www.noochdigest.com/home/2017/4/5/a-golden-ticket",
        source: "Nooch Digest",
        logo: "/images/press/logos/nooch-digest.jpg",
        image:
          "/images/press/cocoa-v/a-golden-ticket-to-a-vegan-chocolate-factory.jpg",
        featured: false,
      },
      {
        title:
          "All the treats, tabletop items and host gifts you could possibly need for Easter",
        url: "https://www.tastingtable.com/entertain/national/easter-gift-guide",
        source: "TASTING TABLE",
        logo: "/images/press/logos/tasting-table.jpg",
        image:
          "/images/press/cocoa-v/all-the-treats-tabletop-items-and-host-gifts-you-could.jpg",
        featured: false,
      },
      {
        title: "Where to Eat Healthy in New York City Right Now",
        url: "https://www.wellandgood.com/good-food/where-to-eat-healthy-nyc-brooklyn-2017/slide/24/",
        source: "Well + Good",
        logo: "/images/press/logos/well-good.jpg",
        image:
          "/images/press/cocoa-v/where-to-eat-healthy-in-new-york-city-right-now.jpg",
        featured: false,
      },
      {
        title:
          "10 Gifts Under $100 for the Mom Who Loves to Cook, Eat, and Drink",
        url: "https://greatist.com/eat/gift-ideas-for-the-mom-who-loves-to-cook-and-eat/amp",
        source: "Greatist",
        logo: "/images/press/logos/greatist.jpg",
        image:
          "/images/press/cocoa-v/10-gifts-under-100-for-the-mom-who-loves-to-cook-eat-and.jpg",
        featured: false,
      },
      {
        title: "NYC's First All Vegan Chocolate Shop is Now Open",
        url: "https://spoonuniversity.com/place/cnyc-first-all-vegan-chocolate-shop-is-now-open",
        source: "Spoon University",
        logo: "/images/press/logos/spoon-university.jpg",
        image:
          "/images/press/cocoa-v/nyc-s-first-all-vegan-chocolate-shop-is-now-open.jpg",
        featured: true,
      },
      {
        title: "More Chocolate to Feel Great About",
        url: "http://goop.com/more-chocolate-to-feel-great-about/",
        source: "Goop",
        logo: "/images/press/logos/goop.jpg",
        image: "/images/press/cocoa-v/more-chocolate-to-feel-great-about.jpg",
        featured: true,
      },
      {
        title: "These are the healthy chocolates you can eat on any crazy diet",
        url: "https://galoremag.com/cocoa-v-chocolat-gluten-free-vegan-chocolate-blossom-du-jour/",
        source: "Galore",
        logo: "/images/press/logos/galore.jpg",
        image:
          "/images/press/cocoa-v/these-are-the-healthy-chocolates-you-can-eat-on-any-crazy.jpg",
        featured: true,
      },
      {
        title: "Vegan Eats Reviews Cocoa V",
        url: "https://www.veganeatsnyc.com/restaurants/cocoa-v",
        source: "Vegan Eats NYC",
        logo: "/images/press/logos/vegan-eats-nyc.jpg",
        image: "/images/press/cocoa-v/vegan-eats-reviews-cocoa-v.jpg",
        featured: false,
      },
      {
        title: "Thoughtful Chocolate Cocoa V Beautifully Arrives on 9th Avenue",
        url: "http://www.manhattandigest.com/2017/03/02/cocoa-v-arrives-9th-avenue/",
        source: "Manhattan Digest",
        logo: "/images/press/logos/manhattan-digest.jpg",
        image:
          "/images/press/cocoa-v/thoughtful-chocolate-cocoa-v-beautifully-arrives-on-9th.jpg",
        featured: false,
      },
      {
        title:
          "Blossom Restaurant Owner Shares Vegan Recipes For Plant-Based Eating",
        url: "http://newyork.cbslocal.com/2017/03/19/vegan-recipes-blossom/",
        source: "CBS",
        logo: "/images/press/logos/cbs.jpg",
        image:
          "/images/press/cocoa-v/blossom-restaurant-owner-shares-vegan-recipes-for-plant.jpg",
        featured: false,
      },
      {
        title: "Cocoa V is the Vegan Chocolatier NYC has been waiting for.",
        url: "https://classandthecity.com/2017/02/23/cocoa-v-vegan-chocolate-blossom-du-jour/",
        source: "Class and The City",
        logo: null,
        image:
          "/images/press/cocoa-v/cocoa-v-is-the-vegan-chocolatier-nyc-has-been-waiting-for.jpg",
        featured: false,
      },
      {
        title: "Last Minute Gift Guide For The Healthy Mom!",
        url: "http://bellanyc.com/last-minute-gift-guide-for-the-healthy-mom/",
        source: "Bella NYC",
        logo: "/images/press/logos/bella-nyc.jpg",
        image:
          "/images/press/cocoa-v/last-minute-gift-guide-for-the-healthy-mom.jpg",
        featured: false,
      },
      {
        title: "New Yorker built an empire of vegan eateries",
        url: "http://www.bizjournals.com/bizwomen/news/latest-news/2017/05/new-yorker-built-anempire-of-vegan-eateries.html?page=all",
        source: "Business Journal Women",
        logo: "/images/press/logos/business-journal-women.jpg",
        image:
          "/images/press/cocoa-v/new-yorker-built-an-empire-of-vegan-eateries.jpg",
        featured: false,
      },
      {
        title: "Our Best Mother's Day Gift Ideas for the Food-Loving Mom",
        url: "http://www.marthastewart.com/1515029/mothers-day-gift-guide-food-loving-mom#1514895",
        source: "Martha Stewart",
        logo: "/images/press/logos/martha-stewart.jpg",
        image:
          "/images/press/cocoa-v/our-best-mother-s-day-gift-ideas-for-the-food-loving-mom.jpg",
        featured: false,
      },
      {
        title: "“A store that revolves around chocolate is bound to be good”",
        url: "http://www.hotspot-hunter.com/cocoav/",
        source: "Hot Spot Hunter",
        logo: null,
        image:
          "/images/press/cocoa-v/a-store-that-revolves-around-chocolate-is-bound-to-be-good.jpg",
        featured: false,
      },
      {
        title: "Pamela Elizabeth Speaks to Cheddar TV",
        url: "https://cheddar.vhx.tv/cheddar-archive/videos/cheddar-cheddar-life-s18-e042817-j-full-mezz-hd-en-us",
        source: "Cheddar",
        logo: "/images/press/logos/cheddar.jpg",
        image:
          "/images/press/cocoa-v/pamela-elizabeth-speaks-to-cheddar-tv.jpg",
        featured: false,
      },
      {
        title: "Restaurant openings in NYC",
        url: "http://www.amny.com/eat-and-drink/restaurant-openings-in-nyc-ikinari-steak-alta-calidad-and-more-1.13127523",
        source: "AM NY",
        logo: "/images/press/logos/am-ny.jpg",
        image: "/images/press/cocoa-v/restaurant-openings-in-nyc.jpg",
        featured: false,
      },
      {
        title: "4 vegan restaurants in New York",
        url: "http://www.lauraperuchi.com/2017/03/4-restaurantes-veganos-em-nova-york.html",
        source: "Laura Peruchi Blog",
        logo: "/images/press/logos/laura-peruchi-blog.jpg",
        image: "/images/press/cocoa-v/4-vegan-restaurants-in-new-york.jpg",
        featured: false,
      },
      {
        title: "A weekly-updated roundup of restaurant debuts in New York City",
        url: "http://ny.eater.com/2017/1/10/14224368/nyc-restaurant-openings-winter-2017",
        source: "Eater",
        logo: "/images/press/logos/eater.jpg",
        image:
          "/images/press/cocoa-v/a-weekly-updated-roundup-of-restaurant-debuts-in-new-york.jpg",
        featured: false,
      },
      {
        title: "Treat Yourself! The Sweetest Desserts In NYC",
        url: "http://www.refinery29.com/nyc-best-desserts#slide-1",
        source: "Refinery 29",
        logo: "/images/press/logos/refinery29.jpg",
        image:
          "/images/press/cocoa-v/treat-yourself-the-sweetest-desserts-in-nyc.jpg",
        featured: false,
      },
      {
        title: "FP How We: Move Together",
        url: "https://blog.freepeople.com/2017/10/we-move-together/",
        source: "Free People",
        logo: "/images/press/logos/free-people.jpg",
        image: "/images/press/cocoa-v/fp-how-we-move-together.jpg",
        featured: false,
      },
      {
        title: "15 Gift Ideas for Moms Who Love to Travel",
        url: "https://www.google.com/url?hl=en&q=http://fathomaway.com/postcards/stuff/mothers-day-gift-guide-2017/&source=gmail&ust=1494083430887000&usg=AFQjCNEwPq0s1e1MPqhDDYTm9Fzbm3mnCw",
        source: "Fathom",
        logo: "/images/press/logos/fathom.jpg",
        image:
          "/images/press/cocoa-v/15-gift-ideas-for-moms-who-love-to-travel.jpg",
        featured: false,
      },
      {
        title:
          "PODCAST: How This Woman Made The Jump And Beat Impostor Syndrome",
        url: "https://www.forbes.com/sites/deniserestauri/2017/07/19/how-this-woman-made-the-jump-and-beat-impostor-syndrome/#3d5be9e86460",
        source: "Forbes",
        logo: "/images/press/logos/forbes.jpg",
        image:
          "/images/press/cocoa-v/podcast-how-this-woman-made-the-jump-and-beat-impostor.jpg",
        featured: false,
      },
      {
        title: "Vegan Cooking Recipes",
        url: "http://www.msn.com/en-us/lifestyle/smart-living/vegan-cooking-recipes/vi-BByo6GS",
        source: "MSN",
        logo: "/images/press/logos/msn.jpg",
        image: "/images/press/cocoa-v/vegan-cooking-recipes.jpg",
        featured: false,
      },
      {
        title: "Q&A WITH VEGAN RESTAURATEUR PAMELA ELIZABETH",
        url: "https://cjnutrition.com/qa-with-vegan-restaurateur-pamela-elizabeth/",
        source: "CJ Nutrition",
        logo: "/images/press/logos/cj-nutrition.jpg",
        image:
          "/images/press/cocoa-v/q-a-with-vegan-restaurateur-pamela-elizabeth.jpg",
        featured: false,
      },
      {
        title:
          "Vegan Restaurateur Pamela Elizabeth (Blossom) Shares Her Success Secret",
        url: "https://www.peacefuldumpling.com/vegan-restaurateur-pamela-elizabeth-blossom-shares-secret-success",
        source: "Peaceful Dumpling",
        logo: "/images/press/logos/peaceful-dumpling.jpg",
        image:
          "/images/press/cocoa-v/q-a-with-vegan-restaurateur-pamela-elizabeth.jpg",
        featured: false,
      },
      {
        title:
          "In 2005 Pamela Elizabeth opened Blossom Restaurant in a townhouse in NYC",
        url: "https://www.onegreenplanet.org/author/blossom_nyc/",
        source: "One Green Planet",
        logo: "/images/press/logos/one-green-planet.jpg",
        image:
          "/images/press/cocoa-v/in-2005-pamela-elizabeth-opened-blossom-restaurant-in-a.jpg",
        featured: false,
      },
      {
        title:
          "12 Statistics About Women in Tech That Show How Big the Gender Gap Truly Is",
        url: "https://observer.com/2017/06/women-in-tech-statistics/",
        source: "The Observer",
        logo: "/images/press/logos/the-observer.jpg",
        image:
          "/images/press/cocoa-v/meet-the-female-founder-battling-food-and-gender.jpg",
        featured: false,
      },
      {
        title:
          'This female founder of seven vegan/kosher restaurants is taking her favorite recipes and sharing them in her new book, "The Blossom Cookbook."',
        url: "https://lionessmagazine.com/vegan-fast-food-queen-pamela-elizabeth-launches-new-book-the-blossom-cookbook/",
        source: "Lioness Magazine",
        logo: "/images/press/logos/lioness-magazine.jpg",
        image:
          "/images/press/cocoa-v/this-female-founder-of-seven-vegan-kosher-restaurants-is.jpg",
        featured: false,
      },
      {
        title:
          "Vegan Life Talks To Recipe Developer And Restaurant Owner Pamela Elizabeth About Creating A Menu And The Future Of Vegan Food",
        url: "https://www.veganlifemag.com/meet-the-chef-pamela-elizabeth/",
        source: "Vegan Life Mag",
        logo: "/images/press/logos/vegan-life-mag.jpg",
        image:
          "/images/press/cocoa-v/vegan-life-talks-to-recipe-developer-and-restaurant-owner.jpg",
        featured: false,
      },
      {
        title: "How to Boozify Your Hot Chocolate",
        url: "https://www.marieclaire.com/food-cocktails/a14456679/spiked-hot-chocolate-recipe/",
        source: "Marie Claire",
        logo: "/images/press/logos/marie-claire.jpg",
        image: "/images/press/cocoa-v/how-to-boozify-your-hot-chocolate.jpg",
        featured: false,
      },
      {
        title:
          "The Business of Feeling Good Entrepreneurs who place health and nutrition at the core of their companies are, quite literally, doing well.",
        url: "https://www.marieclaire.com/career-advice/a22091036/business-advice-wellness-nutrition/",
        source: "Marie Claire",
        logo: "/images/press/logos/marie-claire.jpg",
        image:
          "/images/press/cocoa-v/the-business-of-feeling-good-entrepreneurs-who-place-health.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "URBAN VEGAN KITCHEN",
    slug: "urban-vegan-kitchen",
    showOnPressPage: true,
    articles: [
      {
        title: "NYC Blossom du Jour Founder on Women in Business",
        url: "https://observer.com/2017/05/blossom-vegan-restaurant-pamela-elizabeth/",
        source: "Observer",
        logo: null,
        image:
          "/images/press/urban-vegan-kitchen/nyc-blossom-du-jour-founder-on-women-in-business.jpg",
        featured: false,
      },
      {
        title: "Stress-free Thanksgiving in NYC + our latest challenge!",
        url: "http://insidecrowd.co/inthepress/2017/11/20/a-dash-of-two",
        source: "A Dash of Two",
        logo: "/images/press/logos/a-dash-of-two.jpg",
        image:
          "/images/press/urban-vegan-kitchen/stress-free-thanksgiving-in-nyc-our-latest-challenge.jpg",
        featured: false,
      },
      {
        title: "Where Foodies Eat",
        url: "http://insidecrowd.co/inthepress/2017/1/9/where-foodies-eat",
        source: "Where Foodies Eat",
        logo: "/images/press/logos/where-foodies-eat.jpg",
        image: "/images/press/urban-vegan-kitchen/where-foodies-eat.jpg",
        featured: false,
      },
      {
        title: "Urban Vegan Kitchen Review",
        url: "http://insidecrowd.co/inthepress/2016/12/9/get-on-my-vegan-level",
        source: "Get On My Vegan Level",
        logo: "/images/press/logos/get-on-my-vegan-level.jpg",
        image:
          "/images/press/urban-vegan-kitchen/urban-vegan-kitchen-review.jpg",
        featured: false,
      },
      {
        title: "Chick-un & Waffles at Urban Vegan Kitchen",
        url: "http://insidecrowd.co/inthepress/2017/1/9/vegan-victuals",
        source: "Vegan Victuals",
        logo: "/images/press/logos/vegan-victuals.jpg",
        image:
          "/images/press/urban-vegan-kitchen/chick-un-waffles-at-urban-vegan-kitchen.jpg",
        featured: false,
      },
      {
        title: "Urban Vegan Kitchen Review",
        url: "https://www.veganeatsnyc.com/restaurants/urban-vegan-kitchen",
        source: "Vegan Eats NYC",
        logo: "/images/press/logos/vegan-eats-nyc.jpg",
        image:
          "/images/press/urban-vegan-kitchen/urban-vegan-kitchen-review-2.jpg",
        featured: false,
      },
      {
        title: "Finding Thanksgiving in NYC",
        url: "http://www.diningwithskyler.com/nycdining/2017/11/19/finding-thanksgiving-flavors-in-nyc",
        source: "Dining with Skyler",
        logo: "/images/press/logos/dining-with-skyler.jpg",
        image:
          "/images/press/urban-vegan-kitchen/finding-thanksgiving-in-nyc.jpg",
        featured: false,
      },
      {
        title: "A Healing Chickpea Curry Recipe From A Vegan Restaurateur",
        url: "http://www.mindbodygreen.com/0-27431/a-healing-chickpea-curry-recipe-from-a-vegan-restaurateur.html",
        source: "Mind Body Green",
        logo: "/images/press/logos/mindbodygreen.jpg",
        image:
          "/images/press/urban-vegan-kitchen/a-healing-chickpea-curry-recipe-from-a-vegan-restaurateur.jpg",
        featured: false,
      },
      {
        title: "Thanksgiving Special",
        url: "https://www.instagram.com/p/Bbj5PyZg59M/?taken-by=spoonuniversity",
        source: "Spoon University",
        logo: "/images/press/logos/spoon-university.jpg",
        image: "/images/press/urban-vegan-kitchen/thanksgiving-special.jpg",
        featured: false,
      },
      {
        title: "THIS IS THE VEGAN THANKSGIVING MENU WE’VE ALL BEEN WAITING FOR",
        url: "https://galoremag.com/vegan-thanksgiving-menu-weve-waiting/",
        source: "Galore",
        logo: "/images/press/logos/galore.jpg",
        image:
          "/images/press/urban-vegan-kitchen/this-is-the-vegan-thanksgiving-menu-weve-all-been-waiting.jpg",
        featured: false,
      },
      {
        title:
          "THE 14 HEALTHY RESTAURANTS YOU NEED TO TRY IN NEW YORK CITY THIS FALL",
        url: "http://www.wellandgood.com/good-food/best-healthy-restaurants-new-york-city-fall-2016/slide/10/",
        source: "Well + Good",
        logo: "/images/press/logos/well-good.jpg",
        image:
          "/images/press/urban-vegan-kitchen/the-14-healthy-restaurants-you-need-to-try-in-new-york-city.jpg",
        featured: false,
      },
      {
        title:
          "World Vegan Day: How Latinos Are Breaking Common Plant-Based Stereotypes",
        url: "http://thelatinkitchen.com/people/bloggers/a/world-vegan-day-how-latinos-are-breaking-common-plant-based-stereotypes",
        source: "Latina Magazine",
        logo: "/images/press/logos/latina-magazine.jpg",
        image:
          "/images/press/urban-vegan-kitchen/world-vegan-day-how-latinos-are-breaking-common-plant-based.jpg",
        featured: false,
      },
      {
        title:
          "The 15 Best Places for a Vegan Food in the West Village, New York",
        url: "https://foursquare.com/top-places/west-village-new-york/best-places-vegan-food",
        source: "FourSquare",
        logo: "/images/press/logos/foursquare.jpg",
        image:
          "/images/press/urban-vegan-kitchen/the-15-best-places-for-a-vegan-food-in-the-west-village-new.jpg",
        featured: false,
      },
      {
        title:
          "Vegan comfort food is the specialty of this newcomer from Pamela Elizabeth’s Blossom",
        url: "http://www.nytimes.com/2016/11/16/dining/wagamama-nyc-restaurant-openings.html?_r=1",
        source: "The New York Times",
        logo: "/images/press/logos/the-new-york-times.jpg",
        image:
          "/images/press/urban-vegan-kitchen/vegan-comfort-food-is-the-specialty-of-this-newcomer-from.jpg",
        featured: true,
      },
      {
        title: "A review of Urban Vegan Kitchen by One Hungry Jew",
        url: "http://www.onehungryjew.com/blog-1/2016/10/26/dflqyemogguim754cqw84idsu7d0yo",
        source: "One Hungry Jew",
        logo: null,
        image:
          "/images/press/urban-vegan-kitchen/a-review-of-urban-vegan-kitchen-by-one-hungry-jew.jpg",
        featured: false,
      },
      {
        title:
          "The New Vegan Hotspot In NYC’s West Village Impresses Omnivores And Herbivores Alike",
        url: "http://noshonme.blogspot.com/2016/11/the-new-vegan-hotspot-in-nycs-west.html",
        source: "Nosh on Me",
        logo: null,
        image:
          "/images/press/urban-vegan-kitchen/the-new-vegan-hotspot-in-nycs-west-village-impresses.jpg",
        featured: false,
      },
      {
        title: "Vegan Mac N Cheese for your Thanksgiving Table",
        url: "https://foodvsevil.com/2016/11/23/vegan-mac-n-cheese-for-your-thanksgiving-table/",
        source: "Food vs. Evil",
        logo: "/images/press/logos/food-vs-evil.jpg",
        image:
          "/images/press/urban-vegan-kitchen/vegan-mac-n-cheese-for-your-thanksgiving-table.jpg",
        featured: false,
      },
      {
        title: "Urban Vegan Kitchen Makes the Case for Plant-Based Decadence",
        url: "https://www.pastemagazine.com/articles/2016/10/urban-vegan-kitchen-makes-the-case-for-plant-based.html",
        source: "Paste Magazine",
        logo: "/images/press/logos/paste-magazine.jpg",
        image:
          "/images/press/urban-vegan-kitchen/urban-vegan-kitchen-makes-the-case-for-plant-based-decadence.jpg",
        featured: false,
      },
      {
        title: "This Vegan Breakfast Sandwich Is Inspired by an Egg McMuffin",
        url: "http://www.extracrispy.com/video/1547/this-vegan-breakfast-sandwich-is-inspired-by-an-egg-mcmuffin",
        source: "Extra Crispy",
        logo: "/images/press/logos/extra-crispy.jpg",
        image:
          "/images/press/urban-vegan-kitchen/this-vegan-breakfast-sandwich-is-inspired-by-an-egg-mcmuffin.jpg",
        featured: true,
      },
      {
        title:
          "MRM Talking With: Urban Vegan Kitchen (UVK) Co-Founder Pamela Elizabeth",
        url: "http://www.modernrestaurantmanagement.com/mrm-talking-with-urban-vegan-kitchen-co-founder-pamela-elizabeth/",
        source: "Modern Restaurant Management",
        logo: "/images/press/logos/modern-restaurant-management.jpg",
        image:
          "/images/press/urban-vegan-kitchen/mrm-talking-with-urban-vegan-kitchen-uvk-co-founder-pamela.jpg",
        featured: false,
      },
      {
        title:
          "The vibe is eclectic at Urban Vegan Kitchen on Carmine Street in the West Village. The food makes you wonder why you didn't try vegan sooner.",
        url: "http://www.fox5ny.com/news/214976207-story",
        source: "Fox News",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/urban-vegan-kitchen/the-vibe-is-eclectic-at-urban-vegan-kitchen-on-carmine.jpg",
        featured: true,
      },
      {
        title: "5 Vegan Thanksgiving Feasts You Don't Have to Cook Yourself",
        url: "http://vegnews.com/articles/page.do?pageId=10330&catId=2",
        source: "Veg News",
        logo: "/images/press/logos/veg-news.jpg",
        image:
          "/images/press/urban-vegan-kitchen/5-vegan-thanksgiving-feasts-you-don-t-have-to-cook-yourself.jpg",
        featured: false,
      },
      {
        title: "NYC restaurants serving Thanksgiving dinner",
        url: "https://www.amny.com/eat-and-drink/nyc-restaurants-serving-thanksgiving-dinner-1.9614326",
        source: "AM NY",
        logo: "/images/press/logos/am-ny.jpg",
        image:
          "/images/press/urban-vegan-kitchen/nyc-restaurants-serving-thanksgiving-dinner.jpg",
        featured: false,
      },
      {
        title:
          "Vegan Restaurateur Pamela Elizabeth (Blossom) Shares Her Success Secret",
        url: "http://www.peacefuldumpling.com/vegan-restaurateur-pamela-elizabeth-blossom-shares-secret-success",
        source: "Peaceful Dumpling",
        logo: "/images/press/logos/peaceful-dumpling.jpg",
        image:
          "/images/press/urban-vegan-kitchen/vegan-restaurateur-pamela-elizabeth-blossom-shares-her.jpg",
        featured: false,
      },
      {
        title: "Vegan Thanksgiving Meals Being Offered in the USA!",
        url: "https://www.vrg.org/blog/2017/11/15/vegan-thanksgiving-meals-being-offered-in-the-usa/",
        source: "The Vegetarian Resource Group",
        logo: "/images/press/logos/the-vegetarian-resource-group.jpg",
        image:
          "/images/press/urban-vegan-kitchen/vegan-thanksgiving-meals-being-offered-in-the-usa.jpg",
        featured: false,
      },
      {
        title:
          "A new cruelty-free, vegan restaurant has just opened in the West Village by the name of Urban Vegan Kitchen.",
        url: "http://www.justopenednewyork.com/urban-vegan-kitchen-west-village-new-york/",
        source: "Just Opened NYC",
        logo: "/images/press/logos/just-opened-nyc.jpg",
        image:
          "/images/press/urban-vegan-kitchen/a-new-cruelty-free-vegan-restaurant-has-just-opened-in-the.jpg",
        featured: false,
      },
      {
        title:
          "The New Vegan Hotspot In NYC’s West Village Impresses Omnivores And Herbivores Alike",
        url: "https://www.buzzfeed.com/janeseo14/the-new-vegan-hotspot-in-nycs-west-village-impres-1yxia?utm_term=.hhLj1neVr#.rggBJDZ5Y",
        source: "BuzzFeed",
        logo: "/images/press/logos/buzzfeed.jpg",
        image:
          "/images/press/urban-vegan-kitchen/the-new-vegan-hotspot-in-nycs-west-village-impresses-2.jpg",
        featured: true,
      },
      {
        title: "Q&A WITH VEGAN RESTAURATEUR PAMELA ELIZABETH",
        url: "http://cjnutrition.com/qa-with-vegan-restaurateur-pamela-elizabeth/",
        source: "CJ Nutrition",
        logo: "/images/press/logos/cj-nutrition.jpg",
        image:
          "/images/press/urban-vegan-kitchen/q-a-with-vegan-restaurateur-pamela-elizabeth.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "BLOSSOM DU JOUR",
    slug: "blossom-du-jour",
    showOnPressPage: true,
    articles: [
      {
        title: "Where to Order Thanksgiving to Go in NYC",
        url: "https://www.tastingtable.com/dine/national/nyc-cater-thanksgiving-dinner-restaurant",
        source: "TASTING TABLE",
        logo: "/images/press/logos/tasting-table.jpg",
        image:
          "/images/press/blossom-du-jour/where-to-order-thanksgiving-to-go-in-nyc.jpg",
        featured: true,
      },
      {
        title: "Vegan Thanksgiving Meals Being Offered in the USA!",
        url: "https://www.vrg.org/blog/2017/11/15/vegan-thanksgiving-meals-being-offered-in-the-usa/",
        source: "The Vegetarian Resource Group",
        logo: "/images/press/logos/the-vegetarian-resource-group.jpg",
        image:
          "/images/press/blossom-du-jour/vegan-thanksgiving-meals-being-offered-in-the-usa.jpg",
        featured: false,
      },
      {
        title: "5 Vegan Thanksgiving Feasts You Don't Have to Cook Yourself",
        url: "http://vegnews.com/articles/page.do?pageId=10330&catId=2",
        source: "Veg News",
        logo: "/images/press/logos/veg-news.jpg",
        image:
          "/images/press/blossom-du-jour/5-vegan-thanksgiving-feasts-you-don-t-have-to-cook-yourself.jpg",
        featured: false,
      },
      {
        title: "16 NYC Restaurants Great for Gluten-Free Dining",
        url: "https://ny.eater.com/maps/nyc-best-gluten-free-restaurants",
        source: "Eater",
        logo: "/images/press/logos/eater.jpg",
        image:
          "/images/press/blossom-du-jour/16-nyc-restaurants-great-for-gluten-free-dining.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "SALVADOR GOMEZ COLON, YOUTH ACTIVIST",
    slug: "salvador-gomez-colon-youth-activist",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Hey, Trump: This 15-year-old is helping Puerto Rico in the most thoughtful way",
        url: "http://www.vivala.com/politics/15-year-old-puerto-rico/7455",
        source: "vivala",
        logo: "/images/press/logos/vivala.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/hey-trump-this-15-year-old-is-helping-puerto-rico-in-the.jpg",
        featured: false,
      },
      {
        title:
          "Teen delivers hundreds of solar lamps to Puerto Ricans without power",
        url: "https://money.cnn.com/2018/02/01/news/economy/puerto-rico-teen-solar-lamps-power/index.html",
        source: "CNN MONEY",
        logo: "/images/press/logos/cnn-money.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/teen-delivers-hundreds-of-solar-lamps-to-puerto-ricans.jpg",
        featured: false,
      },
      {
        title:
          "This brilliant 15-year-old is sending solar light bulbs and phone chargers to 1,000 families in Puerto Rico",
        url: "https://www.facebook.com/NowThisFuture/videos/1784539581587214/",
        source: "NOW THIS",
        logo: "/images/press/logos/now-this-2.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/this-brilliant-15-year-old-is-sending-solar-light-bulbs-and.jpg",
        featured: true,
      },
      {
        title: "The 30 Most Influential Teens of 2017",
        url: "http://time.com/5003930/most-influential-teens-2017/?xid=homepage",
        source: "Time",
        logo: "/images/press/logos/time.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/the-30-most-influential-teens-of-2017.jpg",
        featured: true,
      },
      {
        title: "15-year-old boy in San Juan raising funds for solar lamps",
        url: "http://money.cnn.com/2017/09/30/news/economy/puerto-rico-15-year-old-solar-lamps/index.html",
        source: "CNN MONEY",
        logo: "/images/press/logos/cnn-money.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/15-year-old-boy-in-san-juan-raising-funds-for-solar-lamps.jpg",
        featured: true,
      },
      {
        title:
          "This 15-Year-Old Is Bringing Solar-Powered Lights to Hurricane Maria Victims",
        url: "https://www.teenvogue.com/story/hurricane-maria-solar-powered-lights-salvador-garcia",
        source: "Teen Vogue",
        logo: "/images/press/logos/teen-vogue.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/this-15-year-old-is-bringing-solar-powered-lights-to.jpg",
        featured: true,
      },
      {
        title:
          "Teen Is Fundraising to Equip 1,000 Puerto Rican Families With Solar Lights and Washing Machines",
        url: "http://remezcla.com/culture/hurricane-maria-teen-raising-money/",
        source: "Remezcla",
        logo: "/images/press/logos/remezcla.jpg",
        image:
          "/images/press/salvador-gomez-colon-youth-activist/teen-is-fundraising-to-equip-1-000-puerto-rican-families.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "PARALLEL 18",
    slug: "parallel-18",
    showOnPressPage: true,
    articles: [
      {
        title:
          "In Puerto Rico, Building a Disaster-Proof Business Is Part of Recovery",
        url: "https://www.nytimes.com/2019/04/09/business/puerto-rico-parallel18-hurricane-economy.html",
        source: null,
        logo: "/images/press/logos/the-new-york-times.jpg",
        image:
          "/images/press/parallel-18/in-puerto-rico-building-a-disaster-proof-business-is-part.jpg",
        featured: false,
      },
      {
        title: "As Others Pack, Some Millennials Commit to Puerto Rico",
        url: "https://www.nytimes.com/2017/08/05/us/puerto-ricans-millennials-start-ups-small-business.html",
        source: "The New York Times",
        logo: "/images/press/logos/the-new-york-times.jpg",
        image:
          "/images/press/parallel-18/as-others-pack-some-millennials-commit-to-puerto-rico.jpg",
        featured: true,
      },
      {
        title:
          "Meet the 14 Startups from Parallel18 Fueling the Puerto Rico Economy",
        url: "https://tech.co/startups-parallel18-puerto-rico-2017-07",
        source: "Tech.co",
        logo: "/images/press/logos/tech-co.jpg",
        image:
          "/images/press/parallel-18/meet-the-14-startups-from-parallel18-fueling-the-puerto.jpg",
        featured: false,
      },
      {
        title:
          "In Puerto Rico, Program Attracts Young Entrepreneurs, Sees Results",
        url: "https://www.nbcnews.com/news/latino/puerto-rico-parallel-18-entrepreneurship-program-sees-results-n787186",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/parallel-18/in-puerto-rico-program-attracts-young-entrepreneurs-sees.jpg",
        featured: true,
      },
      {
        title:
          "Puerto Rico: A Case Study in Tax Incentives and Acceleration to Build a Startup Ecosystem",
        url: "https://www.inc.com/paul-grossinger/puerto-rico-a-case-study-in-tax-incentives-and-acc.html",
        source: "Inc Magainze",
        logo: "/images/press/logos/inc-magainze.jpg",
        image:
          "/images/press/parallel-18/puerto-rico-a-case-study-in-tax-incentives-and-acceleration.jpg",
        featured: true,
      },
      {
        title:
          "Wanna Be A #Boss By The Beach? This Puerto Rican Accelerator Wants To Make You A Millionaire",
        url: "http://www.latina.com/lifestyle/news/wanna-be-boss-beach-puerto-rican-accelerator-wants-make-you-millionaire",
        source: "Latina",
        logo: "/images/press/logos/latina.jpg",
        image:
          "/images/press/parallel-18/wanna-be-a-boss-by-the-beach-this-puerto-rican-accelerator.jpg",
        featured: false,
      },
      {
        title: "Why Puerto Rico is attracting entrepreneurs",
        url: "https://finance.yahoo.com/video/why-puerto-rico-attracting-entrepreneurs-184055780.html",
        source: "Yahoo Finance",
        logo: "/images/press/logos/yahoo-finance-2.jpg",
        image:
          "/images/press/parallel-18/why-puerto-rico-is-attracting-entrepreneurs.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "Juneteenth",
    slug: "juneteenth",
    showOnPressPage: true,
    articles: [
      {
        title: "Fourth Annual Juneteenth Celebration",
        url: "https://thoughtgallery.org/events/fourth-annual-juneteenth-celebration/",
        source: "The Thought Gallery",
        logo: "/images/press/logos/the-thought-gallery.jpg",
        image:
          "/images/press/juneteenth/fourth-annual-juneteenth-celebration.jpg",
        featured: false,
      },
      {
        title:
          "THE URGENCY OF JUNETEENTH FOR EDUCATORS [INTERVIEW WITH DR. JAMES FORBES]",
        url: "https://thejosevilson.com/the-urgency-of-juneteenth-for-educators-interview-with-dr-james-forbes/",
        source: "The Jose Vilson",
        logo: "/images/press/logos/the-jose-vilson.jpg",
        image:
          "/images/press/juneteenth/the-urgency-of-juneteenth-for-educators-interview-with-dr.jpg",
        featured: false,
      },
      {
        title:
          "Fourth Annual Juneteenth Celebration 2018 At Riverside Church In Harlem",
        url: "http://www.harlemworldmagazine.com/fourth-annual-juneteenth-celebration-2018-at-riverside-church-in-harlem/",
        source: "Harlem World Magazine",
        logo: "/images/press/logos/harlem-world-magazine.jpg",
        image:
          "/images/press/juneteenth/fourth-annual-juneteenth-celebration-2018-at-riverside.jpg",
        featured: true,
      },
      {
        title:
          "Fourth Annual Juneteenth Celebration: The Fierce Urgency for Justice Now",
        url: "https://www.cityguideny.com/event/The-Riverside-Church-2018-06-19-2018-06-19",
        source: "City Guide NY",
        logo: "/images/press/logos/city-guide-ny.jpg",
        image:
          "/images/press/juneteenth/fourth-annual-juneteenth-celebration-the-fierce-urgency-for.jpg",
        featured: false,
      },
      {
        title:
          "Riverside Church is celebrating Juneteenth, a celebration of the emancipation of enslaved people in the United States.",
        url: "http://www.wfuv.org/content/riverside-church-host-juneteenth-celebration",
        source: "WFUV (Fordham University)",
        logo: "/images/press/logos/wfuv-fordham-university.jpg",
        image:
          "/images/press/juneteenth/riverside-church-is-celebrating-juneteenth-a-celebration-of.jpg",
        featured: true,
      },
      {
        title:
          "Hundreds pack historic church for annual Juneteenth celebration",
        url: "https://pix11.com/2018/06/19/hundreds-pack-historic-church-for-annual-juneteenth-celebration/",
        source: "PIX 11 News",
        logo: "/images/press/logos/pix-11-news.jpg",
        image:
          "/images/press/juneteenth/hundreds-pack-historic-church-for-annual-juneteenth.jpg",
        featured: true,
      },
      {
        title: "Juneteenth observed with celebration and activism",
        url: "http://amsterdamnews.com/news/2018/jun/21/juneteenth-observed-celebration-and-activism/",
        source: "Amsterdam News",
        logo: "/images/press/logos/amsterdam-news.jpg",
        image:
          "/images/press/juneteenth/juneteenth-observed-with-celebration-and-activism.jpg",
        featured: false,
      },
      {
        title:
          "Marking the 153rd anniversary of Juneteenth Day, the day in which enslaved people living in Texas was made aware of the Emancipation Proclamation, the 4th annual Juneteenth Day celebration was  held at the Riverside Church in Manhattan.",
        url: "https://www.wbai.org/upcomingprogram.php?upcomingid=4230",
        source: "WBAI",
        logo: "/images/press/logos/wbai.jpg",
        image:
          "/images/press/juneteenth/marking-the-153rd-anniversary-of-juneteenth-day-the-day-in.jpg",
        featured: false,
      },
      {
        title:
          "The Riverside Church held its 4th annual Juneteenth celebration, where people discussed equal rights, freedom and justice for all.",
        url: "https://www.bronxnet.org/watch/videos/5277/?topicId=6",
        source: "Bronxnet",
        logo: "/images/press/logos/bronxnet.jpg",
        image:
          "/images/press/juneteenth/the-riverside-church-held-its-4th-annual-juneteenth.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "Puerto Rico Science, Technology, & Research Trust",
    slug: "puerto-rico-science-technology-research-trust",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Shop & Hire Puerto Rico Connects Puerto Rican Makers With U.S. Shoppers & Employers — Just In Time For The Holidays",
        url: "https://www.bustle.com/p/shop-hire-puerto-rico-connects-puerto-rican-makers-with-us-shoppers-employers-just-in-time-for-the-holidays-5480142",
        source: "Bustle",
        logo: "/images/press/logos/bustle-2.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/shop-hire-puerto-rico-connects-puerto-rican-makers-with-u-s.jpg",
        featured: false,
      },
      {
        title: "Co-Hosts' Favorite Things For The Holidays",
        url: "https://www.youtube.com/watch?v=_MCry8TSoiM",
        source: "ABC's The View",
        logo: "/images/press/logos/abc-s-the-view.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/co-hosts-favorite-things-for-the-holidays.jpg",
        featured: true,
      },
      {
        title: "10 Holiday Gifts That Give Back to Worthy Causes",
        url: "https://www.marieclaire.com/fashion/g13969430/gifts-that-give-back-charity/?slide=9",
        source: "Marie Claire",
        logo: "/images/press/logos/marie-claire.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/10-holiday-gifts-that-give-back-to-worthy-causes.jpg",
        featured: true,
      },
      {
        title: "How To Shop With A Purpose For Puerto Rico This Christmas",
        url: "https://www.forbes.com/sites/giovannirodriguez/2017/11/28/shopping-for-puerto-ricans-with-purpose-in-the-post-maria-economy/#6768a39f7e8a",
        source: "Forbes",
        logo: "/images/press/logos/forbes.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/how-to-shop-with-a-purpose-for-puerto-rico-this-christmas.jpg",
        featured: false,
      },
      {
        title: "Your holiday shopping could help Puerto Rico",
        url: "https://www.facebook.com/NowThisNews/videos/1717408318349285/",
        source: "Now This News",
        logo: "/images/press/logos/now-this-2.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/your-holiday-shopping-could-help-puerto-rico.jpg",
        featured: true,
      },
      {
        title: "Want to Help Puerto Rico? Start with its Local Businesswomen",
        url: "https://galoremag.com/help-puerto-rico-businesswomen-girlcult-animus/",
        source: "Galore",
        logo: "/images/press/logos/galore.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/want-to-help-puerto-rico-start-with-its-local-businesswomen.jpg",
        featured: false,
      },
      {
        title:
          "This Holiday Season, Shop These Puerto Rico-Based Stores Online and Help the Island Bounce Back",
        url: "http://remezcla.com/lists/culture/shop-and-hire-puerto-rico/",
        source: "Remezcla",
        logo: "/images/press/logos/remezcla.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/this-holiday-season-shop-these-puerto-rico-based-stores.jpg",
        featured: false,
      },
      {
        title:
          "Cómo ayudar realmente a reconstruir Puerto Rico tras el paso del huracán María",
        url: "http://siempremujer.com/cultura/como-ayudar-realmente-a-reconstruir-puerto-rico-tras-el-paso-del-huracan-maria/89868/",
        source: "Siempre Mujer",
        logo: "/images/press/logos/siempre-mujer.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/como-ayudar-realmente-a-reconstruir-puerto-rico-tras-el.jpg",
        featured: false,
      },
      {
        title:
          "Así es cómo puedes ayudar a Puerto Rico cuando compres los regalos de Navidad",
        url: "http://peopleenespanol.com/ponte-bella/regalos-navidad-solidarios-puerto-rico-reconstruccion/",
        source: "People en Español",
        logo: "/images/press/logos/people-en-espanol.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/asi-es-como-puedes-ayudar-a-puerto-rico-cuando-compres-los.jpg",
        featured: false,
      },
      {
        title: "These Holiday Gifts Support Puerto Rico's Hurricane Recovery",
        url: "http://people.com/chica/holiday-gifts-puerto-rico-hurricane-relief/",
        source: "People",
        logo: "/images/press/logos/people.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/these-holiday-gifts-support-puerto-rico-s-hurricane-recovery.jpg",
        featured: true,
      },
      {
        title: "Spoon's Holiday Gift Guide",
        url: "https://www.facebook.com/SpoonUniversity/videos/2040226776006216/",
        source: "Spoon University",
        logo: "/images/press/logos/spoon-university.jpg",
        image:
          "/images/press/puerto-rico-science-technology-research-trust/spoon-s-holiday-gift-guide.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "Animus",
    slug: "animus",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Rita Moreno slams Trump, rallies women entrepreneurs at Puerto Rico summit",
        url: "https://www.nbcnews.com/news/latino/rita-moreno-slams-trump-rallies-women-entrepreneurs-puerto-rico-summit-n825806",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/animus/rita-moreno-slams-trump-rallies-women-entrepreneurs-at.jpg",
        featured: false,
      },
      {
        title:
          "In Puerto Rico, women entrepreneurs talk about rebuilding the economy",
        url: "https://finance.yahoo.com/news/puerto-rico-women-entrepreneurs-talk-rebuilding-economy-211601915.html",
        source: "Yahoo Finance",
        logo: "/images/press/logos/yahoo-finance-2.jpg",
        image:
          "/images/press/animus/in-puerto-rico-women-entrepreneurs-talk-about-rebuilding.jpg",
        featured: false,
      },
      {
        title:
          "How Puerto Rican Women-Owned Businesses Will Be Key To The Island’s Recovery After Hurricane Maria",
        url: "https://www.bustle.com/p/how-puerto-rican-women-owned-businesses-will-be-key-to-the-islands-recovery-after-hurricane-maria-5500323",
        source: "Bustle",
        logo: "/images/press/logos/bustle-2.jpg",
        image:
          "/images/press/animus/how-puerto-rican-women-owned-businesses-will-be-key-to-the.jpg",
        featured: true,
      },
      {
        title:
          "Animus: Conferencia para acentuar el acceso a oportunidades para todas las mujeres",
        url: "http://www.nylon.com/articles/espanol-animus-conferencia-puerto-rico-001",
        source: "Nylon Español",
        logo: null,
        image:
          "/images/press/animus/animus-conferencia-para-acentuar-el-acceso-a-oportunidades.jpg",
        featured: false,
      },
      {
        title: "Women gather in Puerto Rico to talk economy and empowerment",
        url: "https://finance.yahoo.com/video/women-gather-san-juan-talk-181333595.html",
        source: "Yahoo Finance",
        logo: "/images/press/logos/yahoo-finance-2.jpg",
        image:
          "/images/press/animus/women-gather-in-puerto-rico-to-talk-economy-and-empowerment.jpg",
        featured: true,
      },
      {
        title:
          "Lucienne Gigante and Carlos Cobian on the 2016 Animus Summit in Puerto Rico",
        url: "http://www.huffingtonpost.com/entry/lucienne-gigante-and-carlos-cobian-on-the-2016-animus_us_57c97188e4b0b9c5b7382027",
        source: "Huff Post",
        logo: "/images/press/logos/huff-post.jpg",
        image:
          "/images/press/animus/lucienne-gigante-and-carlos-cobian-on-the-2016-animus.jpg",
        featured: false,
      },
      {
        title:
          "Puerto Rico’s Women Entrepreneurs Are Doing What Trump Wouldn’t",
        url: "https://www.fastcompany.com/40493785/puerto-ricos-women-entrepreneurs-are-doing-what-trump-wouldnt",
        source: "Fast Company",
        logo: "/images/press/logos/fast-company-3.jpg",
        image:
          "/images/press/animus/puerto-ricos-women-entrepreneurs-are-doing-what-trump.jpg",
        featured: true,
      },
      {
        title:
          "This Company Believes Puerto Rico's Female Entrepreneurs Will Save the Island",
        url: "http://www.latina.com/lifestyle/our-issues/animus-female-entrepreneurs-puerto-rico",
        source: "Latina Magazine",
        logo: "/images/press/logos/latina-magazine.jpg",
        image:
          "/images/press/animus/this-company-believes-puerto-rico-s-female-entrepreneurs.jpg",
        featured: false,
      },
      {
        title:
          "SAN JUAN: Puerto Rico's economic troubles offer opportunity for women",
        url: "http://www.bizjournals.com/bizwomen/news/profiles-strategies/2016/10/san-juan-puerto-ricos-economic-troubles-offer.html?s=print",
        source: "Biz Journals",
        logo: "/images/press/logos/biz-journals.jpg",
        image:
          "/images/press/animus/san-juan-puerto-rico-s-economic-troubles-offer-opportunity.jpg",
        featured: false,
      },
      {
        title: "Encuentro de mujeres líderes en Puerto Rico",
        url: "http://siempremujer.com/estilo/encuentro-de-mujeres-lideres-en-puerto-rico/85935/",
        source: "Siempre Mujer",
        logo: "/images/press/logos/siempre-mujer.jpg",
        image:
          "/images/press/animus/encuentro-de-mujeres-lideres-en-puerto-rico.jpg",
        featured: false,
      },
      {
        title: "Investing in Women’s Economic Development is a Growth Driver",
        url: "https://journal.thriveglobal.com/investing-in-womens-economic-development-is-a-growth-driver-5ab45309d1a1",
        source: "Thrive Global",
        logo: "/images/press/logos/thrive-global.jpg",
        image:
          "/images/press/animus/investing-in-womens-economic-development-is-a-growth-driver.jpg",
        featured: true,
      },
      {
        title:
          "In Puerto Rico, Justice Sonia Sotomayor Encourages Women, Students",
        url: "http://www.nbcnews.com/news/latino/puerto-rico-justice-sonia-sotomayor-encourages-women-students-n657566",
        source: "NBC Latino News",
        logo: null,
        image:
          "/images/press/animus/in-puerto-rico-justice-sonia-sotomayor-encourages-women.jpg",
        featured: false,
      },
      {
        title: "Animus + Maria Antonietta Collins (radio) interview",
        url: "https://youtu.be/dxQ9k7vtfhQ",
        source: "Animus+ Maria Antonietta Collins (radio) interview",
        logo: null,
        image:
          "/images/press/animus/animus-maria-antonietta-collins-radio-interview.jpg",
        featured: false,
      },
      {
        title: "Want to Help Puerto Rico? Start with its Local Businesswomen",
        url: "https://galoremag.com/help-puerto-rico-businesswomen-girlcult-animus/",
        source: "Galore",
        logo: "/images/press/logos/galore.jpg",
        image:
          "/images/press/animus/want-to-help-puerto-rico-start-with-its-local-businesswomen.jpg",
        featured: false,
      },
      {
        title:
          "Giselle Blondet desde el panel en Animus Summit, hablando con las 'Mujeres de Valor\" del programa de L'Oreal Paris.",
        url: "https://www.instagram.com/p/BLY5VIEDWGZ/",
        source: "HOLA!",
        logo: "/images/press/logos/hola.jpg",
        image:
          "/images/press/animus/giselle-blondet-desde-el-panel-en-animus-summit-hablando.jpg",
        featured: false,
      },
      {
        title: "Sonia Sotomayor inspira a mujeres en San Juan",
        url: "http://www.univision.com/noticias/conferencias/sonia-sotomayor-inspira-a-mujeres-en-san-juan",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/animus/sonia-sotomayor-inspira-a-mujeres-en-san-juan.jpg",
        featured: false,
      },
      {
        title:
          "Sonia Sotomayor contará su historia de éxito en un evento en Puerto Rico",
        url: "http://www.efe.com/efe/usa/puerto-rico/sonia-sotomayor-contara-su-historia-de-exito-en-un-evento-puerto-rico/50000110-3044673",
        source: "EFE USA",
        logo: "/images/press/logos/efe-usa.jpg",
        image:
          "/images/press/animus/sonia-sotomayor-contara-su-historia-de-exito-en-un-evento.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "AGROHACK",
    slug: "agrohack",
    showOnPressPage: true,
    articles: [
      {
        title: "The Making Of A Puerto Rican Mobilizer",
        url: "https://www.forbes.com/sites/giovannirodriguez/2016/10/03/the-making-of-a-puerto-rican-mobilizer-part-iii-of-lost-and-found-in-old-san-juan/#44a7fd576d1d",
        source: "FORBES",
        logo: "/images/press/logos/forbes-2.jpg",
        image:
          "/images/press/agrohack/the-making-of-a-puerto-rican-mobilizer.jpg",
        featured: true,
      },
      {
        title:
          "Puerto Rico: Young Generation Creating an Island of Cannabis Opportunity",
        url: "https://www.leafly.com/news/industry/puerto-rico-young-generation-creating-island-cannabis-opportunity",
        source: "Leafly",
        logo: "/images/press/logos/leafly.jpg",
        image:
          "/images/press/agrohack/puerto-rico-young-generation-creating-an-island-of-cannabis.jpg",
        featured: false,
      },
      {
        title:
          "The Three Big Challenges Facing Puerto Rico (Part II Of 'Lost And Found In Old San Juan')",
        url: "http://www.forbes.com/sites/giovannirodriguez/2016/05/28/the-three-big-challenges-facing-puerto-rico-part-ii-of-lost-and-found-in-old-san-juan/#249410556872",
        source: "Forbes",
        logo: "/images/press/logos/forbes.jpg",
        image:
          "/images/press/agrohack/the-three-big-challenges-facing-puerto-rico-part-ii-of-lost.jpg",
        featured: false,
      },
      {
        title:
          '"El producto está en la tierra. Lo único que hace falta es producir para el consumo local, y también para el consumo global", insistió Cobián sobre su iniciativa.',
        url: "http://www.metro.pr/noticias/impulsan-la-agricultura-mediante-la-tecnologia-y-la-innovacion/pGXpeB!ZPXMqBySbeM/",
        source: "METRO",
        logo: "/images/press/logos/metro.jpg",
        image:
          "/images/press/agrohack/el-producto-esta-en-la-tierra-lo-unico-que-hace-falta-es.jpg",
        featured: false,
      },
      {
        title:
          'San Juan albergó hoy su primer "Agrohack", un evento con el que se pretende impulsar el desarrollo de la exigua agricultura local, mediante la incorporación de la tecnología y la innovación.',
        url: "http://www.efe.com/efe/usa/puerto-rico/impulsan-la-agricultura-en-puerto-rico-mediante-tecnologia-y-innovacion/50000110-2939224",
        source: "EFE USA",
        logo: "/images/press/logos/efe-usa.jpg",
        image:
          "/images/press/agrohack/san-juan-albergo-hoy-su-primer-agrohack-un-evento-con-el.jpg",
        featured: false,
      },
      {
        title:
          "Don’t call it a comeback yet: The future of farming in Puerto Rico",
        url: "http://www.univision.com/univision-news/united-states/dont-call-it-a-comeback-yet-the-future-of-farming-in-puerto-rico?hootPostID=4b0fef1a941a821d88237272d86485ae",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/agrohack/dont-call-it-a-comeback-yet-the-future-of-farming-in-puerto.jpg",
        featured: false,
      },
      {
        title:
          "Puerto Rico's born-again farmers dig for victory in island's debt battle",
        url: "http://www.theguardian.com/world/2016/may/29/puerto-rico-farmers-agriculture-revival-caribbean-food",
        source: "The Guardian",
        logo: "/images/press/logos/the-guardian.jpg",
        image:
          "/images/press/agrohack/puerto-rico-s-born-again-farmers-dig-for-victory-in-island.jpg",
        featured: true,
      },
      {
        title: "Agrohack: A Puerto Rican Tech Success Story",
        url: "https://www.inc.com/paul-grossinger/agrohack-a-puerto-rican-tech-success-story.html",
        source: "Inc Magainze",
        logo: "/images/press/logos/inc-magainze.jpg",
        image:
          "/images/press/agrohack/agrohack-a-puerto-rican-tech-success-story.jpg",
        featured: true,
      },
      {
        title:
          "How Puerto Rico Lost Its Home-Grown Food, But Might Find It Again",
        url: "http://www.npr.org/sections/thesalt/2017/05/13/527934047/how-puerto-rico-lost-its-home-grown-food-but-might-find-it-again?utm_source=facebook.com&utm_medium=social&utm_campaign=npr&utm_term=nprnews&utm_content=20170513",
        source: "NPR",
        logo: "/images/press/logos/npr.jpg",
        image:
          "/images/press/agrohack/how-puerto-rico-lost-its-home-grown-food-but-might-find-it.jpg",
        featured: true,
      },
      {
        title:
          "Impulsan la agricultura en Puerto Rico mediante la tecnología y la innovación",
        url: "http://www.telemundoatlanta.com/1829_nacional/3841571_impulsan-la-agricultura-en-puerto-rico-mediante-la-tecnologia-y-la-innovacion.html",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/agrohack/impulsan-la-agricultura-en-puerto-rico-mediante-la.jpg",
        featured: false,
      },
      {
        title:
          "Young Puerto Rican Works to Increase Island’s Agricultural Entrepreneurs",
        url: "http://www.nbcnews.com/news/latino/young-puerto-rican-works-increase-island-s-agricultural-entrepreneurs-n588766",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/agrohack/young-puerto-rican-works-to-increase-islands-agricultural.jpg",
        featured: false,
      },
      {
        title:
          "Don’t call it a comeback yet: The future of farming in Puerto Rico",
        url: "http://www.univision.com/univision-news/united-states/dont-call-it-a-comeback-yet-the-future-of-farming-in-puerto-rico?hootPostID=4b0fef1a941a821d88237272d86485ae",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/agrohack/dont-call-it-a-comeback-yet-the-future-of-farming-in-puerto-2.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "GreenHopping",
    slug: "greenhopping",
    showOnPressPage: true,
    articles: [
      {
        title:
          "New 'Greenhopping' App Helps You Stay Healthy During The Holidays",
        url: "https://newyork.cbslocal.com/video/2730014-new-greenhopping-app-helps-you-stay-healthy-during-the-holidays/",
        source: "CBS",
        logo: "/images/press/logos/cbs.jpg",
        image:
          "/images/press/greenhopping/new-greenhopping-app-helps-you-stay-healthy-during-the.jpg",
        featured: true,
      },
      {
        title: "App helps find healthy eating options on-the-go",
        url: "https://www.foxnews.com/health/app-helps-find-healthy-eating-options-on-the-go",
        source: "Fox News",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/greenhopping/app-helps-find-healthy-eating-options-on-the-go.jpg",
        featured: false,
      },
      {
        title:
          "When you're more likely to pass a fast food restaurant on the street than anything else, it's hard to make smart choices. In theory you'll just walk right by those fried food hot spots, but when you're hungry it's difficult to resist temptation...",
        url: "http://www.self.com/flash/nutritionnews/2014/06/obsessed-juice-youre-gonna-love-greenhopping/",
        source: "Self",
        logo: "/images/press/logos/self.jpg",
        image:
          "/images/press/greenhopping/when-you-re-more-likely-to-pass-a-fast-food-restaurant-on.jpg",
        featured: true,
      },
      {
        title:
          "We're really thankful for the people that got their creative juices flowing and started GreenHopping, an app that locates the closest green juice bars and plant-based food spots nearest to you. Though the app started in New York, it expanded to 13 other...",
        url: "http://www.joie.com/blog/the-joie-girls-guide-august-4-10/08/2014/",
        source: "Joie",
        logo: "/images/press/logos/joie.jpg",
        image:
          "/images/press/greenhopping/we-re-really-thankful-for-the-people-that-got-their.jpg",
        featured: false,
      },
      {
        title:
          "Cleanses have an instant allure, promising to expunge years of bad habits with a few days of asceticism. But what happens after the delivery of thrice-daily, portion-controlled meals or juice fasting ends? Helping you track down the nearest juice bar...",
        url: "http://www.vogue.com/9086227/learning-to-cook-best-cleanse-healthy-food-apps/",
        source: "Vogue",
        logo: "/images/press/logos/vogue.jpg",
        image:
          "/images/press/greenhopping/cleanses-have-an-instant-allure-promising-to-expunge-years.jpg",
        featured: false,
      },
      {
        title:
          "Our partner Flywheel shared on their blog: Our good friends at Greenhopping have created the perfect app. GreenHopping helps you find organic green juices, smoothies, juice bars, health food stores, and raw, gluten-free, vegan plant based restaurants!",
        url: "http://blog.flywheelsports.com/going-green-instructors-share-their-favorite-green-juices/",
        source: "Flywheel",
        logo: "/images/press/logos/flywheel.jpg",
        image:
          "/images/press/greenhopping/our-partner-flywheel-shared-on-their-blog-our-good-friends.jpg",
        featured: false,
      },
      {
        title:
          "HAMPTONS—The official launch of Greenhopping, a free app that locates healthy eateries (including vegetarian and vegan options) and juice bars in your vicinity. Luckily for us, one of the 14 areas they're starting in includes all of the Hamptons....",
        url: "http://ny.racked.com/2014/7/3/7588285/hamptons-events-fourth-of-july",
        source: "Racked NY",
        logo: "/images/press/logos/racked-ny.jpg",
        image:
          "/images/press/greenhopping/hamptonsthe-official-launch-of-greenhopping-a-free-app-that.jpg",
        featured: false,
      },
      {
        title:
          "Whether you need to recharge after your spin class or want an easier way to meet your daily vegetable intake, Green Hopping has you covered! Rather than hunting down a green juice bar left to your own devices—the app does all the hard work for you by...",
        url: "http://www.instyle.com/news/need-find-green-juice-while-youre-go-theres-app",
        source: "Instyle",
        logo: "/images/press/logos/instyle.jpg",
        image:
          "/images/press/greenhopping/whether-you-need-to-recharge-after-your-spin-class-or-want.jpg",
        featured: true,
      },
      {
        title:
          "Feast on Good’s monthly dinner series, The Feast Worldwide Dinner, quite literally means a guaranteed evening of amazing food, great people and inspirational conversations. Last month’s theme was “play” and this month, it’s all about fruits, veggies and...",
        url: "http://consciousmagazine.co/tag/green-hopping-app/",
        source: "Conscious Magazine",
        logo: "/images/press/logos/conscious-magazine.jpg",
        image:
          "/images/press/greenhopping/feast-on-goods-monthly-dinner-series-the-feast-worldwide.jpg",
        featured: false,
      },
      {
        title:
          "The new Green Hopping App allows you to find the nearest spots for juice bars, and natural, raw and organic foo. We have apps telling us where the nearest Starbucks, cheap bar, or latest pop-up truck stop is parked. But what about an app that helps us...",
        url: "http://www.thedailymeal.com/find-local-healthy-food-green-hopping-app/31714",
        source: "The Daily Meal",
        logo: "/images/press/logos/the-daily-meal.jpg",
        image:
          "/images/press/greenhopping/the-new-green-hopping-app-allows-you-to-find-the-nearest.jpg",
        featured: false,
      },
      {
        title:
          "Even if you're not the type to commit to a full-on cleanse, you've probably got a deli near your apartment that does a killer carrot-orange-beet-what-have-you. But, what are you supposed to do when you're in an unfamiliar neighborhood and have a...",
        url: "http://www.refinery29.com/2013/12/59207/green-hopping",
        source: "Refinery 29",
        logo: "/images/press/logos/refinery29.jpg",
        image:
          "/images/press/greenhopping/even-if-you-re-not-the-type-to-commit-to-a-full-on-cleanse.jpg",
        featured: false,
      },
      {
        title:
          "When you're constantly on the go, finding healthy foods can be a challenge.  Now there's a tool to put nutrition at your fingertips. \"Green Hopping\" is an app that identifies nearby restaurants and markets that serve green juices and have organic, raw...",
        url: "http://www.fortwaynehomepage.net/lifestyle/going-green/going-green-healthy-foods-on-the-go-app",
        source: "Fox News",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/greenhopping/when-you-re-constantly-on-the-go-finding-healthy-foods-can.jpg",
        featured: false,
      },
      {
        title:
          "At the age of 22, Catherine Cuello was in the midst of a health crisis, and it took her doctors a long time — and several misdiagnoses — to figure out what was wrong. She was stressed, and she decided to completely transform her life.",
        url: "http://www.villagevoice.com/restaurants/looking-for-healthy-restaurants-near-you-theres-an-app-for-that-6543952",
        source: "The Village Voice",
        logo: "/images/press/logos/the-village-voice.jpg",
        image:
          "/images/press/greenhopping/at-the-age-of-22-catherine-cuello-was-in-the-midst-of-a.jpg",
        featured: false,
      },
      {
        title:
          "Detoxing can be a tricky and daunting undertaking, especially if you’ve never done it before. But there are a ton of health benefits to cutting back on not-so-good-for-you foods and giving your body a break so it can cleanse and reset.",
        url: "http://thelatinkitchen.com/how/a/how-detox-101",
        source: "Latina Magazine",
        logo: "/images/press/logos/latina-magazine.jpg",
        image:
          "/images/press/greenhopping/detoxing-can-be-a-tricky-and-daunting-undertaking.jpg",
        featured: false,
      },
      {
        title:
          "La dominicana Catherine Cuello, amante de un estilo de vida saludable a base de vegetales y jugos verdes, ha creado una aplicación para móviles con la que ayuda a los consumidores a localizar bares y restaurantes que sirven comidas y bebidas a...",
        url: "http://latino.foxnews.com/latino/espanol/2014/06/19/latina-crea-una-aplicacion-para-los-amantes-de-la-alimentacion-sana/",
        source: "Fox News Latino",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/greenhopping/la-dominicana-catherine-cuello-amante-de-un-estilo-de-vida.jpg",
        featured: false,
      },
      {
        title:
          "The days of scouring New York hoping to find healthy food options are no more thanks to a new iPhone app. GreenHopping is designed to help health conscious eaters maintain an organic and healthy diet in the city.",
        url: "http://www.metro.us/lifestyle/greenhopping-get-healthy-using-your-phone/tmWnbw---4amX4VhumwGs/",
        source: "METRO",
        logo: "/images/press/logos/metro.jpg",
        image:
          "/images/press/greenhopping/the-days-of-scouring-new-york-hoping-to-find-healthy-food.jpg",
        featured: false,
      },
      {
        title:
          "GreenHopping participated in New York Techday 2016 and had the opportunity to speak with Nasdaq. Checkout what they shared.",
        url: "https://www.facebook.com/NASDAQ/videos/10154054306487429/",
        source: "Nasdaq",
        logo: "/images/press/logos/nasdaq.jpg",
        image:
          "/images/press/greenhopping/greenhopping-participated-in-new-york-techday-2016-and-had.png",
        featured: false,
      },
      {
        title:
          'Our own founder Catherine Cuello was featured as one of the "28 NYC FoodTech Entrepreneurs You Must Know" by Alley Watch. You’re trying to be healthy and be conscious of what you’re eating, but it’s not always easy to find healthy plant-based eateries...',
        url: "http://www.alleywatch.com/2015/02/28-nyc-foodtech-entrepreneurs-you-must-know/23/",
        source: "Alley Watch",
        logo: "/images/press/logos/alley-watch.jpg",
        image:
          "/images/press/greenhopping/our-own-founder-catherine-cuello-was-featured-as-one-of-the.jpg",
        featured: false,
      },
      {
        title:
          "Greenhopping is making it easier.  It’s an app that makes finding juice bar and restaurants that serve natural, organic, farm-to-table ingredients in...",
        url: "http://www.alleywatch.com/2014/10/this-nyc-startup-has-you-covered-when-it-comes-to-eating-out-organic/",
        source: "Alley Watch",
        logo: "/images/press/logos/alley-watch.jpg",
        image:
          "/images/press/greenhopping/greenhopping-is-making-it-easier-its-an-app-that-makes.jpg",
        featured: false,
      },
      {
        title:
          "La dominicana Catherine Cuello, creadora de la aplicación Green Hopping—la cual ayuda a ubicar cafeterías y restaurantes donde sirven jugos verdes, batidos, comida vegana, cruda, y opciones sin gluten— nos habla de los beneficios de la desintoxicación...",
        url: "http://peoplenes.prod.acquia-sites.com/article/beneficios-detox-jugos-verdes-dieta-alimentacion-nutricion-frutas-vegetales",
        source: "People en Español",
        logo: "/images/press/logos/people-en-espanol.jpg",
        image:
          "/images/press/greenhopping/la-dominicana-catherine-cuello-creadora-de-la-aplicacion.jpg",
        featured: false,
      },
      {
        title:
          "I remember the first time I had a green juice. I admit; it was awful. But I had a health scare and that led me to go vegan, so I had no choice but to begin gulping green juice, and gulp it quickly!",
        url: "http://thelatinkitchen.com/how/tips/a/mastering-art-being-vegan-juicing",
        source: "Latina Magazine",
        logo: "/images/press/logos/latina-magazine.jpg",
        image:
          "/images/press/greenhopping/i-remember-the-first-time-i-had-a-green-juice-i-admit-it.jpg",
        featured: false,
      },
      {
        title:
          "GreenHopping seeks to connect consumers with healthy, plant-based eateries. They accomplish this by placing all vegan, raw, gluten-free and vegetarian restaurants, as well as juice bars and smoothie bars, on an electronic map for consumers to locate via...",
        url: "http://guestofaguest.com/new-york/nyc/10-new-companies-shaking-things-up-in-nyc&slide=5",
        source: "Guest of a Guest",
        logo: "/images/press/logos/guest-of-a-guest.jpg",
        image:
          "/images/press/greenhopping/greenhopping-seeks-to-connect-consumers-with-healthy-plant.jpg",
        featured: false,
      },
      {
        title:
          "Come July, you may find it much easier to find green juice on business trips to Chicago and weekend jaunts to Miami. That’s because Greenhopping, the first app to map out green juice purveyors, is expanding its reach on June 30 to include 10 major markets.",
        url: "http://wellandgood.com/2014/06/15/greenhopping-will-soon-help-you-find-and-buy-green-juice-in-10-major-cities/",
        source: "Well + Good",
        logo: "/images/press/logos/well-good.jpg",
        image:
          "/images/press/greenhopping/come-july-you-may-find-it-much-easier-to-find-green-juice.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "COMBATE AMERICAS",
    slug: "combate-americas",
    showOnPressPage: true,
    articles: [
      {
        title:
          "It was hard to hold back the tears while watching a Latina, who has gone through the unimaginable as a bullying victim because of her appearance, receive an award for motivating and inspiring millions around the world.",
        url: "http://www.nbcnews.com/news/latino/hispanicize-2016-unimaginable-bullying-victim-now-worldwide-inspiration-n552431",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/combate-americas/it-was-hard-to-hold-back-the-tears-while-watching-a-latina.jpg",
        featured: false,
      },
      {
        title:
          '"We are thrilled to be featured in a new, weekly slot that will allow us to continuously showcase the best and most exciting young Hispanic fighters and future world champions" said McLaren.',
        url: "http://www.mmamania.com/2016/3/28/11319844/combate-americas-announces-weekly-mma-telecast-starting-april-18-nbc-universo-mma",
        source: "MMA Mania",
        logo: "/images/press/logos/mma-mania.jpg",
        image:
          "/images/press/combate-americas/we-are-thrilled-to-be-featured-in-a-new-weekly-slot-that.jpg",
        featured: false,
      },
      {
        title:
          "COMBATE AMERICAS es es la primera y única franquicia de deportes hispana en la historia de Artes Marciales Mixtas (MMA, por sus siglas en inglés) en Estados Unidos.",
        url: "http://www.eurekachicago.com/combate-americas-conferencia-de-prensa-en-hispanicize-2016-miami-fl/",
        source: "Eureka",
        logo: "/images/press/logos/eureka.jpg",
        image:
          "/images/press/combate-americas/combate-americas-es-es-la-primera-y-unica-franquicia-de.jpg",
        featured: false,
      },
      {
        title:
          "Campbell McLaren, who was in charge of the UFC in its early years, is back in business with the company as his Combate Americas promotion has signed a multi-year deal to be part of UFC Fight Pass.",
        url: "http://www.mmafighting.com/2016/4/17/11442434/combate-americas-signs-with-fight-pass-debuts-monday",
        source: "MMA Fighting",
        logo: "/images/press/logos/mma-fighting.jpg",
        image:
          "/images/press/combate-americas/campbell-mclaren-who-was-in-charge-of-the-ufc-in-its-early.jpg",
        featured: true,
      },
      {
        title:
          "“Since we launched our franchise,” continued McLaren, “NBC Universo has played an instrumental part in helping Combate Americas engage a national Hispanic audience.",
        url: "http://www.sofritoforyoursoul.com/hispanicize-wire-news/?l=thirty-fights-in-thirty-days",
        source: "Sofrito For Your Soul",
        logo: "/images/press/logos/sofrito-for-your-soul.jpg",
        image:
          "/images/press/combate-americas/since-we-launched-our-franchise-continued-mclaren-nbc.jpg",
        featured: false,
      },
      {
        title:
          "Combate Americas, LLC. es la primera franquicia hispana de Artes Marciales Mixtas en la historia de EU y está diseñada para construir campeones latinos y servir a su fanaticada, que es una de las más ávidas de triunfos y títulos.",
        url: "http://www.nbcdeportes.com/mma/combate-americas-regresa-nbc-universo",
        source: "NBC Latino",
        logo: "/images/press/logos/nbc-latino.jpg",
        image:
          "/images/press/combate-americas/combate-americas-llc-es-la-primera-franquicia-hispana-de.jpg",
        featured: true,
      },
      {
        title:
          'El cantante venezolano criticó la medida de Maduro para ahorrar energía y considera que "el presidente está impulsando al pueblo a hacer menos".',
        url: "http://cnnespanol.cnn.com/video/cnnee-nat-pkg-nacho-opina-medidas-ahorro-electricidad-maduro/",
        source: "CNN",
        logo: "/images/press/logos/cnn.jpg",
        image:
          "/images/press/combate-americas/el-cantante-venezolano-critico-la-medida-de-maduro-para.jpg",
        featured: false,
      },
      {
        title:
          "Anything boys can do . . . well, you’ve heard the saying. The ladies of Combate Americas are proving that women have what it takes – and let’s be real, maybe just a little bit more – to make it in the male-dominated sport of MMA fighting.",
        url: "http://www.vivala.com/entertainment/combate-americas-interview/4126",
        source: "Vivala",
        logo: "/images/press/logos/vivala-2.jpg",
        image:
          "/images/press/combate-americas/anything-boys-can-do-well-youve-heard-the-saying-the-ladies.jpg",
        featured: true,
      },
      {
        title:
          "It’s mixed martial arts with a distinct cultural nuance. It’s combat sports, funneled through the idiosyncratic lens of Latino entertainment television.",
        url: "https://www.google.com/url?hl=en&q=http://www.huffingtonpost.com/dan-shapiro/combate-americas-gives-la_b_9688132.html&source=gmail&ust=1466533602829000&usg=AFQjCNHUfPqURnR9fk2K0rKAtV4HCENurg",
        source: "HUFFINGTON POST",
        logo: "/images/press/logos/huffington-post.jpg",
        image:
          "/images/press/combate-americas/its-mixed-martial-arts-with-a-distinct-cultural-nuance-its.jpg",
        featured: true,
      },
      {
        title:
          "Combate Americas, the first-ever U.S. Hispanic Mixed Martial Arts (MMA) sports franchise founded by Ultimate Fighting Championship (UFC) co-creator Campbell McLaren, announced the return of its epic, action-packed “Road To the Championship”...",
        url: "https://www.google.com/url?hl=en&q=http://www.hispanicizewire.com/thirty-fights-in-thirty-days&source=gmail&ust=1466533602828000&usg=AFQjCNHg6NjaLJNQbaN1RZmbJ9j-AGMsaA",
        source: "Hispanize 2016",
        logo: "/images/press/logos/hispanize-2016.jpg",
        image:
          "/images/press/combate-americas/combate-americas-the-first-ever-u-s-hispanic-mixed-martial.jpg",
        featured: false,
      },
      {
        title:
          "NBC UNIVERSO, el canal de cable moderno dedicado a los deportes y al entretenimiento para latinos, anunció hoy que Combate Americas, la primera franquicia deportiva de artes marciales mixtas (MMA) dedicada a los hispanos de los Estados Unidos.",
        url: "http://elsoln1.com/news/2015/sep/15/combate-americas/",
        source: "El Sol",
        logo: "/images/press/logos/el-sol.jpg",
        image:
          "/images/press/combate-americas/nbc-universo-el-canal-de-cable-moderno-dedicado-a-los.jpg",
        featured: false,
      },
      {
        title:
          "Combate Américas presentó durante Hispanicize 2016 los detalles contundentes de su nueva serie semanal de peleas MMA por NBC Universo.",
        url: "http://insidecrowd.co/inthepress/2016/6/20/combate-americas",
        source: "Combate Americas",
        logo: "/images/press/logos/combate-americas.jpg",
        image:
          "/images/press/combate-americas/combate-americas-presento-durante-hispanicize-2016-los.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "access latina",
    slug: "access-latina",
    showOnPressPage: true,
    articles: [
      {
        title: "‘Nasty Women’ Rebellion: Latinas Mean Business",
        url: "http://www.latinorebels.com/2016/10/24/nasty-women-rebellion-latinas-mean-business/",
        source: "Latino Rebels",
        logo: "/images/press/logos/latino-rebels.jpg",
        image:
          "/images/press/access-latina/nasty-women-rebellion-latinas-mean-business.jpg",
        featured: false,
      },
      {
        title:
          "Access Latina announces business accelerator for Latina entrepreneurs in STEAM",
        url: "http://latinasinbusiness.us/2016/10/28/access-latina-business-accelerator-latina-entrepreneurs-steam/",
        source: "Latinas in Business",
        logo: "/images/press/logos/latinas-in-business.jpg",
        image:
          "/images/press/access-latina/access-latina-announces-business-accelerator-for-latina.jpg",
        featured: false,
      },
      {
        title:
          "Programs like these will put more Latinos in positions to make a difference and include people like themselves.",
        url: "http://www.manrepeller.com/2016/03/five-women-of-color-get-real-about-the-fashion-industry.html",
        source: "Manrepeller",
        logo: "/images/press/logos/manrepeller.jpg",
        image:
          "/images/press/access-latina/programs-like-these-will-put-more-latinos-in-positions-to.jpg",
        featured: false,
      },
      {
        title:
          "Marta Michelle Colón y Lucienne Gigante ponen en marcha AccessLatina, un acelerador de empresas para mujeres que busquen el mayor potencial de su empresa.",
        url: "http://www.laopinion.com/2015/10/22/una-lanzadera-para-empresarias-latinas/",
        source: "La Opinion",
        logo: "/images/press/logos/la-opinion.jpg",
        image:
          "/images/press/access-latina/marta-michelle-colon-y-lucienne-gigante-ponen-en-marcha.jpg",
        featured: false,
      },
      {
        title: "Access to Capital and the Latina Business Owner",
        url: "https://www.nwbc.gov/content/access-capital-and-latina-business-owner",
        source: "National Women's Business Council",
        logo: "/images/press/logos/national-women-s-business-council.jpg",
        image:
          "/images/press/access-latina/access-to-capital-and-the-latina-business-owner.jpg",
        featured: false,
      },
      {
        title:
          "SAN JUAN: The accelerator program giving Latina-owned businesses a boost.",
        url: "http://www.bizjournals.com/bizwomen/news/profiles-strategies/2016/06/san-juan-the-accelerator-program-giving-latina.html",
        source: "Biz Journals",
        logo: "/images/press/logos/biz-journals.jpg",
        image:
          "/images/press/access-latina/san-juan-the-accelerator-program-giving-latina-owned.jpg",
        featured: false,
      },
      {
        title:
          "Access Latina is Looking to Boost Successful Latina Entrepreneurs",
        url: "http://thestateofwomen.com/blog/2016/11/19/access-latina-looking-boost-successful-latina-entrepreneurs/",
        source: "The State of Women",
        logo: "/images/press/logos/the-state-of-women.jpg",
        image:
          "/images/press/access-latina/access-latina-is-looking-to-boost-successful-latina.jpg",
        featured: true,
      },
      {
        title:
          "AccessLatina seeks to provide capital infusion and investment of resources to women-led businesses with high growth potential through an annual competition.",
        url: "http://blog.latino-show.com/accesslatina-real-female-power-accesslatina-real-poder-femenino/",
        source: "Latino Show",
        logo: null,
        image:
          "/images/press/access-latina/accesslatina-seeks-to-provide-capital-infusion-and.jpg",
        featured: false,
      },
      {
        title:
          "Lucienne Gigante y Marta Michelle Colón presentan Access Latina, organización creada para ayudar a empresarias hispanas con educación y capital.",
        url: "http://www.ny1.com/nyc/manhattan/pura-politica/2015/10/20/acceso-a-capital-para-emprendedoras-latinas.html",
        source: "NY1",
        logo: "/images/press/logos/ny1.jpg",
        image:
          "/images/press/access-latina/lucienne-gigante-y-marta-michelle-colon-presentan-access.jpg",
        featured: false,
      },
      {
        title:
          'Un grupo de mujeres empresarias puertorriqueñas llega a Nueva York a lanzar "Access Latina".',
        url: "http://www.ny1noticias.com/nyc/twc-ny1-noticias/noticias/2015/10/13/proveen-ayuda-a-mujeres-latinas-con-negocios.html",
        source: "NY1",
        logo: "/images/press/logos/ny1.jpg",
        image:
          "/images/press/access-latina/un-grupo-de-mujeres-empresarias-puertorriquenas-llega-a.jpg",
        featured: true,
      },
      {
        title:
          "AccessLatina, es una organización sin fines de lucro, pionera en el crecimiento empresarial de las mujeres.",
        url: "http://vanidadesblog.com/2015/10/14/latinas-trabajando/",
        source: "Vanidades",
        logo: "/images/press/logos/vanidades.jpg",
        image:
          "/images/press/access-latina/accesslatina-es-una-organizacion-sin-fines-de-lucro-pionera.jpg",
        featured: false,
      },
      {
        title:
          "Two Latina Accelerator Founders Share How You Can Build The Best Startup",
        url: "http://www.forbes.com/sites/viviannunez/2016/10/27/two-latina-accelerator-founders-share-how-you-can-build-the-best-startup/#6dc0051b4c71",
        source: "Forbes",
        logo: "/images/press/logos/forbes.jpg",
        image:
          "/images/press/access-latina/two-latina-accelerator-founders-share-how-you-can-build-the.jpg",
        featured: true,
      },
      {
        title:
          "Access Latina reconocerá a emprendedoras de Puerto Rico y Estados Unidos que tengan negocios con alto potencial de crecimiento.",
        url: "http://www.metro.pr/economia/buscan-conectar-las-empresarias-latinas/pGXojC!daqsyVNzZ1t0w/",
        source: "METRO",
        logo: "/images/press/logos/metro.jpg",
        image:
          "/images/press/access-latina/access-latina-reconocera-a-emprendedoras-de-puerto-rico-y.jpg",
        featured: false,
      },
      {
        title:
          "AccessLatina Nonprofit Launches Accelerator Program Enabling Women To Reach Economic Potential; Find Out How To Apply.",
        url: "http://www.latintimes.com/accesslatina-nonprofit-launches-accelerator-program-enabling-women-reach-economic-348554",
        source: "Latin Times",
        logo: "/images/press/logos/latin-times.jpg",
        image:
          "/images/press/access-latina/accesslatina-nonprofit-launches-accelerator-program.jpg",
        featured: false,
      },
      {
        title:
          "AccessLatina, pionera en el crecimiento empresarial de las mujeres, anuncia invita a las latinas de Nueva York, Washington DC, Puerto Rico y la Florida que tengan un enfoque en STEAM.",
        url: "http://www.diariolasamericas.com/5777_edicion-dinero/3417345_becas-concursos-inversiones.html",
        source: "Diario Las Americas",
        logo: "/images/press/logos/diario-las-americas.jpg",
        image:
          "/images/press/access-latina/accesslatina-pionera-en-el-crecimiento-empresarial-de-las.jpg",
        featured: false,
      },
      {
        title:
          "Global entrepreneurship and innovation Prof. Antonio Dávila hosted a one-day seminar on the challenges in managing startup growth.",
        url: "http://cb.pr/accesslatina-business-accelerator-announces-finalists/",
        source: "Caribbean Business",
        logo: "/images/press/logos/caribbean-business.jpg",
        image:
          "/images/press/access-latina/global-entrepreneurship-and-innovation-prof-antonio-davila.jpg",
        featured: false,
      },
      {
        title:
          "An innovative program that helps Latina business owners get to the next level is closer to awarding lucky Latina entrepreneurs with $25,000.",
        url: "http://www.nbcnews.com/news/latino/accesslatina-wants-women-entrepreneurs-reach-next-level-n519541",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/access-latina/an-innovative-program-that-helps-latina-business-owners-get.jpg",
        featured: true,
      },
      {
        title:
          "National Program For Women In Business And Tech Announces Second Round Of Applications",
        url: "http://www.newmediawire.com/news/national-program-for-women-in-business-and-tech-announces-second-round-of-applications-4101025",
        source: "New Media Wire",
        logo: "/images/press/logos/new-media-wire.jpg",
        image:
          "/images/press/access-latina/national-program-for-women-in-business-and-tech-announces.jpg",
        featured: false,
      },
      {
        title:
          "Programa ofrece capital y recursos para que empresarias latinas desarrollen su negocio",
        url: "http://siempremujer.com/estilo/programa-ofrece-capital-y-recursos-para-que-empresarias-latinas-desarrollen-su-negocio/86088/",
        source: "Siempre Mujer",
        logo: "/images/press/logos/siempre-mujer.jpg",
        image:
          "/images/press/access-latina/programa-ofrece-capital-y-recursos-para-que-empresarias.jpg",
        featured: false,
      },
      {
        title:
          "Marta Colón habla sobre el proyecto Access Latina para que las mujeres tengan más oportunidades para iniciar o darle un impulso a sus empresas.",
        url: "http://www.cnn.com/videos/spanish/2015/10/29/exp-cnne-access-latina.cnn",
        source: "CNN",
        logo: "/images/press/logos/cnn.jpg",
        image:
          "/images/press/access-latina/marta-colon-habla-sobre-el-proyecto-access-latina-para-que.jpg",
        featured: false,
      },
      {
        title:
          "Access Latina, a non-profit in New York City has launched a program to help some Latina business owners reach their economic potential with an accelerator program.",
        url: "http://abc7ny.com/uncategorized/tiempo-watch-this-weeks-show/31525/",
        source: "ABC News",
        logo: "/images/press/logos/abc-news.jpg",
        image:
          "/images/press/access-latina/access-latina-a-non-profit-in-new-york-city-has-launched-a.png",
        featured: false,
      },
      {
        title:
          "Eight Latina tech entrepreneurs have been selected for the final competitive round of the new Latina-focused Puerto Rico-based startup accelerator AccessLatina.",
        url: "http://www.latinpost.com/articles/110506/20160121/latina-accelerator-accesslatina-announces-finalists-for-startup-challenge.htm",
        source: "Latin Post",
        logo: "/images/press/logos/latin-post.jpg",
        image:
          "/images/press/access-latina/eight-latina-tech-entrepreneurs-have-been-selected-for-the.jpg",
        featured: false,
      },
      {
        title:
          "National Program for Women in Business and Tech Announces Second Round of Applications",
        url: "http://women2.com/stories/2016/10/20/national-program-for-women-in-business-and-tech-announces-second-round-of-applications",
        source: "Women 2.0",
        logo: "/images/press/logos/women-2-0.jpg",
        image:
          "/images/press/access-latina/national-program-for-women-in-business-and-tech-announces-2.jpg",
        featured: false,
      },
      {
        title:
          "Access Latina is Looking to Boost Successful Latina Entrepreneurs",
        url: "http://hnmagazine.com/recent-posts/access-latina-is-looking-to-boost-successful-latina-entrepreneurs/",
        source: "Hispanics Magazine",
        logo: "/images/press/logos/hispanics-magazine.jpg",
        image:
          "/images/press/access-latina/access-latina-is-looking-to-boost-successful-latina-2.jpg",
        featured: false,
      },
      {
        title:
          "The brainchild of two Latinas with expertise in the financial industry, ACCESSLATINA is a non-profit organization based in San Juan, Puerto Rico.",
        url: "http://www.nbcnews.com/news/latino/accesslatina-non-profit-aims-boost-grow-latina-owned-businesses-n449161",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/access-latina/the-brainchild-of-two-latinas-with-expertise-in-the.jpg",
        featured: false,
      },
      {
        title:
          "Are you a mujer in business? Access Latina has an opportunity that could help get your startup off the ground.",
        url: "http://www.latina.com/lifestyle/money/access-latina-business-competition",
        source: "Latina Magazine",
        logo: "/images/press/logos/latina-magazine.jpg",
        image:
          "/images/press/access-latina/are-you-a-mujer-in-business-access-latina-has-an.jpg",
        featured: false,
      },
      {
        title:
          "Las finalistas de AccessLatina comprenden un grupo ecléctico y diverso de empresarias latinas en las industrias STEAM (Ciencia, Tecnología, Ingeniería, Artes, y Matemáticas), la innovación social y la agricultura urbana.",
        url: "http://vanidadesblog.com/2016/01/20/access-latina-anuncia-a-sus-finalistas/",
        source: "Vanidades",
        logo: "/images/press/logos/vanidades.jpg",
        image:
          "/images/press/access-latina/las-finalistas-de-accesslatina-comprenden-un-grupo.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "LUX BEAUTY CLUB",
    slug: "lux-beauty-club",
    showOnPressPage: true,
    articles: [
      {
        title:
          "When you think of industries being transformed by technology, you’re probably not thinking hair.",
        url: "http://www.forbes.com/sites/geristengel/2016/03/09/technology-makes-hair-big-business/#35a0bb0c8c13",
        source: "forbes",
        logo: "/images/press/logos/forbes-2.jpg",
        image:
          "/images/press/lux-beauty-club/when-you-think-of-industries-being-transformed-by.jpg",
        featured: true,
      },
      {
        title:
          "How Women of Color Are Taking the Hair Business Into Their Own Hands",
        url: "https://www.allure.com/story/women-of-color-in-the-hair-business",
        source: "Allure",
        logo: "/images/press/logos/allure.jpg",
        image:
          "/images/press/lux-beauty-club/how-women-of-color-are-taking-the-hair-business-into-their.jpg",
        featured: true,
      },
      {
        title: "Empowering Women Through the Arts & Media",
        url: "http://insidecrowd.co/inthepress/2017/1/9/art-bodega",
        source: "Art Bodega",
        logo: "/images/press/logos/art-bodega.jpg",
        image:
          "/images/press/lux-beauty-club/empowering-women-through-the-arts-media.jpg",
        featured: false,
      },
      {
        title: "How Latinos Drive America’s Economic Growth",
        url: "http://time.com/4494780/how-latinos-drive-americas-economic-growth/",
        source: "Time",
        logo: "/images/press/logos/time.jpg",
        image:
          "/images/press/lux-beauty-club/how-latinos-drive-americas-economic-growth.jpg",
        featured: false,
      },
      {
        title: "Mexicana triunfa en EEUU con sus extensiones de cabello.",
        url: "http://www.telemundo.com/noticias/2016/09/23/mexicana-triunfa-en-eeuu-con-sus-extensiones-de-cabello",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/lux-beauty-club/mexicana-triunfa-en-eeuu-con-sus-extensiones-de-cabello.jpg",
        featured: false,
      },
      {
        title:
          "Subscription Boxes That Will Make You Their Favorite Person All Year Round",
        url: "http://people.com/style/subscription-box-gifts-holiday-gift-guide/for-the-girl-that-wants-cher-hair/",
        source: "People",
        logo: "/images/press/logos/people.jpg",
        image:
          "/images/press/lux-beauty-club/subscription-boxes-that-will-make-you-their-favorite-person.jpg",
        featured: true,
      },
      {
        title:
          "La caja de belleza que está revolucionando la industria de belleza",
        url: "http://www.nylon.com/articles/espanol-lux-box-beauty-001?utm_source=internal&utm_medium=web&utm_campaign=index-page&utm_content=image",
        source: "Nylon",
        logo: "/images/press/logos/nylon.jpg",
        image:
          "/images/press/lux-beauty-club/la-caja-de-belleza-que-esta-revolucionando-la-industria-de.jpg",
        featured: false,
      },
      {
        title: "Beauty Wishlist 2016: Regalos Perfectos Para Las Beauty Lovers",
        url: "http://latinacool.com/belleza/beautymavens/beauty-wishlist-2016-regalos-perfectos-para-las-beauty-lovers/",
        source: "Latina Cool",
        logo: "/images/press/logos/latina-cool.jpg",
        image:
          "/images/press/lux-beauty-club/beauty-wishlist-2016-regalos-perfectos-para-las-beauty.jpg",
        featured: false,
      },
      {
        title:
          "Beauty expert Paul Cucinello shares his secrets to hair extensions.",
        url: "https://www.amazon.com/gp/product/B01M7NPLSN",
        source: "Style Code Live by Amazon",
        logo: "/images/press/logos/style-code-live-by-amazon.jpg",
        image:
          "/images/press/lux-beauty-club/beauty-expert-paul-cucinello-shares-his-secrets-to-hair.jpg",
        featured: true,
      },
      {
        title:
          "A new subscription service that helps with hair-extension upkeep",
        url: "http://www.insiderbeautybuzz.com/insiderbeautybuzz/a-new-subscription-service-that-helps-with",
        source: "Inner Beauty Buzz",
        logo: "/images/press/logos/inner-beauty-buzz.jpg",
        image:
          "/images/press/lux-beauty-club/a-new-subscription-service-that-helps-with-hair-extension.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "IV+ CELL REJUVENATION THERAPY",
    slug: "iv-cell-rejuvenation-therapy",
    showOnPressPage: true,
    articles: [
      {
        title: "Everyday Should Feel Like a Holiday in Your Mind",
        url: "https://journal.thriveglobal.com/everyday-should-feel-like-a-holiday-in-your-mind-edd10dafc792",
        source: "Thrive Global",
        logo: "/images/press/logos/thrive-global.jpg",
        image:
          "/images/press/iv-cell-rejuvenation-therapy/everyday-should-feel-like-a-holiday-in-your-mind.jpg",
        featured: true,
      },
      {
        title: "Intravenous Nourishment at IV+",
        url: "http://southfloridaluxuryguide.com/",
        source: "South Florida Luxury Magazine",
        logo: "/images/press/logos/south-florida-luxury-magazine.jpg",
        image:
          "/images/press/iv-cell-rejuvenation-therapy/intravenous-nourishment-at-iv.jpg",
        featured: true,
      },
      {
        title: "GET SPA TREATMENTS STRAIGHT TO YOUR CELLS WITH IV+",
        url: "https://glampiece.com/2017/02/28/get-spa-treatments-straight-to-your-cells-with-iv/",
        source: "Glam Piece",
        logo: "/images/press/logos/glam-piece.jpg",
        image:
          "/images/press/iv-cell-rejuvenation-therapy/get-spa-treatments-straight-to-your-cells-with-iv.jpg",
        featured: false,
      },
      {
        title: "Can You Drip Your Way To Better Skin?",
        url: "http://www.beautyinthebag.com/wordpress/can-you-drip-your-way-to-better-skin/",
        source: "Beauty in the Bag",
        logo: "/images/press/logos/beauty-in-the-bag.jpg",
        image:
          "/images/press/iv-cell-rejuvenation-therapy/can-you-drip-your-way-to-better-skin.gif",
        featured: false,
      },
    ],
  },
  {
    name: "RUN CARLOS RUN FILM",
    slug: "run-carlos-run-film",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Mexican-born Carlos Ibarra, whose run from Brooklyn to California – 3,000 miles – took him 72 days and ended in October, says that he has one more long-distance race ahead of him: becoming a Hollywood producer.",
        url: "https://voicesofny.org/2016/06/movie-follows-dreamer-who-ran-from-new-york-to-california/",
        source: "Voices of NY",
        logo: "/images/press/logos/voices-of-ny.jpg",
        image:
          "/images/press/run-carlos-run-film/mexican-born-carlos-ibarra-whose-run-from-brooklyn-to.jpg",
        featured: true,
      },
      {
        title:
          "El joven mexicano realizó un documental con casos de otros muchos soñadores que lo pasan mal por no tener estatus legal.",
        url: "http://www.msn.com/es-us/estilo-de-vida/regresoaclases/dreamer-corre-72-d%C3%ADas-eeuu-para-conocer-casos-similares/vi-AAgRUGE",
        source: "MSN",
        logo: "/images/press/logos/msn.jpg",
        image:
          "/images/press/run-carlos-run-film/el-joven-mexicano-realizo-un-documental-con-casos-de-otros.jpg",
        featured: true,
      },
      {
        title:
          "El joven mexicano realizó un documental con casos de otros muchos soñadores que lo pasan mal por no tener estatus legal",
        url: "http://www.telemundo.com/noticias/2016/06/09/dreamer-corre-72-dias-eeuu-para-conocer-casos-similares",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/run-carlos-run-film/el-joven-mexicano-realizo-un-documental-con-casos-de-otros.png",
        featured: true,
      },
      {
        title:
          "Un corredor que desea alcanzar el sueño americano. Carlos Ibarra presenta su proyecto Run Carlos Run, después de correr más de tres mil millas por todo Estados Unidos, desde Brooklyn a California",
        url: "http://www.ny1noticias.com/nyc/twc-ny1-noticias/noticias/2016/06/5/corriendo-por-el-sue-o-americano.html",
        source: "NY1",
        logo: "/images/press/logos/ny1.jpg",
        image:
          "/images/press/run-carlos-run-film/un-corredor-que-desea-alcanzar-el-sueno-americano-carlos.jpg",
        featured: false,
      },
      {
        title: "El cineasta Carlos Ibarra presenta su proyecto Run Carlos Run.",
        url: "http://amanece.com/snyppet/corriendo-por-el-sueno-americano/",
        source: "Amanece",
        logo: "/images/press/logos/amanece.jpg",
        image:
          "/images/press/run-carlos-run-film/el-cineasta-carlos-ibarra-presenta-su-proyecto-run-carlos.jpg",
        featured: false,
      },
      {
        title:
          "Cristina Blackwell entrevistó a Carlos Ibarra, un estudiante que inició una carrera a pie desde Nueva York hasta California, para llevar su mensaje de inmigración.",
        url: "http://www.univision.com/shows/despierta-america/un-estudiante-atraveso-corriendo-todo-el-pais-para-cumplir-el-sueno-americano-video",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/run-carlos-run-film/cristina-blackwell-entrevisto-a-carlos-ibarra-un-estudiante.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "NEW YORK LEGAL ASSISTANCE GROUP",
    slug: "new-york-legal-assistance-group",
    showOnPressPage: true,
    articles: [
      {
        title:
          "El fiscal general de Nueva York, Eric T. Schneiderman, anunció hoy que creará un fondo de restitución de 2,2 millones de dólares para los inmigrantes que fueron estafados por dos organizaciones bajo la promesa de que estaban cualificadas para tramitar...",
        url: "http://latino.foxnews.com/latino/espanol/2014/07/21/n-york-anuncia-22-millones-para-compensar-victimas-de-estafa-inmigrantes/",
        source: "Fox News Latino",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/el-fiscal-general-de-nueva-york-eric-t-schneiderman-anuncio.jpg",
        featured: false,
      },
      {
        title:
          "Immigrants who were clients of two defunct immigrant services organizations now have two additional weeks to apply for monetary relief from a special fund set up for their benefit.",
        url: "http://nylag.org/news/2014/10/deadline-for-immigrant-relief-fund-applications-extended-until-november-6-2014#espanol",
        source: "NYLAG",
        logo: "/images/press/logos/nylag.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/immigrants-who-were-clients-of-two-defunct-immigrant.jpg",
        featured: true,
      },
      {
        title:
          "Las personas que recibieron servicios de la International Immigrants Foundation y de la International Professional Association, que presidía Eduardo Juárez, podrían calificar para una restitución del dinero que pagaron a estas organizaciones...",
        url: "http://noticieros.televisa.com/us/estados-unidos/1408/recibiran-migrantes-estafados-retribucion-dinero/",
        source: "Televisa",
        logo: "/images/press/logos/televisa.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/las-personas-que-recibieron-servicios-de-la-international.jpg",
        featured: false,
      },
      {
        title:
          "The New York Legal Assistance Group (NYLAG) announced today it has been selected by the New York State Office of the Attorney General (OAG) to administer a $2.2 million fund to provide restitution to former clients of the...",
        url: "http://nylag.org/news/2014/07/nylag-to-administer-compensation-to-immigrant-victims-of-fraud",
        source: "NYLAG",
        logo: "/images/press/logos/nylag.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/the-new-york-legal-assistance-group-nylag-announced-today.jpg",
        featured: false,
      },
      {
        title:
          "La Fiscalía General del Estado de Nueva York anunció que ha establecido un fondo de $2.2 millones de dólares para compensar a las víctimas de dos supuestas organizaciones no lucrativas que cometieron fraude al practicar leyes sin tener...",
        url: "http://inmigracionhoy.com/2014/07/25/fiscal-de-nueva-york-establece-fondo-millonario-para-compensar-a-inmigrantes-estafados/",
        source: "Inmigración Hoy",
        logo: "/images/press/logos/inmigracion-hoy.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/la-fiscalia-general-del-estado-de-nueva-york-anuncio-que-ha.jpg",
        featured: false,
      },
      {
        title:
          "En un hecho sin precedentes en la historia de la ciudad de Nueva York, la Fiscalía General del Estado devolverá por primera vez el dinero que pagaron inmigrantes indocumentados que fueron estafados por trámites falsos de migración, por organizaciones...",
        url: "http://radiobilingue.org/noticias/fiscalia-de-ny-devuelve-por-primera-vez-el-dinero-a-indocumentados-por-fraudes-de-inmigracion/",
        source: "Radio Bilingue",
        logo: "/images/press/logos/radio-bilingue.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/en-un-hecho-sin-precedentes-en-la-historia-de-la-ciudad-de.jpg",
        featured: false,
      },
      {
        title: "Mexicana triunfa en EEUU con sus extensiones de cabello.",
        url: "http://www.telemundo.com/noticias/2016/09/23/mexicana-triunfa-en-eeuu-con-sus-extensiones-de-cabello",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/lux-beauty-club/mexicana-triunfa-en-eeuu-con-sus-extensiones-de-cabello.jpg",
        featured: false,
      },
      {
        title:
          "El Fiscal General Eric T. Schneiderman anunció el inicio del proceso de reclamación de restitución para las miles de personas que fueron defraudadas por dos organizaciones de inmigración, la Fundación Internacional de Inmigrantes, Inc.",
        url: "http://panoramahispanonews.com/wny/featured/2-2-millones-en-fondo-de-restitucion-para-inmigrantes-victimas-de-estafa/",
        source: "Panorama Hispano News",
        logo: "/images/press/logos/panorama-hispano-news.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/el-fiscal-general-eric-t-schneiderman-anuncio-el-inicio-del.jpg",
        featured: false,
      },
      {
        title:
          "This morning the New York Legal Assistance Group (NYLAG) and the New York Immigration Coalition (NYIC) held a briefing to build awareness among immigrant communities for a restitution fund established by New York State. NYLAG is administering the fund.",
        url: "http://nylag.org/news/2014/09/thousands-of-deserving-immigrants-shouldnt-lose-out-on-money-they-deserve",
        source: "NYLAG",
        logo: "/images/press/logos/nylag.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/this-morning-the-new-york-legal-assistance-group-nylag-and.jpg",
        featured: true,
      },
      {
        title:
          "El fiscal general de Nueva York, Eric T. Schneiderman, anunció que creará un fondo de restitución de 2.2 millones de dólares para los inmigrantes que fueron estafados por dos organizaciones bajo la promesa de que estaban calificadas para tramitar...",
        url: "http://www.univision.com/noticias/fondo-de-restitucion-para-inmigrantes-estafados",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/el-fiscal-general-de-nueva-york-eric-t-schneiderman-anuncio-2.jpg",
        featured: false,
      },
      {
        title:
          "People who obtained services from two fraudulent immigration organizations are eligible for compensation from a $2.2 million restitution fund, according to a recent announcement from the New York State Attorney General’s office.",
        url: "http://www.manhattantimesnews.com/remedy-and-restitution-remedio-y-restitucion/",
        source: "Manhattan Times News",
        logo: "/images/press/logos/manhattan-times-news.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/people-who-obtained-services-from-two-fraudulent.jpg",
        featured: true,
      },
      {
        title:
          "El Fiscal General del Estado de Nueva York, Eric T. Schneiderman ha establecido el Fondo de Restitución de Inmigrantes (Immigrant Restitution Fund) (Fondo) para compensar a las personas que fueron estafadas por dos de las organizaciones de servicios...",
        url: "https://www.youtube.com/watch?v=cL7EyVzttBY",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/el-fiscal-general-del-estado-de-nueva-york-eric-t.jpg",
        featured: false,
      },
      {
        title:
          "A partir de este lunes, las organizaciones International Immigrants Foundation Inc (IIF) e International Professional Association Inc (IPA) recibirán las solicitudes para obtener compensación por los fraudes que cometieron a través...",
        url: "http://spanish.latinospost.com/articles/7604/20140722/inmigrantes-estafados-nueva-york-recuperar-dinero-ayuda.htm",
        source: "Latino Post Online",
        logo: "/images/press/logos/latino-post-online.jpg",
        image: null,
        featured: false,
      },
      {
        title:
          "El Fiscal General Eric T. Schneiderman anunció el inicio de un proceso de reclamación de restitución de fondos para las miles de personas que fueron defraudadas por dos organizaciones de inmigración.",
        url: "http://www.telemundo47.com/results/?keywords=ny+legal+assistance&x=0&y=0",
        source: "Telemundo",
        logo: "/images/press/logos/telemundo.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/el-fiscal-general-eric-t-schneiderman-anuncio-el-inicio-de.jpg",
        featured: false,
      },
      {
        title:
          "In October, the New York State Appellate Term, First Department, overturned a Civil Court judge and granted an undocumented transgender woman’s name change request. This is the first appellate decision clarifying that undocumented immigrants who are...",
        url: "http://nylag.org/news/2014/10/name-change-ruling-a-win-for-new-york-immigrants",
        source: "NYLAG",
        logo: "/images/press/logos/nylag.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/in-october-the-new-york-state-appellate-term-first.jpg",
        featured: false,
      },
      {
        title:
          "Los estafados por dos grandes organizaciones sin ánimo de lucro que proveían servicios de inmigración irregulares —Immigrants Foundation (IIF) e International Professional Association (IPA)— podrán comenzar por fin a solicitar indemnizaciones...",
        url: "http://www.eldiariony.com/2014/07/20/migrantes-estafados-podran-reclamar-sus-perdidas-millonarias/",
        source: "El Diario - NY",
        logo: "/images/press/logos/el-diario-ny.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/los-estafados-por-dos-grandes-organizaciones-sin-animo-de.jpg",
        featured: false,
      },
      {
        title:
          "President Obama is expected to soon announce, perhaps as early as this week, executive action on immigration that could provide protection from deportation for millions of unauthorized immigrants. With as many as 100,000 low-income New York City residen...",
        url: "http://nylag.org/news/2014/11/nylag-prepares-for-president-obamas-imminent-immigrant-relief-order",
        source: "NYLAG",
        logo: "/images/press/logos/nylag.jpg",
        image:
          "/images/press/new-york-legal-assistance-group/president-obama-is-expected-to-soon-announce-perhaps-as.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "JUDGE RITA MELLA",
    slug: "judge-rita-mella",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Manhattan Surrogate's Court Judge Surrogate court judges preside over the estates and assets and guardianships of those who have recently died, and the position has been marked by corruption in the past. Jaffe and Mella, both Civil Court judges...",
        url: "http://gothamist.com/2012/09/12/state_and_local_primary_elections_c.php",
        source: "Gothamist",
        logo: "/images/press/logos/gothamist.jpg",
        image:
          "/images/press/judge-rita-mella/manhattan-surrogate-s-court-judge-surrogate-court-judges.jpg",
        featured: true,
      },
      {
        title:
          "The reverential judge, Rita Mella, came to the U.S. when she was 22-years-old, with limited English skills. Just last month, she won the Democratic nomination, receiving 60 percent of the vote, and will run unopposed in November to become the first...",
        url: "http://nbclatino.com/2012/10/01/six-figures-a-new-york-judge-devoted-to-making-life-better-for-latinos/",
        source: "NBC Latino",
        logo: "/images/press/logos/nbc-latino.jpg",
        image:
          "/images/press/judge-rita-mella/the-reverential-judge-rita-mella-came-to-the-u-s-when-she.jpg",
        featured: true,
      },
      {
        title:
          "ELECCIONES PRESIDENCIALES 2012 Latina podría ser la primera en corte Surrogate en Manhattan.",
        url: "http://noticias.terra.com/elecciones-presidenciales/2012/latina-podria-ser-la-primera-en-corte-surrogate-en-manhattan,c2ba576dd5cb9310VgnVCM20000099cceb0aRCRD.html",
        source: "Terra",
        logo: "/images/press/logos/terra.jpg",
        image:
          "/images/press/judge-rita-mella/elecciones-presidenciales-2012-latina-podria-ser-la-primera.jpg",
        featured: false,
      },
      {
        title:
          "In her current role, Mella chairs the Gender Fairness Committee of the Manhattan Criminal Court, which has organized programs aimed at addressing issues such as sex trafficking of young women, domestic violence among teenagers and relations between...",
        url: "http://town-village.com/2012/09/11/stuy-town-resident-running-for-surrogate-court-judge-position/",
        source: "Town & Village",
        logo: null,
        image:
          "/images/press/judge-rita-mella/in-her-current-role-mella-chairs-the-gender-fairness.jpg",
        featured: true,
      },
      {
        title:
          "Mella would become the first Hispanic to hold this judgeship in Manhattan. Having an experienced Latina in this position could help expand the reach of this major court, which Hispanics now rarely turn to. Sensitive to the needs...",
        url: "http://www.eldiariony.com/2012/09/04/vote-for-rita-mella/",
        source: "El Diario - NY",
        logo: "/images/press/logos/el-diario-ny.jpg",
        image:
          "/images/press/judge-rita-mella/mella-would-become-the-first-hispanic-to-hold-this.jpg",
        featured: false,
      },
      {
        title:
          "Two well-qualified sitting judges — Barbara Jaffe and Rita Mella — are vying to preside over this powerful court, which oversees wills, estates and adoptions. The winner will succeed Kristin Booth Glen, who is stepping down after seven years as...",
        url: "http://www.nytimes.com/2012/08/25/opinion/for-judgeships-in-new-york-city.html?_r=1",
        source: "The New York Times",
        logo: "/images/press/logos/the-new-york-times.jpg",
        image:
          "/images/press/judge-rita-mella/two-well-qualified-sitting-judges-barbara-jaffe-and-rita.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "obama for america (ofa)",
    slug: "obama-for-america-ofa",
    showOnPressPage: true,
    articles: [
      {
        title:
          "Republicans in South Florida are a tough bunch, hardened by decades of swing state campaigns in counties that house much of the state's Democratic base. When I visited the area at the same point in the race in 2008...",
        url: "https://talkingpointsmemo.com/election2012/in-south-florida-republicans-turn-pro-romney-intensity-up-to-an-11",
        source: "Talking Points Memo",
        logo: "/images/press/logos/talking-points-memo.jpg",
        image:
          "/images/press/obama-for-america-ofa/republicans-in-south-florida-are-a-tough-bunch-hardened-by.jpg",
        featured: true,
      },
      {
        title:
          "With almost all ballots in Florida counted, U.S. media on Saturday projected President Barack Obama the winner in that state four days after he won Tuesday's national election. Florida brings his total of electoral votes to 332 versus 206 for...",
        url: "http://www.reuters.com/article/2012/11/10/usa-campaign-florida-idUSL1E8MA16W20121110#FP5zEbAflZhBDwap.97",
        source: "Reuters",
        logo: "/images/press/logos/reuters.jpg",
        image:
          "/images/press/obama-for-america-ofa/with-almost-all-ballots-in-florida-counted-u-s-media-on.jpg",
        featured: true,
      },
      {
        title:
          "Obama for America volunteers were in Little Havana Sunday trying to gain support for the president in an area they called a “stronghold for the Republican party.” “This is a neighborhood that is typically being seen as a bastion of republicanism,”",
        url: "http://www.nbcmiami.com/news/local/Obama-For-America-Tries-to-Gain-Support-in-Little-Havana-174102701.html",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/obama-for-america-ofa/obama-for-america-volunteers-were-in-little-havana-sunday.jpg",
        featured: true,
      },
    ],
  },
  {
    name: "DR. SHINO BAY",
    slug: "dr-shino-bay",
    showOnPressPage: false,
    articles: [
      {
        title:
          "Un prestigioso dermatólogo cosmético comparte en este libro sus consejos para sentirnos y vernos bien durante nuestra vida. Sus recomendaciones incluyen desde la protección contra los factores que causan un daño permanente en la piel hasta los beneficio...",
        url: "https://www.vanidades.com/",
        source: "Vanidades",
        logo: "/images/press/logos/vanidades.jpg",
        image:
          "/images/press/dr-shino-bay/un-prestigioso-dermatologo-cosmetico-comparte-en-este-libro.jpg",
        featured: false,
      },
      {
        title:
          "Nicknamed “the Feel Good Doctor,” Dr. Shino Bay Aguilera is the author of the new book Be Youthful. While most doctors tend to push a long list of pills, lotions and potions, Dr. Aguilera’s unique cosmetic and clinical dermatological practice...",
        url: "http://www.thefashionspot.com/wellness/515879-heres-can-naturally-reboot-body/",
        source: "The Fashion Spot",
        logo: "/images/press/logos/the-fashion-spot.jpg",
        image:
          "/images/press/dr-shino-bay/nicknamed-the-feel-good-doctor-dr-shino-bay-aguilera-is-the.jpg",
        featured: false,
      },
      {
        title:
          "Many of us begin incorporating anti-aging skin care products into our routines when we are in our late 20s, but it’s never too early to start living a lifestyle that keeps you forever young. Beyond skin care products, there are tons of ways to feel...",
        url: "http://heyvivala.tumblr.com/post/122771692668/3-knifeless-anti-aging-tips-from-a-cosmetic",
        source: "Vivala",
        logo: "/images/press/logos/vivala-2.jpg",
        image:
          "/images/press/dr-shino-bay/many-of-us-begin-incorporating-anti-aging-skin-care.gif",
        featured: false,
      },
      {
        title:
          "Miami’s top cosmetic dermatologist reveals his secret Fountain of Youth. In his new book, Dr. Shino Bay Aguilera educates us on how we can look good, feel great—and remain young looking for the rest of our life.",
        url: "http://stacyknows.com/2015/remain-young-at-any-age-by-reading-be-youthful/",
        source: "Stacy Knows",
        logo: "/images/press/logos/stacy-knows.jpg",
        image:
          "/images/press/dr-shino-bay/miamis-top-cosmetic-dermatologist-reveals-his-secret.jpg",
        featured: false,
      },
      {
        title:
          "Marilyn Monroe was rumored to do it first. More recently, Caroline Manzo of The Real Housewives of New Jersey said she swears by it, while former Bachelor contestant Michelle Money uploaded a YouTube tutorial on how to DIY.",
        url: "http://www.womenshealthmag.com/beauty/dermaplaning",
        source: "Women's Health Mag",
        logo: "/images/press/logos/women-s-health-mag.jpg",
        image:
          "/images/press/dr-shino-bay/marilyn-monroe-was-rumored-to-do-it-first-more-recently.jpg",
        featured: false,
      },
      {
        title:
          "he fountain of youth could be hiding in your daily exercise routine. In an identical twin study conducted by Dr. Shino Bay, outlined in his book Be Youthful, Bay found that simply walking 45 minutes at least 3 times a week not only helped...",
        url: "http://www.instyle.com/news/why-walking-45-minutes-can-impact-your-anti-aging-cycle-better",
        source: "Instyle",
        logo: "/images/press/logos/instyle.jpg",
        image:
          "/images/press/dr-shino-bay/he-fountain-of-youth-could-be-hiding-in-your-daily-exercise.jpg",
        featured: false,
      },
      {
        title:
          "La protagonista de Diomedes, el cacique de La Junta, Kimberly Reyes, tiene a un hombre que le quita el sueño y es su inspiración. Se trata del escritor y asesor espiritual Shino Bay. La actriz ha forjado una bonita amistad con este hombre que le sirvió...",
        url: "http://www.publimetro.co/entretenimiento/este-es-el-hombre-que-inspira-a-kimberly-reyes/lmkogD!F3TCOQSGu0nt2/#.VfjTutSwfS8.yahoomail",
        source: "Publi Metro",
        logo: "/images/press/logos/publi-metro.jpg",
        image:
          "/images/press/dr-shino-bay/la-protagonista-de-diomedes-el-cacique-de-la-junta-kimberly.jpg",
        featured: false,
      },
      {
        title:
          "El Dr. Shino Bay Aguilera, reconocido dermatólogo de ascendencia panameña nos propone pensar en la belleza como un estado de ánimo con su libro Sé joven: verte, sentirte y mantenerte joven a cualquier edad.",
        url: "http://insidecrowd.co/inthepress/2015/12/3/siempre-mujer",
        source: "Siempre Mujer",
        logo: "/images/press/logos/siempre-mujer.jpg",
        image:
          "/images/press/dr-shino-bay/el-dr-shino-bay-aguilera-reconocido-dermatologo-de.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "LATINAS THINK BIG",
    slug: "latinas-think-big",
    showOnPressPage: false,
    articles: [
      {
        title:
          "The halls of Columbia University's Barnard College buzzed with excitement, with the inauguration of LATINAS THINK BIG event. Women and men from across the country united in New York City to celebrate the careers of Latinas and start a conversation...",
        url: "http://insidecrowd.co/inthepress/2015/11/24/huffington-post-1",
        source: "HUFFINGTON POST",
        logo: "/images/press/logos/huffington-post.jpg",
        image:
          "/images/press/latinas-think-big/the-halls-of-columbia-university-s-barnard-college-buzzed.jpg",
        featured: false,
      },
      {
        title:
          "In preparation for the upcoming Latinas Think Big Innovation Summit this October, at Google's campus in Silicon Valley, I have been on a quest to identify Latinas around the country who are innovating in technology and across STEM fields.",
        url: "http://www.huffingtonpost.com/angelica-perezlitwin-phd/rewriting-the-innovation-_b_5603952.html",
        source: "HUFFINGTON POST",
        logo: "/images/press/logos/huffington-post.jpg",
        image:
          "/images/press/latinas-think-big/in-preparation-for-the-upcoming-latinas-think-big.jpg",
        featured: false,
      },
      {
        title:
          "Latinas Think Big™ is a progressive platform and national tour, aimed at showcasing the innovative projects and talents of Latinas in the United States. Since 2013, it has followed the goal of encouraging success in entrepreneurship, innovation...",
        url: "http://stanfordhispanicbroadcasting.org/latinas-think-big-new-leaders-in-a-new-world/",
        source: "Stanford Hispanic Broadcasting",
        logo: null,
        image:
          "/images/press/latinas-think-big/latinas-think-bigtm-is-a-progressive-platform-and-national.jpg",
        featured: false,
      },
      {
        title:
          "Psychologist Angelica Perez-Litwin and author Gabrielle Bernstein advise how to curb bad behavior by people in your life, including friends who always leave you to pick up the check and family members and coworkers who shirk tasks.",
        url: "http://www.today.com/video/how-to-stop-being-a-doormat-at-home-and-at-work-41064003966",
        source: "Today Show",
        logo: "/images/press/logos/today-show.jpg",
        image:
          "/images/press/latinas-think-big/psychologist-angelica-perez-litwin-and-author-gabrielle.jpg",
        featured: false,
      },
      {
        title:
          'Pérez-Litwin es la creadora de "Latinas Think Big" (Las latinas piensan a lo grande), una plataforma que quiere crear redes de influencia para las hispanas en Estados Unidos e ir más allá de la imagen de mujer sexy que no habla bien inglés...',
        url: "http://feeds.univision.com/feeds/article/2014-09-18/angelica-perez-litwin-la-mujer",
        source: "Univision",
        logo: "/images/press/logos/univision.jpg",
        image:
          "/images/press/latinas-think-big/perez-litwin-es-la-creadora-de-latinas-think-big-las.jpg",
        featured: false,
      },
      {
        title:
          "Silicon Valley's diversity problem goes beyond the dearth of underrepresented minorities in the ranks of the industry's workforce. Now Latinas Think Big is taking a crack at that problem by launching startup communities, designed for Latinas...",
        url: "http://www.latinpost.com/articles/90890/20151030/latinas-think-big-launches-startup-communities-to-catalyze-latina-entrepreneurial-culture.htm",
        source: "Latin Post",
        logo: "/images/press/logos/latin-post.jpg",
        image:
          "/images/press/latinas-think-big/silicon-valley-s-diversity-problem-goes-beyond-the-dearth.jpg",
        featured: false,
      },
      {
        title:
          "As many who follow my writing know, I am a big advocate of the art and science of narrative.  Narrative helps to define the value of a cause, the trajectory of a cause, and, if done with care and precision, the many different kinds of participants...",
        url: "http://www.forbes.com/sites/giovannirodriguez/2014/10/02/can-google-help-reshape-the-latina-narrative-yes-but-not-without-your-help/",
        source: "Forbes",
        logo: "/images/press/logos/forbes.jpg",
        image:
          "/images/press/latinas-think-big/as-many-who-follow-my-writing-know-i-am-a-big-advocate-of.jpg",
        featured: false,
      },
      {
        title:
          '"What I hope that women who come to Latinas Think Big take from this event is that we really have tremendous potential; this is our time to create opportunities, businesses, successful careers, because this country needs it,"',
        url: "http://www.nbcnews.com/news/latino/latinas-think-big-summit-helping-women-take-careers-next-level-n464776",
        source: "NBC NEWS",
        logo: "/images/press/logos/nbc-news.jpg",
        image:
          "/images/press/latinas-think-big/what-i-hope-that-women-who-come-to-latinas-think-big-take.jpg",
        featured: false,
      },
      {
        title:
          "More than 300 female Hispanic executives and high-level officials met here at Google's headquarters for a conference aiming to change the stereotype of Latinas in the United States. The Latinas Think Big Innovation Summit came amid a raging debate...",
        url: "http://latino.foxnews.com/latino/news/2014/10/05/latina-executives-aim-to-change-stereotype-of-hispanic-women-in-united-states/",
        source: "Fox News Latino",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/latinas-think-big/more-than-300-female-hispanic-executives-and-high-level.jpg",
        featured: false,
      },
      {
        title:
          "Companies like Google are interested in reaching out to young Hispanic girls and encouraging them to pursue projects and careers in science, technology, engineering and math, or STEM. That's why on Friday, Google hosted the Latinas Think Big summit...",
        url: "http://abc7news.com/careers/bay-area-summit-encourages-stem-careers-for-latinas/336282/",
        source: "ABC 7 News",
        logo: "/images/press/logos/abc-7-news.jpg",
        image:
          "/images/press/latinas-think-big/companies-like-google-are-interested-in-reaching-out-to.jpg",
        featured: false,
      },
      {
        title:
          "Latinas en tecnología se enfrentan al reto STEM con entusiasmo. Google auspicia el segundo encuentro de hispanas para impulsar el número de latinas en las carreras de ciencias, tecnología, ingeniería y matemáticas.",
        url: "http://www.cnet.com/es/noticias/latinas-en-tecnologia-se-enfrentan-al-reto-stem-con-entusiasmo/",
        source: "C-Net en Español",
        logo: "/images/press/logos/c-net-en-espanol.jpg",
        image:
          "/images/press/latinas-think-big/latinas-en-tecnologia-se-enfrentan-al-reto-stem-con.jpg",
        featured: false,
      },
      {
        title:
          "ECONOMÍA Latinas influyentes buscan cambiar narrativa sobre la mujer hispana en EE.UU.   Más de 300 ejecutivas y altas funcionarias hispanas se dieron cita hoy en la sede de Google en Mountain View (California, EE.UU.), en una conferencia de alto nivel...",
        url: "http://economia.terra.com.mx/latinas-influyentes-buscan-cambiar-narrativa-sobre-la-mujer-hispana-en-eeuu,d9080ee0648d8410VgnCLD200000b2bf46d0RCRD.html",
        source: "Terra",
        logo: "/images/press/logos/terra.jpg",
        image:
          "/images/press/latinas-think-big/economia-latinas-influyentes-buscan-cambiar-narrativa-sobre.jpg",
        featured: false,
      },
      {
        title:
          "Latinas are one of the most sought-after consumer groups in the U.S. -- and with the demographic trends underway in the U.S., that influence is only going to grow into the future.",
        url: "http://www.latinpost.com/articles/49047/20150429/marketplace-how-latina-psychologist-dr-ang%C3%A9lica-p%C3%A9rez-litwin-became-a-catalyst-to-change-the-face-of-american-business.htm",
        source: "Latin Post",
        logo: "/images/press/logos/latin-post.jpg",
        image:
          "/images/press/latinas-think-big/latinas-are-one-of-the-most-sought-after-consumer-groups-in.jpg",
        featured: false,
      },
    ],
  },
  {
    name: "PEOPLE'S THEATRE PROJECT",
    slug: "peoples-theatre-project",
    showOnPressPage: false,
    articles: [
      {
        title:
          "Lora came to New York from the Dominican Republic in 2000 to study at Manhattanville College. After she completed her graduate degree in peace studies, she became a struggling actor for almost two years, but she says she felt an incessant need to...",
        url: "http://nbclatino.com/2012/11/16/video-a-dominican-latina-uniting-and-changing-communities-through-theater/",
        source: "NBC Latino News",
        logo: null,
        image:
          "/images/press/peoples-theatre-project/lora-came-to-new-york-from-the-dominican-republic-in-2000.jpg",
        featured: false,
      },
      {
        title:
          "The diverse audience then discussed ways that this could have been handled differently and presented them to the entire crowd. Different people from different backgrounds working together for a positive change.",
        url: "http://pix11.com/2015/11/11/washington-heights-community-faces-issues-of-racism-through-theatre/",
        source: "PIX 11 News",
        logo: "/images/press/logos/pix-11-news.jpg",
        image:
          "/images/press/peoples-theatre-project/the-diverse-audience-then-discussed-ways-that-this-could.jpg",
        featured: false,
      },
      {
        title:
          'Across the United States, in all fields of endeavor, Latinos are working to uphold their place in American society. Fox News Latino is proud to present "Our American Dream" – a series of snapshots and profiles of Latino success stories.',
        url: "http://www.foxnews.com/entertainment/slideshow/2012/02/20/our-american-dream-mino-lora-brings-theater-to-masses.html?intcmp=related#slide=3",
        source: "Fox News Latino",
        logo: "/images/press/logos/fox-news.jpg",
        image:
          "/images/press/peoples-theatre-project/across-the-united-states-in-all-fields-of-endeavor-latinos.jpg",
        featured: false,
      },
    ],
  },
];

export default pressClients;

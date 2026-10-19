// Clients shown on /clients, grouped by category in display order.
// Images live in public/images/clients.
const clientCategories = [
  {
    name: "maternal health and advocacy",
    clients: [
      {
        name: "bobbie",
        url: "https://www.hibobbie.com",
        image: "/images/clients/bobbie.jpg",
      },
      {
        name: "Chamber of Mothers",
        url: "https://www.instagram.com/chamberofmothers/",
        image: "/images/clients/chamber-of-mothers.jpg",
      },
      {
        name: "charley",
        url: "https://chatwithcharley.org",
        image: "/images/clients/charley.jpg",
      },
      {
        name: "chiyo",
        url: "https://www.nytimes.com/2025/04/28/t-magazine/mothers-day-gift-guide.html",
        image: "/images/clients/chiyo.jpg",
      },
      {
        name: "nanit",
        url: "https://www.nanit.com",
        image: "/images/clients/nanit.jpg",
      },
      {
        name: "Oula",
        url: "https://oulahealth.com",
        image: "/images/clients/oula.png",
      },
      {
        name: "perelel",
        url: "https://perelelhealth.com",
        image: "/images/clients/perelel.jpg",
      },
    ],
  },
  {
    name: "future of food",
    clients: [
      {
        name: "Blossom Du Jour",
        url: "https://archive.nytimes.com/dinersjournal.blogs.nytimes.com/2012/02/24/blossom-to-open-a-vegan-bakery-in-chelsea/",
        image: "/images/clients/blossom-du-jour.jpg",
      },
      {
        name: "cocoa v",
        url: "https://www.nytimes.com/2017/02/13/dining/vegan-chocolate-cocoa-v-chocolat-chelsea.html",
        image: "/images/clients/cocoa-v.jpg",
      },
      {
        name: "love grace",
        url: "https://lovegracejuice.com",
        image: "/images/clients/love-grace.jpg",
      },
      {
        name: "slow up",
        url: "https://www.bonappetit.com/story/slow-up-bars",
        image: "/images/clients/slow-up.jpg",
      },
      {
        name: "urban vegan kitchen",
        url: "https://www.bizjournals.com/kansascity/bizwomen/news/latest-news/2017/05/new-yorker-built-anempire-of-vegan-eateries.html",
        image: "/images/clients/urban-vegan-kitchen.jpg",
      },
    ],
  },
  {
    name: "direct to consumer",
    clients: [
      {
        name: "cleancult",
        url: "https://www.cleancult.com/",
        image: "/images/clients/cleancult.jpg",
      },
      {
        name: "pair eyewear",
        url: "https://www.modernretail.co/marketing/how-pair-eyewear-uses-tiktok-to-drive-more-than-a-quarter-of-its-sales/",
        image: "/images/clients/pair-eyewear.jpg",
      },
      {
        name: "smartypants",
        url: "https://www.smartypantsvitamins.com/",
        image: "/images/clients/smartypants.jpg",
      },
      {
        name: "The Sill",
        url: "https://www.thesill.com",
        image: "/images/clients/the-sill.webp",
      },
    ],
  },
  {
    name: "climate tech",
    clients: [
      {
        name: "ag-tech in Puerto Rico",
        url: "https://www.npr.org/sections/thesalt/2017/05/13/527934047/how-puerto-rico-lost-its-home-grown-food-but-might-find-it-again",
        image: "/images/clients/ag-tech-in-puerto-rico.jpg",
      },
      {
        name: "raincoat",
        url: "https://www.bloomberg.com/news/articles/2023-07-10/during-wildfire-hurricane-season-new-weather-insurance-could-help-homeowners",
        image: "/images/clients/raincoat.jpg",
      },
    ],
  },
  {
    name: "social impact",
    clients: [
      {
        name: "abortion in america",
        url: "https://www.nytimes.com/2024/10/31/business/media/cecile-richards-abortion-social-media.html",
        image: "/images/clients/abortion-in-america.jpg",
      },
      {
        name: "identity installation at the London design biennale",
        url: "https://eyeondesign.aiga.org/an-algorithmic-national-identity-takes-shape/",
        image:
          "/images/clients/identity-installation-at-the-london-design-biennale.jpg",
      },
      {
        name: "New York Legal Assistance Group",
        url: "http://www.nylag.org/",
        image: "/images/clients/new-york-legal-assistance-group.jpg",
      },
      {
        name: "Parallel 18 accelerator",
        url: "https://www.nytimes.com/2019/04/09/business/puerto-rico-parallel18-hurricane-economy.html",
        image: "/images/clients/parallel-18-accelerator.jpg",
      },
    ],
  },
  {
    name: "conscientious leaders",
    clients: [
      {
        name: "dannijo pro",
        url: "https://www.instagram.com/dannijopro/",
        image: "/images/clients/dannijo-pro.jpg",
      },
      {
        name: "flabelus",
        url: "https://www.instagram.com/flabelus",
        image: "/images/clients/flabelus.jpg",
      },
      {
        name: "Horatio",
        url: "https://www.inc.com/magazine/202303/ali-donaldson/how-i-spun-a-horrible-summer-job-experience-into-a-lucrative-niche-outsourcing-business.html",
        image: "/images/clients/horatio.jpg",
      },
      {
        name: "Judge Rita Mella For Surrogate's Court",
        url: "http://www.nytimes.com/2012/08/25/opinion/for-judgeships-in-new-york-city.html?_r=1",
        image: "/images/clients/judge-rita-mella-for-surrogate-s-court.jpg",
      },
      {
        name: "pamela elizabeth",
        url: "http://observer.com/2017/05/blossom-vegan-restaurant-pamela-elizabeth/",
        image: "/images/clients/pamela-elizabeth.jpg",
      },
    ],
  },
];

export default clientCategories;

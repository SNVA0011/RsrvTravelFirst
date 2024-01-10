export const siteid = 4;
export const siteurl = 'https://www.test.com';
export const Hostname = "Test.in";
export const SECRET_KEY = "reSER3103s9vatION";


export const BrandLogo = {
  url: "/",
  imgAlt: "travomint-logo",
  imgPath: "/images/travomint-logo.webp",
}

export const WhiteBrandLogo = {
  url: "/",
  imgAlt: "travomint-logo",
  imgPath: "/images/white-logo-footer.webp",
}

export const FooterLinks = [
  {
    'heading': 'About',
    'Urls': [
      {
        'title': 'About Us',
        'url': '#'
      },
      {
        'title': 'Blog',
        'url': '#'
      },
      {
        'title': 'Media',
        'url': '#'
      },
      {
        'title': 'FAQ',
        'url': '#'
      },
      {
        'title': 'Contact Us',
        'url': '#'
      },
      {
        'title': 'Flights',
        'url': '#'
      },
    ]
  },
  {
    'heading': 'Other Links',
    'Urls': [
      {
        'title': 'Privacy Policy Us',
        'url': '#'
      },
      {
        'title': 'Terms & Condition',
        'url': '#'
      },
      {
        'title': 'Travel Companies',
        'url': '#'
      },
      {
        'title': 'Visa',
        'url': '#'
      },
      {
        'title': 'Charter Flights',
        'url': '#'
      },
      {
        'title': 'Check-in',
        'url': '#'
      },
    ]
  },
]


export const headerUrl = {
  social: [
    {
      title: "cs@travomint.com",
      url: "mailto:cs@travomint.com",
      icon: "fluent:mail-24-filled",
    },
    {
      title: "+91-1204814491",
      url: "tel:+91-1204814491",
      icon: "ph:phone-call-fill",
    },
  ],
  main: [
    {
      title: "Flight",
      url: "/",
      icon: "fa-solid:plane-departure",
      disable: false,
    },
    {
      title: "Hotel",
      url: "/#",
      icon: "mdi:hotel",

      disable: true,
    },
    {
      title: "Transfer",
      url: "/#",
      icon: "icon-park-outline:transfer", 
      disable: true,
    },
    {
      title: "Contact",
      url: "/contact-us",
      icon: "ri:customer-service-line",
      disable: false,
    }
  ],
};
export const travelClass = [
  {
    id: 1,
    name: "Economy",
    value: 1,
  },
  {
    id: 2,
    name: "Premium Economy",
    value: 2,
  },
  {
    id: 3,
    name: "Business",
    value: 3,
  },
  {
    id: 4,
    name: "First",
    value: 4,
  },
];

export const findtravelClass = (value) => {
  const data = travelClass.find((item) => item.value === value);
  return data;
};
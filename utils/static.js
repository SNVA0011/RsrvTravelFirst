export const siteid = 201;
export const siteurl = 'https://www.test.com';
export const Hostname = "Test.in";
export const SECRET_KEY = "reSER3103s9vatION";
export const Name_Pattern = /^[A-Za-z\s]{2,}[\.]{0,1}[A-Za-z\s]{0,}$/;
export const Email_Pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const Phone_Pattern = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;
export const paginateSize = 15;
export const cms_trav_api = "https://cms.travomint.com";
export const cms_trav_authcode = "Trav3103s987876";
export const api_traveloes = "https://routes.traveloes.com";


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
export const contactlist = [
  {
    headername: "Phone",
    icon: '/images/phone-footerico.png',
    href: "tel:+1 (800) 630-3454",
    name: "+1 (800) 630-3454",
  },
  {
    headername: "Email",
    icon: '/images/email-footerico.png',
    href: "mailto:support@reservationsdeal.in",
    name: "support@reservationsdeal.in",
  },
  {
    headername: "Address",
    icon: '/images/address-footerico.png',
    href: "http://maps.google.com/?q=SNVA LLC, 2 Industrial Park DR, Waldorf MD 20602 United States",
    name: "SNVA LLC, 2 Industrial Park DR, Waldorf MD 20602 United States",
  },
];

export const FooterLinks = [
  {
    'heading': 'About',
    'Urls': [
      {
        'title': 'About Us',
        'url': '/about-us'
      },
      {
        'title': 'Blog',
        'url': '/blog'
      }, 
      {
        'title': 'FAQs',
        'url': '/faq'
      },
      {
        'title': 'Airlines',
        'url': '/airlines'
      }
    ]
  },
  {
    'heading': 'Other Links',
    'Urls': [
      {
        'title': 'Privacy Policies',
        'url': '/privacy'
      },
      {
        'title': 'Terms & Condition',
        'url': '/terms'
      }, 
      {
        'title': 'Contact Us',
        'url': '/contact-us'
      },
      {
        'title': 'Cookies',
        'url': '/cookies'
      } 
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

export let stop = [
  { value: 1, title: "Non-Transit", price: "", count: "" },
  { value: 2, title: "1 stop", price: "", count: "" },
  { value: 3, title: "2 stop", price: "", count: "" },
];

export const socialUrls = {
  title: "Follow Us",
  links: [
    {
      title: "Instagram",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "#",
    },
    {
      title: "Facebook",
      url: "#",
    },
    {
      title: "Twitter",
      url: "#",
    },
  ],
};


// Functional export 
export const findtravelClass = (value) => {
  const data = travelClass.find((item) => item.value === value);
  return data;
};
// data.js
export const mobileMenuData = [
    { label: 'Home', link: '/' },
    { label: 'Product', link: '/product' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Contact', link: '/contact' }
  ];
  
  export const desktopMenuData = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop', subMenu: [
        { title: 'Kadın', items: [
            { label: 'Bags', link: '/shop/women/bags' },
            { label: 'Belts', link: '/shop/women/belts' },
            { label: 'Cosmetics', link: '/shop/women/cosmetics' },
            { label: 'Hats', link: '/shop/women/hats' },
        ]},
        { title: 'Erkek', items: [
            { label: 'Bags', link: '/shop/men/bags' },
            { label: 'Belts', link: '/shop/men/belts' },
            { label: 'Cosmetics', link: '/shop/men/cosmetics' },
            { label: 'Hats', link: '/shop/men/hats' },
        ]},
      ]
    },
    { label: 'About', link: '/about' },
    { label: 'Blog', link: '/blog' },
    { label: 'Contact', link: '/contact' },
    { label: 'Pages', link: '/pages' }
  ];
  
  export const brandName = 'CSR';
  
  export const contactInfo = {
    phone: '+90 (532) 741-09 23',
    email: 'csr-tic@csrtic.com',
  };
  
  export const socialMediaLinks = [
    { platform: 'instagram', link: 'https://instagram.com' },
    { platform: 'youtube', link: 'https://youtube.com' },
    { platform: 'facebook', link: 'https://facebook.com' },
    { platform: 'twitter', link: 'https://twitter.com' }
  ];
  
  export const specialOffer = 'Follow Us and get a chance to win 80% off';
  
  export const headerLinks = [
    { label: 'Login / Register', link: '/login', iconClass: 'fas fa-user' },
    {  iconClass: 'fas fa-search' },
    {  iconClass: 'fas fa-shopping-cart' },
    {  iconClass: 'fas fa-heart' }
  ];
  
export const followUsText = 'Follow Us :';
export const footerData = [
  {
    title: "Get In Touch",
    type: "text",
    content: "the quick fox jumps over the lazy dog",
    socialLinks: true
  },
  {
    title: "Company info",
    type: "links",
    items: [
      { label: "About Us", link: "/about" },
      { label: "Carrier", link: "/carrier" },
      { label: "We are hiring", link: "/careers" },
      { label: "Blog", link: "/blog" }
    ]
  },
  {
    title: "Features",
    type: "links",
    items: [
      { label: "Business Marketing", link: "/business-marketing" },
      { label: "User Analytic", link: "/user-analytic" },
      { label: "Live Chat", link: "/live-chat" },
      { label: "Unlimited Support", link: "/support" }
    ]
  }
];



export const copyrightText = '© 2024 CSR. All rights reserved.';

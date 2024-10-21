
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


export const heroData = [
  {
    title: "SUMMER 2020",
    subtitle: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    mobileImage: "src/assets/product-slide-1.jpg",
    desktopImage: "src/assets/shop-hero-1-product-slide-1.jpg"
  },
  {
    title: "SUMMER 2020",
    subtitle: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    mobileImage: "src/assets/product-slide-1.jpg",
    desktopImage: "src/assets/shop-hero-1-product-slide-1.jpg"
  }
];


export const editorsPick = {
  title: "EDITOR'S PICK",
  subtitle: "Problems trying to resolve the conflict between",
  categories: [
    { title: 'MEN', image: 'src/assets/men.png', aspectRatio: 350/125, link: '/men' },
    { title: 'WOMEN', image: 'src/assets/women.png', aspectRatio: 250/250, link: '/women' },
    { title: 'ACCESSORIES', image: 'src/assets/accessories.png', aspectRatio: 250/250, link: '/accessories' },
    { title: 'KIDS', image: 'src/assets/kids.png', aspectRatio: 250/250, link: '/kids' },
  ]
};



// data.js

export const featuredProductsHeading = {
  title: "Featured Products",
  subtitle: "BESTSELLER PRODUCTS",
  description: "Problems trying to resolve the conflict between"
};

export const products = [
  {
    id: 1,
    image: "src/assets/product-cover-5.png",
    title: "Graphic Design",
    subtitle: "English Department",
    price: 16.48,
    discountedPrice: 6.48,
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
  },
  {
    id: 2,
    image: "src/assets/product-cover-5.png",
    title: "Graphic Design",
    subtitle: "English Department",
    price: 16.48,
    discountedPrice: 6.48,
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
  },
  // Diğer ürünler...
];

export const productCategories = ["design", "development", "marketing", "business"];
export const shopPageData = {
  title: "Shop",
  breadcrumb: ["Home", "Shop"],
  clothsCategories: [
    {
      id: 1,
      title: "CLOTHS",
      itemCount: 5,
      image: "src/assets/clothscard.png",
      backgroundColor: "#F1F1F1" // Gri arka plan
    },
    {
      id: 2,
      title: "CLOTHS",
      itemCount: 5,
      image: "src/assets/clothscard.png",
      backgroundColor: "#23A6F0" // Mavi arka plan
    },
    {
      id: 3,
      title: "CLOTHS",
      itemCount: 5,
      image: "src/assets/clothscard.png",
      backgroundColor: "#FF9999" // Pembe arka plan
    }
  ]
};
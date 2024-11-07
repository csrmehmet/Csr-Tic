
export const mobileMenuData = [
    { label: 'Home', link: '/' },
    { label: 'Product', link: '/product' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Contact', link: '/contact' }
  ];
  
  export const desktopMenuData = [
    { label: 'Home', link: '/' },
    { 
      label: 'Shop', 
      link: '/shop', 
      subMenu: [
        { 
          title: 'Tüm Kategoriler',
          link: '/categories',
          items: [] // Boş array ekledik
        },
        { 
          title: 'Kadın', 
          items: [ // items array'i her kategoride olmalı
            { label: 'Bags', link: '/shop/kadin/bags', category: 'bags' },
            { label: 'Belts', link: '/shop/kadin/belts', category: 'belts' },
            { label: 'Cosmetics', link: '/shop/kadin/cosmetics', category: 'cosmetics' },
            { label: 'Hats', link: '/shop/kadin/hats', category: 'hats' },
          ]
        },
        { 
          title: 'Erkek', 
          items: [
            { label: 'Bags', link: '/shop/erkek/bags', category: 'bags' },
            { label: 'Belts', link: '/shop/erkek/belts', category: 'belts' },
            { label: 'Cosmetics', link: '/shop/erkek/cosmetics', category: 'cosmetics' },
            { label: 'Hats', link: '/shop/erkek/hats', category: 'hats' },
          ]
        }
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





export const featuredProductsHeading = {
  title: "Featured Products",
  subtitle: "BESTSELLER PRODUCTS",
  description: "Problems trying to resolve the conflict between"
};

export const products = [
  {
    id: 1,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Çanta Model 1",
    subtitle: "Bags Collection",
    gender: "kadin",
    category: "bags",
    price: 16.48,
    discountedPrice: 6.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 2,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Çanta Model 2",
    subtitle: "Bags Collection",
    gender: "kadin",
    category: "bags",
    price: 18.48,
    discountedPrice: 8.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 3,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Kemer Model 1",
    subtitle: "Belts Collection",
    gender: "kadin",
    category: "belts",
    price: 12.48,
    discountedPrice: 5.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 4,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Kemer Model 2",
    subtitle: "Belts Collection",
    gender: "kadin",
    category: "belts",
    price: 14.48,
    discountedPrice: 7.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 5,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Kozmetik Ürün 1",
    subtitle: "Cosmetics Collection",
    gender: "kadin",
    category: "cosmetics",
    price: 22.48,
    discountedPrice: 12.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  
  {
    id: 6,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Kozmetik Ürün 2",
    subtitle: "Cosmetics Collection",
    gender: "kadin",
    category: "cosmetics",
    price: 24.48,
    discountedPrice: 14.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },

  {
    id: 7,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Şapka Model 1",
    subtitle: "Hats Collection",
    gender: "kadin",
    category: "hats",
    price: 15.48,
    discountedPrice: 8.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 8,
    image: "/src/assets/product-cover-5.png",
    title: "Kadın Şapka Model 2",
    subtitle: "Hats Collection",
    gender: "kadin",
    category: "hats",
    price: 17.48,
    discountedPrice: 9.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 9,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Çanta Model 1",
    subtitle: "Bags Collection",
    gender: "erkek",
    category: "bags",
    price: 19.48,
    discountedPrice: 10.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 10,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Çanta Model 2",
    subtitle: "Bags Collection",
    gender: "erkek",
    category: "bags",
    price: 21.48,
    discountedPrice: 11.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 11,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Kemer Model 1",
    subtitle: "Belts Collection",
    gender: "erkek",
    category: "belts",
    price: 13.48,
    discountedPrice: 6.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 12,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Kemer Model 2",
    subtitle: "Belts Collection",
    gender: "erkek",
    category: "belts",
    price: 15.48,
    discountedPrice: 7.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 13,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Kozmetik Ürün 1",
    subtitle: "Cosmetics Collection",
    gender: "erkek",
    category: "cosmetics",
    price: 25.48,
    discountedPrice: 15.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 14,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Kozmetik Ürün 2",
    subtitle: "Cosmetics Collection",
    gender: "erkek",
    category: "cosmetics",
    price: 27.48,
    discountedPrice: 17.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 15,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Şapka Model 1",
    subtitle: "Hats Collection",
    gender: "erkek",
    category: "hats",
    price: 16.48,
    discountedPrice: 8.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },
  {
    id: 16,
    image: "/src/assets/product-cover-5.png",
    title: "Erkek Şapka Model 2",
    subtitle: "Hats Collection",
    gender: "erkek",
    category: "hats",
    price: 18.48,
    discountedPrice: 9.48,
    rating: 4,
    reviews: 10,
    availability: {
      status: true,
      text: "In Stock"
    },
    description: "Met minim Mollie non desert...",
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42'],
    images: [
      {
        id: 1,
        main: "/src/assets/product-cover-5.png",
        thumbnail: "/src/assets/product-cover-5.png"
      }
    ],
    descriptionImage: "/src/assets/product-cover-5.png",
    descriptionData: {
      mainText: [
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        
      ],
      features: [
        {
          title: "the quick fox jumps over",
          items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog"
          ]
        },
        
      ]
    }
  },

  
  
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
      
    },
    {
      id: 2,
      title: "CLOTHS",
      itemCount: 5,
      image: "src/assets/clothscard.png",
      
    },
    {
      id: 3,
      title: "CLOTHS",
      itemCount: 5,
      image: "src/assets/clothscard.png",
      
    }
  ]
};


export const categoryIcons = [
  { icon: 'fa-brands fa-hooli' },
  {  icon: 'fa-brands fa-lyft' },
  {  icon: 'fa-brands fa-pied-piper-hat' },
  {  icon: 'fa-brands fa-stripe' },
  {  icon: 'fa-brands fa-aws' },
  {  icon: 'fa-brands fa-reddit-alien' },
];

export const contactData = {
  title: "CONTACT US",
  description: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  buttonText: "CONTACT US",
  phoneTitle: "Phone",
  faxTitle: "Fax",
  officeLocations: [
    {
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
      postalCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
      postalCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "Berlin",
      address: "4140 Parker Rd.",
      postalCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "London",
      address: "3517 W. Gray St. Utica,",
      postalCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    }
  ]
};
export const teamData = {
  title: "Meet Our Team",
  description: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
  members: [
    {
      id: 1,
      name: "Mehmet Coşar",
      position: "Founder",
      role: "Fullstack Developer",
      description: "the quick fox jumps over the lazy dog",
      image: "src/assets/myphoto.png"
    },
    {
      id: 2,
      name: "Mehmet Coşar",
      position: "Founder",
      role: "Fullstack Developer",
      description: "the quick fox jumps over the lazy dog",
      image: "src/assets/myphoto.png"
    },
    {
      id: 3,
      name: "Mehmet Coşar",
      position: "Founder",
      role: "Fullstack Developer",
      description: "the quick fox jumps over the lazy dog",
      image: "src/assets/myphoto.png"
    },
    {
      id: 4,
      name: "Mehmet Coşar",
      position: "Founder",
      role: "Fullstack Developer",
      description: "the quick fox jumps over the lazy dog",
      image: "src/assets/myphoto.png"
    }
  ]
};
export const categories = [
  {
    id: 1,
    name: "Ayakkabı",
    gender: "kadin",
    image: "src/assets/clothscard.png"
  },
  {
    id: 2,
    name: "Gömlek",
    gender: "erkek",
    image: "src/assets/clothscard.png"
  },
  {
    id: 3,
    name: "Çanta",
    gender: "kadin",
    image: "src/assets/clothscard.png"
  },
  // Diğer kategoriler...
];
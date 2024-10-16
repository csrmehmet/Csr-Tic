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
    { label: 'Search', link: '/search', iconClass: 'fas fa-search' },
    { label: 'Cart', link: '/cart', iconClass: 'fas fa-shopping-cart' },
    { label: 'Wishlist', link: '/wishlist', iconClass: 'fas fa-heart' }
  ];
  
export const followUsText = 'Follow Us :';

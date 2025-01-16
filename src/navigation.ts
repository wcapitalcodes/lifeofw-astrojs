import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'W Vault',
          href: getPermalink('/wvault'),
          description: 'Your personal digital vault designed for women by women.',
        },
        {
          text: 'Wahine Financial Awareness',
          href: getPermalink('/outclass'),
          description: 'A comprehensive video series focused on empowering women in finance.',
        },
        {
          text: 'Wani Chat',
          href: 'https://wani.lifeofw.com/',
          description:
            'Our friendly assistant bot designed to help with any questions you have about budgeting, investing, or women',
        },
        {
          text: 'Wahine Experts',
          href: '/wahine_experts',
          description:
            'Connect with our network of seasoned professionals who provide expert guidance and support through meaningful conversations.',
        },
        {
          text: 'Wahine Community',
          href: getPermalink('/community'),
          description: 'Empowering network for women, providing support, resources, and networking opportunities.',
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Wahine Blog',
          href: getPermalink('/blog'),
        },
      ],
    },
    {
      text: 'Social Impact',
      href: '/social-impact',
    },
    {
      text: 'Contact Us',
      href: '/contact',
    },
    // {
    //   text: 'Resources',
    //   href: '/resources',
    // },
  ],
  actions: [{ text: 'Get Started', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'W Vault', href: '/wvault' },
        { text: 'Wahine Financial Awareness', href: '/outclass' },
        { text: 'Wani Chat', href: 'https://wani.lifeofw.com/' },
        { text: 'Wahine Community', href: '/community/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Social Impact', href: '/social-impact' },
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Community Guidelines', href: '/community/guidelines' },
      ],
    },
    {
      title: 'Resources',
      links: [{ text: 'Wahine Blog', href: '/blog' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/wahine_capital/' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/p/Wahine-Capital-100087760548404/',
    },
    { ariaLabel: 'Vimeo', icon: 'tabler:brand-vimeo', href: 'https://vimeo.com/user220015810' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/wahine-capital/posts/?feedView=all',
    },
  ],
  footNote: `All rights reserved · 2024`,
};

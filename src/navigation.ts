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
          text: 'Wahine Finance Video Series',
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
          text: 'Wahine Community',
          href: getPermalink('/landing/product'),
          description: 'Empowering network for women, providing support, resources, and networking opportunities.',
        },
      ],
    },
    {
      text: 'Contact Us',
      href: '/contact',
    },
    {
      text: 'Resources',
      href: '/resources',
    },
  ],
  actions: [{ text: 'Get Started', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'W Vault', href: '/wvault' },
        { text: 'Wahine Finance Video Series', href: '#' },
        { text: 'Wani Chat', href: 'https://wani.lifeofw.com/' },
        { text: 'Wahine Community', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Press', href: '#' },
      ],
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
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};

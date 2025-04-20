import { LinkProps } from '@/helpers/links';

export const CONTACT_EMAIL = '';
export const CONTACT_PHONE = '';

export const CONTACT_EMAIL_LINK = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE_LINK = `tel:${CONTACT_PHONE.replace(/\s/g, '')}`;

export const CONTACT_ADDRESS = {
    street: 'Národní 100/10',
    city: 'Praha',
    zip: '110 00',
    country: 'Česká republika',
};

export const CONTACT_ADDRESS_LINK = '';

export const VAT_ID = '';

export const SOCIAL_LINKS: LinkProps[] = [
    {
        href: 'https://www.facebook.com/',
        label: 'Facebook',
    },
    {
        href: 'https://www.instagram.com/',
        label: 'Instagram'
    }
];
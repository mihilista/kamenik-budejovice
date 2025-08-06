import { Metadata } from "next";

interface PageMetadata {
    title?: string;
    description?: string;
    image?: string;
}

export const APP_NAME = 'Kameník České Budějovice';
export const APP_URL = 'https://www.kamenikzbudejovic.cz';
export const APP_COLOR = '#f7f2e8';

const TITLE_SUFFIX = APP_NAME;
const DESCRIPTION = 'Tomáš Bíro - kamenické práce v Českých Budějovicích a okolí. Nabízím profesionální služby s důrazem na kvalitu a detail.';

export const DEFAULT_METADATA = {
    metadataBase: new URL(APP_URL),
    title: formatTitle(APP_NAME),
    description: DESCRIPTION,
    applicationName: APP_NAME,
    icons: [
        {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
        },
        {
            url: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            url: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        }
    ],
    manifest: "/site.webmanifest",
    other: {
        "apple-mobile-web-app-title": APP_NAME,
        "msapplication-TileColor": APP_COLOR,
    },
    openGraph: {
        title: formatTitle(APP_NAME),
        siteName: APP_NAME,
        url: APP_URL,
        description: DESCRIPTION,
        type: "website",
        images: [{
            url: "/images/og-image.jpg",
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: formatTitle(APP_NAME),
        description: DESCRIPTION,
        images: ["/images/og-image.jpg"],
    }
};

function formatTitle(title = '') {
    if (title === '' || title === TITLE_SUFFIX) {
        return TITLE_SUFFIX;
    }

    return `${title} | ${TITLE_SUFFIX}`;
}

export function getPageMetadata(data: PageMetadata): Metadata {
    const { title, description, image } = data;

    return {
        ...DEFAULT_METADATA,
        title: title ? formatTitle(title) : DEFAULT_METADATA.title,
        description: description || DEFAULT_METADATA.description,
        openGraph: {
            ...DEFAULT_METADATA.openGraph,
            title: title ? formatTitle(title) : DEFAULT_METADATA.openGraph?.title,
            description: description || DEFAULT_METADATA.openGraph?.description,
            images: image ? [{ url: image }] : DEFAULT_METADATA.openGraph?.images,
        },
        twitter: {
            ...DEFAULT_METADATA.twitter,
            title: title ? formatTitle(title) : DEFAULT_METADATA.twitter?.title,
            description: description || DEFAULT_METADATA.twitter?.description,
            images: image ? [image] : DEFAULT_METADATA.twitter?.images,
        },
    };
}
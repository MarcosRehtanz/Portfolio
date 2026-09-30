import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react'

interface SEOProps {
    title: string;
    description: string | ReactNode;
    name: string;
    type: string;
    url: string;
    image: string;
    }

export const SEO = ({ title, description, name, type, image, url }:SEOProps) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={String(description)} />
            <meta property='og:image' content={image} />
            <meta property='og:url' content={url} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={String(description)} />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={String(description)} />
            { /* End Twitter tags */}
        </Helmet>
    )
}
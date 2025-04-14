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
            <meta name='description' content="Soy desarrollador fullstack con +3 años de experiencia en varias areas de la industria IT como
    UX/UI, web, mobile y servidores." />
            <meta property='og:image' content={image} />
            <meta property='og:url' content={url} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content="Soy desarrollador fullstack con +3 años de experiencia en varias areas de la industria IT como
    UX/UI, web, mobile y servidores." />
            { /* End Facebook tags */}
            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content="Soy desarrollador fullstack con +3 años de experiencia en varias areas de la industria IT como
    UX/UI, web, mobile y servidores." />
            { /* End Twitter tags */}
        </Helmet>
    )
}
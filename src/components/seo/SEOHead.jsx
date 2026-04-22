import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Wattex Energy';
const BASE_URL = 'https://wattexenergy.com'; // ← Update to your actual domain when live
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * Reusable SEO component — drop into every page with unique props.
 *
 * @param {string} title       - Page title (will append " | Wattex Energy")
 * @param {string} description - Meta description (max 160 chars for Google)
 * @param {string} path        - Route path e.g. "/residential"
 * @param {string} keywords    - Comma-separated keywords
 * @param {string} image       - OG image URL
 * @param {string} type        - OG type (website | article)
 * @param {object|array} schema - JSON-LD structured data object or array of objects
 */
const SEOHead = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = '',
  schema = null,
}) => {
  const fullTitle =
    path === '/'
      ? `${SITE_NAME} | #1 Solar Installation Company in Hyderabad`
      : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  // Default Organization schema (used if no page-specific schema given)
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: 'Wattex Energy',
    description:
      'Leading solar energy solutions provider in Hyderabad offering residential, commercial, housing society, on-grid, off-grid, and utility-scale solar installations.',
    url: BASE_URL,
    email: 'wattexenergy@gmail.com',
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'State', name: 'Telangana' },
    ],
    sameAs: ['https://www.instagram.com/wattexenergy'],
    priceRange: '$$',
    serviceType: 'Solar Panel Installation',
    knowsAbout: [
      'Residential Solar Installation',
      'Commercial Solar Installation',
      'On-Grid Solar Systems',
      'Off-Grid Solar Systems',
      'Housing Society Solar',
      'Utility Scale Solar Plants',
      'PM Surya Ghar Yojana',
      'Net Metering',
    ],
  };

  // Allow single schema or array of schemas
  const schemaArray = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [defaultSchema];

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data — one script tag per schema */}
      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
// import { Helmet } from 'react-helmet-async';

// interface SEOProps {
//   title: string;
//   description: string;
//   keywords?: string;
//   author?: string;
//   image?: string;
//   url?: string;
//   type?: 'website' | 'article';
//   publishedTime?: string;
//   modifiedTime?: string;
//   articleTags?: string[];
// }

// const SEO = ({
//   title,
//   description,
//   keywords,
//   author = 'Lumina Insights',
//   image = '/og-image.jpg',
//   url,
//   type = 'website',
//   publishedTime,
//   modifiedTime,
//   articleTags,
// }: SEOProps) => {
//   const siteUrl = 'https://luminainsights.com'; // Replace with your actual domain
//   const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
//   const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

//   return (
//     <Helmet>
//       {/* Basic Meta Tags */}
//       <title>{`${title} | Lumina Insights`}</title>
//       <meta name="description" content={description} />
//       {keywords && <meta name="keywords" content={keywords} />}
//       <meta name="author" content={author} />

//       {/* Canonical URL */}
//       <link rel="canonical" href={fullUrl} />

//       {/* Open Graph / Facebook */}
//       <meta property="og:type" content={type} />
//       <meta property="og:url" content={fullUrl} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={fullImage} />
//       <meta property="og:site_name" content="Lumina Insights" />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:url" content={fullUrl} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={fullImage} />

//       {/* Article Specific Meta Tags */}
//       {type === 'article' && publishedTime && (
//         <meta property="article:published_time" content={publishedTime} />
//       )}
//       {type === 'article' && modifiedTime && (
//         <meta property="article:modified_time" content={modifiedTime} />
//       )}
//       {type === 'article' && articleTags && articleTags.map((tag, index) => (
//         <meta key={index} property="article:tag" content={tag} />
//       ))}

//       {/* JSON-LD Structured Data */}
//       <script type="application/ld+json">
//         {JSON.stringify(
//           type === 'article'
//             ? {
//                 '@context': 'https://schema.org',
//                 '@type': 'Article',
//                 headline: title,
//                 description: description,
//                 image: fullImage,
//                 author: {
//                   '@type': 'Person',
//                   name: author,
//                 },
//                 publisher: {
//                   '@type': 'Organization',
//                   name: 'Lumina Insights',
//                   logo: {
//                     '@type': 'ImageObject',
//                     url: `${siteUrl}/logo.png`,
//                   },
//                 },
//                 datePublished: publishedTime,
//                 dateModified: modifiedTime || publishedTime,
//                 mainEntityOfPage: {
//                   '@type': 'WebPage',
//                   '@id': fullUrl,
//                 },
//               }
//             : {
//                 '@context': 'https://schema.org',
//                 '@type': 'WebSite',
//                 name: 'Lumina Insights',
//                 url: siteUrl,
//                 description: description,
//               }
//         )}
//       </script>
//     </Helmet>
//   );
// };

// export default SEO;

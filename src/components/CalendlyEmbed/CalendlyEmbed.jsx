/**
 * @file CalendlyEmbed.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import Head from 'next/head';

import s from './CalendlyEmbed.module.css';

const CalendlyEmbed = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
}) => {
  return (
    <Tag
      className={`${s.calendly_embed} ${
        s[`calendly_embed__${variant}`]
      } ${className} overflow-hidden`}
    >
      {/* Calendly badge widget begin */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
      />
      <Script
        id="calendly-script-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.onload = function() { 
          Calendly.initBadgeWidget({ 
            url: 'https://calendly.com/fomolol', 
            text: 'Schedule time with me', 
            color: '#0069ff', 
            textColor: '#ffffff', 
            branding: true 
          }); 
        }`,
        }}
      />
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="sheet"
        />
      </Head>
      {/* Calendly badge widget end */}
      <style jsx global>{`
        .calendly-badge-widget {
          right: 40%;
        }
        .calendly-inline-widget iframe,
        .calendly-badge-widget iframe,
        .calendly-overlay iframe {
          min-height: 70vh;
          margin-bottom: 100px;
        }
        div#onetrust-banner-sdk {
          border-top-right-radius: 20px !important;
          border-top-left-radius: 20px !important;
        }
      `}</style>
    </Tag>
  );
};

CalendlyEmbed.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default CalendlyEmbed;

'use client'

import Script from 'next/script'

export default function GoogleTrack() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-528010636" />
      <Script id="google-track">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-528010636');
        `}
      </Script>
    </>
  )
}
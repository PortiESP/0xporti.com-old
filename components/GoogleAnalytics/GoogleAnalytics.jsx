'use client'

import Script from "next/script"

export default function GoogleAnalytics(){

    const scriptContent = "window.dataLayer = window.dataLayer || [];    function gtag(){dataLayer.push(arguments);}    gtag('js', new Date());    gtag('config', 'UA-242066778-1');"

    return (<>
         {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-242066778-1"></script>
        <Script>
            {scriptContent}
        </Script>
    </>)
}
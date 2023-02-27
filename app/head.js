export default function Head(){
    return (<>
        <title>0xPorti</title>

        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-242066778-1"></script>
        <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-242066778-1');
        `}</script>

    </>)
}
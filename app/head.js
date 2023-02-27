export default function Head(){
    return (<>
        <title>0xPorti</title>

        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5E41NS5YEB"></script>
        <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5E41NS5YEB');
        `}</script>

    </>)
}
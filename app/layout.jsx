import variables from '@/styles/variables.module.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Favicon link */}
                <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
                <title>GLOBING POPRAD s.r.o</title>
                {/* Meta description */}
                <meta name="description" content="GLOBING POPRAD s.r.o offers a wide range of services in the field of geodesy and cartography. Our years of experience and qualified team guarantee professionally executed work." />
            </head>
            <body className={variables.body} >
                {children}
            </body>
        </html>
    );
}

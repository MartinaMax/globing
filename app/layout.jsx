import variables from '@/styles/variables.module.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={variables.body} >
                {children}
            </body>
        </html>
    );
}

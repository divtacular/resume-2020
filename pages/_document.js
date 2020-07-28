import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                  </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
                            integrity="sha512-NiWqa2rceHnN3Z5j6mSAvbwwg3tiwVNxiAQaaSMSXnRRDh5C2mk/+sKQRw8qjV1vN4nf8iK2a0b048PnHbyx+Q=="
                            crossOrigin="anonymous"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument

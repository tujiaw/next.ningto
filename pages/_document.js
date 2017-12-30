import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="keywords" content="泞途 技术文章 编程 C++ Web Qt Node.js JavaScript" />
          <meta name="description" content="泞途 ningto.com" />
          <title>泞途-ningto.com</title>
          <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />
          <style>{`body { margin: 0;}`}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { createCache, StyleProvider, extractStyle } from '@ant-design/cssinjs';
import { ServerStyleSheet } from 'styled-components';
import { Fragment, ReactNode } from 'react';

class AdminDocument extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => {
          return (
            <StyleProvider cache={cache}>
              {
                sheet.collectStyles(
                  <>
                    <App {...props} />
                  </>
                )
              }
            </StyleProvider>
          )
        },
      });

      const initialProps = await Document.getInitialProps(ctx);
      const css = extractStyle(cache, true);

      return {
        ...initialProps,
        styles: (
          <Fragment key="initialStyle">
            {initialProps.styles}
            {sheet.getStyleElement() as ReactNode}
            <style
              id="antd-style"
              key="antd-style"
              dangerouslySetInnerHTML={{ __html: css }} />
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AdminDocument;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const StyleContext = require("isomorphic-style-loader/StyleContext");
import CONSTANTS from '../../client/utils/constant';
import Website from '../../client/layout/Website/Website';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

export default (req, store) => {

    const css = new Set();
    const insertCss = (...styles) =>
        styles.forEach(style => css.add(style._getCss()));

    const content = renderToString(
        <StyleContext.Provider value={{ insertCss }}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <Website />
                </StaticRouter>
            </Provider>
        </StyleContext.Provider>
    );
    const helmet = Helmet.renderStatic();
    return `
        <!DOCTYPE html>
        <html>
            <head>
                ${helmet.title.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                ${helmet.meta.toString()}

                <!-- Stylesheets -->
                <style>${[...css].join('')}</style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <!-- Script -->
                <script type="text/javascript" src="/bundle.js?${CONSTANTS.APP_VERSION
        }"></script>
            </body>
        </html>
    `;
};

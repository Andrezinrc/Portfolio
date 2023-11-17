SystemJS.config({
  baseURL: 'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './app.jsx',
      defaultExtension: 'jsx'
    }
  },
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': { loader: 'css' } // Adição para tratar arquivos CSS
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js',
    'css': 'systemjs-plugin-css' // Adição para mapear o plugin CSS
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app')
  .catch(console.error.bind(console));
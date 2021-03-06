module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'singleCanvasAnnotationDetailViewer',
      externals: {
        openseadragon: 'OpenSeadragon',
        // react: 'React',
        // 'react-dom': 'ReactDOM',
        // 'manifesto.js': 'Manifesto',
      },
    },
  },
  babel: {
    env: {
      targets: {
        browsers: ['last 2 versions', 'IE >= 9'],
      },
    },
  },
  webpack: {
    extra: {
      //      node: { Buffer: false }, // You need to comment this out if you want to build Manifesto.
    },
  },
};

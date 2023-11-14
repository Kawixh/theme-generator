const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@/fonts': path.resolve(__dirname, './src/utils/fonts/')
    }
  }
};

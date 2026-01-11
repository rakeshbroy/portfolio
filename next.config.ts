const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && {
    output: 'export',
    basePath: '/portfolio',
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

const isProd = process.env.NODE_ENV === 'production';

const repoName = 'portfolio'; // 👈 your GitHub repo name

const nextConfig = {
  output: 'export',

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

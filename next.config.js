const isProd = process.env.NODE_ENV === 'production';

const repoName = 'portfolio'; 

console.log(isProd);

const nextConfig = {
  output: 'export',

  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

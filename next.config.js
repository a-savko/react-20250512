const nextConfig = {
    distDir: './dist',
    async redirects() {
        return [{
            source: '/restaurants/:id',
            destination: '/restaurants/:id/menu',
            permanent: true,
        }];
    },
    experimental: {
        globalNotFound: true,
    }
}

export default nextConfig;

module.exports = {
    globDirectory: "_site",
    swDest: "service-worker.js",
    globPatterns: [
        "**/**",
    ],
    runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
            cacheName: 'images',
            expiration: {
                maxEntries: 10,
            },
        },
    }],
};
module.exports = {
    resolve: {
        fallback: { process: require.resolve("string_decoder/") },
    },
};
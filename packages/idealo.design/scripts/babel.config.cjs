// babel.config.cjs
module.exports = {
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"]
        }
    }
};
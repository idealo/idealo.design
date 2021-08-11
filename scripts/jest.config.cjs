// jest.config.cjs
module.exports = {
    "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(css|scss|less)$": "identity-obj-proxy"
    }
};
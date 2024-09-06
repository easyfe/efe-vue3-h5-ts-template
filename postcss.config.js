module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"]
        },
        "postcss-100vh-fix": {},
        "postcss-pxtorem": {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            rootValue: ({ file }) => {
                return file.indexOf("vant") !== -1 ? 37.5 : 75;
            },
            propList: ["*"]
        }
    }
};

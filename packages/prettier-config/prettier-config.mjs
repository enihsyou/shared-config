// Prettier Configuration File

// 如果本文件被复制到项目根目录直接使用，由于 prettier-vscode 的
// 缓存机制，对文件的修改只会在重启 vscode extension host 后生效
// https://github.com/prettier/prettier-vscode/issues/3644

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    // 在 4 空格缩进上宽度要适当增加
    printWidth: 120,
    // 适当留空更美观
    tabWidth: 4,
    // 当然不使用 Tab
    useTabs: false,
    // （Prettier默认）反正分号是自动添加的不费事
    semi: true,
    // （Prettier默认）双引号看习惯了，输入时允许少按 shift
    singleQuote: false,
    // （Prettier默认）允许尾随逗号方便修改是好文明
    trailingComma: "all",
    // （Prettier默认）行内对象前后留空格更美观
    bracketSpacing: true,
    // （Prettier默认）半人工控制该怎么样就怎么样
    objectWrap: "preserve",
    // （Prettier默认）和尾随逗号一样方便修改
    bracketSameLine: false,
    // 加类型的时候自然有括号
    arrowParens: "avoid",
    // （Prettier默认）有必要时再写出来
    quoteProps: "as-needed",
    // （Prettier默认）操作符换行后放在前面更美观
    experimentalOperatorPosition: "start",
    // （Prettier默认）不喜欢新样式，?:对齐多好看
    experimentalTernaries: false,
    // 其余的使用默认值
};

export default config;

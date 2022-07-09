export const jsonLoader = (source) => {
    const json = typeof source === "string" ? source : JSON.stringify(source);
    return `module.export = ${json}`
}
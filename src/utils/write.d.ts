declare class Write {
    private text;
    constructor(text?: string);
    to(fileName?: string): Promise<{}>;
}
declare const _default: (text: string) => Write;
export default _default;

interface DeepMergeOptions {
    clone?: boolean;
}
export declare const deepMerge: <T extends Record<string, any>>(target: T, source: unknown, options?: DeepMergeOptions) => T;
export {};

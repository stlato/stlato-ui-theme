import type { OptionalConfig } from 'tailwindcss/types/config';
export declare const typographyPlugin: {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config> | undefined;
};
export declare const theme: OptionalConfig['theme'];
export declare const createTheme: (customTheme?: OptionalConfig['theme']) => OptionalConfig['theme'];

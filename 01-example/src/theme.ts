export const ThemeOpts = ['normal', 'santa'] as const;
export type Theme = typeof ThemeOpts[number];
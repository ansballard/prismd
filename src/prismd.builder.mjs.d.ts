/**
 * Returns the result of the given `h` function
 * @param h The jsx rendering function to use (preact: h, react: React.createElement, etc)
 * @param useCallback the hook that corresponds to the jsx framework used
 * @param markdown a function to take a markdown string and return html text
 */
export function PrismdBuilder({
  h,
  useCallback,
  markdown
}: {
  h(...args: any[]): any,
  useCallback(callback: Function, deps: any[]): Function,
  markdown(md: string): string,
}): ReturnType<h>;


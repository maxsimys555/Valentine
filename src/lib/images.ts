export const getProgressiveSources = (src: string): string[] => {
  if (!src) return [];
  const dotIndex = src.lastIndexOf(".");
  if (dotIndex === -1) return [src];
  const base = src.slice(0, dotIndex);
  const ext = src.slice(dotIndex);
  return [`${base}_low${ext}`, `${base}_medium${ext}`, src];
};

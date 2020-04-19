export const useStatic = (path, ...flags) => {
  const SECURE_BASE = `https://res.cloudinary.com/morningharwood/image/upload/${['f_auto','q_auto',...flags].join(',')}/`;
  return `${SECURE_BASE}${path}`;
}

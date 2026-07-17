// Tiny class-name combiner: joins truthy values, no dependency needed.
export function cn(...values) {
  return values.filter(Boolean).join(' ');
}

export default cn;

// utils/memoizeFrequency.js
export const memoizeFrequency = (fn, maxSize = 100) => {
  const cache = new Map();

  return (key) => {
    if (cache.has(key)) {
      const value = cache.get(key);
      // move to end (LRU)
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn(key);
    cache.set(key, result);

    if (cache.size > maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  };
};

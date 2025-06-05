function memoize(fn, { strategy = "unlimited", maxSize = Infinity, ttl = null, customEvict = null } = {}) {
  const cache = new Map(); // key -> { value, timestamp, freq }
  const usageOrder = [];   // for LRU

  const getKey = (...args) => JSON.stringify(args);

  const evictIfNeeded = () => {
    if (cache.size < maxSize) return;

    let keyToEvict;

    if (strategy === "LRU") {
      keyToEvict = usageOrder.shift();
    } else if (strategy === "LFU") {
      keyToEvict = [...cache.entries()].reduce((a, b) =>
        a[1].freq <= b[1].freq ? a : b
      )[0];
    } else if (strategy === "custom" && typeof customEvict === "function") {
      keyToEvict = customEvict(cache);
    }

    if (keyToEvict !== undefined) {
      cache.delete(keyToEvict);
      const index = usageOrder.indexOf(keyToEvict);
      if (index !== -1) usageOrder.splice(index, 1);
    }
  };

  return function (...args) {
    const key = getKey(...args);
    const now = Date.now();

    if (cache.has(key)) {
      const entry = cache.get(key);

      if (ttl && now - entry.timestamp > ttl) {
        cache.delete(key);
        return fn(...args); // expired
      }

      entry.freq++;
      entry.timestamp = now;

      // LRU update
      if (strategy === "LRU") {
        const index = usageOrder.indexOf(key);
        if (index !== -1) usageOrder.splice(index, 1);
        usageOrder.push(key);
      }

      return entry.value;
    }

    evictIfNeeded();

    const result = fn(...args);

    cache.set(key, {
      value: result,
      timestamp: now,
      freq: 1,
    });

    if (strategy === "LRU") {
      usageOrder.push(key);
    }

    return result;
  };
}

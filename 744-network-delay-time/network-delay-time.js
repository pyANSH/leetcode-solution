/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }
  for (const [u, v, w] of times) {
    graph.get(u).push([v, w]);
  }

  const visited = new Set();
  const costs = {};

  const pq = [[k, 0]];
  for (let i = 1; i <= n; i++) {
    costs[i] = Infinity;
  }
  costs[k] = 0; // Starting node has cost 0!
  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);
    const [current, distance] = pq.shift();

    if (visited.has(current)) continue;
    visited.add(current);
    for (const [n, w] of graph.get(current)) {
      if (visited.has(n)) continue;
      const cost = distance + w;
      if (costs[n] > cost) {
        costs[n] = cost;
      }
      pq.push([n, costs[n]]);
    }
  }
  const allItems = Object.values(costs);
  if (allItems.some((t) => t === Infinity)) return -1;
  return Math.max(...allItems);
};
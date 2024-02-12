function indicesOfAll(searchStr: string, str: string) {
  const searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  let startIndex = 0;
  let index;
  const indices = [];
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}
export function getMatchedSubstrings(str: string, query: string) {
  const indices = indicesOfAll(query, str);
  const results = [] as Array<{ string: string; matched: boolean }>;
  let j = 0;
  for (const index of indices) {
    const unmatched = str.substring(j, index);
    const matched = str.substring(index, index + query.length);
    results.push({ string: unmatched, matched: false });
    results.push({ string: matched, matched: true });
    j = index + query.length;
  }
  const unmatched = str.substring(j);
  if (unmatched.length > 0) {
    results.push({ string: unmatched, matched: false });
  }
  console.log(results);
  return results;
}

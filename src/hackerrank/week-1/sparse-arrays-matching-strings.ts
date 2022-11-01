function sparseArraysMatchingStrings(
  strings: string[],
  queries: string[]
): number[] {
  const matchingNumberArray: number[] = [];
  queries.forEach((query) => {
    matchingNumberArray.push(
      strings.filter((eachString) => eachString == query).length
    );
  });

  return matchingNumberArray;
}

console.log(
  sparseArraysMatchingStrings(
    ['aba', 'baba', 'aba', 'xzxb'],
    ['aba', 'xzxb', 'ab']
  )
);

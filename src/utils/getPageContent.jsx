export function getPageContent(arr, keys) {
  const contentMap = keys.reduce((acc, key) => {
    const data = arr.find((content) => content.section === key);
    return {
      ...acc,
      [key]: data.content,
    };
  }, {});

  return contentMap;
}

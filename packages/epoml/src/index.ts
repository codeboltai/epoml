export const epoml = async (element: React.ReactElement | string): Promise<RichContent> => {
  ErrorCollection.clear();
  const readResult = await read(element);
  const result = write(readResult);
  if (!ErrorCollection.empty()) {
    throw ErrorCollection.first();
  }
  return result;
};

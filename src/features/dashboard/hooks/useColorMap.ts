export const useColorMap = () => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/20 text-blue-500',
    green: 'bg-green-500/20 text-green-500',
    yellow: 'bg-yellow-500/20 text-yellow-500',
    red: 'bg-red-500/20 text-red-500',
  };

  const getColor = (key: string) => colorMap[key] || colorMap.green; // default color

  return { getColor };
};
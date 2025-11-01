import { jaccardScore } from './jaccard';

export function filterAndRankByFeaturesOrPreferences({
  products,
  selectedFeatures,
  selectedPreferences,
}) {
  return products
    .map((product) => {
      const score = jaccardScore({
        product,
        selectedFeatures: selectedFeatures || [],
        selectedPreferences: selectedPreferences || [],
      });

      return {
        ...product,
        score,
      };
    })
    .filter((product) => product.score > 0)
    .sort((a, b) => a.score - b.score)
    .map((product) => {
      const { score, ...rest } = product;
      return rest;
    });
}

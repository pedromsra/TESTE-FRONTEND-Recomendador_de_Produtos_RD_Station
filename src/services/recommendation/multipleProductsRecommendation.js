export function multipleProductsRecommendation({products, selectedFeatures, selectedPreferences}) {
  const featuresSet = new Set(selectedFeatures || []);
  const preferencesSet = new Set(selectedPreferences || []);

  return products.filter((product) => {
    const hasFeature = product.features.some((feature) =>
      featuresSet.has(feature)
    );
    const hasPreference = product.preferences.some((preference) =>
      preferencesSet.has(preference)
    );
    return hasFeature || hasPreference;
  });
}

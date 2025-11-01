const jaccardCalc = (a, b) => {
  const inter = a.filter((x) => b.includes(x)).length;
  const union = new Set([...a, ...b]).size;
  return inter / union;
};

const jaccardScore = ({product, selectedFeatures, selectedPreferences}) => {
  const featuresJaccard = jaccardCalc(product.features, selectedFeatures);
  const preferencesJaccard = jaccardCalc(
    product.preferences,
    selectedPreferences
  );
  return (featuresJaccard + preferencesJaccard) / 2;
};

export { jaccardCalc, jaccardScore };

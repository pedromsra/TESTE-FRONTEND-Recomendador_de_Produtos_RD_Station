/**
 * Calcula a similaridade entre dois conjuntos usando o índice de Jaccard.
 *
 * @param {Array<string>} a - Conjunto de atributos do produto.
 * @param {Array<string>} b - Conjunto de atributos (ex: preferências do usuário).
 * @returns {number} Valor de similaridade entre 0 e 1.
 *
 * @description
 * A métrica de Jaccard é usada para medir a similaridade entre conjuntos:
 *
 *     J(A, B) = |A ∩ B| / |A ∪ B|
 *
 * - Retorna 1 se os conjuntos forem idênticos.
 * - Retorna 0 se não houver interseção.
 *
 * Utilizado aqui para ranquear produtos conforme o grau de afinidade com as seleções do usuário.
 * Referencia: https://www.sciencedirect.com/topics/computer-science/jaccard-coefficient
 */
const jaccardCalc = (a, b) => {
  const inter = a.filter((x) => b.includes(x)).length;
  const union = new Set([...a, ...b]).size;
  return inter / union;
};

/**
 * Calcula a média das similaridades entre um conjunto de referência com outros dois conjuntos desejados.
 *
 * @param {Object} params - Parâmetros usados no cáculo: produto, funcionalidades desejadas e preferências desejadas.
 * @param {Object} params.product - Produto a ser avaliada a similaridade.
 * @param {Array<string>} params.selectedFeatures - conjunto de funcionalidades desejadas.
 * @param {Array<string>} params.selectedPreferences - conjunto de preferências desejadas.
 * @returns {number} Valor médio de similaridade entre 0 e 1.
 *
 * @description
 * result = (featuresJaccardCalc + preferencesJaccardCalc) / 2;
 */
const jaccardScore = ({product, selectedFeatures, selectedPreferences}) => {
  const featuresJaccard = jaccardCalc(product.features, selectedFeatures);
  const preferencesJaccard = jaccardCalc(
    product.preferences,
    selectedPreferences
  );
  return (featuresJaccard + preferencesJaccard) / 2;
};

export { jaccardCalc, jaccardScore };

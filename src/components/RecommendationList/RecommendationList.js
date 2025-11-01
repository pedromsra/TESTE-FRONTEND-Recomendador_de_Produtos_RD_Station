import React, { useContext } from 'react';
import { RecommendationContext } from '../../store';

function RecommendationList() {
  const recommendations = useContext(RecommendationContext).state;
  console.log("LISTA", recommendations)
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;

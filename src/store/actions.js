export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';

function handleSetRecommendations(dispatch, newRecommendations) {
  dispatch({
    type: SET_RECOMMENDATIONS,
    payload: newRecommendations,
  });
}

export { handleSetRecommendations };

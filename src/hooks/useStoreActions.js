import { handleSetRecommendations } from '../store/actions';

function useStoreActions(dispatch) {
  function setRecommendations(newRecommendations) {
    handleSetRecommendations(dispatch, newRecommendations);
  }

  return { setRecommendations };
}

export { useStoreActions };

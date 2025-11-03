import { useReducer } from "react";
import { RecommendationContext } from ".";
import { recommendationReducer } from "./reducer";

export function RecommendationProvider ({children}) {
  const [recommendations, dispatch] = useReducer(recommendationReducer, []);

  return (
    <RecommendationContext.Provider value={{state: recommendations, dispatch}}>
      {children}
    </RecommendationContext.Provider>
  )
}

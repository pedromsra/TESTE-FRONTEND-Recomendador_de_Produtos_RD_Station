import { useReducer } from "react";
import { RecommendationContext } from ".";
import { recommendedReducer } from "./reducer";

export function RecommendationProvider ({children}) {
  const [recommendations, dispatch] = useReducer(recommendedReducer, []);

  return (
    <RecommendationContext.Provider value={{state: recommendations, dispatch}}>
      {children}
    </RecommendationContext.Provider>
  )
}

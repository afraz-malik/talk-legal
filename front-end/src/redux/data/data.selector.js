import { createSelector } from 'reselect'

const dataSelector = (state) => state.dataReducer
export const subsctiptionsSelector = createSelector(
  [dataSelector],
  (dataReducer) => dataReducer.subscription_plans
)

export const LoadingSelector = createSelector(
  [dataSelector],
  (dataReducer) => dataReducer.loading
)
export const errorSelector = createSelector(
  [dataSelector],
  (dataReducer) => dataReducer.error
)

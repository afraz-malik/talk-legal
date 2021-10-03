import { createSelector } from 'reselect'

const userSelector = (state) => state.userReducer
export const currentUserSelector = createSelector(
  [userSelector],
  (userReducer) => userReducer.currentUser
)

export const LoadingSelector = createSelector(
  [userSelector],
  (userReducer) => userReducer.loading
)
export const errorSelector = createSelector(
  [userSelector],
  (userReducer) => userReducer.error
)

export const tokenSelector = (state) => state.userReduce

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers/rootReducer'

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    // enhancers: [monitorReducersEnhancer]
    enhancers: []
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}
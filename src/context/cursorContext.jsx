import { createContext } from 'react';

const CursorContext = createContext();

const CursorProvider = CursorContext.Provider;

export { CursorProvider, CursorContext }
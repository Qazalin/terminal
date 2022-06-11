import { createContext } from "react";
/**
 * Context for passing events from child to the parent for creating a new line for the terminal on enter */
export const NewLineContext = createContext({ shouldCreateNewLine: false });

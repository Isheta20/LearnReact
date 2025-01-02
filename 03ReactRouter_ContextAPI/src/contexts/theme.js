import { useContext, createContext} from "react";

// Create Context
export const themeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});


// Custom Hook to Use Theme
export default function useTheme() {
  return useContext(themeContext);
}

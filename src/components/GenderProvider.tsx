import { createContext, useContext, useEffect, useState } from "react";

type Gender = "female" | "male";

type GenderProviderProps = {
  children: React.ReactNode;
  defaultGender?: Gender;
  storageKey?: string;
};

type GenderProviderState = {
  gender: Gender;
  setGender: (gender: Gender) => void;
};

const initialState: GenderProviderState = {
  gender: "female",
  setGender: () => null,
};

const GenderProviderContext = createContext<GenderProviderState>(initialState);

export function GenderProvider({
  children,
  defaultGender = "female",
  storageKey = "buendia-gender",
  ...props
}: GenderProviderProps) {
  const [gender, setGender] = useState<Gender>(
    () => (localStorage.getItem(storageKey) as Gender) || defaultGender
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-gender", gender);
  }, [gender]);

  const value = {
    gender,
    setGender: (gender: Gender) => {
      localStorage.setItem(storageKey, gender);
      setGender(gender);
    },
  };

  return (
    <GenderProviderContext.Provider {...props} value={value}>
      {children}
    </GenderProviderContext.Provider>
  );
}

export const useGender = () => {
  const context = useContext(GenderProviderContext);

  if (context === undefined)
    throw new Error("useGender must be used within a GenderProvider");

  return context;
};

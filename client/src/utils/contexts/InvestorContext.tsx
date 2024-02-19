import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface CurrentInvestor {
  investorId: string;
  name: string
}

interface InvestorContextType {
  currentInvestor: CurrentInvestor | null,
  setCurrentInvestor: Dispatch<SetStateAction<CurrentInvestor | null>>;
}

interface InvestorProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const InvestorContext = createContext<InvestorContextType>({
  currentInvestor: null,
  setCurrentInvestor: () => {}
});

export const InvestorProvider = ({ children }: InvestorProviderProps) => {
  const [currentInvestor, setCurrentInvestor] = useState<CurrentInvestor | null>(null);


  return (
    <InvestorContext.Provider value={{ currentInvestor, setCurrentInvestor }} >
      {children}
    </InvestorContext.Provider>
  )
};

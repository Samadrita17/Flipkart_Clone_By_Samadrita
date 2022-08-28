
import { createContext , useState} from "react";


export const DataContext = createContext(null); //import in LoginDialog and customButtons


const DataProvider = ({children}) =>
{
    const [account, setAccount] = useState('');

    return(
        <DataContext.Provider value = {{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider; //import in App.js in client
import React from 'react';
import { ThemeProvider, Input } from '@wigxel/react-components';
import useDarkMode from './hooks/useDarkMode';

const UsersDict = React.createContext();
const defaultValue = { 
  names: ["John", "Phillip", "Rico"],
  address: [{ street: 'Biom', no: '24'}, { street: 'Awali', no: '20' }]
};

const Theme = React.createContext();

function App() {
  const { setDark, isDark } = useDarkMode();
  const theme = !isDark ? { bgColor: 'red', textColor: "#333" } : { bgColor: '#333', textColor: "#fff" };

  return (
    <div className="App">
      <Theme.Provider value={theme}>
        <UsersDict.Provider value={defaultValue}>
          <ThemeProvider theme={{ primary: "crimson" }}>
            <button onClick={() => setDark(!isDark)}>Toggle</button>
            <h1>Jonnel</h1>
            <Input type="text" />
            <Names />
            <Address />
          </ThemeProvider>
        </UsersDict.Provider>
      </Theme.Provider>
    </div>
  );
}


function Names () {
  const { names } = React.useContext(UsersDict);  
  return <div>{names.map(e => <li>{e}</li>)}</div>
}

function Address() {
  const theme = React.useContext(Theme)
  const { address } = React.useContext(UsersDict)

  return <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>{
    address.map(e => (
      <li>{e.no}, {e.street}</li>
    ))}
    </div>
}

export default App;

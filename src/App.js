import './App.css';

import {useState, useCallback, useEffect} from 'react';
import api from './utils/api';

function App() {
  const [characters, setCharacters] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const getCharacters = useCallback(async () => {
  const {data, error} = await api.get('/character')

    if (error) {
      setErrorMsg("Ocorreu um erro ao obter os personagens")
    }

    if (data?.results) {
      setCharacters(data.results);
    }
  }, [])

  useEffect(() => {
    getCharacters();
  }, [getCharacters])

  return (
    <div className="App">
      {!!errorMsg && <div className='error-msg'>{errorMsg}</div>}
      {characters.length > 0 && characters.map((item) => {
        return (
          <div className='card'>
            {!!item?.image && <img src={item.image}/>}
            <h3> {item.name} </h3>
            </div>
        )
      }
    )}
    </div>
  );
}

export default App;

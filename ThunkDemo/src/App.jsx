import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from './Redux/action';
import { getProducts } from './Redux-toolkit'
import './App.css'


function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.data)
  console.log(data);

  useEffect(() => {
    // dispatch(getdata());
    // console.log('dispatching');
    dispatch(getProducts());
  }, [])
  return (
    <div className="App">
      {data? <pre>
        {data?.map((item, index) => {
          return <div key={index}>
            <h1>{'stfi'}</h1>

            {/* <h2>{item.price}</h2> */}
          </div>
        })}
      </pre> : (
        <h1>loading</h1>
      )}
    </div>
  )
}

export default App

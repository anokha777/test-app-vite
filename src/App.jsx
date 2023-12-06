import { useEffect } from 'react';
import './App.css';
import { getTestData } from './redux/actions/test';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <>
      <h2>Hello, mic check </h2>
    </>
  );
}

export default App;

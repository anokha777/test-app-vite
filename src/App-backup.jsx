import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { getTestData } from './redux/actions/test';

function App() {
  const dispatch = useDispatch();
  const testData = useSelector((state) => state.testRducerData.testData);

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <>
      <h2>Hello, mic check</h2>
      <h3>{testData}</h3>
    </>
  );
}

export default App;

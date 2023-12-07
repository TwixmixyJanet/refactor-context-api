import { createContext, useContext, useReducer } from 'react';
import { Provider } from 'react-redux';
import store from '../utils/store';
// import { reducer } from '../utils/reducers';

// Create our car context using createContext()
export const CarContext = createContext();

// Create a custom hook that allows easy access to our CarContext values
export const useCar = () => useContext(CarContext);

// Creating our car provider. Accepts an argument of `props`
const CarProvider =(props) => {
 
    const cars = [
      {
        id: 1233,
        make: 'Honda',
        model: 'Civic',
        isRunning: false,
      },
      {
        id: 1234,
        make: 'Tesla',
        model: 'Y',
        isRunning: false,
      },
    ]
  
  // const [state, dispatch] = useReducer(reducer, initialState);

  // The provider component will wrap all other components inside of it that need access to our global state
  // return <CarContext.Provider value={[state, dispatch]} {...props} />;
  return (
    <CarContext.Provider value={{ cars }}>
      <Provider store={store}>{props.children}</Provider>
    </CarContext.Provider>
  );

}
export default CarProvider;

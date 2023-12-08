import { createContext, useContext, useReducer } from 'react';
import { Provider } from 'react-redux';
import store from '../utils/store';

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

  return (
    <CarContext.Provider value={{ cars }}>
      <Provider store={store}>{props.children}</Provider>
    </CarContext.Provider>
  );

}
export default CarProvider;

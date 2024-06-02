import { createContext, useEffect, useReducer, useState } from 'react';
import { useLocalStorage } from '../hooks/use-local-storage';

type Field = {
  value: string | number;
  hasError: boolean;
  errorMessage: string;
}


const initialState = {
  value: '',
  hasError: false,
  errorMessage: ''
}

type FormContextData = {
  nameField: Field;
  dispatchNameField: React.Dispatch<any>;
  emailField: Field;
  dispatchEmailField: React.Dispatch<any>;
  ageField: Field;
  dispatchAgeField: React.Dispatch<any>;
  phoneNumberField: Field;
  dispatchPhoneNumberField: React.Dispatch<any>;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addOns: { title: string, description: string, price: number }[];
  setAddOns: React.Dispatch<React.SetStateAction<{ title: string; description: string; price: number; }[]>>;
  clearForm: () => void;
  streetAddressField: Field;
  dispatchStreetAddressField: React.Dispatch<any>;
  countryField: Field;
  dispatchCountryField: React.Dispatch<any>;
  cityField: Field;
  dispatchCityField: React.Dispatch<any>;
  passwordField: Field;
  dispatchPasswordField: React.Dispatch<any>;
  retryPasswordField: Field;
  dispatchRetryPasswordField: React.Dispatch<any>;
}


export const FormContext = createContext({
  nameField: initialState,
  dispatchNameField: () => {},
  ageField: initialState,
  dispatchAgeField: () => {},
  emailField: initialState,
  dispatchEmailField: () => {},
  phoneNumberField: initialState,
  dispatchPhoneNumberField: () => {},
  isYearly: false,
  setIsYearly: () => {},
  selectedPlan: null as any,
  setSelectedPlan: () => {},
  addOns: [],
  setAddOns: () => {},
  clearForm: () => {}
} as FormContextData);

export const ACTIONS = {
  SET_VALUE: 'SET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_STREET_ADDRESS: 'SET_STREET_ADDRESS',
  SET_COUNTRY: 'SET_COUNTRY',
  SET_CITY: 'SET_CITY',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_RETRY_PASSWORD: 'SET_RETRY_PASSWORD',
}

function handleFormState(
  state: Field,
  action: any
) {
  switch (action.type) {
    case ACTIONS.SET_VALUE:
    case ACTIONS.SET_STREET_ADDRESS:
    case ACTIONS.SET_COUNTRY:
    case ACTIONS.SET_CITY:
    case ACTIONS.SET_PASSWORD:
    case ACTIONS.SET_RETRY_PASSWORD:
      return {
        ...state,
        value: action.value,
        hasError: false,
        errorMessage: ''
      }
      
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage
      }
    case ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: '',
        hasError: false
      }
    default:
      return state
  }
}

export type Plan = {
  name: string;
  price: number
}

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  // Your Info
  const [nameField, dispatchNameField] = useReducer(handleFormState, initialState)
  const [emailField, dispatchEmailField] = useReducer(handleFormState, initialState)
  const [phoneNumberField, dispatchPhoneNumberField] = useReducer(handleFormState, initialState)
  const [ageField, dispatchAgeField] = useReducer(handleFormState, initialState)
  const [streetAddressField, dispatchStreetAddressField] = useReducer(handleFormState, initialState);
  const [countryField, dispatchCountryField] = useReducer(handleFormState, initialState);
  const [cityField, dispatchCityField] = useReducer(handleFormState, initialState);
  const [passwordField, dispatchPasswordField] = useReducer(handleFormState, initialState);
  const [retryPasswordField, dispatchRetryPasswordField] = useReducer(handleFormState, initialState);

  // Plan
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null as any);

  // Add Ons
  const [addOns, setAddOns] = useState<{ title: string, description: string, price: number }[]>([]);

  const { getValueFromLocalStorage, removeValueFromLocalStorage } = useLocalStorage()

  function clearForm() {
    removeValueFromLocalStorage('your-info')
    removeValueFromLocalStorage('plan')
    removeValueFromLocalStorage('add-ons')

    dispatchNameField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchEmailField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: '' })
    dispatchAgeField({ type: ACTIONS.SET_VALUE, value: '' })

    setIsYearly(false)
    setSelectedPlan(null as any)
    setAddOns([])
  }

  useEffect(() => {
    const yourInfoFromLocalStorage = getValueFromLocalStorage('your-info')
    if (yourInfoFromLocalStorage) {
      dispatchNameField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.name })
      dispatchEmailField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.email })
      dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.phoneNumber })
      dispatchAgeField({ type: ACTIONS.SET_VALUE, value: yourInfoFromLocalStorage.age })

    }

    const planFromLocalStorage = getValueFromLocalStorage('plan')
    if (planFromLocalStorage) {
      setSelectedPlan(planFromLocalStorage.name)
      setIsYearly(planFromLocalStorage.isYearly)
    }

    const addOnsFromLocalStorage = getValueFromLocalStorage('add-ons')
    if (addOnsFromLocalStorage) {
      setAddOns(addOnsFromLocalStorage)
    }
  }, [])

  const value = {
    nameField,
    dispatchNameField,
    ageField,
    dispatchAgeField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    isYearly,
    setIsYearly,
    selectedPlan,
    setSelectedPlan,
    addOns,
    setAddOns,
    clearForm,
    streetAddressField,
    dispatchStreetAddressField,
    countryField,
    dispatchCountryField,
    cityField,
    dispatchCityField,
    passwordField,
    dispatchPasswordField,
    retryPasswordField,
    dispatchRetryPasswordField,
  }

  return (
    <FormContext.Provider value={{ ...value }}>
      {children}
    </FormContext.Provider>
  );
};

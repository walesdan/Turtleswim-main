'use client';

import { Fragment } from "react";

import { useFormStep } from "../../../hooks/use-form-step";
import { useLocalStorage } from "../../../hooks/use-local-storage";
import { useForm } from "../../../hooks/use-form";
import { ACTIONS } from "../../../contexts/form";

import { TextInput } from "../../Form/TextInput";
import Form from "../../Form";
import { Footer } from "../../Footer";

export function YourInfo() {
  const {
    nameField,
    dispatchNameField,
    emailField,
    dispatchEmailField,
    phoneNumberField,
    dispatchPhoneNumberField,
    ageField,
    dispatchAgeField,
    streetAddressField,
    dispatchStreetAddressField,
    countryField,
    dispatchCountryField,
    cityField,
    dispatchCityField,
    passwordField,
    dispatchPasswordField,
    retryPasswordField,
    dispatchRetryPasswordField
  } = useForm()

  const { handleNextStep, handlePreviousStep } = useFormStep()

  const { saveValueToLocalStorage } = useLocalStorage()

  function handleAgeChange(newValue: string | number) {
    if (typeof newValue === 'number' && (newValue < 0 || newValue > 120)) {
      dispatchAgeField({ type: ACTIONS.SET_ERROR, errorMessage: 'Age must be between 0 and 120' });
    } else {
      dispatchAgeField({ type: ACTIONS.SET_VALUE, value: newValue });
    }
  }

  function validateForm() {
    let formHasError = false

    if (!nameField.value) {
      dispatchNameField({ type: ACTIONS.SET_ERROR, errorMessage: 'Name is required' })
      formHasError = true
    }

    if (!emailField.value) {
      dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is required' })
      formHasError = true
    } else {
      const emailRegex = /\S+@\S+\.\S+/
      if (!emailRegex.test(emailField.value)) {
        dispatchEmailField({ type: ACTIONS.SET_ERROR, errorMessage: 'Email is invalid' })
        formHasError = true
      }
    }

    if (!phoneNumberField.value) {
      dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is required' })
      formHasError = true
    } else {
      if (phoneNumberField.value.length < 6) {
        dispatchPhoneNumberField({ type: ACTIONS.SET_ERROR, errorMessage: 'Phone number is invalid' })
        formHasError = true
      }
    }

    if (!ageField.value) {
      dispatchAgeField({ type: ACTIONS.SET_ERROR, errorMessage: 'Age is required' })
      formHasError = true
    }

    if (!streetAddressField.value) {
      dispatchStreetAddressField({ type: ACTIONS.SET_ERROR, errorMessage: 'Street address is required' })
      formHasError = true
    }

    if (!countryField.value) {
      dispatchCountryField({ type: ACTIONS.SET_ERROR, errorMessage: 'Country is required' })
      formHasError = true
    }

    if (!cityField.value) {
      dispatchCityField({ type: ACTIONS.SET_ERROR, errorMessage: 'City is required' })
      formHasError = true
    }

    if (!passwordField.value) {
      dispatchPasswordField({ type: ACTIONS.SET_ERROR, errorMessage: 'Password is required' })
      formHasError = true
    } else if (passwordField.value !== retryPasswordField.value) {
      dispatchRetryPasswordField({ type: ACTIONS.SET_ERROR, errorMessage: 'Passwords do not match' })
      formHasError = true
    }

    return !formHasError
  }

  function handleGoForwardStep() {
    const isValid = validateForm()
    if (isValid) {
      saveValueToLocalStorage('your-info', JSON.stringify({
        name: nameField.value,
        email: emailField.value,
        phoneNumber: phoneNumberField.value,
        age: ageField.value,
        streetAddress: streetAddressField.value,
        country: countryField.value,
        city: cityField.value,
        password: passwordField.value
      }))
      handleNextStep()
    }
  }

  return (
    <Fragment>
      <Form.Card>
        <Form.Header
          title="Personal Info"
          description="Please provide your name, email address, age, phone number, address, and password."
        />

        <div className="mt-5 flex flex-col gap-4">
          <TextInput
            label="Name"
            placeholder="e.g. Stephen King"
            value={nameField.value}
            onChange={(value: string) => dispatchNameField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={nameField.errorMessage}
            clearError={() => dispatchNameField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={nameField.hasError}
          />
          <TextInput
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            value={emailField.value}
            onChange={(value: string) => dispatchEmailField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={emailField.errorMessage}
            clearError={() => dispatchEmailField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={emailField.hasError}
          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumberField.value}
            onChange={(value: string) => dispatchPhoneNumberField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={phoneNumberField.errorMessage}
            clearError={() => dispatchPhoneNumberField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={phoneNumberField.hasError}
          />
          <TextInput
            label="Age"
            placeholder="Enter your age"
            value={ageField.value}
            onChange={handleAgeChange}
            errorMessage={ageField.errorMessage}
            hasError={ageField.hasError}
            clearError={() => dispatchAgeField({ type: ACTIONS.CLEAR_ERROR })}
            inputType="number"
          />
          <TextInput
            label="Street Address"
            placeholder="e.g. Main St"
            value={streetAddressField.value}
            onChange={(value: string) => dispatchStreetAddressField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={streetAddressField.errorMessage}
            clearError={() => dispatchStreetAddressField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={streetAddressField.hasError}
          />
          <TextInput
            label="Country"
            placeholder="e.g. Ghana"
            value={countryField.value}
            onChange={(value: string) => dispatchCountryField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={countryField.errorMessage}
            clearError={() => dispatchCountryField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={countryField.hasError}
          />
          <TextInput
            label="City"
            placeholder="e.g. Accra"
            value={cityField.value}
            onChange={(value: string) => dispatchCityField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={cityField.errorMessage}
            clearError={() => dispatchCityField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={cityField.hasError}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={passwordField.value}
            onChange={(value: string) => dispatchPasswordField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={passwordField.errorMessage}
            clearError={() => dispatchPasswordField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={passwordField.hasError}
            inputType="password"
          />
          <TextInput
            label="Retry Password"
            placeholder="Re-enter your password"
            value={retryPasswordField.value}
            onChange={(value: string) => dispatchRetryPasswordField({ type: ACTIONS.SET_VALUE, value })}
            errorMessage={retryPasswordField.errorMessage}
            clearError={() => dispatchRetryPasswordField({ type: ACTIONS.CLEAR_ERROR })}
            hasError={retryPasswordField.hasError}
            inputType="password"
          />
        </div>
      </Form.Card>
      <Footer
        handleGoForwardStep={handleGoForwardStep}
        handleGoBack={handlePreviousStep}
      />
    </Fragment>
  )
}

let commonValidations = {};

commonValidations.validateName = (name) => {
  const nameRegex = /^[A-Za-z]+(?:[-\s][A-Za-z]+)*$/;
  return nameRegex.test(name);
};

commonValidations.validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

commonValidations.validatePhone = (phone) => {
  const mobileRegex = /^[6789][0-9]{9}$/; // Supports international numbers
  return mobileRegex.test(phone);
};

commonValidations.validatePan = (pan) => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // Indian PAN format
  return panRegex.test(pan);
};

commonValidations.validatePinCode = (pinCode) => {
  const pinCodeRegex = /^[1-9][0-9]{5}$/; // Validates a 6-digit Indian PIN code
  return pinCodeRegex.test(pinCode);
};
commonValidations.validateIfscCode = (ifscCode) => {
  const ifscCodeRegex = /^[A-Z]{4}0[0-9]{6}$/;
  return ifscCodeRegex.test(ifscCode);
};

export { commonValidations };

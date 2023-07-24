export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//Minimum eight characters, at least one letter, one number and one special character
export  const PASSWORDS_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
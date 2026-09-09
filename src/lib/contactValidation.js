export const CONTACT_LIMITS = Object.freeze({ name: 100, email: 254, phone: 30, message: 3000 });

const normalizeSingleLine = (value, maxLength) => typeof value === 'string'
  ? value.normalize('NFKC').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength)
  : '';

const normalizeMessage = (value) => typeof value === 'string'
  ? value.normalize('NFKC').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, CONTACT_LIMITS.message)
  : '';

export function sanitizeContactInput(input = {}) {
  return {
    name: normalizeSingleLine(input.name, CONTACT_LIMITS.name),
    email: normalizeSingleLine(input.email, CONTACT_LIMITS.email).toLowerCase(),
    phone: normalizeSingleLine(input.phone, CONTACT_LIMITS.phone),
    message: normalizeMessage(input.message),
    website: normalizeSingleLine(input.website, 200),
  };
}

export function validateContactInput(input) {
  const data = sanitizeContactInput(input);
  const errors = {};
  const namePattern = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*[\p{L}\p{M}.]$/u;
  const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
  const phonePattern = /^\+?[0-9 ()-]+$/;
  const digitCount = data.phone.replace(/\D/g, '').length;

  if (data.name.length < 2) errors.name = 'Enter your full name.';
  else if (!namePattern.test(data.name)) errors.name = 'Use letters, spaces, apostrophes, or hyphens only.';
  if (!emailPattern.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!data.phone) errors.phone = 'Enter your phone number.';
  else if (!phonePattern.test(data.phone) || digitCount < 7 || digitCount > 15) errors.phone = 'Enter a valid phone number, including the country code where possible.';
  if (data.message.length < 20) errors.message = 'Tell us a little more about your project (at least 20 characters).';
  if (data.website) errors.website = 'Unable to submit this request.';

  return { data, errors, isValid: Object.keys(errors).length === 0 };
}

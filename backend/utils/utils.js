export function validateUrl(value) {
  try {
    return new URL(value);
  } catch (error) {
    return false;
  }
}

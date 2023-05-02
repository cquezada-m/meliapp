export const handleError = (response, setError) => {
  if (response?.status === 404) {
    setError('rut', {
      message: response?.details,
    });
  }

  if (response?.errors) {
    const { errors } = response;

    Object.keys(errors).forEach((attribute) => {
      errors[attribute].forEach((message) => {
        setError(attribute, { message });
      });
    });
  }
};

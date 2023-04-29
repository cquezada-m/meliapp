export const isEmpty = (input) => {
  if (Array.isArray(input)) {
    return input.length === 0;
  } else if (typeof input === 'object' && input !== null) {
    return Object.keys(input).length === 0;
  } else if (typeof input === 'string') {
    return input.trim().length === 0;
  } else {
    return false;
  }
};

export const formatCurrency = (value) => {
  const formattedValue = Number(value).toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });

  return formattedValue;
};

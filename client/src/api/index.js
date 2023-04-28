import client from './client';

/**
 * Fetches deposit data from the API.
 *
 * @param {Object} urlParams - The URL query parameters to include in the request.
 * @returns {Promise<Object|null>} A Promise that resolves with the deposit data on success, or null on error.
 */
const fetchDeposit = async (urlParams) => {
  try {
    const response = await client.get('/deposit', { params: urlParams });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Creates a new paper rolls request.
 *
 * @param {Object} body - The request body to send with the POST request.
 * @returns {Promise<Object|null>} A Promise that resolves with the new request data on success, or null on error.
 */
const createPaperRollsRequest = async (body) => {
  try {
    const response = await client.post('/paper_rolls_request', body);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Fetches indicator data from the API.
 *
 * @param {Object} urlParams - The URL query parameters to include in the request.
 * @returns {Promise<Object|null>} A Promise that resolves with the indicator data on success, or null on error.
 */
const fetchIndicator = async (urlParams) => {
  try {
    const response = await client.get('/indicator', { params: urlParams });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchDeposit, createPaperRollsRequest, fetchIndicator };

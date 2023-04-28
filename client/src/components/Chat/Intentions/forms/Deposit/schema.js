import { object, string, date } from 'yup';

const DepositSchema = object({
  rut: string().required(),
  availableAt: date().required(),
}).required();

export default DepositSchema;

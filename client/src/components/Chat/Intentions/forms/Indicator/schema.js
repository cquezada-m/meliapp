import { object, string, date } from 'yup';

const IndicatorSchema = object({
  name: string().required(),
}).required();

export default IndicatorSchema;

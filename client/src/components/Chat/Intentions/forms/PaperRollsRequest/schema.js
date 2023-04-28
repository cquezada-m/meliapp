import { object, string, number } from 'yup';

const PaperRollsRequestSchema = object({
  rut: string().required(),
  paperRoll: object({
    address: string().required(),
    amount: number().required(),
  }),
}).required();

export default PaperRollsRequestSchema;

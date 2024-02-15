import { z } from 'zod';

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type && issue.path[0] === 'type') {
    if (issue.expected === 'object') {
      return { message: 'You need to select a type for the investment'}
    }
  }

  if (issue.code === z.ZodIssueCode.invalid_date && issue.path[0] === 'date') {
    return { message: 'Choose a valid date' }
  }

  return { message: ctx.defaultError };
}

z.setErrorMap(customErrorMap)

const schema = z.object({
  name: z.string().min(3, 'The name should be at least 3 characters'),
  value: z.coerce.number()
  .min(100, 'The minimum value for one investment should be $100')
  .max(5000000, 'The maximum value for one investment can be $5.000.000'),
  date: z.coerce
  .date().refine((date) => date > new Date(), 'The date can\'t be in the past'),
  type: z.object({ value: z.string(), label: z.string() })
});

export { schema };
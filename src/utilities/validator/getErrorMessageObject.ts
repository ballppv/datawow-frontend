import * as v from 'valibot'

const getErrorMessageObject = (schema: v.ObjectSchema<any, any>, input: any) => {
  const result = v.safeParse(schema, input)
  if (result.success === false) {
    let errorTexts: any = {}
    for (let i = 0; i < result.issues.length; i++) {
      const issue = result.issues[i]
      const message = issue.message
      const { key } = issue.path![0]
      errorTexts = {
        ...errorTexts,
        [key as string]: message,
      }
    }
    return { isValid: false, errorTexts }
  }

  return { isValid: true, errorTexts: {} }
}

export default getErrorMessageObject

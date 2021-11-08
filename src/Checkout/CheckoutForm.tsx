import React from "react"
import { FormField } from "./FormField"
import { useForm } from "react-hook-form"
import * as yup from "yup"

interface CheckoutFormProps {
  submit?: () => Promise<void>
}

const validationSchema = yup.object().shape({
    api_key: yup
        .string()
        .required(),
    webhook: yup.string().required(),
})

export const CheckoutForm = ({
  submit = async () => {},
}: CheckoutFormProps) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
    validationSchema,
  })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormField
        placeholder="abcd123450"
        type="text"
        name="api_key"
        label="API Key"
        inputRef={register}
        errors={errors.api_key}
        normalize={(value) => {
          return value.substr(0, 20)
        }}
      />
      <FormField
          placeholder="https://test-webhook.notarealaddress.com"
          type="text"
          name="webhook"
          label="Webhook URL"
          inputRef={register}
          errors={errors.url}
          normalize={(value) => {
              return value.substr(0, 200)
          }}
      />
      <button className="nes-btn is-primary">Place order</button>
    </form>
  )
}

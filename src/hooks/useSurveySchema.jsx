// hooks/useSurveySchema.ts
import { z } from "zod"
import survay from "@/constant/survay.json"

export function useSurveySchema() {
  const schema = z.object(
    Object.fromEntries(
      survay.flatMap(step =>
        step.questions.map(q => {
          const key = q.id.toString()
          const label = q.title.replace(":", "").trim()

          if (q.type === "phone") {
            return [
              key,
              z.string().regex(
                /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])\d{7}$/,
                {
                  message: "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại/Zalo đúng định dạng.",
                }
              )]
          }

          if (q.typeOfQuestion === 1) {
            return [
              key,
              z.string().min(1, {
                message: `Bạn phải chọn một đáp án`,
              }),
            ]
          }

          if (q.typeOfQuestion === 2) {
            return [
              key,
              z.array(z.string()).min(1, {
                message: `Bạn phải chọn ít nhất một đáp án cho "${label}".`,
              }),
            ]
          }

          if (q.typeOfQuestion === 3) {
            return [
              key,
              z.string().min(1, {
                message: `${label} không được để trống.`,
              }),
            ]
          }

          return [
            key,
            z.string().min(1, {
              message: `${label} là trường bắt buộc.`,
            }),
          ]
        })
      )
    )
  )

  return schema
}

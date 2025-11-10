
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "이름은 2자 이상이어야 합니다." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  title: z.string().min(5, { message: "제목은 5자 이상이어야 합니다." }),
  message: z.string().min(10, { message: "문의 내용은 10자 이상이어야 합니다." }),
});

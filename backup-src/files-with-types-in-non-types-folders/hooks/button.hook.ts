import { ButtonProps } from "../types/button.type";

export type ThisTypeShouldGetDetected = {
  buttonVariant: ButtonProps["variant"];
};

export function useButton({}: ThisTypeShouldGetDetected) {
  return {};
}

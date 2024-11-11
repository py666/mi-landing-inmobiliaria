declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface SendForm {
    (
      serviceID: string,
      templateID: string,
      templateParams: Record<string, unknown>,
      userID?: string
    ): Promise<EmailJSResponseStatus>;
  }

  export const init: (publicKey: string) => void;
  export const send: SendForm;
} 
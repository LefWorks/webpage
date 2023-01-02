import { useState } from "react";
import { Api } from "src/api";

const CONTACT_SERVICE = "contacts";

const useSendContact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const send = async (name: string, email: string, msg: string) => {
    setIsSending(true);

    await Api.post(CONTACT_SERVICE, {
      name: name,
      email: email,
      message: msg,
    });

    setIsSent(true);
    setIsSending(false);
  };

  return { send, isSent, isSending };
};

export default useSendContact;

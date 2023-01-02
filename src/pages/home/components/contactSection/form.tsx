import Form from "@components/form";
import Text from "@components/text";
import React, { useState } from "react";

type ContactFormProps = {
  isSent: boolean;
  isSending: boolean;
  onSendPress: ({
    name,
    email,
    description,
  }: {
    name: string;
    email: string;
    description: string;
  }) => void;
};

const ContactForm = ({ onSendPress, isSent, isSending }: ContactFormProps) => {
  const emptyState = {
    name: "",
    email: "",
    description: "",
  };

  const [inputData, setInputData] = useState(emptyState);

  const inputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputData(data => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const onButtonPress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSendPress(inputData);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Text variant="title">Contact us</Text>

      <Form.Container
        className="flex flex-col w-full max-w-screen-md space-y-5"
        onSubmit={onButtonPress}
      >
        <Form.Input
          title={"Name"}
          placeholder={"Nicolas Johnson"}
          onChange={inputChange}
          name="name"
        />

        <Form.Input
          title={"Email"}
          placeholder={"nicolas.johnson@lefworks.com"}
          onChange={inputChange}
          name="email"
        />

        <Form.Area
          title={"Tell us how we can help you"}
          onChange={inputChange}
          name="description"
        />

        {isSent ? (
          <Text
            variant="paragraph"
            className="self-center bg-indigo-100 text-indigo-900 px-8 py-4 rounded-xl"
          >
            Your message has been sent!
          </Text>
        ) : null}

        <Form.Submit
          text="Send message"
          className="self-center"
          disabled={isSending}
        />
      </Form.Container>
    </>
  );
};

export default ContactForm;

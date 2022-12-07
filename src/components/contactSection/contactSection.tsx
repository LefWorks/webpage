import React from "react";
import Button from "../button";
import Text from "../text";

const ContactSection = () => {
  return (
    <div id="contact" className="flex items-center justify-center w-full p-16">
      <div className="flex flex-col items-center max-w-screen-2xl w-full gap-2">
        <Text variant="title">Contact us</Text>

        <form className="flex flex-col w-full max-w-screen-md space-y-5">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 font-sans text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 font-sans text-lg border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nicolas Johnson"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-sans text-lg font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 font-sans text-lg border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nicolas.johnson@lefworks.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-sans text-lg font-medium text-gray-900 dark:text-white"
            >
              Tell us how we can help you
            </label>
            <textarea
              id="email"
              className="resize-none bg-gray-50 font-sans text-lg border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <Button
            onPress={() => console.log("Send data")}
            text="Send message"
            className="self-center"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;

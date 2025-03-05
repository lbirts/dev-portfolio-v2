"use client";

import BracketText from "@/components/BracketText";
import Socials from "@/components/Socials";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { LuCheckCheck } from "react-icons/lu";
import { SyncLoader } from "react-spinners";

export default function Footer() {
  const [formData, setFormData] = useState<{
    email: string;
    message: string;
  }>({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const sendEmail = async (token: string | null) => {
    const recaptchaContainer = recaptchaRef.current;

    try {
      if (!token && loading) {
        setLoading(false);
        setError("Please complete the reCAPTCHA.");
        return;
      }

      const templateParams = {
        from_email: formData.email,
        message: formData.message,
        "g-recaptcha-response": token,
      };

      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);

      await emailjs.send("service_uf842rd", "template_l5vw6u9", templateParams);

      setFormData({ email: "", message: "" });
      recaptchaContainer?.reset();
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending email", error);
      setError("An error occurred while sending.");
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setError("");

    if (!formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(formData.email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
  };

  return (
    <footer className="shrink-0" id="contact">
      <div className="border-l h-full w-px border-neutral-300 border-dashed absolute top-0 bottom-0" />
      <div className="pl-8 pr-8 md:pr-40 flex gap-24 items-start h-full">
        <BracketText
          position="before:bottom-2 after:top-2"
          className="[writing-mode:vertical-lr] rotate-180"
          hoverEnabled={false}
        >
          <p>CONTACT</p>
        </BracketText>
        <div className="flex flex-col gap-3 self-center">
          <div className="flex gap-1 items-center text-lg">
            <p>LAU</p>
            <div className="h-px bg-black w-16" />
            <p>REN</p>
          </div>
          <p className="font-sans text-sm max-w-xs md:max-w-md text-neutral-500">
            Have questions? Want to chat? I&apos;m just an email away! Let&apos;s connect
            and see how we can build something amazing together. Whether you
            have a project in mind or just want to talk tech, I&apos;m always up for
            a good conversation about coding, innovation, or the next big thing.
          </p>
          <Socials />

          <div className="mt-24 flex flex-col gap-1 items-end">
            <p className="text-neutral-500 text-sm font-sans -ml-2">
              Contact me!
            </p>
            <BracketText hoverEnabled={false} fontSize="text-base">
              <input
                placeholder="YOUREMAIL@EXAMPLE.COM"
                className="!outline-0 uppercase w-51"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </BracketText>
            <BracketText
              hoverEnabled={false}
              fontSize="text-6xl"
              fontWeight="before:font-thin after:font-thin"
              position="before:-left-1.5 after:-right-5"
            >
              <textarea
                placeholder="MESSAGE"
                className="text-base !outline-0 -mr-10 w-51"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </BracketText>
            {error && <p className="text-red-500 text-xs -mr-3">{error}</p>}
            <BracketText fontSize="text-base" onClick={handleSubmit}>
              {loading ? (
                <SyncLoader size={5} />
              ) : success ? (
                <LuCheckCheck />
              ) : (
                <p>SEND</p>
              )}
            </BracketText>
          </div>

          {loading && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={sendEmail}
              size="normal"
            />
          )}
        </div>
      </div>
    </footer>
  );
}

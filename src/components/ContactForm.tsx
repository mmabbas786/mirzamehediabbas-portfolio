import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import useWeb3Forms from "@web3forms/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Using your provided access key
  const apiKey = "a25d7a54-0839-4b31-9598-28a7c05903da";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Your Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
      toast({
        title: "Error",
        description: msg || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card rounded-xl p-6 space-y-6"
    >
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck" as "name" | "email" | "message")}
      />

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white/80"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:ring-1 focus:outline-none transition-smooth ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-mirzaPurple-400 focus:ring-mirzaPurple-400"
          }`}
          placeholder="John Doe"
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        />
        {errors.name && (
          <div className="mt-1 text-red-500 text-sm">{errors.name.message}</div>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white/80"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:ring-1 focus:outline-none transition-smooth ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-mirzaPurple-400 focus:ring-mirzaPurple-400"
          }`}
          placeholder="john@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <div className="mt-1 text-red-500 text-sm">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/80"
        >
          Your Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:ring-1 focus:outline-none transition-smooth resize-none ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-mirzaPurple-400 focus:ring-mirzaPurple-400"
          }`}
          placeholder="Hello, I'd like to discuss a project..."
          {...register("message", {
            required: "Please enter your message",
          })}
        />
        {errors.message && (
          <div className="mt-1 text-red-500 text-sm">
            {errors.message.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-mirzaPurple-500 to-mirzaPurple-600 text-white font-medium flex items-center justify-center hover:shadow-lg hover:from-mirzaPurple-600 hover:to-mirzaPurple-700 transition-all duration-300 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </button>

      {isSuccess && message && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {!isSuccess && message && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </form>
  );
};

export default ContactForm;

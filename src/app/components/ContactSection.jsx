import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="text-white" id="contact">
      <div className="py-8 px-4 sm:py-16 xl:px-16 mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <div className="flex items-center gap-2 text-base lg:text-lg">
          <EnvelopeIcon className="h-8 w-8" />
          <p>E-mail : jittapol.s1986@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

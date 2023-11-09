import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQs = () => {
  const FAQs = [
    {
      question: "How do I create an account with RAFT?",
      answer:
        "To create an account with RAFT, you can visit our website and click on the 'Sign Up' or 'Create Account' button. Follow the on-screen instructions to provide your personal information, such as your name, email address, and contact details.",
    },
    {
      question: "How does RAFT ensure the security of my financial data?",
      answer:
        "RAFT takes the security of your financial data seriously. We use advanced encryption techniques to protect your data in transit and at rest. Our systems are regularly monitored for any suspicious activity, and we employ multi-factor authentication to enhance account security.",
    },
    {
      question: "What types of transactions can I perform with RAFT?",
      answer:
        "With RAFT, you can perform a wide range of financial transactions, including but not limited to: transferring funds between accounts, paying bills, depositing checks through mobile capture, setting up recurring payments, and managing your investments.",
    },
    {
      question: "What benefits does RAFT offer for wealth management?",
      answer:
        "RAFT provides several benefits for wealth management, including personalized financial planning, investment advisory services, and access to a wide range of investment products. Our platform offers tools and resources to help you track and optimize your wealth, such as portfolio management, retirement planning, and goal setting.",
    },
  ];

  return (
    <div className="universal-margin mt-24 mb-16">
      <h3 className="text-6xl leading-[1.3]">Frequently asked questions</h3>
      <Accordion type="single" collapsible className="w-full mt-6">
        {FAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="py-2">
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;

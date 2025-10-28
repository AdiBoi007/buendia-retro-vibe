import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "How does Buendía work with my existing wardrobe?",
    answer: "Simply snap photos of your clothes, and our AI digitizes your entire wardrobe. Then, whenever you need an outfit, Buendía pulls from what you already own - no shopping required (unless you want to!)."
  },
  {
    question: "Is my wardrobe data private and secure?",
    answer: "Absolutely. Your wardrobe stays on your device and in your control. We use bank-level encryption, and we never sell your data. You're the only one who sees your closet."
  },
  {
    question: "Can I customize the outfit suggestions?",
    answer: "100%. You can set preferences, tell Buendía what you love (or hate), and she learns your style over time. The more you use it, the better she gets at reading your vibe."
  },
  {
    question: "Do I need fashion knowledge to use Buendía?",
    answer: "Not at all! That's the whole point. Whether you're a fashionista or someone who just wants to look good without thinking about it, Buendía meets you where you are."
  },
  {
    question: "What makes Buendía different from other style apps?",
    answer: "Most apps just show you products to buy. Buendía works with what you already own. Plus, our AI has actual personality - it's like texting with a friend who happens to have impeccable taste."
  },
  {
    question: "When will Buendía be available?",
    answer: "We're in private beta right now! Join the waitlist to be among the first to get early access. We're rolling out invites weekly."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-muted/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-background border-0 font-display text-sm px-4 py-2 shadow-lg">
            Got Questions?
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to know
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              about Buendía
            </span>
          </h2>
          <p className="text-foreground/70 font-body text-lg max-w-2xl mx-auto">
            Still curious? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border-2 border-foreground/10 rounded-2xl px-6 hover:border-primary/30 transition-all animate-fade-in shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary transition-colors hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/70 leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
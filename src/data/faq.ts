export interface FaqItem {
    id: string
    question: string
    answer: string
}

export const faqs: FaqItem[] = [
    {
        id: "faq-1",
        question: "What's your typical project timeline?",
        answer:
            "It depends on scope — a marketing site can take 1-2 weeks, while a full-stack platform with custom features usually takes 4-8 weeks. I'll give you a clear estimate after understanding your requirements.",
    },
    {
        id: "faq-2",
        question: "How do you price projects?",
        answer:
            "Most projects are quoted as a fixed price based on scope, so you know the cost upfront. For ongoing work or unclear scope, I can also work hourly or on a retainer basis.",
    },
    {
        id: "faq-3",
        question: "Do you work with clients outside Pakistan?",
        answer:
            "Yes, I work remotely with clients globally and communicate via email, WhatsApp, or video calls depending on what works best for you.",
    },
    {
        id: "faq-4",
        question: "Can you work with my existing codebase?",
        answer:
            "Yes — I can jump into existing React, Next.js, or Node.js projects to add features, fix bugs, or improve performance, not just build from scratch.",
    },
    {
        id: "faq-5",
        question: "Do you offer support after launch?",
        answer:
            "Yes, I offer post-launch support and am available for future updates, fixes, or new features as your product grows.",
    },
]
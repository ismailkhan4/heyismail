"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types/content";

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps): React.JSX.Element {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col divide-y divide-dark/10 border-t border-b border-dark/10">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium text-dark hover:text-brand-accent transition-colors duration-150">
              <span>{item.question}</span>
              <ChevronDown
                className="shrink-0 text-dark/40 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand-accent"
                size={20}
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease-out]">
            <p className="font-body text-sm text-dark/70 leading-relaxed pb-5 pr-8">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

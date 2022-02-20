import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import * as s from "styles/globalStyles";

// Add new faqs here to render into the website automatically
const faqs = [
  { id: 1, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum" },
  { id: 2, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum" },
  { id: 3, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum" },
  { id: 4, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum" },
  { id: 5, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum"},
  { id: 6, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum"},
  { id: 7, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum"},
  { id: 8, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum" },
  { id: 9, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum"},
  { id: 10, qus: "Lorem lorem lorem lorem ipsum lorem ipsum", ans: "Lorem lorem lorem lorem ipsum lorem ipsum"},

];




function FAQs(props) {
  return (
    <s.FAQContainer
      flex={1}
      style={{
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent:"center"}}>
      <s.FaqDivider></s.FaqDivider>
      </div>
      {/* Render the faqs array data */}
      {faqs.map((item) => (
        <>
          <Disclosure key={item.id}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  style={{
                    backgroundColor: "unset",
                    border: "unset",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <s.FaqHead
                    flex={1}
                    style={{ }}
                  >
                    <span>{item.qus}</span>
                    {open ? (
                      <MinusIcon style={{ width: "2.5rem", minWidth: "2.5rem", position: "relative", }} />
                    ) : (
                      <PlusIcon style={{ width: "2.5rem",  minWidth: "2.5rem", position: "relative", }} />
                    )}
                  </s.FaqHead>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <s.XsmTextPara style={{ padding: "0 2rem", marginTop: "3vh",}}>
                    {item.ans}
                  </s.XsmTextPara>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div style={{ width: "100%", display: "flex", justifyContent:"center"}}>
          <s.FaqDivider></s.FaqDivider>
          </div>
        </>
      ))}
    </s.FAQContainer>
  );
}

export default FAQs;

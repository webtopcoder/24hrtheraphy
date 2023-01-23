import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Faqs = () => {
    return (
        <div className="faq-area bg-2 ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="top-title">FAQ,s</span>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-2">
                    </div>

                    <div className="col-lg-8">
                        <div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Why choose Camline Therapy?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Our platform offers access to a variety of trained therapists from life coaches, psychotherapies and councillors. Our therapists are trained as a life coach, a councillor, a psychotherapist and are all accredited. They are caring and supportive and bound by professional confidentiality. We are available 24 hours a day 7 days a week to help you with any life questions or issues you might have.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is online therapy effective?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>There have been number of research studies that proof that online therapy and telephone therapy can be as effective as face to face therapy. Sometimes when you are in difficult time and you cannot make any appointment the best thing is the Online Therapy 24 7 that we provide.</p>
                                        <p>
                                            “Psychologists in the 21st century must address a number of issues regarding the provision of mental health care, including barriers to care, greater emphasis on providing care to the underserved, and lowering health care costs”  Benefits and Challenges of Conducting Psychotherapy by Telephone paper by Gretchen A. Brenes, Cobi W. Ingram, and Suzanne C. Danhauer, focused  on providing psychotherapy by telephone. Evidence has been reviewed and proved that telephone-delivered psychotherapy can be effective and provided practical suggestions for dealing with some of the difficulties that occur with delivering psychotherapy by telephone. A growing number of methodologically strong studies demonstrate positive outcomes for telephone-delivered psychotherapy.</p>
                                        <p> (<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3256923/'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3256923/</a>;  PMID: 22247588
                                            PMCID: PMC3256923 DOI: 10.1037/a0026135)
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is therapy right for me?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>By using Camline Online 24hr Therapy you are not committed to any long-term appointments. You can connect with any therapist you chose and speak with them in as little as 1 minutes or as long as you want! You are also free to choose a different therapist (a life coach, counsellor, psychologists, psychotherapist) if you feel someone else would be a better fit. Sometime just speaking to a professional will help you clarify the support you need, and the trained therapists can guide you to the best skilled professional that can be the right fit for you.  Our clients often find that this first experience is helpful in deciding what they need and if the psychologist they have been matched to is the right fit for them</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                How can Therapy, Counselling or life coaching help me?                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Any form of therapy/coaching, counselling can help you take time out from the situation where you feel stacked and see it from a fresh perspective. Working with a therapist/counsellors and life coaches can give you a chance to think about what you can do to change your situation for the better. It also gives you a chance to explore complex or difficult issues in a safe and confidential environment.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                What id the difference between life coaching, therapy and Counselling?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Coaching provides a distinct service that helps clients work on their goals for the future and create a new life path.  Life coach and a client work in a less structured environment as a team rather than setting up a “doctor-patient” relationship.</p>
                                        <p>
                                            Counsellor spends more time examining the past, looking for solutions to emotional concerns and seeking a diagnosis required by insurance companies. Counselling is also usually more short-term than therapy.</p>
                                        <p>
                                            Psychotherapy is more long-term than counselling and focuses on a broader range of issues. The underlying principle is that a person’s patterns of thinking and behaviour affect the way that person interacts with the world</p>
                                        <p>
                                            The main difference between a counsellor and psychotherapist is in the academic training. In theory, counsellor works shorter term with life issues, such as bereavement and relationships, while a psychotherapist works over a longer period of time with more complicated or enduring mental health issues
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is everything we talk about confidential?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Yes, everything you talk about is confidential. The only exceptions to confidentiality are if your therapist thinks that you are a risk to yourself or others in which case they may contact other professionals involved in your care such as your General Practitioner or a suggest you contact different specialist. This will always be discussed with you first.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid="g">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                How long will my session go on for?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>There is no commitment to any session with Camline Online  24hr Therapy. It is up to you and the therapist (life coach, counsellor, psychotherapist) you have chosen to agree on the course of actions. You are welcome to call back as many times as you need to. Of course, at any point it is possible to discontinue the sessions.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid="h">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is my sessions covered by my insurance?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Services offered using this platform are NOT covered by health insurance.  </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="i">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Can I get my money back?                                          </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Once tokens are purchased and used we cannot offer any refund, if you have tokens that have not been used we can refund you for them minus any PayPal fees incurred </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-2">
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faqs;
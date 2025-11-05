import React from "react";

const steps = [
    {
        id: 1,
        title: "First Drop",
        desc: "By investing <span class='text-[#9571F5]'>₦5000,</span> you are immediately eligible to receive a return of <span class='text-[#9571F5]'>₦15,000.</span> Payments for this merging phase are processed within 24 hours.",
    },
    {
        id: 2,
        title: "Recycle",
        desc: "Recycling is necessary but not mandatory, as this aids in maintaining the constant flow of funds within the cashpoint system to ensure sustainability.",
    },
    {
        id: 3,
        title: "Incentive",
        desc: "Referral is not compulsory, as we have online ads running 24/7 to aid the flow of participants. Merging is strictly based on how swift you donate and make payment.",
    },
];

const HowItWorks = () => {
    return (
        <section className="px-6 py-2 bg-white mb-12">
            {/* Heading */}
            <h2 className="text-3xl font-semibold text-center text-[#202727] mb-12">
                How It Works
            </h2>

            {/* Boxed section with the pink border */}
            <div className="border border-[#E594E0] rounded-2xl p-6 max-w-md mx-auto relative">
                <div className="flex flex-col gap-12">
                    {/* Step heading and circled number */}
                    {steps.map((step) => (
                        <div key={step.id} className="relative">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-[#292727] text-xl mb-2 leading-8">
                                    {step.title}
                                </h3>
                                <div className="border border-[#5D5A5A] text-[#292727] w-9 h-8 rounded-4xl flex items-center justify-center text-xl font-semibold">
                                    {step.id}
                                </div>
                            </div>
                                {/* Horizontal gray line spanning from text area to the circled number */}
                            <div
                                className="h-[1px] w-[275px] bg-[#A49D9D] mb-8"
                                aria-hidden="true"
                            />

                            <p className="text-[#7C7878] leading-loose text-lg"
                                dangerouslySetInnerHTML={{ __html: step.desc }}>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Us button below the bordered section */}
                <div className="mt-12 text-center">
                    <button className="bg-[#7460E3] items-center text-white w-full py-2 leading-8 rounded-lg hover:bg-indigo-700 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

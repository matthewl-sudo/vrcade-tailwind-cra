import React from 'react';

export default function ReviewSection() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
                    See what our customers are saying about VRcade
                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle
                                    cx="12"
                                    cy="7"
                                    r="4"
                                ></circle>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">
                                @Derek1337
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle
                                    cx="12"
                                    cy="7"
                                    r="4"
                                ></circle>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">
                                @gamerGur111
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle
                                    cx="12"
                                    cy="7"
                                    r="4"
                                ></circle>
                            </svg>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">
                                @XxtrolloxX
                            </h2>
                            <p className="leading-relaxed text-base">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

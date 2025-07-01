"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen font-serif">
            <header>
                <Navbar
                    title="About"
                    subtitle="A glimpse into the mind behind the lens"
                />
            </header>

            <div className="font-serif text-gray-900">
                {/* Intro Section */}
                <section className="max-w-5xl mx-auto px-6 pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
                    {/* Left: Portrait */}
                    <div className="md:col-span-2 md:aspect-[3/4] overflow-hidden">
                        <Image
                            src="/logo/PZ.png"
                            alt="Purva Joshi"
                            width={500}
                            height={700}
                            className="object-cover w-full h-auto rounded"
                        />
                    </div>

                    {/* Right: Text content */}
                    <div className="md:col-span-3 space-y-6">
                        <h2 className="uppercase tracking-widest text-xl text-gray-500 border-b pb-4">
                            BIO
                        </h2>

                        <div className="space-y-1">
                            <h3 className="text-xl uppercase pb-3 font-lightest tracking-widest text-gray-700">Purva Zinjarde</h3>
                            <p className="uppercase text-sm tracking-widest text-gray-500">
                                An Amateur Photographer &amp; Visual Storyteller based in San Francisco
                            </p>
                        </div>

                        <hr className="border-gray-200" />

                        <div className="text-base leading-relaxed space-y-4 text-gray-800">
                            <p>
                                I didn&apos;t start with five lenses or a lifelong dream, I started with a tiny camera and the thought, “this is fun!” and that feeling stuck. 
                                Over the last eight years, I&apos;ve taken photos of anything that felt beautiful to me. They may not be just grand landscapes but simple and everyday scenes most people walk past.
                            </p>
                            <p>
                                Whether I&apos;m halfway up a mountain or spotting geometry in a quiet corner of the city,
                                I&apos;m just trying to do justice to the beauty in front of me.
                                Basically anything that makes my heart do a little dance.
                                My friends call me the designated trip photographer. I call it documenting joy, one frame at a time.
                            </p>
                            <p>
                                By profession, I&apos;m a software engineer. I&apos;ve always wanted to build a space to share what I see with the world.
                                So I figured, why not bring together the two things I love the most: coding and photography.
                                I built this website as both a creative outlet and a home for the stories I&apos;ve captured along the way.
                            </p>
                            <p>
                                This site is a collection of the moments that made me pause, and made everyone else wait while I got the shot! Every photo here was shot on nothing fancy—just my good old iPhone 13.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="max-w-2xl mx-auto px-6 pt-16">
                    <div className="w-18 h-[1px] bg-gray-400 mx-auto mb-4" />
                    <h2 className="text-center text-sm uppercase tracking-widest text-gray-500 pt-6 mb-2">
                        Loved a frame? Have a thought? I&apos;d love to hear it.
                    </h2>
                    <p className="text-center text-md text-gray-700 mt-4 italic">
                        I read every message and I reply fast — unless I&apos;m out taking more pictures.
                    </p>
                    <p className="text-center text-md text-gray-700 mb-12 italic">Then, moderately fast.</p>


                    <form className="space-y-8"
                        action={process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT}
                        method="POST">

                        {/* Honeypot field for spam protection */}
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        {/* Disable CAPTCHA */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">First Name *</label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Last Name *</label>
                                <input
                                    type="text"
                                    name="LastName"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email *</label>
                            <input
                                type="email"
                                name="Email"
                                className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Subject</label>
                            <input
                                type="text"
                                name="Subject"
                                className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Message</label>
                            <textarea
                                rows={4}
                                name="Message"
                                className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center pb-8">
                            <button
                                type="submit"
                                className="bg-gray-800 text-white border border-gray-900 px-6 py-2 text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white transition"
                            >
                                Send
                            </button>
                        </div>

                    </form>
                </section>
            </div>
            <Footer />
        </div>
    )
}
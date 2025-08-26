"use client";
import Nav from "../components/web/header";
import "./home.css";
import { useState } from "react";

export default function Research() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <Nav />

      {/* Row 1: School header */}
      <header className="w-full bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center gap-4">
          <img
            src="https://previews.us-east-1.widencdn.net/preview/23281343/assets/asset-view/87e8ca5f-7543-4a6c-9fa5-baee3aa69d26/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?sig.ver=1&sig.keyId=us-east-1.20240821&sig.expires=1756278000&sig=N695UVrAW-QMnuijipdXYh8r5Xv7gh8qsJtn203NZ7Y"
            alt="School Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider text-gray-700">
              University Affiliation
            </span>
            <span className="text-lg font-semibold">
              University of Denver — Ritchie School of Engineering & Computer Science
            </span>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-200" />
      </header>

      <section className="w-full bg-neutral-950">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Creating & Evaluating a Centralized Augmented Reality MAV Path Planning Interface
          </h1>
          <p className="text-gray-300 mt-3">
            Quick links for the poster and related materials.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/joeontiveros/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1rNqAWKP_EVo87If2-DZPhmVQS92EEAuM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M21.8 7.2c-.2-.8-.8-1.4-1.6-1.6-1.4-.4-7.2-.4-7.2-.4s-5.8 0-7.2.4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 7.2.4 7.2.4s5.8 0 7.2-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3zm-12.8 7.3v-6l6 3-6 3z"/>
            </svg>
            Video Demo
          </a>

          <a
            href="https://drive.google.com/file/d/1urTLswjNEXs6IrpOA4wAzF3OijrVZvq1/view?usp=sharing"
            target
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
            >
          
              LBR Paper
            </a>

            <a
              href="https://drive.google.com/file/d/1g3NLYMSbH4enjKYSTWUS6pw1Ly_8jDBC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition"
            >
              <svg width="24" height="24" fill="currentColor" className="inline-block">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Poster Sources
            </a>

                        <a
              href="https://drive.google.com/file/d/1N2KR7H3Hd1jgkCJd9ruH-fE76nPVsqZc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow transition"
            >

              Digital Poster
            </a>
          </div>
        </div>
      </section>

      {/* Row 2: Acknowledgements */}
      <section className="w-full py-16 bg-gray-950 border-t border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Acknowledgements</h3>
          <p className="text-gray-300 mb-6">
            Thank you to Dr.Christopher Reardon & Dr.Kerstin Haring for supporting this work and advising me throughout it.

            I would also like to thank the following folks: 
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>My lab peers at ARISE Labs and Jay Sharma, Ori Miller & Ben Dossett</li>
            <li>DU Undergraduate Research program and symposium organizers</li>
            <li>P.I.N.S 2024 and RSECS support</li>
            <li>Summer Research Initiative and Equity in STEM program at DU</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <img src="https://previews.us-east-1.widencdn.net/preview/23281343/assets/asset-view/2ef26da1-c101-487e-b302-b08740cfd9b8/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?sig.ver=1&sig.keyId=us-east-1.20240821&sig.expires=1756281600&sig=hXJA4dhN_kbxkbEvgCEijiZJk-b_J8ak3KJshujdMDQ" alt="DU" className="h-10 w-auto object-contain" />
            <img src="https://www.arise-lab.com/wp-content/uploads/2020/08/cropped-ARISE-01-head-lab.jpg" alt="ARISE Lab" className="h-10 w-auto object-contain" />
          </div>
          {/* Replace the cutting paragraph block with a button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setIsInfoOpen(true)}
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white"
            >
              🇺🇸 Support more work like this!
            </button>
          </div>
        </div>
      </section>

      {/* Popup modal */}
      {isInfoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
          onClick={() => setIsInfoOpen(false)}
        >
          <div
            className="w-[90vw] max-w-xl bg-neutral-900 text-gray-100 rounded-xl p-6 border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold">Support more work like this!</h4>
              <button
                aria-label="Close"
                className="px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700"
                onClick={() => setIsInfoOpen(false)}
              >
                ✕
              </button>
            </div>
            <p className="mt-4 text-gray-300">
              Preliminary work was made possible by the Office of DEI, the E-STEM program, and funding from Rocky Mountain AMP. These initiatives are now facing funding reductions. If you would like to see more of this work and support these groups at DU, please reach out.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
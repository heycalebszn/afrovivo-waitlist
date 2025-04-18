import React, { useState } from 'react';
import { User, Mail, ArrowRight, LoaderCircle, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { Mark1, Ivana1 } from "../assets"

const Waitlist = () => {
  // Placeholder images (since we don't have access to the actual imports)
  const placeholderImg1 = Ivana1; // For Ivana1
  const placeholderImg2 = Mark1; // For Mark1
  
  const [state, handleSubmit] = useForm("xzzpwpwv");
  const [hoverSocial, setHoverSocial] = useState(null);

  // Social Card Component (internal)
  const SocialCard = ({ icon, title, username, styles }) => {
    return (
      <div 
        className={`flex p-4 rounded-lg border border-gray-800 bg-black bg-opacity-40 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 ${styles}`}
        onMouseEnter={() => setHoverSocial(title)}
        onMouseLeave={() => setHoverSocial(null)}
      >
        <span className={`w-8 ${hoverSocial === title ? 'text-green-500' : 'text-white'} transition-colors duration-300`}>
          {icon}
        </span>
        <div className="flex flex-col ml-3">
          <h1 className="text-white text-sm font-medium">{title}</h1>
          <p className="text-xs text-gray-400">{username}</p>
        </div>
      </div>
    );
  };

  // Success Component (internal)
  const SubmissionSuccess = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-6 text-center">
        <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 bg-opacity-30 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <ArrowRight className="text-black w-4 h-4" />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">You're on the list!</h2>
        <p className="text-gray-400 text-sm max-w-xs">Thank you for joining our waitlist. We'll notify you when it's your turn to showcase your global talent.</p>
        
        <button 
          onClick={() => window.location.reload()} 
          className="mt-6 flex items-center justify-center py-2 px-4 rounded-md bg-black border border-gray-800 text-gray-400 hover:text-white transition duration-300 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </button>
        
        <div className="flex gap-4 mt-10">
          <SocialCard 
            icon={<Twitter />}
            title="Twitter"
            username="@afrovivo"
            styles=""
          />
          <SocialCard 
            icon={<Linkedin />}
            title="LinkedIn"
            username="@afrovivo"
            styles=""
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <section className="flex flex-col items-center justify-center pt-32 pb-16">
          {/* Brand badge */}
          <div className="inline-block mb-8">
            <p className="text-gray-400 text-xs font-semibold bg-black py-2 px-4 rounded-md border-t border-l border-gray-800 shadow-lg">
              Afrovivo | <span className="text-green-500">Sell Global</span>
            </p>
          </div>

          {/* Hero section */}
          <div className="flex flex-col items-center justify-center text-center z-10 mb-12">
            <div className="flex items-center justify-center relative">
              <h1 className="text-white text-3xl md:text-5xl font-bold md:leading-tight leading-snug">
                Join the waitlist today <br /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-500">
                  to Showcase your Global Talent
                </span>
              </h1>
              <img 
                src={placeholderImg1}
                className="w-12 md:w-16 absolute -right-6 -top-4 hidden md:block transform rotate-6 rounded-full border-2 border-green-500"
                alt="Ivana"
              />
            </div>
            <p className="text-gray-400 max-w-lg mt-4 text-sm md:text-base">
              Get early access to our platform and connect with clients worldwide who are looking for your unique skills and talents.
            </p>
          </div>

          {/* Form or Success */}
          {state.succeeded ? (
            <SubmissionSuccess />
          ) : (
            <div className="w-full max-w-md mx-auto backdrop-blur-sm bg-black bg-opacity-30 p-6 rounded-lg border border-gray-800 shadow-xl">
              <form className="w-full" onSubmit={handleSubmit} action="https://formspree.io/f/xzzpwpwv" method="POST">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Full name" 
                      name="text" 
                      className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-70 rounded-md border border-gray-800 text-white text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200"
                      required
                    />
                    <ValidationError prefix="Text" field="text" errors={state.errors} />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      name="email" 
                      className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-70 rounded-md border border-gray-800 text-white text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition duration-200"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={state.submitting} 
                    className="w-full flex items-center justify-center py-3 px-4 rounded-md bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-sm font-medium shadow-lg transition duration-300 group"
                  >
                    {state.submitting ? (
                      <>
                        <LoaderCircle className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Join the waitlist
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Decorative image */}
          <img 
            src={placeholderImg2}
            className="absolute top-24 right-0 md:right-16 w-24 md:w-32 opacity-30 hidden md:block animate-pulse"
            alt="Mark" 
            style={{animationDuration: '4s'}}
          />
        </section>

        {/* Social links in footer */}
        {!state.succeeded && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <SocialCard 
              icon={<Twitter />}
              title="Twitter"
              username="@afrovivo"
              styles=""
            />
            <SocialCard 
              icon={<Linkedin />}
              title="LinkedIn"
              username="@afrovivo"
              styles=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;

import React from 'react';
import { Button } from '../UI/Button';
import { Play, Monitor, Building, CheckCircle2, Tag } from 'lucide-react';

export const BatchSchedule = () => {
  const modes = [
    {
      title: "Self Paced Training",
      icon: <Play size={24} className="text-accent" />,
      features: ["2 Month e-learning access", "Curated Recorded Lectures", "Dedicated Learning Portal", "Email Support (24h SLA)"],
      price: "₹24,999",
      bestFor: "Working Professionals",
      id: "self-paced-batch"
    },
    {
      title: "Online Class Preferred",
      icon: <Monitor size={24} className="text-primary" />,
      features: ["Everything in Self Paced", "2 Month Live Instructor-led", "Interactive Real-time Labs", "WhatsApp Support Access"],
      price: "₹45,999",
      recommended: true,
      bestFor: "Career switchers",
      id: "batch-schedule" 
    },
    {
      title: "Corporate Training",
      icon: <Building size={24} className="text-deep" />,
      features: ["Customized Module Design", "Flexible Batch Timing", "Enterprise Grade Licensing", "Group ROI Reporting"],
      price: "Contact Us",
      bestFor: "IT Teams & Enterprises",
      id: "corporate-batch"
    }
  ];

  return (
    <section id="batches" className="py-24 bg-lightCream">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-redBrown font-bold text-xs uppercase tracking-widest mb-4">
            <Tag size={14} /> Limited Time: 30% Flat Discount
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-deep tracking-tight">Investment Plans</h2>
          <p className="mt-5 text-deep/60 max-w-2xl mx-auto text-lg">Premium training modes designed to fit your unique professional schedule and career velocity.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {modes.map((mode, idx) => (
            <div 
              key={idx} 
              id={mode.id}
              className={`relative bg-white p-10 rounded-card transition-all duration-500 border-2 flex flex-col ${mode.recommended ? 'border-primary shadow-premium scale-[1.03] z-10' : 'border-transparent shadow-xl hover:-translate-y-2'}`}
            >
              {mode.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-redBrown text-white text-[10px] font-extrabold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                  Most Preferred Choice
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-lightCream rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    {mode.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-deep">{mode.title}</h3>
                    <span className="text-[10px] text-secondary font-extrabold uppercase tracking-widest">{mode.bestFor}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {mode.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4 text-sm text-deep/70 font-medium leading-tight">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="block w-full">
                {/* Button always opens WhatsApp, no calendar */}
                <Button 
                  variant={mode.recommended ? "primary" : "outline"} 
                  className="w-full h-[56px] text-lg"
                  onClick={() => {
                    const msg = mode.title === "Corporate Training"
                      ? "Hi I am interested in Corporate Training"
                      : "Hi I want to book a Free Demo";
                    window.open(
                      `https://wa.me/916361866299?text=${encodeURIComponent(msg)}`,
                      "_blank"
                    );
                  }}
                >
                  {mode.title === "Corporate Training" ? "Request Quote" : "Book Free Demo"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ShieldCheck, Mail, ArrowRight, X } from 'lucide-react';

interface StickyContactBarProps {
  onOpenQuoteModal: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onOpenQuoteModal }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const phoneDisplay = '817-231-2962';
  const phoneNumberDigits = '8172312962';
  const smsMessage = encodeURIComponent('Can you assist me with a security camera installation?');
  const smsHref = `sms:${phoneNumberDigits}?body=${smsMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-[#E5E5E5] text-slate-900 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2">
        {/* Left Trust Badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#007EFF]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#007EFF] uppercase tracking-wider">Fort Worth Licensed Installers</div>
            <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>24/7 Fast Local Response</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full lg:w-auto flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3.5">
          {/* SMS / Chat Button */}
          <a
            href={smsHref}
            id="sticky-text-me-btn"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 min-h-[44px] sm:min-h-[48px] rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-black transition-all shadow-lg active:scale-95 whitespace-nowrap ring-2 ring-emerald-400/30"
            title="Text Us Now at (817) 231-2962"
          >
            <MessageSquare className="w-4 h-4 fill-white shrink-0" />
            <span>Text Us Now</span>
            <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping hidden xs:inline-block"></span>
          </a>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumberDigits}`}
            id="sticky-call-now-btn"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 min-h-[44px] sm:min-h-[48px] rounded-xl bg-[#007EFF] hover:bg-[#3398FF] active:bg-[#66B2FF] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md active:scale-95 whitespace-nowrap"
            title="Call 817-231-2962"
          >
            <Phone className="w-4 h-4" />
            <span>{phoneDisplay}</span>
          </a>

          {/* Direct Quote Modal Button */}
          <button
            onClick={onOpenQuoteModal}
            id="sticky-free-quote-btn"
            className="hidden xs:inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 min-h-[44px] sm:min-h-[48px] rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-black transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            <Mail className="w-4 h-4" />
            <span>Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Close Floating Contact Bar"
            className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

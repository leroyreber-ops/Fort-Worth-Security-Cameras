import React, { useState } from 'react';
import { MessageSquare, Send, X, Phone, Edit3, ShieldCheck, Check } from 'lucide-react';

export const FloatingTextUsButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Can you assist me with a security camera installation?');
  const [copied, setCopied] = useState(false);

  const phoneNumberDigits = '18172312962';
  const phoneDisplay = '(817) 231-2962';

  const handleSendText = () => {
    const encodedMsg = encodeURIComponent(message.trim());
    const smsUrl = `sms:${phoneNumberDigits}?body=${encodedMsg}`;
    window.location.href = smsUrl;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(`Text to ${phoneDisplay}: "${message}"`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickTemplates = [
    'Can you assist me with a security camera installation?',
    'I need a free quote for home security cameras in Fort Worth.',
    'I need commercial CCTV security camera installation.',
    'Do you handle Cat6 network cabling in DFW?',
  ];

  return (
    <>
      {/* Floating Sticky "Text Us Now" Button */}
      <div className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-50 flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            id="floating-text-us-now-btn"
            aria-label="Text Us Now - 817-231-2962"
            className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-emerald-500/30 border border-emerald-400/40"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
            </span>

            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0 group-hover:rotate-12 transition-transform" />

            <div className="flex flex-col text-left">
              <span className="leading-none text-white font-black tracking-wide text-xs sm:text-sm uppercase">
                Text Us Now
              </span>
              <span className="text-[10px] sm:text-[11px] text-emerald-100 font-semibold leading-tight">
                {phoneDisplay}
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Popover Text Dialog Card */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5 fill-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-base sm:text-lg text-white">Text Us Now</h3>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Direct Line
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium flex items-center gap-1 mt-0.5">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <span>Direct Tech Call/Text: {phoneDisplay}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Text Us Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-extrabold block">Fast Local Response:</strong>
                  Your text goes directly to our local Fort Worth team at 817-231-2962. You can edit or change the message below before sending.
                </div>
              </div>

              {/* Editable Text Area */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-[#007EFF]" />
                    <span>Your Pre-filled Text Message (Editable):</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    {message.length} chars
                  </span>
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-[#007EFF] focus:bg-white text-xs sm:text-sm font-medium text-slate-900 outline-none transition shadow-inner resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              {/* Quick Template Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Quick Message Presets (Tap to select)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickTemplates.map((template, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMessage(template)}
                      className={`text-[11px] px-2.5 py-1 rounded-xl transition font-medium border text-left ${
                        message === template
                          ? 'bg-emerald-600 text-white border-emerald-600 font-extrabold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                      }`}
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={handleSendText}
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 ring-2 ring-emerald-400/30"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Send Text Message to 817-231-2962</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
                  <button
                    onClick={handleCopyText}
                    className="hover:text-slate-800 underline font-medium flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied to clipboard!</span>
                      </>
                    ) : (
                      <span>Copy message text</span>
                    )}
                  </button>

                  <a
                    href={`tel:${phoneNumberDigits}`}
                    className="text-[#007EFF] hover:underline font-bold"
                  >
                    Prefer to call? (817) 231-2962
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

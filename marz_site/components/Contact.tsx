import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    format: 'online',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:poddapsychotherapy@gmail.com?subject=Therapy Enquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nPreferred Format: ${formData.format}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Start your journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-text mb-10">Request a Consultation</h3>
            <p className="text-brand-text/70 leading-relaxed mb-12 text-lg">
              To book an initial 15-minute call or request an assessment session, please use the form or email me directly. 
              All enquiries are treated with discretion and confidentiality.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-teal flex-shrink-0 group-hover:bg-brand-mist transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-bold mb-1">Email Enquiry</p>
                  <a href="mailto:poddapsychotherapy@gmail.com" className="text-brand-text font-serif text-xl hover:text-brand-teal transition-colors">poddapsychotherapy@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-soft flex items-center justify-center text-brand-teal flex-shrink-0 group-hover:bg-brand-mist transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-bold mb-1">Clinic Locations</p>
                  <p className="text-brand-text font-serif text-xl">London N19 & Online Worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Session Length</p>
                <p className="text-brand-text text-sm italic">Typically 50 minutes.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Fees</p>
                <p className="text-brand-text text-sm italic">Fees and arrangements are discussed and agreed in advance.</p>
              </div>
            </div>

            <div className="mt-20 p-8 bg-stone-50 border border-brand-mist/30 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <svg className="w-20 h-20 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <p className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] mb-3">Crisis Support & Emergencies</p>
              <p className="text-sm text-brand-text/70 leading-relaxed mb-6">
                If you are experiencing a mental health emergency or are at risk of harm, please contact the emergency services or a crisis line immediately:
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <p className="text-xs font-bold text-brand-text uppercase mb-1">UK Emergency</p>
                  <p className="text-lg font-serif text-brand-teal">999</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-text uppercase mb-1">The Samaritans</p>
                  <p className="text-lg font-serif text-brand-teal">116 123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-soft p-10 md:p-14 rounded-[3.5rem] border border-brand-mist/50 shadow-xl relative">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-3">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-brand-mist focus:outline-none focus:ring-4 focus:ring-brand-teal/10 focus:border-brand-teal bg-white transition-all text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-3">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-brand-mist focus:outline-none focus:ring-4 focus:ring-brand-teal/10 focus:border-brand-teal bg-white transition-all text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-4">Preferred Session Format</label>
                <div className="flex flex-wrap gap-5">
                  {['Online', 'In-person', 'Undecided'].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="format" 
                        className="w-5 h-5 text-brand-teal border-brand-mist focus:ring-brand-teal"
                        checked={formData.format === opt.toLowerCase()}
                        onChange={() => setFormData({...formData, format: opt.toLowerCase()})}
                      />
                      <span className="text-sm text-brand-text group-hover:text-brand-teal transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-3">Enquiry Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border border-brand-mist focus:outline-none focus:ring-4 focus:ring-brand-teal/10 focus:border-brand-teal bg-white transition-all text-sm resize-none"
                  placeholder="Tell me a little about what brings you to therapy."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="text-[10px] text-brand-text/40 leading-relaxed italic border-l-2 border-brand-mist pl-4">
                By submitting this form, you acknowledge that your message will be sent via email. Your data will be used strictly for responding to your enquiry in accordance with professional privacy standards.
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-brand-teal text-white text-xs uppercase tracking-widest rounded-full hover:bg-brand-text transition-all shadow-xl hover:shadow-2xl active:scale-95 font-bold"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section className="py-20 bg-brand-soft min-h-screen">
      <div className="max-w-3xl mx-auto px-6 bg-white p-12 rounded-3xl shadow-sm border border-stone-100">
        <h1 className="text-4xl font-serif text-stone-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-stone prose-sm space-y-6 text-stone-600">
          <p className="italic">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            This privacy policy sets out how I, Marzia Podda, use and protect any information that you give me when you use this website.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8">1. Information I Collect</h2>
          <p>
            When you contact me through the website form or via email, I may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Contact information (email address)</li>
            <li>Information related to your therapy enquiry</li>
          </ul>

          <h2 className="text-xl font-serif text-stone-900 mt-8">2. How I Use Your Information</h2>
          <p>
            I use this information solely to respond to your initial enquiry and to assess whether I can offer the appropriate therapeutic support. I will not share your personal information with third parties unless I have your explicit permission or am required by law to do so.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8">3. Data Retention</h2>
          <p>
            (Placeholder for owner: Please specify your data retention period, e.g., "I retain enquiry emails for a period of 6 months if we do not proceed with therapy.")
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8">4. Security</h2>
          <p>
            I am committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, I have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information I collect online.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8">5. Your Rights</h2>
          <p>
            Under GDPR, you have the right to request access to, correction of, or erasure of your personal data. To exercise these rights, please contact me at poddapsychotherapy@gmail.com.
          </p>

          <div className="mt-12 pt-12 border-t border-stone-100">
             <a href="#" className="inline-block px-8 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest rounded-full hover:bg-stone-700 transition-all">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

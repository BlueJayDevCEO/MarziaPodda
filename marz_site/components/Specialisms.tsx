import React from "react";

export default function Specialisms() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">
          Areas I Work With
        </h2>
        <h3 className="text-4xl font-serif text-brand-text mb-8">
          What I Can Help With
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-brand-text mb-2">Anxiety & overwhelm</h4>
            <p className="text-brand-text/80 leading-relaxed">
              Persistent worry, stress, panic, or a sense of being stuck — especially when things look “fine” on the outside.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-brand-text mb-2">Relationships & patterns</h4>
            <p className="text-brand-text/80 leading-relaxed">
              Repeating relationship dynamics, attachment difficulties, conflict, disconnection, or problems with boundaries.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-brand-text mb-2">Low mood & self-worth</h4>
            <p className="text-brand-text/80 leading-relaxed">
              Feeling flat, unmotivated, critical of yourself, or struggling to feel hopeful or connected.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-brand-text mb-2">Life transitions</h4>
            <p className="text-brand-text/80 leading-relaxed">
              Change, loss, identity questions, relocation, new roles, or periods where old coping strategies stop working.
            </p>
          </div>
        </div>

        <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">
          Reflections
        </h2>

        <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
          <p className="text-brand-text/80 leading-relaxed">
            Psychotherapy can offer a steady space to understand what you’re carrying, notice repeating patterns,
            and develop a different relationship with your thoughts, feelings, and relationships — at a pace that feels safe.
          </p>
        </div>
      </div>
    </section>
  );
}

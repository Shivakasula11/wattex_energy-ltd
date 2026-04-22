import React from 'react';
import REVIEWS from '../../data/reviews';

const ReviewsGrid = () => (
  <div className="mt-40 space-y-20">
    <div className="text-center space-y-4">
      <span className="text-solar-primary font-black uppercase tracking-widest text-xs">Client Testimonials</span>
      <h2 className="text-5xl md:text-7xl font-black text-solar-deep tracking-tight">Voices of Trust</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {REVIEWS.map((review, i) => (
        <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col relative group hover:shadow-2xl transition-all duration-500">
          <div className="absolute top-10 right-12 text-slate-100 group-hover:text-solar-primary/10 transition-colors">
            <i className="fas fa-quote-right text-6xl"></i>
          </div>

          <div className="flex items-center gap-5 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-solar-primary rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
              {review.image ? (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-16 h-16 bg-solar-primary/10 rounded-2xl flex items-center justify-center text-solar-primary font-black text-xl relative z-10">
                  {review.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h4 className="font-black text-solar-deep text-lg">{review.name}</h4>
              <p className="text-solar-primary font-bold uppercase tracking-widest text-[10px]">{review.role}</p>
            </div>
          </div>

          <div className="flex gap-1 text-solar-primary mb-6">
            {[...Array(review.rating)].map((_, j) => (
              <i key={j} className="fas fa-star text-xs"></i>
            ))}
          </div>

          <p className="text-slate-600 text-lg font-medium italic leading-relaxed flex-grow relative z-10">
            "{review.text}"
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewsGrid;

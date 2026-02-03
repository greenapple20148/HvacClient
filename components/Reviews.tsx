
import React from 'react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    location: 'Arlington, VA',
    text: 'Falcon HVAC saved us during the hottest week of July. Their technician, Mike, was professional and explained exactly what went wrong with our compressor.',
    stars: 5,
    img: 'https://picsum.photos/seed/sarah-Falcon/100/100'
  },
  {
    name: 'Robert Miller',
    location: 'Fairfax, VA',
    text: 'We had an emergency pipe burst in the basement. They arrived in 45 minutes and had everything under control. Truly reliable plumbing service.',
    stars: 5,
    img: 'https://picsum.photos/seed/robert-Falcon/100/100'
  },
  {
    name: 'Emily Chen',
    location: 'Bethesda, MD',
    text: 'Installed a new high-efficiency heat pump. The team was clean, polite, and the energy savings have already started showing up on my bill!',
    stars: 5,
    img: 'https://picsum.photos/seed/emily-Falcon/100/100'
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">What Your Neighbors Are Saying</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
            We take pride in our reputation for honesty and excellence. Here is what some of our 10,000+ satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:border-emerald-600/30 dark:hover:border-emerald-500/30 transition-all duration-300">
              <div>
                <div className="flex text-emerald-600 dark:text-emerald-500 mb-4 transition-colors">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 italic mb-8 leading-relaxed font-medium transition-colors">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800" />
                <div>
                  <h5 className="font-black text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">{review.name}</h5>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-black hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors uppercase tracking-widest text-xs">
            Read more reviews on Google & Yelp
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

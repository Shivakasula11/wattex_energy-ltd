import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from '../components/seo/SEOHead';
import BLOGS from "../data/blogs";

const CATEGORIES = [
  "All",
  "Guide",
  "Finance",
  "Technology",
  "Case Study",
  "Residential",
  "Commercial",
  "Local",
];

const CAT_STYLES = {
  Guide: "bg-blue-100 text-blue-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Technology: "bg-violet-100 text-violet-700",
  "Case Study": "bg-pink-100 text-pink-700",
  Residential: "bg-orange-100 text-orange-700",
  Commercial: "bg-yellow-100 text-yellow-700",
  Local: "bg-teal-100 text-teal-700",
};

const CAT_DOTS = {
  Guide: "bg-blue-500",
  Finance: "bg-emerald-500",
  Technology: "bg-violet-500",
  "Case Study": "bg-pink-500",
  Residential: "bg-orange-500",
  Commercial: "bg-yellow-500",
  Local: "bg-teal-500",
};

const BlogList = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subError, setSubError] = useState("");
  const navigate = useNavigate();

  const featured = BLOGS.filter((b) => b.featured);
  const filtered = BLOGS.filter((b) => {
    const matchCat = filter === "All" || b.category === filter;
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const goTo = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="animate-fade-in bg-[#faf9f7] min-h-screen">
      <SEOHead
        title="Solar Energy Blog — Guides, Tips & News"
        description="Expert solar energy guides, PM Surya Ghar updates, cost comparisons, and installation tips from Wattex Energy Hyderabad. Stay informed about solar in India."
        path="/blogs"
        keywords="solar energy blog, solar guides India, PM Surya Ghar guide, solar installation tips, solar panel cost India, on grid vs off grid solar, Wattex blog"
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Wattex Energy Blog',
          url: 'https://wattexenergy.com/blogs',
          description: 'Expert articles on solar energy, installation guides, government subsidies, and cost comparisons.',
          publisher: { '@type': 'Organization', name: 'Wattex Energy' },
        }}
      />
      {/* ══ MASTHEAD ══ */}
      <header className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute top-10 right-16 w-44 h-44 border border-solar-deep/5 rounded-full hidden lg:block"></div>
        <div className="absolute top-28 right-28 w-20 h-20 border border-solar-deep/8 rounded-full hidden lg:block"></div>
        <div className="absolute bottom-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-solar-deep/10 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-solar-deep"></div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
              The Wattex Journal
            </span>
            <div className="w-1 h-1 bg-solar-primary rounded-full"></div>
            <span className="text-[11px] font-medium tracking-widest text-slate-300">
              Est. 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-6xl font-extrabold font-heading text-solar-deep tracking-tight leading-[0.95] mb-6">
            Insights &<br />
            <span className="text-solar-primary">Solar Intelligence</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium mb-12">
            Expert perspectives on solar technology, policy, financing, and the
            clean energy transition shaping India's future.
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { num: BLOGS.length, label: "Articles" },
              { num: CATEGORIES.length - 1, label: "Categories" },
              { num: "2026", label: "Latest Issue" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-heading text-solar-deep">
                  {s.num}
                </span>
                <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ══ FEATURED SPREAD ══ */}
      <section className="container mx-auto px-6 max-w-6xl py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-solar-primary uppercase">
            Featured Stories
          </span>
          <div className="flex-1 h-px bg-solar-deep/8"></div>
          <span className="text-[11px] font-medium tracking-widest text-slate-300">
            Editor's Picks
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-6" style={{ minHeight: 520 }}>
          {featured[0] && (
            <div
              onClick={() => goTo(featured[0].id)}
              className="lg:col-span-3 relative rounded-[2.5rem] overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={featured[0].image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={featured[0].title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/90 via-solar-deep/30 to-transparent"></div>
              {featured[0].tag && (
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full">
                  <span className="text-xs font-bold text-solar-deep">
                    {featured[0].tag}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`${CAT_STYLES[featured[0].category] || "bg-slate-100 text-slate-600"} px-3 py-1 rounded-full text-[10px] font-bold`}
                  >
                    {featured[0].category}
                  </span>
                  <span className="text-white/50 text-xs font-medium">
                    {featured[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-extrabold font-heading text-white leading-tight tracking-tight mb-3">
                  {featured[0].title}
                </h2>
                <p className="text-white/60 text-sm lg:text-base leading-relaxed max-w-lg hidden md:block font-medium">
                  {featured[0].excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-solar-primary font-bold text-sm">
                    Read Article
                  </span>
                  <span className="text-solar-primary group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="lg:col-span-2 flex flex-col gap-6">
            {featured.slice(1, 3).map((blog) => (
              <div
                key={blog.id}
                onClick={() => goTo(blog.id)}
                className="flex-1 relative rounded-[2.5rem] overflow-hidden cursor-pointer group min-h-[240px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={blog.title}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/85 via-solar-deep/20 to-transparent"></div>
                {blog.tag && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-solar-deep">
                      {blog.tag}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`${CAT_STYLES[blog.category] || "bg-slate-100 text-slate-600"} px-2.5 py-0.5 rounded-full text-[9px] font-bold`}
                    >
                      {blog.category}
                    </span>
                    <span className="text-white/40 text-[11px] font-medium">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-extrabold font-heading text-white leading-tight tracking-tight">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIVIDER ══ */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-solar-deep/10 to-transparent"></div>
      </div>

      {/* ══ FILTERS + SEARCH ══ */}
      <section className="container mx-auto px-6 max-w-6xl pt-12 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                  filter === cat
                    ? "bg-solar-deep border-solar-deep text-white"
                    : "border-transparent text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat !== "All" && (
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full ${filter === cat ? "bg-white" : CAT_DOTS[cat] || "bg-slate-400"} mr-2`}
                  ></span>
                )}
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-64 pl-10 pr-5 py-2.5 rounded-full border-2 border-slate-200 focus:border-solar-deep bg-white text-sm font-semibold text-solar-deep outline-none transition-colors"
            />
          </div>
        </div>
        <p className="mt-5 text-sm text-slate-400 font-semibold">
          Showing {filtered.length}{" "}
          {filtered.length === 1 ? "article" : "articles"}
          {filter !== "All" && (
            <>
              {" "}
              in <strong className="text-solar-deep">{filter}</strong>
            </>
          )}
        </p>
      </section>

      {/* ══ ARTICLE GRID ══ */}
      <section className="container mx-auto px-6 max-w-6xl py-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((blog) => (
            <article
              key={blog.id}
              onClick={() => goTo(blog.id)}
              className="bg-white rounded-[2rem] overflow-hidden cursor-pointer group border border-slate-100 hover:border-slate-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-[0.85] group-hover:saturate-100"
                  alt={blog.title}
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl">
                  <span className="text-[11px] font-semibold text-solar-deep">
                    {blog.date}
                  </span>
                </div>
                {blog.tag && (
                  <div className="absolute top-4 left-4 bg-solar-deep px-3 py-1 rounded-xl">
                    <span className="text-[10px] font-bold text-white">
                      {blog.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className={`${CAT_STYLES[blog.category] || "bg-slate-100 text-slate-600"} px-3 py-1 rounded-full text-[11px] font-bold`}
                  >
                    {blog.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {blog.readTime}
                  </span>
                </div>
                <h3
                  className="text-lg font-extrabold font-heading text-solar-deep group-hover:text-solar-primary leading-snug tracking-tight mb-3 transition-colors duration-300 line-clamp-2"
                  style={{ minHeight: 52 }}
                >
                  {blog.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2 font-medium">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <span className="text-sm font-bold text-solar-primary">
                    Continue Reading
                  </span>
                  <span className="text-solar-primary group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <i className="fas fa-solar-panel text-slate-200 text-6xl mb-6"></i>
            <p className="text-2xl font-extrabold font-heading text-solar-deep">
              No articles found
            </p>
            <p className="text-slate-400 mt-2 font-medium">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </section>

      {/* ══ NEWSLETTER CTA ══ */}
      <section className="bg-solar-deep py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-solar-primary/5 blur-[80px]"></div>
        <div className="container mx-auto px-6 max-w-xl text-center relative z-10">
          <span className="text-[11px] font-bold tracking-[0.25em] text-solar-primary uppercase block mb-5">
            Stay Informed
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4">
            Subscribe to the
            <br />
            <span className="text-solar-primary">Wattex Journal</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 font-medium">
            Monthly insights on solar technology, policy updates, and savings
            strategies — delivered to your inbox.
          </p>
          {subscribed ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6 max-w-md mx-auto animate-fade-in">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-check text-white text-xl"></i>
              </div>
              <h4 className="text-white font-extrabold text-lg mb-1">
                You're Subscribed!
              </h4>
              <p className="text-white/50 text-sm font-medium">
                We'll send solar insights to{" "}
                <strong className="text-emerald-400">{email}</strong> every
                month.
              </p>
            </div>
          ) : (
            <>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubError("");
                  }}
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3.5 rounded-2xl border-2 border-white/10 bg-white/5 text-white text-sm font-semibold outline-none focus:border-solar-primary transition-colors placeholder:text-white/30"
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      document.getElementById("sub-btn")?.click();
                  }}
                />
                <button
                  id="sub-btn"
                  onClick={() => {
                    const t = email.trim();
                    if (!t) {
                      setSubError("Please enter your email");
                      return;
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) {
                      setSubError("Please enter a valid email");
                      return;
                    }
                    setSubscribed(true);
                  }}
                  className="bg-solar-primary hover:bg-rose-600 text-white px-7 py-3.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-rose-500/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Subscribe
                </button>
              </div>
              {subError && (
                <p className="text-red-400 text-sm font-medium mt-3 animate-fade-in">
                  <i className="fas fa-exclamation-circle mr-1.5"></i>
                  {subError}
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
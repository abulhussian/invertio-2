"use client";
import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Section from "../components/Section";
import CaseStudyCards from "../components/CaseStudyCards";
import {
  MotionFadeIn,
  MotionSlideUp,
  MotionStagger,
} from "../components/MotionWrapper";
import caseStudies from "../data/casestudies.json";

// Dynamic import for CaseStudyCards
// const CaseStudyCards = React.lazy(() => import("../components/CaseStudyCards"));

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    searchParams.get("industry") || "All"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);

  const filters = ["All", "BFSI", "Healthcare", "Retail", "Telecom", "Automotive"];

  useEffect(() => {
    let filtered = caseStudies;

    // Filter by industry
    if (activeFilter !== "All") {
      filtered = filtered.filter((study) => study.industry === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStudies(filtered);
  }, [activeFilter, searchTerm]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      searchParams.delete("industry");
    } else {
      searchParams.set("industry", filter);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center max-w-4xl mx-auto">
          <MotionSlideUp>
            <div className="inline-flex items-center px-4 py-2 bg-[#05164d]/10 text-[#05164d] rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#05164d] rounded-full mr-2 animate-pulse" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Work Speaks
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#05164d] to-[#05164d]">
                For Itself
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover how we've helped organizations across industries transform
              their operations, drive innovation, and achieve measurable results.
            </p>
          </MotionSlideUp>
        </div>
      </Section>

      {/* Filters and Search */}
      <Section className="bg-white dark:bg-gray-900 py-12">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#05164d] focus:border-transparent"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#05164d] text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <MotionFadeIn className="mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredStudies.length} of {caseStudies.length} case studies
            {activeFilter !== "All" && ` in ${activeFilter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </MotionFadeIn>
      </Section>

      {/* Case Studies Grid */}
      <Section className="bg-gray-50 dark:bg-gray-800/50">
        <MotionSlideUp className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore how we drive results through innovative solutions.
          </p>
        </MotionSlideUp>

        <Suspense fallback={<div className="text-center py-8">Loading Case Studies...</div>}>
          <AnimatePresence mode="wait">
            <MotionStagger
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {filteredStudies.map((study, index) => (
                <CaseStudyCards key={study.id} study={study} index={index} />
              ))}
            </MotionStagger>
          </AnimatePresence>
        </Suspense>

        {/* No Results */}
        {filteredStudies.length === 0 && (
          <MotionFadeIn className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              No case studies found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchTerm("");
                searchParams.delete("industry");
                setSearchParams(searchParams);
              }}
              className="inline-flex items-center px-6 py-3 bg-[#05164d] hover:bg-[#04123d] text-white font-medium rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </MotionFadeIn>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-[#05164d] via-[#05164d] to-[#05164d] text-white">
        <div className="text-center">
          <MotionSlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help you achieve similar results and transform
              your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#05164d] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </MotionSlideUp>
        </div>
      </Section>
    </div>
  );
};

export default Work;

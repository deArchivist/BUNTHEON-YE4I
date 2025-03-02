import React, { useState } from 'react';
import { HiOutlineDownload, HiOutlineStar, HiStar, HiOutlineFilter } from 'react-icons/hi';

// Sample exam papers data
const SAMPLE_PAPERS = [
  {
    id: 1,
    title: "Grade 12 Mathematics - Final Exam 2022",
    subject: "Mathematics",
    grade: "12",
    year: 2022,
    fileSize: "2.5MB",
    fileUrl: "/assets/papers/math-12-2022.pdf",
  },
  {
    id: 2,
    title: "Grade 11 Chemistry - Midterm 2023",
    subject: "Chemistry",
    grade: "11",
    year: 2023,
    fileSize: "1.8MB",
    fileUrl: "/assets/papers/chem-11-2023.pdf",
  },
  {
    id: 3,
    title: "Grade 10 Khmer Literature - Final 2022",
    subject: "Literature",
    grade: "10",
    year: 2022,
    fileSize: "3.2MB",
    fileUrl: "/assets/papers/lit-10-2022.pdf",
  },
  {
    id: 4,
    title: "Grade 12 Physics - Practice Exam 2023",
    subject: "Physics",
    grade: "12",
    year: 2023,
    fileSize: "2.1MB",
    fileUrl: "/assets/papers/phys-12-2023.pdf",
  },
  {
    id: 5,
    title: "Grade 11 History - Final Exam 2022",
    subject: "History",
    grade: "11",
    year: 2022,
    fileSize: "4.5MB",
    fileUrl: "/assets/papers/hist-11-2022.pdf",
  }
];

const ExamPapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    subject: 'All',
    grade: 'All',
    year: 'All'
  });
  
  // Extract filter options from sample data
  const subjects = ['All', ...new Set(SAMPLE_PAPERS.map(paper => paper.subject))];
  const grades = ['All', ...new Set(SAMPLE_PAPERS.map(paper => paper.grade))];
  const years = ['All', ...new Set(SAMPLE_PAPERS.map(paper => paper.year))];
  
  // Toggle favorite status
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  // Filter papers based on search term and filters
  const filteredPapers = SAMPLE_PAPERS.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          paper.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = filters.subject === 'All' || paper.subject === filters.subject;
    const matchesGrade = filters.grade === 'All' || paper.grade === filters.grade;
    const matchesYear = filters.year === 'All' || paper.year === parseInt(filters.year);
    
    return matchesSearch && matchesSubject && matchesGrade && matchesYear;
  });

  return (
    <div className="py-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search exam papers..."
          className="flex-grow pixel-input rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="ml-2 p-2 bg-primary text-white rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <HiOutlineFilter />
        </button>
      </div>
      
      {showFilters && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Filters</h3>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Subject</label>
              <select 
                className="w-full text-sm pixel-input"
                value={filters.subject}
                onChange={(e) => setFilters({...filters, subject: e.target.value})}
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Grade</label>
              <select 
                className="w-full text-sm pixel-input"
                value={filters.grade}
                onChange={(e) => setFilters({...filters, grade: e.target.value})}
              >
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Year</label>
              <select 
                className="w-full text-sm pixel-input"
                value={filters.year}
                onChange={(e) => setFilters({...filters, year: e.target.value})}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-3 mt-4">
        {filteredPapers.length > 0 ? (
          filteredPapers.map(paper => (
            <div key={paper.id} className="pixel-card rounded-lg">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="font-semibold">{paper.title}</h3>
                  <p className="text-sm text-gray-600">
                    {paper.subject} • Grade {paper.grade} • {paper.year}
                  </p>
                </div>
                <button 
                  onClick={() => toggleFavorite(paper.id)}
                  className="text-gray-400 hover:text-yellow-500"
                >
                  {favorites.includes(paper.id) ? (
                    <HiStar className="text-yellow-500" size={20} />
                  ) : (
                    <HiOutlineStar size={20} />
                  )}
                </button>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-500">{paper.fileSize}</span>
                <button 
                  className="flex items-center text-sm text-primary hover:underline"
                  onClick={() => window.open(paper.fileUrl, '_blank')}
                >
                  <HiOutlineDownload className="mr-1" />
                  Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No exam papers found. Try a different search.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamPapersPage;

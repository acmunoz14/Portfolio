import { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github, BookOpen, Briefcase, GraduationCap, Code, User } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Dr. Angela C. Munoz
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`transition-colors ${activeSection === 'home' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${activeSection === 'about' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>About</button>
              <button onClick={() => scrollToSection('resume')} className={`transition-colors ${activeSection === 'resume' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Resume</button>
              <button onClick={() => scrollToSection('research')} className={`transition-colors ${activeSection === 'research' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Research</button>
              <button onClick={() => scrollToSection('teaching')} className={`transition-colors ${activeSection === 'teaching' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>Teaching</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">About</button>
              <button onClick={() => scrollToSection('resume')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Resume</button>
              <button onClick={() => scrollToSection('research')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Research</button>
              <button onClick={() => scrollToSection('teaching')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Teaching</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Dr. Angela C. Munoz
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Assistant Professor | AI & Health Informatics Researcher | Women in Tech Advocate
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm a tenure-track Assistant Professor at Middle Georgia State University specializing in Health Informatics, AI, Cybersecurity, and Human-Computer Interaction. With over a decade of experience in federal service and higher education, I bridge real-world challenges with future-focused solutions — from building cyber-resilient frameworks for public infrastructure to mentoring the next generation of women in tech through AWITCS.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:angela.munoz@mga.edu" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail size={28} />
              </a>
              <a href="https://www.linkedin.com/in/dr-angela-c-munoz-a7a522188" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://www.mga.edu/computing/index.php" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <User className="text-purple-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <img
                      src="/Favorite-Aragon-Headshot-Angela-Munoz-2025-10-13-58.jpeg"
                      alt="Dr. Angela C. Munoz"
                      className="w-full rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I am an inspiring and approachable Assistant Professor of Information Technology in the School of Computing at Middle Georgia State University, where I have been teaching since 2021 and serving full-time since 2024. I bring over 11 years of experience with the U.S. Department of Veterans Affairs in Health Administration (Pharmacy) and have worked with the University System of Georgia as an Access Management Analyst, contributing to the successful implementation of OneUSG Connect.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I teach a diverse range of undergraduate and graduate courses—both online and in person—covering Health Informatics, Human and Computer Interaction, Systems Analysis and Design, Legal and Ethical Issues in IT, Introduction to Information Technology, Project Management, and Advanced Electronic Health Records. Known for creating dynamic and student-centered learning environments, I have achieved consistently high teaching evaluations, strong pass rates, and successful graduate outcomes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As an active scholar, I have authored influential research published in the International Association for Computer Information Systems (IACIS) conference proceedings and the Issues in Information Systems (IIS) journal, including studies on diabetes diagnosis optimization, AI in higher education, big data analytics, and securing clinical data in cloud environments. I am a frequent conference presenter, peer reviewer, and mentor to students pursuing research opportunities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond teaching and research, I am deeply engaged in professional service. I serve as Chair of the School of Computing's Marketing & Recruitment Committee, am a member of the Student Affairs Committee, and am the founding sponsor of the Association of Women in Information Technology and Cybersecurity Students (AWITCS). Through AWITCS, I lead initiatives that provide career preparation, networking, and training opportunities, with a strong focus on empowering women in technology and cybersecurity.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Contact Information</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <Mail className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:angela.munoz@mga.edu" className="text-purple-600 hover:text-purple-800">angela.munoz@mga.edu</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>(478) 471-3621</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Office Locations</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900">Macon Campus</p>
                    <p className="text-sm">PSC Room 325</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cochran Campus</p>
                    <p className="text-sm">Roberts Room 136</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Office Hours - Spring 2026</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="mb-3">
                    <p className="font-semibold text-gray-900">Macon Campus PSC 325</p>
                  </div>
                  <div>
                    <p className="font-medium">Monday</p>
                    <p>9:00 AM - 11:00 AM</p>
                    <p>2:00 PM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Wednesday</p>
                    <p>9:00 AM - 11:00 AM</p>
                    <p>2:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="text-purple-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Resume</h2>
          </div>

          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">Education</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Doctorate of Science in Information Technology</h4>
                  <p className="text-purple-600 font-medium">Middle Georgia State University</p>
                  <p className="text-gray-600">2024</p>
                  <p className="text-gray-700 mt-2">Research Focus: Optimizing diabetes diagnosis through machine learning and predictive modeling</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Master of Science in Information Technology</h4>
                  <p className="text-purple-600 font-medium">Middle Georgia State University</p>
                  <p className="text-gray-600">2021</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Bachelor of Arts in Mass Communications</h4>
                  <p className="text-purple-600 font-medium">Georgia College & State University</p>
                  <p className="text-gray-600">2008</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Associate of Arts in General Studies</h4>
                  <p className="text-purple-600 font-medium">East Georgia College</p>
                  <p className="text-gray-600">2005</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">Experience</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Assistant Professor of Information Technology</h4>
                  <p className="text-purple-600 font-medium">Middle Georgia State University</p>
                  <p className="text-gray-600">Aug 2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                    <li>Teaching courses in Health Informatics, AI, Cybersecurity, and Human-Computer Interaction</li>
                    <li>Leading research in AI applications for public health and emergency response</li>
                    <li>Published researcher in IACIS with expertise in systematic reviews</li>
                    <li>Curriculum innovator and advocate for ethical technology</li>
                    <li>Mentoring women in tech through AWITCS (Association for Women in Technology and Computer Science)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-gray-900">Federal Service</h4>
                  <p className="text-purple-600 font-medium">Various Federal Agencies</p>
                  <p className="text-gray-600">Over a decade of experience</p>
                  <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
                    <li>Contributed to critical infrastructure protection and cybersecurity initiatives</li>
                    <li>Applied technology solutions to public sector challenges</li>
                    <li>Collaborated on projects improving government service delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Health Informatics', 'Artificial Intelligence', 'Cybersecurity', 'Human-Computer Interaction', 'Public Health AI', 'Emergency Response Systems', 'Systematic Reviews', 'Ethical Technology', 'Curriculum Development', 'Research Methods', 'Federal Service', 'Women in Tech Advocacy'].map((skill) => (
                  <div key={skill} className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg text-center font-medium hover:scale-105 transition-transform">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <BookOpen className="text-purple-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Research Projects</h2>
          </div>

          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BookOpen className="text-purple-600 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">IACIS Contributions</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">International Association for Computer Information Systems (IACIS)</span>
            </p>
            <p className="text-purple-600 font-medium mb-4">Virtual Researcher, Presenter, and Peer Reviewer | Aug 2021 - Present</p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">More than a chatbot: Human-centered AI for student engagement and academic efficiency</h3>
              <p className="text-purple-600 font-medium mb-2">Munoz, A. (2025)</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Issues in Information Systems, 26(1), 324–337
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Higher Education</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Student Engagement</span>
              </div>
              <a href="https://doi.org/10.48009/1_iis_2025_124" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Read Publication →</a>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Optimizing diabetes diagnosis: Systematic review of feature selection for predictive modeling</h3>
              <p className="text-purple-600 font-medium mb-2">Munoz, A. (2024)</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Issues in Information Systems, 25(1), 366–375
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Health Informatics</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Systematic Review</span>
              </div>
              <a href="https://doi.org/10.48009/1_iis_2024_130" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Read Publication →</a>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">IT leadership's role in implementing cloud environments for securing clinical data</h3>
              <p className="text-purple-600 font-medium mb-2">Munoz, A., Ferig, M., & Vantine, P. (2021)</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Issues in Information Systems, 22(2), 74–83
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Health Data</span>
              </div>
              <a href="https://doi.org/10.48009/2_iis_2021_74-83" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Read Publication →</a>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4 hover:bg-gray-50 transition-colors">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Big data analytics talent quality</h3>
              <p className="text-purple-600 font-medium mb-2">Koohang, A., Horn Nord, J., Sandoval, V., & Munoz, A. (2021)</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Issues in Information Systems, 22(2), 106–118
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Big Data</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Analytics</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Workforce Development</span>
              </div>
              <a href="https://doi.org/10.48009/2_iis_2021_108-121" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">Read Publication →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-gradient-to-br from-purple-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-purple-600 mr-3" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Spring 2026 Teaching Schedule</h2>
          </div>

          <p className="text-lg text-gray-700 mb-12">January 12 – May 8, 2026</p>

          {/* Undergraduate Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">Undergraduate Courses</h3>
            <div className="space-y-6">
              {/* ITEC 3155-01 */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-purple-600">ITEC 3155-01</h4>
                    <p className="text-xl font-semibold text-gray-900 mt-1">Systems Analysis and Design</p>
                  </div>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Junior/Senior
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                  <div>
                    <p className="font-medium text-gray-900">Format</p>
                    <p className="text-purple-600">Fully Online (MGA Direct)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Credits</p>
                    <p>3</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">CRN</p>
                    <p>25185</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Enrollment</p>
                    <p className="text-red-600 font-medium">29/30 seats filled (Waitlist full)</p>
                  </div>
                </div>
                <a
                  href="/25185_itec_3155-01_munoz_spring_2026.docx"
                  download
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Download Syllabus →
                </a>
              </div>

              {/* ITEC 3155-02 */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-purple-600">ITEC 3155-02</h4>
                    <p className="text-xl font-semibold text-gray-900 mt-1">Systems Analysis and Design</p>
                  </div>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Junior/Senior
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                  <div>
                    <p className="font-medium text-gray-900">Meeting Days</p>
                    <p>Monday & Wednesday</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Time</p>
                    <p>11:00 AM – 12:15 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p>PSC Room 256 (Macon Campus)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Credits / CRN</p>
                    <p>3 Credits / CRN 26555</p>
                  </div>
                </div>
                <a
                  href="/26555_itec_3155-02_munoz_spring_2026.docx"
                  download
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Download Syllabus →
                </a>
              </div>

              {/* ITEC 3235-02 */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-purple-600">ITEC 3235-02</h4>
                    <p className="text-xl font-semibold text-gray-900 mt-1">Human and Computer Interaction</p>
                  </div>
                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Junior/Senior
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                  <div>
                    <p className="font-medium text-gray-900">Format</p>
                    <p className="text-purple-600">Fully Online</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Credits</p>
                    <p>3</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">CRN</p>
                    <p>26400</p>
                  </div>
                </div>
                <a
                  href="/26400_itec_3235-02_munoz_spring_2026.docx"
                  download
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Download Syllabus →
                </a>
              </div>

              {/* ITEC 3235-03 */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-purple-600">ITEC 3235-03</h4>
                    <p className="text-xl font-semibold text-gray-900 mt-1">Human and Computer Interaction</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Hybrid
                    </span>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      Junior/Senior
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                  <div>
                    <p className="font-medium text-gray-900">Meeting Days</p>
                    <p>Monday & Wednesday</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Time</p>
                    <p>12:30 PM – 1:45 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p>PSC Room 107 (Macon Campus)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Credits / CRN</p>
                    <p>3 Credits / CRN 26556</p>
                  </div>
                </div>
                <span className="inline-flex items-center text-gray-400 font-medium">
                  Syllabus Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Graduate Course */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">Graduate Course</h3>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-purple-600">ITEC 6340-01</h4>
                  <p className="text-xl font-semibold text-gray-900 mt-1">Public Health Informatics</p>
                </div>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Graduate
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <div>
                  <p className="font-medium text-gray-900">Format</p>
                  <p className="text-purple-600">Fully Online (MGA Direct)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Credits</p>
                  <p>3</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">CRN</p>
                  <p>25440</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Dates</p>
                  <p>March 9 – May 6, 2026</p>
                </div>
              </div>
              <span className="inline-flex items-center text-gray-400 font-medium">
                Syllabus Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Dr. Angela C. Munoz</h3>
              <p className="text-gray-400">Assistant Professor specializing in AI & Health Informatics</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('resume')} className="hover:text-purple-400 transition-colors">Resume</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('research')} className="hover:text-purple-400 transition-colors">Research</button></li>
                <li><button onClick={() => scrollToSection('teaching')} className="hover:text-purple-400 transition-colors">Teaching</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dr. Angela C. Munoz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

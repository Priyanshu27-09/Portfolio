import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Cloud, Users, Zap, Target, Award, Calendar, MapPin, GraduationCap, Briefcase, Download, FileText, Image } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    languages: ['Java', 'JavaScript', 'Python', 'C', 'SQL', 'HTML/CSS'],
    frameworks: ['React', 'Redux', 'Node.js', 'Express.js', 'Bootstrap'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'Postman', 'NPM', 'VS Code', 'IntelliJ', 'Eclipse'],
    cloud: ['AWS EC2', 'IAM', 'S3', 'RDS']
  };

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a fully functional e-commerce website using the MERN stack with user authentication, product browsing, shopping cart, and secure payment gateway integration.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: ['Responsive Design', 'Payment Gateway', 'User Authentication', 'Product Management']
    },
    {
      title: 'Hotel Booking Platform',
      description: 'Built a comprehensive hotel booking platform with real-time availability, search filters, and admin panel for hotel managers.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      features: ['Real-time Booking', 'Admin Dashboard', 'Review System', 'Payment Integration']
    },
    {
      title: 'Blogging Platform',
      description: 'Created a full-stack blogging platform with user authentication, content management, and admin dashboard for moderation.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Content Management', 'User Authentication', 'Comment System', 'Admin Panel']
    }
  ];

  const certifications = [
    { 
      name: 'ReactJs Developer', 
      provider: 'HackerRank',
      image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=ReactJS+Developer+Certificate',
      link: '#'
    },
    { 
      name: 'SQL (Intermediate)', 
      provider: 'HackerRank',
      image: '',
      link: 'https://www.hackerrank.com/certificates/9699511dfe31'
    },
    { 
      name: 'Java Certification', 
      provider: 'HackerRank',
      image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Java+Certificate',
      link: '#'
    }
  ];

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to place your PDF in the public folder
    link.download = 'Priyanshu_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Priyanshu Sharma
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-2 pt-4">
                {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left py-2 text-white hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-2xl">
              PS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Priyanshu Sharma
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies. 
              Experienced in MERN stack development with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:priyanssharma2004@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <button onClick={downloadResume} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
            <a href="https://www.linkedin.com/in/priyanshu-sharma-020413251" target="_blank" rel="noopener noreferrer" className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
        
          </div>

          <div className="flex justify-center space-x-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91-9315247573</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Noida, UP</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in computer science and engineering. 
                Currently pursuing my Bachelor's degree in CSE with a CGPA of 7.6/10, I have hands-on experience 
                in building scalable web applications using modern technologies.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My expertise lies in the MERN stack, and I have successfully delivered multiple projects ranging 
                from e-commerce platforms to hotel booking systems. I'm always eager to learn new technologies 
                and tackle challenging problems.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <Users className="text-purple-400 mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-1">Team Player</h3>
                  <p className="text-gray-400 text-sm">Excellent collaboration and communication skills</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <Zap className="text-purple-400 mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-1">Fast Learner</h3>
                  <p className="text-gray-400 text-sm">Adaptable to dynamic environments</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <Target className="text-purple-400 mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-1">Problem Solver</h3>
                  <p className="text-gray-400 text-sm">Strong analytical and debugging skills</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <Code className="text-purple-400 mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-1">Code Quality</h3>
                  <p className="text-gray-400 text-sm">Clean, maintainable code practices</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-300 font-medium">Bachelor of Technology (CSE)</h4>
                    <p className="text-gray-400">IIMT College of Engineering</p>
                    <p className="text-gray-500 text-sm">2021-2025 • CGPA: 7.6/10</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium">Intermediate (CBSE)</h4>
                    <p className="text-gray-500 text-sm">2019-2021</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div>
                          <span className="text-gray-300 font-medium">{cert.name}</span>
                          <p className="text-purple-400 text-sm">{cert.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-500/30"></div>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/2  md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <Briefcase className="text-purple-400" size={20} />
                      <h3 className="text-xl font-semibold text-white">Full Stack Developer Intern</h3>
                    </div>
                    <p className="text-purple-300 font-medium mb-2">SoftApper Tech Solutions</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 ">
                      <Calendar size={16} />
                      Aug 2024 - Oct 2024
                      <MapPin size={16} />
                      <span>Noida, UP</span>
                    </div>
                    <p className="text-gray-300 ">
                     <span> Contributed to the development of the Silica Floor website as a Full Stack Developer. 
                      Implemented responsive designs, dynamic product listings, and filter options, enhancing 
                      user experience and performance. Collaborated with cross-functional teams to ensure 
                      seamless integration and optimized functionality across the website.</span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <ExternalLink className="text-purple-400 hover:text-purple-300 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-purple-300 font-medium mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-300 font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Cloud Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="relative group cursor-pointer" onClick={() => setSelectedCertificate(cert)}>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Image size={32} className="mx-auto mb-2" />
                      <p className="text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-purple-300 mb-4">{cert.provider}</p>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedCertificate(cert)}
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors"
                    >
                      <Image size={16} />
                      View Certificate
                    </button>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.name}</h3>
                <p className="text-purple-300">{selectedCertificate.provider}</p>
              </div>
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <img 
                src={selectedCertificate.image} 
                alt={`${selectedCertificate.name} Certificate`}
                className="w-full h-auto rounded-lg border border-purple-500/20"
              />
            </div>
            <div className="flex justify-center gap-4">
              <a 
                href={'https://www.hackerrank.com/certificates/d6b9be9cb564'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={16} />
                Verify Certificate
              </a>
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="border border-gray-500 text-gray-300 hover:bg-gray-700 px-6 py-2 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
         
             
             
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <Phone className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:+919315247573" className="text-gray-300 hover:text-purple-400 transition-colors">
                +91-9315247573
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <Linkedin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/priyanshu-sharma-020413251" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                Connect with me
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <Github className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/Priyanshu27-09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                View Projects
              </a>
            </div>
          
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Ready to start a project?</h3>
            <p className="text-gray-300 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="mailto:priyanssharma2004@gmail.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Start a Conversation
              </a>
              <button 
                onClick={downloadResume}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:priyanssharma2004@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-sharma-020413251" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Priyanshu27-09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <button onClick={downloadResume} className="text-gray-400 hover:text-purple-400 transition-colors" title="Download Resume">
              <FileText size={24} />
            </button>
          </div>
          <p className="text-gray-400">
            © 2025 Priyanshu Sharma. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
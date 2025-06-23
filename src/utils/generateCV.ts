import jsPDF from 'jspdf';

export const generateAndDownloadCV = () => {
  const doc = new jsPDF();
  
  // Set font
  doc.setFont('helvetica');
  
  // Header Section
  doc.setFontSize(24);
  doc.setTextColor(44, 62, 80);
  doc.text('NAVEED ALAM', 20, 25);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Software Engineer & Full-Stack Developer', 20, 32);
  
  // Contact Information
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Email: contact@naveedalam.dev', 20, 40);
  doc.text('Phone: +92 306 2255 235', 20, 45);
  doc.text('Location: Islamabad, Pakistan', 20, 50);
  doc.text('Portfolio: www.naveedalam.dev', 20, 55);
  
  // Line separator
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 62, 190, 62);
  
  // Profile Section
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('PROFILE', 20, 72);
  
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  const profileText = 'A versatile Software Engineer and IT professional with proven experience in full-stack web development, Android application design, and robust IT infrastructure management. Adept at troubleshooting complex systems, implementing advanced cybersecurity measures, and leading IT projects, alongside a strong portfolio in creating dynamic web solutions and optimizing digital presence.';
  const splitProfile = doc.splitTextToSize(profileText, 170);
  doc.text(splitProfile, 20, 80);
  
  // Education Section
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('EDUCATION', 20, 105);
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('BS Software Engineering', 20, 113);
  doc.setFontSize(9);
  doc.text('The University of Lahore, Islamabad Campus | 2016 - 2021', 20, 118);
  
  doc.setFontSize(10);
  doc.text('Faculty of Science (FSC in General Science)', 20, 126);
  doc.setFontSize(9);
  doc.text('BISE Malakand (KPK) | 2014 - 2016', 20, 131);
  
  // Professional Experience Section
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('PROFESSIONAL EXPERIENCE', 20, 145);
  
  // IT Support Officer
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('IT Support Officer | PUBGSTUFF (Virtual Company)', 20, 153);
  doc.setFontSize(9);
  doc.text('April 2023 - Present', 20, 158);
  
  const itSupportText = '• Provided comprehensive system troubleshooting and software maintenance\n• Administered and maintained various computer systems and software\n• Assisted users with technical issues, improving workflow and reducing downtime';
  const splitITSupport = doc.splitTextToSize(itSupportText, 170);
  doc.text(splitITSupport, 20, 163);
  
  // IT Officer
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('IT Officer | Bajaur Medical Complex', 20, 180);
  doc.setFontSize(9);
  doc.text('January 2022 - March 2023', 20, 185);
  
  const itOfficerText = '• Managed and maintained critical IT infrastructure for medical complex\n• Implemented advanced cybersecurity measures for patient data protection\n• Led IT projects including EHR systems integration\n• Monitored network performance and resolved connectivity issues';
  const splitITOfficer = doc.splitTextToSize(itOfficerText, 170);
  doc.text(splitITOfficer, 20, 190);
  
  // Technical Skills Section
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('TECHNICAL SKILLS', 20, 215);
  
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Programming Languages: Python, JavaScript, TypeScript, Java', 20, 223);
  doc.text('Web Technologies: HTML, CSS, Node.js, React, Angular, WordPress, WooCommerce', 20, 228);
  doc.text('Digital Marketing: SEO, SMM, SMO', 20, 233);
  doc.text('Database Management: SQL Server, Database Backup and Recovery', 20, 238);
  doc.text('Cloud & Virtualization: Azure, VMware, Hyper-V', 20, 243);
  
  // Certifications Section
  doc.setFontSize(12);
  doc.setTextColor(44, 62, 80);
  doc.text('CERTIFICATIONS', 20, 255);
  
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('• Introduction to IoT  • Machine Learning  • Data Science with Python', 20, 263);
  doc.text('• Advanced Social Media Certification  • Introduction to Cyber Security', 20, 268);
  doc.text('• Introduction to Cloud Computing  • Advanced SEO Certification', 20, 273);
  
  // Footer with social links
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text('LinkedIn: linkedin.com/in/naveedalam-dev  |  GitHub: github.com/naveedalam-dev', 20, 285);
  doc.text('Instagram: instagram.com/naveedalam.dev  |  Twitter: x.com/naveedalam_dev', 20, 290);
  
  // Save the PDF
  doc.save('Naveed_Alam_CV.pdf');
};
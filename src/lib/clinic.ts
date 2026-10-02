export const clinic = {
  name: 'Shivaay Dental Care & Orthodontic Center',
  shortName: 'Shivaay Dental Care',
  tagline: 'Confident smiles begin here.',
  area: 'Bareilly, Uttar Pradesh',
  phone: '+91 70061 62599',
  phoneHref: 'tel:+917006162599',
  whatsapp: '917006162599',
  instagram: 'https://www.instagram.com/shivaaydentalcare/',
  instagramHandle: '@shivaaydentalcare',
  address: 'Behind B.D.A. Office, Priyadarshini Nagar, Krishna Vanti Colony, Bareilly - 243122, Uttar Pradesh',
  directionsUrl: 'https://maps.app.goo.gl/eKX52QHJ38exWJbp6',
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday — Sunday', time: '11:00 AM — 7:00 PM' },
  ],
  logo: '/shivaay-logo-transparent.png',
  logoOnDark: '/shivaay-logo-dark-header.png',
  images: {
    hero: 'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1600',
    feature: '/dentist%20photos/Modern%20Dental%20Treatment%20in%20a%20Bright%20Clinic.png',
    team: '/dentist%20photos/Smiling%20Dental%20Team%20in%20Clinic%20Office.png',
    doctors: [
      { src: '/dentist%20photos/Dr.Dhruv%20K%20Tiwari.png', alt: 'Dr. Dhruv K. Tiwari, orthodontist at Shivaay Dental Care' },
      { src: '/dentist%20photos/Dr.%20Nipun%20Sharma.png', alt: 'Dr. Nipun Sharma, endodontist at Shivaay Dental Care' },
    ],
  },
  doctors: [
    {
      name: 'Dr. Dhruv K. Tiwari',
      qualifications: 'B.D.S, M.D.S (Orthodontics and Dentofacial Orthopaedics)',
      specialty: 'Orthodontist',
      description: 'Dr. Dhruv combines personalized orthodontic care with modern treatments to create healthy, confident smiles. From braces and clear aligners to bite correction, your smile journey starts with a conversation.',
    },
    {
      name: 'Dr. Nipun Sharma',
      qualifications: 'B.D.S, M.D.S (Conservative Dentistry & Endodontics)',
      specialty: 'Root Canal Specialist',
      description: 'Dr. Nipun provides gentle, precise care focused on saving natural teeth and restoring dental health. From tooth pain to complex cases, every treatment is planned for your comfort and lasting results.',
    },
  ],
  gallery: [
    { src: 'https://images.pexels.com/photos/6812429/pexels-photo-6812429.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dentist talking with a patient', label: 'A calm start to every visit' },
    { src: 'https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dentist caring for a patient', label: 'Care with precision' },
    { src: 'https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Modern dental treatment room', label: 'A considered environment' },
    { src: 'https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dental checkup in progress', label: 'Attention to detail' },
  ],
  treatments: [
    { number: '01', title: 'Implants', services: ['Single Tooth Implants', 'Multiple Dental Implants', 'Implant-Supported Dentures', 'Full Mouth Rehabilitation'] },
    { number: '02', title: 'Smile Designing', services: ['Digital Smile Design', 'Composite & Ceramic Veneers', 'Teeth Whitening', 'Tooth Contouring', 'Diastema / Gap Closure', 'Aesthetic Crowns'] },
    { number: '03', title: 'Root Canal Treatment', services: ['Root Canal Treatment (RCT)', 'Single Visit RCT', 'Re-Root Canal Treatment (Re-RCT)', 'Complex Root Canal Management', 'Dental Trauma'] },
    { number: '04', title: 'Orthodontics', services: ['Metal Braces', 'Ceramic Braces', 'Damon Self-Ligating Braces', 'Clear Aligners (Invisalign)', 'Early / Interceptive Orthodontics', 'Bite Correction'] },
    { number: '05', title: 'General Dentistry', services: ['Professional Teeth Cleaning & Polishing', 'Dentures', 'Wisdom Tooth Removal / Surgical Disimpaction', 'Tooth Extractions', 'Pediatric Dental Care'] },
  ],
  trust: [
    { number: '01', title: 'Comfort first', sub: 'Care that feels considered' },
    { number: '02', title: 'Personalized care', sub: 'A plan made for you' },
    { number: '03', title: 'Modern approach', sub: 'Thoughtful, precise dentistry' },
    { number: '04', title: 'Real conversations', sub: 'Clear guidance at every step' },
  ],
  journey: [
    { step: '01', title: 'Book your appointment', text: 'Send us a WhatsApp message and find a time that works for you.' },
    { step: '02', title: 'Share your concerns', text: 'Have an open conversation about what you need and how you feel.' },
    { step: '03', title: 'Explore your options', text: 'Understand your treatment choices before making a decision.' },
    { step: '04', title: 'Begin with confidence', text: 'Move forward with a plan that feels right for you.' },
  ],
};

export const messages = {
  appointment: 'Hello, I would like to book an appointment with the dentist. Please let me know the available date and time.',
  consultation: 'Hello, I would like to book a consultation with the dentist.',
  treatmentInfo: 'Hello, I would like to know more about your dental treatment options.',
  treatment: (name: string) => `Hello, I would like to know more about ${name} and would like to book an appointment.`,
};

export function waLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

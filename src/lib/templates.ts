// Pre-built auto-reply templates by industry

export interface Template {
  id: string;
  trigger: string;
  response: string;
  category: string;
}

export const templates: Record<string, Template[]> = {
  kirana: [
    { id: 'k1', trigger: 'price', response: 'Namaste! Kaunsa item chahiye? List bhejiye, hum rate bata denge.', category: 'kirana' },
    { id: 'k2', trigger: 'timing', response: 'Dukaan subah 8 baje se raat 10 baje tak khuli hai. Sunday bhi khula hai!', category: 'kirana' },
    { id: 'k3', trigger: 'delivery', response: 'Haan ji, home delivery available hai. ₹500+ order pe free delivery!', category: 'kirana' },
    { id: 'k4', trigger: 'open', response: 'Ji haan, dukaan khuli hai. Aaiye!', category: 'kirana' },
    { id: 'k5', trigger: 'location', response: 'Hamari dukaan [ADDRESS] pe hai. Google Maps: [LINK]', category: 'kirana' },
  ],
  
  doctor: [
    { id: 'd1', trigger: 'appointment', response: 'Appointment ke liye call karein: [PHONE]. Timing: Mon-Sat 10AM-2PM, 5PM-8PM', category: 'doctor' },
    { id: 'd2', trigger: 'timing', response: 'Clinic timing: Subah 10-2, Shaam 5-8. Sunday band.', category: 'doctor' },
    { id: 'd3', trigger: 'fees', response: 'Consultation fees: ₹[AMOUNT]. First visit pe thoda extra time lagta hai.', category: 'doctor' },
    { id: 'd4', trigger: 'emergency', response: 'Emergency ke liye turant call karein: [PHONE]. Ya nearest hospital jayein.', category: 'doctor' },
    { id: 'd5', trigger: 'location', response: 'Clinic address: [ADDRESS]. Landmark: [LANDMARK]', category: 'doctor' },
  ],
  
  tutor: [
    { id: 't1', trigger: 'fees', response: 'Monthly fees: Class [X] - ₹[AMOUNT]. Demo class FREE hai!', category: 'tutor' },
    { id: 't2', trigger: 'timing', response: 'Classes: Mon-Sat. Batch timings: 4PM, 5PM, 6PM. Sunday off.', category: 'tutor' },
    { id: 't3', trigger: 'subjects', response: 'Subjects: Maths, Science, English (Class 6-10). Board: CBSE/State', category: 'tutor' },
    { id: 't4', trigger: 'demo', response: 'Demo class FREE hai! Apna naam aur class bhejiye, hum schedule kar denge.', category: 'tutor' },
    { id: 't5', trigger: 'location', response: 'Classes [ADDRESS] pe hoti hain. Online option bhi available hai.', category: 'tutor' },
  ],
  
  salon: [
    { id: 's1', trigger: 'price', response: 'Rate card: Haircut ₹[X], Facial ₹[X], Makeup ₹[X]. Full list ke liye visit karein!', category: 'salon' },
    { id: 's2', trigger: 'timing', response: 'Salon timing: 10AM-8PM daily. Appointment recommended on weekends.', category: 'salon' },
    { id: 's3', trigger: 'appointment', response: 'Appointment ke liye call karein: [PHONE]. Walk-in bhi welcome hai!', category: 'salon' },
    { id: 's4', trigger: 'bridal', response: 'Bridal packages ₹[X] se start. Trial session available. Details ke liye visit karein.', category: 'salon' },
    { id: 's5', trigger: 'location', response: 'Address: [ADDRESS]. Easy parking available.', category: 'salon' },
  ],
  
  restaurant: [
    { id: 'r1', trigger: 'menu', response: 'Menu: [LINK]. Ya WhatsApp pe photo bhej dein?', category: 'restaurant' },
    { id: 'r2', trigger: 'timing', response: 'Restaurant timing: 11AM-3PM, 7PM-11PM. Monday closed.', category: 'restaurant' },
    { id: 'r3', trigger: 'delivery', response: 'Delivery available! Zomato/Swiggy pe order karein ya directly call: [PHONE]', category: 'restaurant' },
    { id: 'r4', trigger: 'booking', response: 'Table booking: Call [PHONE]. Weekend pe advance booking zaruri hai.', category: 'restaurant' },
    { id: 'r5', trigger: 'location', response: 'Address: [ADDRESS]. Valet parking available.', category: 'restaurant' },
  ],
  
  general: [
    { id: 'g1', trigger: 'hi', response: 'Namaste! Kaise madad kar sakte hain?', category: 'general' },
    { id: 'g2', trigger: 'hello', response: 'Hello! Kya seva hai aapki?', category: 'general' },
    { id: 'g3', trigger: 'thanks', response: 'Dhanyavaad! Phir milenge. 🙏', category: 'general' },
    { id: 'g4', trigger: 'ok', response: 'Ji zarur! Aur kuch madad chahiye toh batayein.', category: 'general' },
  ],
};

export function getTemplatesForBusiness(businessType: string): Template[] {
  const general = templates.general || [];
  const specific = templates[businessType] || [];
  return [...specific, ...general];
}

export function getAllTemplates(): Template[] {
  return Object.values(templates).flat();
}

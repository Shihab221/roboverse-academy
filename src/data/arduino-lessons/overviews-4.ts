import { LessonOverview } from './types'

export const overviews: Record<string, LessonOverview> = {
  'gas-sensors': {
    en: [
      'This lesson uses an MQ-2 gas sensor to detect smoke, LPG, and other combustible gases. Inside the sensor a small heated element changes its resistance when gas touches it. That is why the module needs warm-up time, with the best accuracy after a long burn-in of about 24 hours.',
      'You will read the sensor on analog pin A0, where the value rises as gas concentration rises. The module also has a digital D0 pin with a threshold set by its onboard potentiometer. For your alarm you will first record a clean-air baseline in the Serial Monitor, then trigger when the reading climbs well above it.',
      'This kind of sensing is the heart of a home gas and smoke alarm project. When the level passes your threshold, Arduino sounds a buzzer on pin 8 and prints a warning. Just remember these cheap sensors show trends, not exact gas percentages.',
    ],
    bn: [
      'এই পাঠে MQ-2 গ্যাস সেন্সর দিয়ে ধোঁয়া, LPG ও অন্যান্য দাহ্য গ্যাস শনাক্ত করা হয়। সেন্সরের ভেতরে একটি ছোট উত্তপ্ত উপাদান থাকে, গ্যাস লাগলে যার রোধ বদলে যায়। এজন্য মডিউলের ওয়ার্ম-আপ সময় লাগে, আর প্রায় ২৪ ঘণ্টা বার্ন-ইনের পর সবচেয়ে ভালো ফল পাওয়া যায়।',
      'আপনি অ্যানালগ পিন A0-তে সেন্সর পড়বেন, গ্যাস বাড়লে মান বাড়ে। মডিউলে একটি ডিজিটাল D0 পিনও আছে, যার থ্রেশহোল্ড অনবোর্ড পটেনশিওমিটার দিয়ে ঠিক করা হয়। অ্যালার্মের জন্য প্রথমে Serial Monitor-এ পরিষ্কার বাতাসের বেসলাইন রেকর্ড করবেন, তারপর মান অনেক বেড়ে গেলে ট্রিগার করবেন।',
      'এই ধরনের সেন্সিং বাসার গ্যাস ও ধোঁয়া অ্যালার্ম প্রজেক্টের মূল ভিত্তি। মাত্রা থ্রেশহোল্ড ছাড়ালে Arduino ৮ নম্বর পিনের বাজারে শব্দ বাজায় এবং সতর্কবার্তা ছাপে। মনে রাখবেন, এই সস্তা সেন্সরগুলো প্রবণতা দেখায়, সঠিক গ্যাসের শতাংশ নয়।',
    ],
  },
  'soil-moisture': {
    en: [
      'This lesson measures how wet soil is using a soil moisture probe on analog pin A0. A resistive probe passes a small current between its two prongs, and wet soil conducts better than dry soil. A capacitive probe works without exposed current paths, so it lasts longer without corrosion.',
      'You will read the analog value and turn it into a simple percentage. First record one value in dry air and one in water, then map between them. Dry soil gives a high reading and wet soil gives a low reading on the common resistive type.',
      'This is perfect for an automatic plant watering project. When moisture falls below about 30 percent, Arduino switches a pump relay on, and it switches off again above 60 percent. That gap stops the pump from flickering on and off.',
    ],
    bn: [
      'এই পাঠে অ্যানালগ পিন A0-তে মাটির আর্দ্রতা প্রোব দিয়ে মাটি কতটা ভেজা তা মাপা হয়। রেজিস্টিভ প্রোব তার দুটি কাঁটার মধ্যে ছোট কারেন্ট পাঠায়, আর শুকনো মাটির চেয়ে ভেজা মাটি ভালো পরিবহন করে। ক্যাপাসিটিভ প্রোব খোলা কারেন্ট পথ ছাড়াই কাজ করে, তাই মরিচা ছাড়া বেশি দিন টেকে।',
      'আপনি অ্যানালগ মান পড়ে একে সহজ শতাংশে বদলে নেবেন। প্রথমে শুকনো বাতাসে একটি মান ও পানিতে একটি মান রেকর্ড করুন, তারপর এর মধ্যে ম্যাপ করুন। সাধারণ রেজিস্টিভ টাইপে শুকনো মাটিতে বেশি রিডিং ও ভেজা মাটিতে কম রিডিং পাওয়া যায়।',
      'এটি স্বয়ংক্রিয় গাছে পানি দেওয়া প্রজেক্টের জন্য দারুণ। আর্দ্রতা প্রায় ৩০ শতাংশের নিচে নামলে Arduino পাম্প রিলে চালু করে, আর ৬০ শতাংশের উপরে গেলে বন্ধ করে। এই ব্যবধানে পাম্প বারবার চালু-বন্ধ হয় না।',
    ],
  },
  'rain-sensor': {
    en: [
      'This lesson detects rain with a rain sensor board covered in nickel traces. When the pad is dry the traces stay separate, but raindrops bridge them and let more current flow. More water on the pad usually means a lower analog reading.',
      'You will use both outputs of the module. Analog pin A0 shows rain intensity, while digital pin D0 flips when wetness passes a limit. You set that limit by turning the small onboard potentiometer and wiping the pad dry for a clean baseline.',
      'A classic project is a rain alert or auto-closing window. When the digital pin reports rain, Arduino lights an LED on pin 13 and prints a message. The same signal could drive a servo that pulls a small window shut.',
    ],
    bn: [
      'এই পাঠে নিকেল ট্রেস ঢাকা রেইন সেন্সর বোর্ড দিয়ে বৃষ্টি শনাক্ত করা হয়। প্যাড শুকনো থাকলে ট্রেসগুলো আলাদা থাকে, কিন্তু বৃষ্টির ফোঁটা সেগুলোকে যুক্ত করে বেশি কারেন্ট প্রবাহিত করে। প্যাডে বেশি পানি জমলে সাধারণত অ্যানালগ রিডিং কমে যায়।',
      'আপনি মডিউলের দুটি আউটপুটই ব্যবহার করবেন। অ্যানালগ পিন A0 বৃষ্টির তীব্রতা দেখায়, আর ভেজা ভাব সীমা ছাড়ালে ডিজিটাল পিন D0 বদলে যায়। ছোট অনবোর্ড পটেনশিওমিটার ঘুরিয়ে সেই সীমা ঠিক করবেন, আর পরিষ্কার বেসলাইনের জন্য প্যাড মুছে শুকিয়ে নেবেন।',
      'একটি পরিচিত প্রজেক্ট হলো বৃষ্টির সতর্কবার্তা বা স্বয়ংক্রিয় জানালা বন্ধ করা। ডিজিটাল পিন বৃষ্টি জানালে Arduino ১৩ নম্বর পিনের LED জ্বালায় ও বার্তা ছাপে। একই সংকেত দিয়ে একটি সার্ভো চালিয়ে ছোট জানালা বন্ধও করা যায়।',
    ],
  },
  'flame-sensor': {
    en: [
      'This lesson detects fire with an infrared flame sensor module. The sensor looks for the flickering infrared light that flames give off. It is fast and simple, but bright sunlight can fool it, so tests work best indoors.',
      'You will mostly use the digital D0 output wired to pin 2, which goes low when flame light is seen. The module also offers analog A0 for a rough sense of fire strength. A small potentiometer sets sensitivity, so adjust it until distant lamps stop triggering it.',
      'The project is a simple fire alarm. When fire is detected, Arduino turns on a buzzer on pin 8 and prints an alert. Later the same signal could switch a relay to cut power for safety.',
    ],
    bn: [
      'এই পাঠে ইনফ্রারেড ফ্লেম সেন্সর মডিউল দিয়ে আগুন শনাক্ত করা হয়। সেন্সরটি আগুন থেকে বের হওয়া ঝিকমিক করা ইনফ্রারেড আলো খোঁজে। এটি দ্রুত ও সহজ, তবে উজ্জ্বল সূর্যের আলো একে ভুল সংকেত দিতে পারে, তাই ঘরের ভেতরে পরীক্ষা ভালো।',
      'আপনি বেশিরভাগ ২ নম্বর পিনে যুক্ত ডিজিটাল D0 আউটপুট ব্যবহার করবেন, আগুনের আলো দেখলে যা লো হয়ে যায়। আগুনের প্রখরতার মোটামুটি ধারণার জন্য মডিউলে অ্যানালগ A0-ও আছে। ছোট পটেনশিওমিটার দিয়ে সংবেদনশীলতা ঠিক করা হয়, তাই দূরের বাতি আর ট্রিগার না করা পর্যন্ত এটি ঘুরিয়ে নিন।',
      'প্রজেক্টটি একটি সহজ ফায়ার অ্যালার্ম। আগুন ধরা পড়লে Arduino ৮ নম্বর পিনের বাজার বাজায় ও সতর্কবার্তা ছাপে। পরে একই সংকেত দিয়ে নিরাপত্তার জন্য রিলে চালিয়ে বিদ্যুৎ বন্ধও করা যায়।',
    ],
  },
  'water-level': {
    en: [
      'This lesson measures tank water level with a simple contact sensor strip. The strip has exposed traces, and deeper water touches more of them, which changes the analog signal. More immersion means a higher reading on pin A0.',
      'You will read that analog value and map it to a rough percentage. First note the values for empty and full, then use them to calibrate your map. A low threshold, such as an ADC value near 200, marks a low-water warning.',
      'This fits a tank monitor or pump guard project. When the level drops below the threshold, Arduino sounds a buzzer and prints a low-water alert. The same check can stop a pump before it runs dry and gets damaged.',
    ],
    bn: [
      'এই পাঠে সরল কনট্যাক্ট সেন্সর স্ট্রিপ দিয়ে ট্যাংকের পানির লেভেল মাপা হয়। স্ট্রিপে খোলা ট্রেস থাকে, আর বেশি গভীর পানি এর বেশি অংশ স্পর্শ করে, ফলে অ্যানালগ সংকেত বদলে যায়। পিন A0-তে বেশি ডোবা মানে বেশি রিডিং।',
      'আপনি সেই অ্যানালগ মান পড়ে একে মোটামুটি শতাংশে ম্যাপ করবেন। প্রথমে খালি ও ভরা অবস্থার মান লিখে নিন, তারপর সেগুলো দিয়ে ম্যাপ ক্যালিব্রেট করুন। ২০০-এর কাছাকাছি ADC মানের মতো নিচু থ্রেশহোল্ড পানি কমে যাওয়ার সতর্কতা বোঝায়।',
      'এটি ট্যাংক মনিটর বা পাম্প রক্ষা প্রজেক্টে মানানসই। লেভেল থ্রেশহোল্ডের নিচে নামলে Arduino বাজার বাজায় ও পানি কম বার্তা ছাপে। একই পরীক্ষা দিয়ে পাম্প শুকনো চলার আগেই বন্ধ করে ক্ষতি থেকে বাঁচানো যায়।',
    ],
  },
}

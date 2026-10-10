import { LessonOverview } from './types'

export const overviews: Record<string, LessonOverview> = {
  'led-blink': {
    en: [
      'An LED is a small light that glows when current flows through it in one direction. It has a long leg called the anode for positive and a short leg called the cathode for ground. A 220 ohm resistor in series protects it from too much current.',
      'In this lesson you connect pin 13 through the resistor to the LED anode, and the cathode to GND. Setting the pin HIGH gives 5 volts so the LED turns on. Setting it LOW gives 0 volts so it turns off, with a short delay making the blink visible.',
      'Blinking an LED is the traditional first test of any new board. The same idea is used in status lights on routers, chargers, and toys. Once it works, you know your wiring, code upload, and power are all correct.',
    ],
    bn: [
      'LED একটি ছোট বাতি যা এক দিকে কারেন্ট গেলে জ্বলে। এর লম্বা পা anode পজিটিভের জন্য এবং খাটো পা cathode গ্রাউন্ডের জন্য। সিরিজে 220 ওহম রেজিস্টর বেশি কারেন্ট থেকে একে রক্ষা করে।',
      'এই পাঠে আপনি পিন 13 থেকে রেজিস্টরের মাধ্যমে LED এর anode এ সংযোগ দেবেন, আর cathode যাবে GND তে। পিন HIGH করলে 5 ভোল্ট পেয়ে LED জ্বলে। পিন LOW করলে 0 ভোল্ট হয় তাই নিভে যায়, আর ছোট delay ব্লিংক দেখা যায়।',
      'LED ব্লিংক করা যেকোনো নতুন বোর্ডের ঐতিহ্যবাহী প্রথম টেস্ট। একই ধারণা রাউটার, চার্জার ও খেলনার স্ট্যাটাস লাইটে ব্যবহার হয়। এটি কাজ করলেই বুঝবেন wiring, কোড আপলোড ও পাওয়ার সব ঠিক আছে।',
    ],
  },
  'buzzer-control': {
    en: [
      'A buzzer is a small sound device that beeps when powered. An active buzzer has a built-in oscillator, so it sounds with simple on and off signals. A passive buzzer needs a fast tone signal to decide its pitch.',
      'Here you connect the buzzer positive lead to pin 8 and the negative lead to GND. For an active buzzer, HIGH turns the sound on and LOW turns it off in beep patterns. For a passive buzzer, the tone function plays different frequencies and noTone stops the sound.',
      'Buzzers are used in doorbells, alarms, timers, and toy cars. Short-short-long beep patterns can signal warnings or alerts. This lesson is a good base for adding sound feedback to any project.',
    ],
    bn: [
      'বাজার একটি ছোট শব্দের ডিভাইস যা পাওয়ার পেলে বিপ করে। Active বাজারে ভেতরে oscillator থাকে, তাই সহজ on-off সিগন্যালেই বাজে। Passive বাজারে দ্রুত tone সিগন্যাল দরকার যাতে pitch ঠিক হয়।',
      'এখানে বাজারের পজিটিভ প্রান্ত পিন 8 এ এবং নেগেটিভ প্রান্ত GND তে লাগাবেন। Active বাজারে HIGH দিলে শব্দ চালু হয় আর LOW দিলে বন্ধ হয়, এভাবে beep pattern তৈরি হয়। Passive বাজারে tone ফাংশন নানা frequency বাজায় আর noTone শব্দ থামায়।',
      'বাজার ডোরবেল, অ্যালার্ম, টাইমার ও খেলনা গাড়িতে ব্যবহার হয়। ছোট-ছোট-লম্বা beep pattern সতর্ক সংকেত দিতে পারে। যেকোনো প্রজেক্টে শব্দ ফিডব্যাক যোগ করার ভালো ভিত্তি এই পাঠ।',
    ],
  },
  'relay-module': {
    en: [
      'A relay is an electrically controlled switch that lets a small signal control a much larger load. Inside, a tiny electromagnet clicks metal contacts open or closed. This keeps the Arduino safely separated from high-voltage lamps or fans.',
      'You connect relay VCC to 5V, GND to GND, and IN to pin 7. The lamp or fan wires go through the COM and NO screw terminals. Many modules are active LOW, so LOW turns the relay on with a click and HIGH turns it off.',
      'Relays are used in home automation, garden watering pumps, and room heaters. Always practise first with a low-voltage lamp and never touch mains wiring while powered. This lesson teaches safe switching plus basic on-off timing.',
    ],
    bn: [
      'রিলে একটি বৈদ্যুতিকভাবে নিয়ন্ত্রিত সুইচ যা ছোট সিগন্যাল দিয়ে বড় লোড চালাতে দেয়। ভেতরে ছোট electromagnet ধাতব contact খোলে বা বন্ধ করে। এতে Arduino high-voltage বাতি বা ফ্যান থেকে নিরাপদে আলাদা থাকে।',
      'রিলের VCC যাবে 5V তে, GND যাবে GND তে, আর IN যাবে পিন 7 এ। বাতি বা ফ্যানের তার COM ও NO স্ক্রু টার্মিনালে লাগে। অনেক মডিউল active LOW, তাই LOW দিলে ক্লিক করে রিলে চালু হয় আর HIGH দিলে বন্ধ হয়।',
      'রিলে হোম অটোমেশন, বাগানের পানির পাম্প ও রুম হিটারে ব্যবহার হয়। প্রথমে সবসময় low-voltage বাতি দিয়ে অনুশীলন করুন আর পাওয়ার থাকা অবস্থায় mains তারে হাত দেবেন না। এই পাঠে নিরাপদ switching ও সাধারণ on-off টাইমিং শিখবেন।',
    ],
  },
  'lcd-16x2': {
    en: [
      'A 16x2 LCD is a classic display with 16 columns and 2 rows of characters. It uses the HD44780 controller and the LiquidCrystal library to show text. It is great for showing names, readings, and short messages without a computer.',
      'Wiring uses 4-bit mode with RS to pin 12, E to pin 11, and data pins D4 to D7 to pins 5 down to 2. Power goes VSS to GND and VDD to 5V, with a 10k potentiometer on V0 to set contrast. The code starts the display size, prints line one, then moves the cursor to line two.',
      'Such displays appear on vending machines, printers, and simple meters. They give instant feedback from sensors like temperature or distance. Learning this wiring makes later display projects much easier.',
    ],
    bn: [
      '16x2 LCD একটি ক্লাসিক ডিসপ্লে যাতে 16 কলাম ও 2 সারি অক্ষর দেখা যায়। এতে HD44780 কন্ট্রোলার থাকে আর LiquidCrystal library দিয়ে text দেখানো হয়। কম্পিউটার ছাড়া নাম, রিডিং ও ছোট বার্তা দেখাতে এটি দারুণ।',
      'Wiring এ 4-bit mode ব্যবহার হয়, RS পিন 12 এ, E পিন 11 এ, আর D4 থেকে D7 যাবে পিন 5 থেকে 2 এ। পাওয়ারে VSS যাবে GND তে ও VDD যাবে 5V তে, আর V0 তে 10k potentiometer দিয়ে contrast ঠিক করা হয়। কোডে ডিসপ্লে সাইজ চালু করে প্রথম লাইন print করা হয়, তারপর cursor দ্বিতীয় লাইনে নেওয়া হয়।',
      'এমন ডিসপ্লে ভেন্ডিং মেশিন, প্রিন্টার ও সাধারণ মিটারে দেখা যায়। Temperature বা দূরত্বের মতো সেন্সর থেকে তাৎক্ষণিক ফল দেখায়। এই wiring শিখলে পরের ডিসপ্লে প্রজেক্ট অনেক সহজ হবে।',
    ],
  },
  'lcd-i2c': {
    en: [
      'An I2C LCD is a normal 16x2 display with a small backpack that needs only two signal wires. I2C is a two-wire bus using SDA for data and SCL for clock. This saves many Arduino pins and makes wiring very simple.',
      'You connect VCC to 5V, GND to GND, SDA to A4, and SCL to A5 on an Uno. The LiquidCrystal I2C library talks to the screen at an address like 0x27 or 0x3F. A small scanner sketch can find the right address if the screen stays blank.',
      'I2C displays are common in sensor boxes, weather stations, and mini dashboards. Fewer wires mean cleaner builds and more free pins for buttons or sensors. This lesson is the fast modern way to add a readable screen.',
    ],
    bn: [
      'I2C LCD হলো সাধারণ 16x2 ডিসপ্লে যার ছোট backpack থাকায় মাত্র দুটি সিগন্যাল তার লাগে। I2C হলো দুই তারের bus, SDA ডেটার জন্য আর SCL clock এর জন্য। এতে অনেক Arduino পিন বাঁচে আর wiring খুব সহজ হয়।',
      'Uno তে VCC যাবে 5V তে, GND যাবে GND তে, SDA যাবে A4 এ, আর SCL যাবে A5 এ। LiquidCrystal I2C library 0x27 বা 0x3F এর মতো address দিয়ে স্ক্রিনের সাথে কথা বলে। স্ক্রিন ফাঁকা থাকলে ছোট scanner sketch দিয়ে সঠিক address পাওয়া যায়।',
      'I2C ডিসপ্লে সেন্সর বক্স, আবহাওয়া স্টেশন ও মিনি ড্যাশবোর্ডে প্রচলিত। কম তার মানে পরিষ্কার সেটআপ আর বোতাম বা সেন্সরের জন্য বেশি ফ্রি পিন। পড়ার মতো স্ক্রিন যোগ করার দ্রুত আধুনিক উপায় এই পাঠ।',
    ],
  },
  'servo-motor': {
    en: [
      'A servo motor is a small motor that turns to an exact angle instead of spinning freely. The SG90 model moves from 0 to 180 degrees and holds its position. It reads quick pulses on its signal wire to know where to point.',
      'The orange or yellow signal wire goes to pin 9, red to 5V, and brown to GND shared with the Arduino. The Servo library uses attach and write to set the angle. A smooth sweep moves step by step with a tiny delay between angles.',
      'Servos steer toy cars, move robot arms, and open small gates or flags. If the servo jitters or resets the board, it needs a separate 5V supply with common ground. This lesson opens the door to real moving robots.',
    ],
    bn: [
      'Servo মোটর একটি ছোট মোটর যা স্বাধীনভাবে না ঘুরে সঠিক angle এ ঘোরে। SG90 মডেল 0 থেকে 180 ডিগ্রি ঘোরে আর অবস্থান ধরে রাখে। কোথায় ঘুরবে তা signal তারের দ্রুত pulse থেকে বোঝে।',
      'কমলা বা হলুদ signal তার যাবে পিন 9 এ, লাল তার 5V তে, আর বাদামি তার Arduino এর সাথে common GND তে। Servo library attach ও write দিয়ে angle ঠিক করে। ছোট delay দিয়ে ধাপে ধাপে ঘোরালে মসৃণ sweep হয়।',
      'Servo খেলনা গাড়ির দিক ঘোরায়, রোবট হাত নাড়ায়, আর ছোট গেট বা পতাকা খোলে। Servo কাঁপলে বা বোর্ড reset হলে common ground সহ আলাদা 5V supply দরকার। চলমান রোবটের জগতে এই পাঠ দরজা খুলে দেয়।',
    ],
  },
}

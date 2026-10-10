import { LessonOverview } from './types'

export const overviews: Record<string, LessonOverview> = {
  "what-is-arduino": {
    en: [
      "Arduino is a small, beginner-friendly computer board that can control lights, sensors, and motors. It has a chip called a microcontroller that runs one program at a time. You tell it what to do by uploading code from your computer over USB.",
      "A computer is powerful and runs many apps, but a microcontroller is simple and talks directly to electronics. Arduino has pins that can turn things on and off, power pins that give 5V or 3.3V, and GND pins that complete the circuit. Think of GND as the return path where electricity flows back.",
      "In this lesson you will connect an Arduino Uno with just a USB cable and upload a test blink program. After this lesson you will know what each part of the board does and you will be able to prove your board works.",
    ],
    bn: [
      "আরডুইনো একটি ছোট ও সহজ কম্পিউটার বোর্ড যা লাইট, সেন্সর ও মোটর নিয়ন্ত্রণ করতে পারে। এতে মাইক্রোকন্ট্রোলার নামে একটি চিপ থাকে যা একবারে একটি প্রোগ্রাম চালায়। USB দিয়ে কম্পিউটার থেকে কোড আপলোড করে আপনি একে নির্দেশ দেন।",
      "কম্পিউটার শক্তিশালী এবং অনেক অ্যাপ চালায়, কিন্তু মাইক্রোকন্ট্রোলার সহজ এবং সরাসরি ইলেকট্রনিক্সের সাথে কাজ করে। আরডুইনোতে জিনিস চালু বা বন্ধ করার পিন, 5V বা 3.3V দেওয়ার পাওয়ার পিন এবং সার্কিট সম্পূর্ণ করার GND পিন থাকে। GND কে বিদ্যুৎ ফিরে আসার পথ ভাবুন।",
      "এই পাঠে আপনি শুধু USB কেবল দিয়ে Arduino Uno সংযুক্ত করবেন এবং একটি টেস্ট ব্লিংক প্রোগ্রাম আপলোড করবেন। এই পাঠ শেষে আপনি বোর্ডের প্রতিটি অংশের কাজ জানবেন এবং আপনার বোর্ড ঠিক আছে তা প্রমাণ করতে পারবেন।",
    ],
  },
  "arduino-types": {
    en: [
      "Arduino is not just one board. The Uno is the classic beginner board, the Nano is tiny for small spaces, and the Mega is large with many pins for big projects. They all use the same Arduino language, so your skills move with you.",
      "The main differences are size, number of pins, and memory for your program. Uno is enough for most learning projects with a few sensors and LEDs. Mega helps when you need many sensors, motors, and outputs at once, while Nano fits inside tiny models and wearables.",
      "In this lesson you will learn to read pin labels on any board and pick the right one for your idea. After this lesson you will be able to compare Uno, Nano, and Mega and choose wisely without overspending.",
    ],
    bn: [
      "আরডুইনো শুধু একটি বোর্ড নয়। Uno হলো শেখার জন্য ক্লাসিক বোর্ড, Nano ছোট জায়গার জন্য ক্ষুদ্র বোর্ড, আর Mega অনেক পিনসহ বড় প্রজেক্টের জন্য। এগুলো সব একই আরডুইনো ভাষা ব্যবহার করে, তাই আপনার দক্ষতা সব বোর্ডেই কাজে লাগবে।",
      "মূল পার্থক্য হলো আকার, পিনের সংখ্যা এবং প্রোগ্রামের জন্য মেমরি। কয়েকটি সেন্সর ও LED এর বেশিরভাগ শেখার প্রজেক্টে Uno যথেষ্ট। অনেক সেন্সর ও মোটর একসাথে চালাতে Mega দরকার হয়, আর ছোট মডেল ও পরিধেয় জিনিসে Nano মানায়।",
      "এই পাঠে আপনি যেকোনো বোর্ডে পিন লেবেল পড়া ও আপনার ধারণার জন্য সঠিক বোর্ড বেছে নেওয়া শিখবেন। এই পাঠ শেষে আপনি Uno, Nano ও Mega তুলনা করে বুদ্ধিমানের মতো বাছাই করতে পারবেন।",
    ],
  },
  "arduino-ide": {
    en: [
      "Arduino IDE is the free app where you write, check, and upload code to your board. You will install version 2, pick your board name, and pick the COM port that connects to your Arduino. These two settings must be correct or upload will fail.",
      "Before uploading, you press Verify to compile your code and catch spelling mistakes. After uploading, you open Serial Monitor to see messages from your board for debugging. The code and the Monitor must use the same speed, like 9600 baud.",
      "In this lesson you will set up the IDE step by step and upload a test program that prints Tick and Tock. After this lesson you will be able to install the IDE, fix port problems, and debug with Serial Monitor.",
    ],
    bn: [
      "Arduino IDE হলো বিনামূল্যের অ্যাপ যেখানে আপনি কোড লিখবেন, পরীক্ষা করবেন এবং বোর্ডে আপলোড করবেন। আপনি সংস্করণ 2 ইনস্টল করবেন, আপনার বোর্ডের নাম বাছবেন এবং Arduino এর সাথে যুক্ত COM পোর্ট বাছবেন। আপলোড সফল হতে এই দুটি সেটিং ঠিক থাকতেই হবে।",
      "আপলোডের আগে Verify চেপে কোড কম্পাইল করে বানান ভুল ধরা হয়। আপলোডের পর বোর্ড থেকে মেসেজ দেখতে Serial Monitor খুলে ডিবাগ করা হয়। কোড ও Monitor এ একই গতি, যেমন 9600 baud, থাকতে হবে।",
      "এই পাঠে আপনি ধাপে ধাপে IDE সেটআপ করবেন এবং Tick ও Tock প্রিন্ট করা একটি টেস্ট প্রোগ্রাম আপলোড করবেন। এই পাঠ শেষে আপনি IDE ইনস্টল, পোর্ট সমস্যা ঠিক করা ও Serial Monitor দিয়ে ডিবাগ করতে পারবেন।",
    ],
  },
  "first-sketch": {
    en: [
      "An Arduino program is called a sketch. Every sketch has setup, which runs once to prepare pins, and loop, which repeats forever to do the work. You also use variables to store pin numbers and comments to explain your code.",
      "In this lesson you will blink a real LED wired to pin 8 through a 220 ohm resistor. You will learn that pinMode sets a pin as output and digitalWrite sends HIGH for 5V or LOW for 0V. The long leg of the LED goes toward power and the short leg goes to GND.",
      "After this lesson you will be able to write a complete sketch from scratch with clear comments. You will also be able to change blink speed and move the LED to a new pin by updating one variable.",
    ],
    bn: [
      "Arduino প্রোগ্রামকে স্কেচ বলা হয়। প্রতিটি স্কেচে setup থাকে, যা পিন প্রস্তুত করতে একবার চলে, এবং loop থাকে, যা কাজ করতে বারবার চলে। পিন নম্বর রাখতে ভেরিয়েবল এবং কোড বোঝাতে কমেন্ট ব্যবহার করা হয়।",
      "এই পাঠে আপনি 220 ohm রেজিস্টর দিয়ে পিন 8 এ লাগানো একটি আসল LED ব্লিংক করাবেন। আপনি শিখবেন pinMode পিনকে আউটপুট করে এবং digitalWrite HIGH দিয়ে 5V বা LOW দিয়ে 0V পাঠায়। LED এর লম্বা পা পাওয়ারের দিকে এবং ছোট পা GND এর দিকে যায়।",
      "এই পাঠ শেষে আপনি পরিষ্কার কমেন্টসহ শূন্য থেকে সম্পূর্ণ স্কেচ লিখতে পারবেন। ব্লিংকের গতি বদলাতে এবং একটি ভেরিয়েবল বদলে LED নতুন পিনে সরাতে পারবেন।",
    ],
  },
  "understanding-circuits": {
    en: [
      "A circuit is a closed loop path for electricity. Current flows out from power, through your parts, and back into GND. If the loop is broken anywhere, current stops and the LED stays off.",
      "Three words matter most here. Voltage is the push, current is the flow, and GND is the zero point where current returns. A resistor limits current so delicate parts like LEDs do not burn out.",
      "In this lesson you will trace a simple LED circuit from pin to resistor to LED to GND and read its diagram. After this lesson you will be able to spot open circuits and build a working closed loop every time.",
    ],
    bn: [
      "সার্কিট হলো বিদ্যুতের জন্য একটি বন্ধ লুপ পথ। কারেন্ট পাওয়ার থেকে বেরিয়ে যন্ত্রাংশের ভেতর দিয়ে GND তে ফিরে যায়। কোথাও লুপ ভাঙা থাকলে কারেন্ট থামে এবং LED নিভে থাকে।",
      "এখানে তিনটি শব্দ সবচেয়ে জরুরি। ভোল্টেজ হলো চাপ, কারেন্ট হলো প্রবাহ, আর GND হলো শূন্য বিন্দু যেখানে কারেন্ট ফিরে আসে। রেজিস্টর কারেন্ট সীমিত করে যাতে LED এর মতো সংবেদনশীল অংশ পুড়ে না যায়।",
      "এই পাঠে আপনি পিন থেকে রেজিস্টর হয়ে LED হয়ে GND পর্যন্ত একটি সহজ LED সার্কিট দেখবেন এবং এর ডায়াগ্রাম পড়বেন। এই পাঠ শেষে আপনি খোলা সার্কিট চিনতে পারবেন এবং প্রতিবার সচল বন্ধ লুপ বানাতে পারবেন।",
    ],
  },
  "breadboard-basics": {
    en: [
      "A breadboard lets you build circuits without soldering. Holes in the same row are connected inside, and the long plus and minus rails carry power and GND across the board. The center gap splits the board so chips can sit across it.",
      "You power the rails from Arduino 5V and GND, then plug parts and jumper wires into rows to join them. Red jumpers usually mean power and black jumpers mean GND, which keeps wiring easy to follow. Firm pushes matter because a loose wire breaks the connection.",
      "In this lesson you will build an LED circuit on a breadboard using pin 8, a resistor, and the power rails. After this lesson you will be able to place parts correctly and prototype small circuits quickly.",
    ],
    bn: [
      "ব্রেডবোর্ড দিয়ে সোল্ডার ছাড়াই সার্কিট বানানো যায়। একই row এর hole গুলো ভেতরে সংযুক্ত থাকে, আর লম্বা প্লাস ও মাইনাস rail পুরো বোর্ডে পাওয়ার ও GND বহন করে। মাঝের ফাঁক বোর্ডকে ভাগ করে যাতে চিপ দুই পাশে বসতে পারে।",
      "Arduino 5V ও GND দিয়ে rail এ পাওয়ার দেবেন, তারপর অংশ ও jumper তার row তে লাগিয়ে যুক্ত করবেন। লাল jumper সাধারণত পাওয়ার এবং কালো jumper GND বোঝায়, ফলে তার দেখে বোঝা সহজ হয়। শক্ত করে চাপ দেওয়া জরুরি কারণ ঢিলা তারে সংযোগ বিচ্ছিন্ন হয়।",
      "এই পাঠে আপনি পিন 8, একটি রেজিস্টর ও পাওয়ার rail ব্যবহার করে ব্রেডবোর্ডে LED সার্কিট বানাবেন। এই পাঠ শেষে আপনি ঠিকমতো অংশ বসাতে ও ছোট সার্কিট দ্রুত প্রোটোটাইপ করতে পারবেন।",
    ],
  },
  "resistors-explained": {
    en: [
      "Resistance is how much a part slows down electric current, measured in ohms. A bigger ohm value lets less current pass, so the LED glows dimmer. A smaller value like 220 ohms lets more current pass, so the LED glows brighter.",
      "LEDs need a resistor because they will take too much current and burn out without one. You read value from color bands on the body, where each color stands for a number. For a normal 5V LED circuit, 220 to 330 ohms is the safe beginner choice.",
      "In this lesson you will compare the same LED with a 220 ohm and a 1k resistor to see brightness change. After this lesson you will be able to pick a safe resistor and read basic color codes.",
    ],
    bn: [
      "রেজিস্ট্যান্স হলো একটি অংশ কতটা বৈদ্যুতিক কারেন্টকে বাধা দেয়, যা ohm এককে মাপা হয়। ohm মান বড় হলে কম কারেন্ট যায়, তাই LED অনুজ্জ্বল জ্বলে। 220 ohm এর মতো ছোট মানে বেশি কারেন্ট যায়, তাই LED উজ্জ্বল জ্বলে।",
      "LED এর রেজিস্টর দরকার কারণ এটি ছাড়া LED বেশি কারেন্ট নিয়ে পুড়ে যাবে। গায়ের রঙের band দেখে মান পড়া হয়, যেখানে প্রতিটি রঙ একটি সংখ্যা বোঝায়। সাধারণ 5V LED সার্কিটে 220 থেকে 330 ohm নিরাপদ শুরুর পছন্দ।",
      "এই পাঠে আপনি একই LED কে 220 ohm ও 1k রেজিস্টর দিয়ে চালিয়ে উজ্জ্বলতার পার্থক্য দেখবেন। এই পাঠ শেষে আপনি নিরাপদ রেজিস্টর বাছতে ও সাধারণ কালার কোড পড়তে পারবেন।",
    ],
  },
  "leds-and-colors": {
    en: [
      "An LED is a tiny light that only works one way. The long leg is the anode for plus and the short leg is the cathode for minus. If you wire it backwards, it will not light up.",
      "Different colors need slightly different voltages to turn on, called forward voltage. Red usually needs less than green or blue. That is why each LED should have its own 220 ohm resistor instead of sharing one.",
      "In this lesson you will control a red LED on pin 10 and a green LED on pin 11 in an alternating pattern. After this lesson you will be able to wire polarity correctly and make simple two-color light effects.",
    ],
    bn: [
      "LED হলো ক্ষুদ্র বাতি যা শুধু একদিকে কাজ করে। লম্বা পা হলো প্লাসের জন্য anode এবং ছোট পা হলো মাইনাসের জন্য cathode। উল্টো লাগালে এটি জ্বলবে না।",
      "ভিন্ন রঙ জ্বলতে সামান্য ভিন্ন ভোল্টেজ দরকার হয়, যাকে forward voltage বলে। লাল রঙে সাধারণত সবুজ বা নীলের চেয়ে কম লাগে। তাই প্রতিটি LED এর জন্য আলাদা 220 ohm রেজিস্টর থাকা উচিত, একটি ভাগ করে নয়।",
      "এই পাঠে আপনি পিন 10 এ লাল LED এবং পিন 11 এ সবুজ LED পর্যায়ক্রমে জ্বালাবেন। এই পাঠ শেষে আপনি সঠিক polarity এ তার লাগাতে ও সহজ দুই রঙের লাইট ইফেক্ট বানাতে পারবেন।",
    ],
  },
}

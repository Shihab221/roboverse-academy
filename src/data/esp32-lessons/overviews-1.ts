import { LessonOverview } from '../arduino-lessons/types'

export const overviews: Record<string, LessonOverview> = {
  'what-is-esp32': {
    en: [
      'The ESP32 is a tiny and very cheap microcontroller board with WiFi and Bluetooth built in. It has two cores, so you can think of it as having two small brains. That makes it much stronger than a basic Arduino for smart projects.',
      'Because wireless is already on the chip, you do not need extra shields or modules. You can make weather monitors, smart lights, and simple robots that talk to your phone. It is a favorite board for beginners who want to go online.',
      'For this lesson you only need an ESP32 DevKit V1 board and a micro-USB cable. Just plug it into your computer and watch the small blue LED blink. Open Serial Monitor at 115200 speed to see its hello messages.',
    ],
    bn: [
      'ESP32 হলো ছোট ও খুব সস্তা একটি মাইক্রোকন্ট্রোলার বোর্ড, যাতে WiFi ও Bluetooth বিল্ট-ইন আছে। এতে দুটি কোর আছে, তাই ভাবতে পারো এর দুটি ছোট ব্রেইন আছে। স্মার্ট প্রজেক্টের জন্য এটি সাধারণ Arduino থেকে অনেক শক্তিশালী।',
      'যেহেতু ওয়্যারলেস চিপের ভেতরেই আছে, তাই আলাদা শিল্ড বা মডিউল লাগে না। তুমি আবহাওয়া মনিটর, স্মার্ট লাইট ও ফোনের সাথে কথা বলা ছোট রোবট বানাতে পারো। অনলাইনে যেতে চাওয়া নতুনদের জন্য এটি প্রিয় বোর্ড।',
      'এই পাঠে তোমার শুধু ESP32 DevKit V1 বোর্ড ও micro-USB কেবল লাগবে। শুধু কম্পিউটারে লাগাও এবং ছোট নীল LED ব্লিংক করতে দেখো। hello মেসেজ দেখতে Serial Monitor 115200 স্পিডে খোলো।',
    ],
  },
  'esp32-vs-arduino': {
    en: [
      'ESP32 and Arduino Uno cost almost the same, both are cheap beginner boards. ESP32 has WiFi and Bluetooth built in, while Arduino Uno needs costly shields for wireless. ESP32 is also much faster with dual cores and more memory.',
      'The big warning is voltage. Arduino Uno uses 5V logic, but ESP32 uses 3.3V logic only. Never give 5V to an ESP32 pin or you can damage it. ESP32 also uses more power for WiFi, so use a good USB cable and learn deep sleep for battery projects.',
      'Pick Arduino Uno for simple toys like blinking lights or basic motors. Pick ESP32 when you need WiFi, Bluetooth, or more speed. If you are unsure, start with Arduino for basics and move to ESP32 for smart projects.',
    ],
    bn: [
      'ESP32 ও Arduino Uno দামে প্রায় একই, দুটোই সস্তা ও নতুনদের জন্য ভালো। ESP32 তে WiFi ও Bluetooth বিল্ট-ইন আছে, কিন্তু Arduino Uno তে ওয়্যারলেসের জন্য দামি শিল্ড লাগে। ESP32 ডুয়াল কোর ও বেশি মেমরি নিয়ে অনেক দ্রুত।',
      'বড় সতর্কতা হলো ভোল্টেজ। Arduino Uno 5V লজিক ব্যবহার করে, কিন্তু ESP32 শুধু 3.3V লজিক ব্যবহার করে। ESP32 পিনে কখনো 5V দিও না, তাহলে এটি নষ্ট হতে পারে। WiFi এর জন্য ESP32 বেশি পাওয়ার খায়, তাই ভালো USB কেবল ব্যবহার করো ও ব্যাটারি প্রজেক্টে deep sleep শিখো।',
      'সাধারণ খেলনার মতো ব্লিংকিং লাইট বা সাধারণ মোটরের জন্য Arduino Uno নাও। WiFi, Bluetooth বা বেশি স্পিড লাগলে ESP32 নাও। নিশ্চিত না হলে বেসিকের জন্য Arduino দিয়ে শুরু করো ও স্মার্ট প্রজেক্টে ESP32 এ যাও।',
    ],
  },
  'esp32-board-overview': {
    en: [
      'The ESP32 DevKit V1 is a small board you can hold in your hand. At one end is a micro-USB port for power and programming. Next to it are EN and BOOT buttons and a small blue LED on GPIO 2.',
      'EN restarts the board when you press it. BOOT is only needed if uploading fails. Around the edges you will find 3V3 power pins, GND pins, and many GPIO pins for lights and sensors.',
      'One special rule is about analog pins. When WiFi is on, ADC2 pins stop working. So for sensors with WiFi, always use ADC1 pins like GPIO 32 to 39.',
    ],
    bn: [
      'ESP32 DevKit V1 হলো হাতে ধরা যায় এমন ছোট বোর্ড। এক প্রান্তে পাওয়ার ও প্রোগ্রামিংয়ের জন্য micro-USB পোর্ট আছে। এর পাশে EN ও BOOT বোতাম এবং GPIO 2 তে ছোট নীল LED আছে।',
      'EN চাপলে বোর্ড রিস্টার্ট হয়। আপলোড ব্যর্থ হলেই শুধু BOOT লাগে। ধারগুলোতে 3V3 পাওয়ার পিন, GND পিন ও লাইট-সেন্সরের জন্য অনেক GPIO পিন পাবে।',
      'একটি বিশেষ নিয়ম হলো অ্যানালগ পিন নিয়ে। WiFi চালু থাকলে ADC2 পিন কাজ বন্ধ করে দেয়। তাই WiFi সহ সেন্সরে সবসময় GPIO 32 থেকে 39 এর মতো ADC1 পিন ব্যবহার করো।',
    ],
  },
  'setup-esp32-arduino-ide': {
    en: [
      'Arduino IDE does not know ESP32 at first, so you must add it yourself. You paste a board manager link into Preferences and then install the esp32 platform. This takes only a few minutes.',
      'Next you pick ESP32 Dev Module as the board and choose the correct COM port. If no port shows up, install the CP2102 or CH340 USB driver. Always use a data USB cable, not a charge-only cable.',
      'If upload fails, do not worry. Hold the BOOT button while it uploads, then release it. Open Serial Monitor at 115200 to confirm your test sketch is running.',
    ],
    bn: [
      'Arduino IDE প্রথমে ESP32 চেনে না, তাই তোমাকে নিজে যোগ করতে হবে। Preferences এ board manager লিংক বসিয়ে esp32 প্ল্যাটফর্ম ইনস্টল করবে। এতে মাত্র কয়েক মিনিট লাগে।',
      'এরপর বোর্ড হিসেবে ESP32 Dev Module বাছো ও সঠিক COM পোর্ট বেছে নাও। পোর্ট না দেখালে CP2102 বা CH340 USB ড্রাইভার ইনস্টল করো। সবসময় ডেটা USB কেবল ব্যবহার করো, শুধু চার্জের কেবল নয়।',
      'আপলোড ব্যর্থ হলে চিন্তা করো না। আপলোডের সময় BOOT বোতাম ধরে রাখো, তারপর ছেড়ে দাও। টেস্ট স্কেচ চলছে কিনা দেখতে Serial Monitor 115200 তে খোলো।',
    ],
  },
  'first-esp32-sketch': {
    en: [
      'Every Arduino sketch has two parts. setup runs one time at the start. loop repeats forever after that.',
      'In this lesson you blink the onboard LED on GPIO 2. HIGH turns it on and LOW turns it off. A small delay sets the blink speed.',
      'You also print hello messages to Serial at 115200 speed. Change the delay or the text to make it your own. Press EN if you see nothing on the screen.',
    ],
    bn: [
      'প্রতিটি Arduino স্কেচে দুটি অংশ থাকে। setup শুরুতে একবার চলে। loop তারপর বারবার চলতে থাকে।',
      'এই পাঠে তুমি GPIO 2 এর onboard LED ব্লিংক করবে। HIGH দিলে জ্বলে ও LOW দিলে নেভে। ছোট delay ব্লিংক স্পিড ঠিক করে।',
      'তুমি 115200 স্পিডে Serial এ hello মেসেজও প্রিন্ট করবে। delay বা লেখা বদলে নিজের মতো করো। স্ক্রিনে কিছু না দেখলে EN চাপো।',
    ],
  },
  'wifi-basics': {
    en: [
      'WiFi has three simple ideas. SSID is just the name of your home network. The password keeps strangers out. An IP address is like a house number for your ESP32.',
      'ESP32 only talks on 2.4GHz WiFi. It cannot see 5GHz networks at all. If your home has two names, always pick the 2.4GHz one.',
      'In this lesson you scan nearby networks and print their names. Strong signals have numbers near zero like minus 40. Find your own SSID in the list before the next lesson.',
    ],
    bn: [
      'WiFi এর তিনটি সহজ ধারণা আছে। SSID হলো তোমার বাসার নেটওয়ার্কের নাম। পাসওয়ার্ড অচেনা মানুষকে দূরে রাখে। IP ঠিকানা হলো তোমার ESP32 এর বাড়ির নম্বরের মতো।',
      'ESP32 শুধু 2.4GHz WiFi তে কথা বলে। এটি 5GHz নেটওয়ার্ক একদম দেখতে পায় না। বাসায় দুটি নাম থাকলে সবসময় 2.4GHz টি বেছে নাও।',
      'এই পাঠে তুমি কাছের নেটওয়ার্ক স্ক্যান করে নাম প্রিন্ট করবে। শক্তিশালী সিগন্যালের সংখ্যা শূন্যের কাছে থাকে, যেমন মাইনাস 40। পরের পাঠের আগে তালিকায় নিজের SSID খুঁজে বের করো।',
    ],
  },
  'connect-wifi': {
    en: [
      'To join WiFi you call WiFi.begin with your SSID and password. The ESP32 then tries to connect to your router. This is like knocking on the WiFi door.',
      'You wait in a short loop until status becomes WL_CONNECTED. A timeout stops the wait after about ten seconds. Then you print the IP address with WiFi.localIP.',
      'Copy that IP address for the next lesson. If WiFi drops later, WiFi.reconnect joins again by itself. Always double check spelling and capital letters in your password.',
    ],
    bn: [
      'WiFi তে যুক্ত হতে SSID ও পাসওয়ার্ড দিয়ে WiFi.begin ডাকো। ESP32 তখন রাউটারে সংযুক্ত হওয়ার চেষ্টা করে। এটি WiFi দরজায় টোকা দেওয়ার মতো।',
      'স্ট্যাটাস WL_CONNECTED না হওয়া পর্যন্ত ছোট লুপে অপেক্ষা করো। প্রায় দশ সেকেন্ড পর timeout অপেক্ষা থামিয়ে দেয়। তারপর WiFi.localIP দিয়ে IP ঠিকানা প্রিন্ট করো।',
      'পরের পাঠের জন্য সেই IP ঠিকানা লিখে রাখো। পরে WiFi বিচ্ছিন্ন হলে WiFi.reconnect নিজে আবার যুক্ত হয়। পাসওয়ার্ডে বানান ও বড়-ছোট অক্ষর সবসময় মিলিয়ে দেখো।',
    ],
  },
  'web-server': {
    en: [
      'A web server is like a small shop. Your browser is the customer who asks for a page. The ESP32 is the shopkeeper who sends the page back.',
      'You create a server on port 80, which is the normal web port. server.on tells which function answers the main page. server.begin starts listening for visitors.',
      'server.handleClient must stay inside loop forever. It answers every new visitor one by one. Both your phone and ESP32 must join the same WiFi to see the page.',
    ],
    bn: [
      'ওয়েব সার্ভার হলো ছোট দোকানের মতো। তোমার ব্রাউজার হলো ক্রেতা যে পেজ চায়। ESP32 হলো দোকানদার যে পেজ ফেরত পাঠায়।',
      'তুমি পোর্ট 80 এ সার্ভার বানাও, এটি সাধারণ ওয়েব পোর্ট। server.on বলে দেয় মূল পেজের উত্তর কোন ফাংশন দেবে। server.begin ভিজিটরের জন্য শোনা শুরু করে।',
      'server.handleClient সবসময় loop এর ভেতরে থাকতে হবে। এটি একে একে প্রতিটি নতুন ভিজিটরের উত্তর দেয়। পেজ দেখতে ফোন ও ESP32 একই WiFi তে যুক্ত থাকতে হবে।',
    ],
  },
  'control-led-web': {
    en: [
      'Now your webpage gets two buttons. One button links to the on page and one links to the off page. Tapping a button sends a new request to ESP32.',
      'The on route sets GPIO 2 HIGH to light the blue LED. The off route sets GPIO 2 LOW to turn it off. After each tap the same button page shows again.',
      'You can open the IP address on your phone and computer at the same time. If buttons do nothing, check server.handleClient is still in loop. Try an external LED if your board uses a different pin.',
    ],
    bn: [
      'এখন তোমার ওয়েবপেজে দুটি বোতাম থাকবে। একটি বোতাম on পেজে যায় ও একটি off পেজে যায়। বোতাম চাপলে ESP32 তে নতুন রিকোয়েস্ট যায়।',
      'on route GPIO 2 HIGH করে নীল LED জ্বালায়। off route GPIO 2 LOW করে LED নেভায়। প্রতিটি চাপের পর আবার একই বোতাম পেজ দেখায়।',
      'ফোন ও কম্পিউটারে একই IP ঠিকানা একসাথে খুলতে পারো। বোতাম কাজ না করলে দেখো server.handleClient loop এ আছে কিনা। বোর্ডে পিন ভিন্ন হলে বাহ্যিক LED চেষ্টা করো।',
    ],
  },
  'display-sensor-web': {
    en: [
      'An LDR senses light and forms a divider with a 10k resistor. analogRead gives a number from 0 to 4095. Dark gives low numbers and bright light gives high numbers.',
      'We read from GPIO 34 because it is an ADC1 pin. ADC1 keeps working even when WiFi is on. ADC2 pins stop working with WiFi, so never use them for sensors here.',
      'The webpage shows the light value and refreshes every five seconds. Cover the sensor with your hand to see the number fall. Shine a torch on it to see the number rise.',
    ],
    bn: [
      'LDR আলো টের পায় এবং 10k রেজিস্টরের সাথে divider তৈরি করে। analogRead 0 থেকে 4095 পর্যন্ত সংখ্যা দেয়। অন্ধকারে কম সংখ্যা ও উজ্জ্বল আলোতে বেশি সংখ্যা পাওয়া যায়।',
      'আমরা GPIO 34 থেকে পড়ি কারণ এটি ADC1 পিন। WiFi চালু থাকলেও ADC1 কাজ করতে থাকে। WiFi সহ ADC2 পিন কাজ বন্ধ করে দেয়, তাই এখানে সেন্সরে এগুলো ব্যবহার করো না।',
      'ওয়েবপেজ আলোর মান দেখায় ও প্রতি পাঁচ সেকেন্ডে refresh হয়। হাত দিয়ে সেন্সর ঢাকো তাহলে সংখ্যা কমতে দেখবে। টর্চ ধরলে সংখ্যা বাড়তে দেখবে।',
    ],
  },
}

import { LessonOverview } from '../arduino-lessons/types'

export const overviews: Record<string, LessonOverview> = {
  'bluetooth-basics': {
    en: [
      'Bluetooth is a short-range wireless link between two nearby devices. Your phone can talk directly to your ESP32 without WiFi or the internet. In this lesson you practice pairing the two so they recognize each other.',
      'There are two kinds of Bluetooth on ESP32. Classic Bluetooth acts like a wireless serial cable and is good for steady streams of text and commands. BLE uses very little battery and is better for small sensor values sent now and then.',
      'Think of it this way: choose Classic when you want simple back-and-forth chat with your phone. Choose BLE when battery life matters, like a small sensor running for months. This lesson helps you decide which one your next project needs.',
    ],
    bn: [
      'ব্লুটুথ হলো কাছাকাছি দুটি ডিভাইসের মধ্যে স্বল্প দূরত্বের তারবিহীন সংযোগ। WiFi বা ইন্টারনেট ছাড়াই তোমার ফোন সরাসরি ESP32 এর সাথে কথা বলতে পারে। এই পাঠে তুমি দুটিকে একে অপরকে চিনতে পেয়ার করার অভ্যাস করবে।',
      'ESP32 তে দুই ধরনের ব্লুটুথ আছে। Classic ব্লুটুথ তারবিহীন সিরিয়াল তারের মতো কাজ করে এবং টেক্সট ও কমান্ডের নিয়মিত আদান-প্রদানে ভালো। BLE খুব কম ব্যাটারি খরচ করে এবং মাঝে মাঝে পাঠানো ছোট সেন্সর মানের জন্য ভালো।',
      'এভাবে ভাবো: ফোনের সাথে সহজ দুই দিকের কথা বলতে চাইলে Classic বেছে নাও। ব্যাটারি দীর্ঘদিন চলা দরকার হলে, যেমন মাসের পর মাস চলা ছোট সেন্সর, BLE বেছে নাও। এই পাঠ তোমাকে ঠিক করতে সাহায্য করবে পরের প্রজেক্টে কোনটি দরকার।',
    ],
  },
  'classic-bluetooth': {
    en: [
      'Classic Bluetooth on ESP32 works like a wireless serial cable between your phone and the board. You type letters in a phone app and they arrive at the ESP32 just like text in Serial Monitor. The ESP32 can also send text back to the phone the same way.',
      'In this lesson you give your ESP32 a name and pair it from the Serial Bluetooth Terminal app. Then you send the character 1 to turn the onboard LED on and 0 to turn it off. Typing in Serial Monitor sends text the other way to your phone screen.',
      'This serial link is fast and simple, which makes it great for remote control projects. It uses more battery than BLE, so it suits a robot or car that already has a big battery. Remember this code runs on ESP32 only and needs the Classic app, not a BLE app.',
    ],
    bn: [
      'ESP32 তে Classic ব্লুটুথ ফোন ও বোর্ডের মধ্যে তারবিহীন সিরিয়াল তারের মতো কাজ করে। ফোন অ্যাপে অক্ষর লিখলে তা Serial Monitor এর লেখার মতো ESP32 এ পৌঁছে যায়। ESP32 ও একইভাবে ফোনে টেক্সট ফেরত পাঠাতে পারে।',
      'এই পাঠে তুমি ESP32 কে একটি নাম দেবে এবং Serial Bluetooth Terminal অ্যাপ থেকে পেয়ার করবে। তারপর অনবোর্ড LED জ্বালাতে 1 পাঠাবে আর নেভাতে 0 পাঠাবে। Serial Monitor এ লিখলে উল্টো দিকে তা ফোনের স্ক্রিনে যাবে।',
      'এই সিরিয়াল সংযোগ দ্রুত ও সহজ, তাই রিমোট কন্ট্রোল প্রজেক্টে এটি দারুণ। এটি BLE এর চেয়ে বেশি ব্যাটারি খরচ করে, তাই বড় ব্যাটারির রোবট বা গাড়িতে মানায়। মনে রেখো এই কোড শুধু ESP32 তে চলে এবং BLE অ্যাপ নয়, Classic অ্যাপ দরকার।',
    ],
  },
  'ble-intro': {
    en: [
      'BLE means Bluetooth Low Energy, and it is built for saving battery. Instead of a steady chat, your ESP32 acts as a small server that holds values. Your phone connects, reads a value, or gets a short update.',
      'In this lesson you build a server named ESP32-BLE with one value for a button press count. Each press of the BOOT button updates the value and pushes it to the phone with notify. You watch the count rise in the nRF Connect app.',
      'BLE is slower than Classic but can run for a very long time on a small battery. That makes it perfect for sensors, health bands, and beacons. Use nRF Connect for this lesson, since Classic serial apps cannot read BLE values.',
    ],
    bn: [
      'BLE মানে Bluetooth Low Energy, যা ব্যাটারি বাঁচানোর জন্য তৈরি। একটানা কথোপকথনের বদলে ESP32 ছোট সার্ভারের মতো মান ধরে রাখে। ফোন সংযুক্ত হয়ে মান পড়ে বা ছোট আপডেট নেয়।',
      'এই পাঠে তুমি ESP32-BLE নামে একটি সার্ভার বানাবে যাতে বোতাম চাপ গণনার একটি মান থাকবে। BOOT বোতামের প্রতিটি চাপ মান আপডেট করে notify দিয়ে ফোনে পাঠায়। nRF Connect অ্যাপে গণনা বাড়তে দেখবে।',
      'BLE Classic এর চেয়ে ধীর কিন্তু ছোট ব্যাটারিতে অনেকদিন চলতে পারে। তাই সেন্সর, হেলথ ব্যান্ড ও বিকনের জন্য এটি উপযুক্ত। এই পাঠে nRF Connect ব্যবহার করো, কারণ Classic সিরিয়াল অ্যাপ BLE মান পড়তে পারে না।',
    ],
  },
  'bluetooth-car': {
    en: [
      'In this lesson you build a small car that you drive from your phone. Two DC motors connect through an L298N driver, and Classic Bluetooth carries your commands. The link works like a wireless serial cable from the phone app to the ESP32.',
      'You send single letters: F for forward, B for back, L for left, R for right, and S for stop. The ESP32 sets the IN1 to IN4 pins for direction and the ENA and ENB pins for speed. The car stays stopped by default so it never runs away on power up.',
      'Give the motors their own battery and join the driver ground to the ESP32 ground. Test with the wheels lifted first and a low speed like 150. Always send S to stop, and remember this Classic Bluetooth code works on ESP32 only.',
    ],
    bn: [
      'এই পাঠে তুমি ফোন দিয়ে চালানোর মতো ছোট গাড়ি বানাবে। দুটি DC মোটর L298N ড্রাইভারের মাধ্যমে যুক্ত থাকে, আর Classic ব্লুটুথ তোমার কমান্ড বহন করে। এই সংযোগ ফোন অ্যাপ থেকে ESP32 পর্যন্ত তারবিহীন সিরিয়াল তারের মতো কাজ করে।',
      'তুমি এক অক্ষরের কমান্ড পাঠাবে: সামনে F, পেছনে B, বামে L, ডানে R, আর থামতে S। ESP32 দিক ঠিক করতে IN1 থেকে IN4 পিন এবং গতি ঠিক করতে ENA ও ENB পিন সেট করে। চালু হতেই গাড়ি যেন না ছোটে, তাই ডিফল্টে গাড়ি থেমে থাকে।',
      'মোটরে আলাদা ব্যাটারি দাও এবং ড্রাইভারের গ্রাউন্ড ESP32 গ্রাউন্ডের সাথে এক করো। প্রথমে চাকা উঁচুতে রেখে 150 এর মতো কম গতিতে পরীক্ষা করো। থামাতে সবসময় S পাঠাও, আর মনে রেখো এই Classic ব্লুটুথ কোড শুধু ESP32 তে চলে।',
    ],
  },
  'iot-intro': {
    en: [
      'IoT means Internet of Things, which is everyday objects connected to the internet. A sensor reads something, WiFi carries it to the cloud, and your phone shows it. A smart bulb, a fitness band, and a home weather display are all IoT devices.',
      'The flow is simple: device to WiFi to cloud to phone. The device collects data like temperature. The cloud stores it and makes charts. Your phone app reads the cloud and shows buttons and graphs.',
      'ESP32 fits IoT very well because it has WiFi, sensors, and motors in one small board. In this lesson you only print the flow on Serial Monitor with no WiFi needed. It builds the mental picture before real cloud projects begin.',
    ],
    bn: [
      'IoT মানে Internet of Things, অর্থাৎ দৈনন্দিন জিনিস ইন্টারনেটে যুক্ত থাকা। সেন্সর কিছু মাপে, WiFi তা ক্লাউডে পাঠায়, আর ফোনে তা দেখা যায়। স্মার্ট বাল্ব, ফিটনেস ব্যান্ড ও বাসার আবহাওয়া ডিসপ্লে সবই IoT ডিভাইস।',
      'প্রবাহটি সহজ: ডিভাইস থেকে WiFi থেকে ক্লাউড থেকে ফোন। ডিভাইস তাপমাত্রার মতো ডেটা সংগ্রহ করে। ক্লাউড তা জমা রাখে ও চার্ট বানায়। ফোন অ্যাপ ক্লাউড পড়ে বোতাম ও গ্রাফ দেখায়।',
      'ESP32 IoT এর জন্য খুব মানানসই, কারণ একটি ছোট বোর্ডে WiFi, সেন্সর ও মোটর নিয়ন্ত্রণ একসাথে আছে। এই পাঠে WiFi ছাড়া শুধু Serial Monitor এ প্রবাহটি প্রিন্ট করবে। আসল ক্লাউড প্রজেক্টের আগে এটি মানসিক ধারণা তৈরি করে।',
    ],
  },
  'blynk-setup': {
    en: [
      'Blynk is a phone app and web dashboard for live control of your device. You tap a button on your phone, the Blynk cloud passes the message, and your ESP32 reacts at once. It is built for two-way control, so sensor values can flow back to gauges on the same dashboard.',
      'In this lesson you create a template, copy your auth token, and add a button on V0 plus a gauge on V1. Pressing the button runs code on the ESP32 that turns the GPIO 2 LED on or off. A timer sends a sensor reading to the gauge every couple of seconds.',
      'Blynk is different from a data logger because the focus is instant control from your phone. It is the fastest way to get a working remote switch with almost no web code. Keep the auth token exact and set the button to V0 in Switch mode.',
    ],
    bn: [
      'Blynk হলো ফোন অ্যাপ ও ওয়েব ড্যাশবোর্ড যা ডিভাইস সরাসরি নিয়ন্ত্রণ করে। ফোনে বোতাম চাপলে Blynk ক্লাউড বার্তা পৌঁছে দেয় এবং ESP32 সাথে সাথে কাজ করে। এটি দুই দিকের নিয়ন্ত্রণের জন্য তৈরি, তাই সেন্সর মান একই ড্যাশবোর্ডের গেজে ফিরে আসতে পারে।',
      'এই পাঠে তুমি টেমপ্লেট বানাবে, auth token কপি করবে, এবং V0 তে বোতাম ও V1 তে গেজ যোগ করবে। বোতাম চাপলে ESP32 তে কোড চলে যা GPIO 2 LED জ্বালায় বা নেভায়। টাইমার প্রতি কয়েক সেকেন্ডে গেজে সেন্সর মান পাঠায়।',
      'Blynk ডেটা লগারের চেয়ে আলাদা, কারণ এর মূল লক্ষ্য ফোন থেকে তাৎক্ষণিক নিয়ন্ত্রণ। প্রায় ওয়েব কোড ছাড়া কার্যকর রিমোট সুইচ পাওয়ার দ্রুততম উপায় এটি। auth token হুবহু রাখো এবং বোতাম V0 তে Switch মোডে সেট করো।',
    ],
  },
  'thingspeak': {
    en: [
      'ThingSpeak is a simple cloud site for storing sensor data and drawing graphs. Your ESP32 reads the DHT11 temperature and humidity, then sends the numbers in a web link every 20 seconds. The channel page turns field1 and field2 into live charts you can open anywhere.',
      'In this lesson you create a channel with two fields and copy the write API key. The DATA wire of the sensor sits on GPIO 15. Each loop builds an update link with your key and the two readings, then sends it with a plain HTTP GET.',
      'ThingSpeak is different from Blynk because it is a logger first, not a live switch. It is perfect for watching trends over hours and days. Send slowly, at least 15 seconds apart, and always use the Write key, not the Read key.',
    ],
    bn: [
      'ThingSpeak হলো সেন্সর ডেটা জমা রেখে গ্রাফ আঁকার সহজ ক্লাউড সাইট। ESP32 DHT11 থেকে তাপমাত্রা ও আর্দ্রতা পড়ে প্রতি ২০ সেকেন্ডে ওয়েব লিংকে সংখ্যা পাঠায়। চ্যানেল পেজ field1 ও field2 কে লাইভ চার্টে বদলে দেয় যা যেকোনো জায়গা থেকে খোলা যায়।',
      'এই পাঠে তুমি দুটি ফিল্ডসহ চ্যানেল বানাবে এবং write API key কপি করবে। সেন্সরের DATA তার GPIO 15 এ থাকবে। প্রতিটি লুপে তোমার key ও দুটি রিডিং দিয়ে আপডেট লিংক তৈরি হয়, তারপর সাধারণ HTTP GET দিয়ে পাঠানো হয়।',
      'ThingSpeak Blynk থেকে আলাদা, কারণ এটি আগে লগার, লাইভ সুইচ নয়। ঘণ্টা ও দিনের প্রবণতা দেখতে এটি উপযুক্ত। ধীরে পাঠাও, অন্তত ১৫ সেকেন্ড পর পর, এবং Read key নয়, সবসময় Write key ব্যবহার করো।',
    ],
  },
  'firebase-esp32': {
    en: [
      'Firebase Realtime Database is a cloud tree that holds live values for your project. Your ESP32 reads the led value with a simple web GET and turns the GPIO 2 LED on or off. Then it pushes temperature and humidity to the sensor branch with a PUT.',
      'In this lesson you use plain HTTP calls instead of heavy libraries. Changing the led value in the Firebase console changes the real LED within seconds. The sensor JSON appears in the database viewer at the same time.',
      'Firebase is different from Blynk and ThingSpeak because it is a flexible live database, not a fixed dashboard or chart site. You shape the data tree yourself and can link it to apps and websites later. Check the project URL exactly and allow read and write rules for practice.',
    ],
    bn: [
      'Firebase Realtime Database হলো ক্লাউড গাছ যা প্রজেক্টের লাইভ মান ধরে রাখে। ESP32 সহজ ওয়েব GET দিয়ে led মান পড়ে GPIO 2 LED জ্বালায় বা নেভায়। তারপর PUT দিয়ে sensor শাখায় তাপমাত্রা ও আর্দ্রতা পাঠায়।',
      'এই পাঠে ভারী লাইব্রেরির বদলে সাধারণ HTTP কল ব্যবহার করবে। Firebase console এ led মান বদলালে কয়েক সেকেন্ডে আসল LED বদলে যায়। একই সময়ে ডাটাবেজ ভিউয়ারে সেন্সর JSON দেখা যায়।',
      'Firebase Blynk ও ThingSpeak থেকে আলাদা, কারণ এটি নির্দিষ্ট ড্যাশবোর্ড বা চার্ট সাইট নয়, নমনীয় লাইভ ডাটাবেজ। ডেটা গাছ তুমি নিজে সাজাও এবং পরে অ্যাপ ও ওয়েবসাইটে যুক্ত করতে পারো। প্রজেক্ট URL হুবহু দেখো এবং অনুশীলনে read ও write নিয়ম চালু রাখো।',
    ],
  },
  'smart-home': {
    en: [
      'A mini smart home in this lesson is an ESP32, a relay module, a DHT11 sensor, and the Blynk app working together. A phone button on V0 flips the relay, and the relay switches a lamp or fan on and off. A gauge on V1 shows the room temperature from the sensor.',
      'The relay sits between the ESP32 and the lamp like an automatic switch. The small GPIO 25 signal tells the relay IN pin when to close. The lamp current flows through the COM and NO terminals, so the ESP32 never touches the high voltage directly.',
      'Mains power can seriously hurt you, so treat every relay wire with care. Test first with an LED, unplug mains before moving any wire, and ask an adult or teacher for help with real home wiring. Many relay boards are active low, so HIGH keeps them safely off at start.',
    ],
    bn: [
      'এই পাঠের ছোট স্মার্ট হোম হলো ESP32, রিলে মডিউল, DHT11 সেন্সর ও Blynk অ্যাপের একসাথে কাজ। V0 তে ফোন বোতাম রিলে বদলায়, আর রিলে ল্যাম্প বা ফ্যান জ্বালায় বা নেভায়। V1 গেজে সেন্সর থেকে ঘরের তাপমাত্রা দেখা যায়।',
      'রিলে ESP32 ও ল্যাম্পের মাঝে স্বয়ংক্রিয় সুইচের মতো বসে। GPIO 25 এর ছোট সংকেত রিলে IN পিনকে কখন বন্ধ হতে হবে তা বলে। ল্যাম্পের কারেন্ট COM ও NO টার্মিনাল দিয়ে যায়, তাই ESP32 সরাসরি উচ্চ ভোল্টেজ স্পর্শ করে না।',
      'মেইনস বিদ্যুৎ মারাত্মক ক্ষতি করতে পারে, তাই প্রতিটি রিলে তার সাবধানে ধরো। আগে LED দিয়ে পরীক্ষা করো, তার সরানোর আগে মেইনস খুলে নাও, এবং আসল বাসার ওয়্যারিংয়ে বড়দের বা শিক্ষকের সাহায্য নাও। অনেক রিলে বোর্ড active low, তাই শুরুতে HIGH সেগুলিকে নিরাপদে বন্ধ রাখে।',
    ],
  },
  'weather-station-iot': {
    en: [
      'An IoT weather station is three parts working as one system. The DHT11 on GPIO 15 senses temperature and humidity. A small OLED on SDA 21 and SCL 22 shows the live values on your desk. WiFi then uploads the same readings to ThingSpeak cloud.',
      'Every 20 seconds the ESP32 reads the sensor, updates the OLED text, and sends an HTTP link with field1 and field2. ThingSpeak stores the points and draws charts you can open on your phone from anywhere. The local display and the cloud chart always show the same room weather.',
      'This is the finale track because it joins wiring, display, WiFi, and cloud in one build. Keep at least 15 seconds between uploads for the free limit. If the OLED stays black, check the 0x3C address, and if readings show nan, check the DATA wire and read gap.',
    ],
    bn: [
      'IoT ওয়েদার স্টেশন হলো একসাথে কাজ করা তিনটি অংশ। GPIO 15 এর DHT11 তাপমাত্রা ও আর্দ্রতা মাপে। SDA 21 ও SCL 22 এর ছোট OLED টেবিলে লাইভ মান দেখায়। তারপর WiFi একই রিডিং ThingSpeak ক্লাউডে পাঠায়।',
      'প্রতি ২০ সেকেন্ডে ESP32 সেন্সর পড়ে, OLED লেখা আপডেট করে, এবং field1 ও field2 সহ HTTP লিংক পাঠায়। ThingSpeak পয়েন্ট জমা রেখে চার্ট আঁকে যা যেকোনো জায়গা থেকে ফোনে খোলা যায়। স্থানীয় ডিসপ্লে ও ক্লাউড চার্টে একই ঘরের আবহাওয়া দেখা যায়।',
      'এটি ফিনালে ট্র্যাক, কারণ এক বিল্ডে ওয়্যারিং, ডিসপ্লে, WiFi ও ক্লাউড এক হয়েছে। ফ্রি সীমার জন্য আপলোডের মাঝে অন্তত ১৫ সেকেন্ড রাখো। OLED কালো থাকলে 0x3C ঠিকানা দেখো, আর রিডিং nan দেখালে DATA তার ও পড়ার বিরতি দেখো।',
    ],
  },
  'security-camera': {
    en: [
      'In this lesson an AI-Thinker ESP32-CAM becomes a WiFi security camera. The small camera sensor captures pictures, the ESP32 turns them into a JPEG stream, and your home WiFi shares the stream. You open the live video in a browser at the stream address on port 81.',
      'Flashing the board needs an FTDI adapter with TX to RX, RX to TX, GND to GND, and 5V to 5V. GPIO 0 joins GND only during flashing and must be removed after upload. For daily running, use a stable 5V 2A supply so weak power does not cause brownout restarts.',
      'Point the camera at a door or desk and watch the picture on your phone on the same WiFi. If video lags, switch from VGA to QVGA for a smaller and faster picture. You built a real camera system from sensor plus WiFi plus browser viewer.',
    ],
    bn: [
      'এই পাঠে AI-Thinker ESP32-CAM WiFi সিকিউরিটি ক্যামেরা হয়। ছোট ক্যামেরা সেন্সর ছবি তোলে, ESP32 সেগুলিকে JPEG স্ট্রিমে বদলায়, আর বাসার WiFi স্ট্রিম ভাগ করে। পোর্ট 81 এর স্ট্রিম ঠিকানায় ব্রাউজারে লাইভ ভিডিও খুলবে।',
      'বোর্ড ফ্ল্যাশে FTDI অ্যাডাপ্টার লাগে TX থেকে RX, RX থেকে TX, GND থেকে GND, আর 5V থেকে 5V। শুধু ফ্ল্যাশের সময় GPIO 0 GND এর সাথে যুক্ত থাকে এবং আপলোড শেষে খুলতে হয়। প্রতিদিন চালাতে স্থিতিশীল 5V 2A সাপ্লাই দাও যেন দুর্বল পাওয়ারে brownout রিস্টার্ট না হয়।',
      'ক্যামেরা দরজা বা টেবিলের দিকে তাক করো এবং একই WiFi তে ফোনে ছবি দেখো। ভিডিও ধীর হলে ছোট ও দ্রুত ছবির জন্য VGA থেকে QVGA তে বদলাও। সেন্সর সাথে WiFi সাথে ব্রাউজার ভিউয়ার মিলে তুমি আসল ক্যামেরা সিস্টেম বানালে।',
    ],
  },
  'home-automation': {
    en: [
      'This capstone joins everything into one full home automation system. A 2-channel relay on GPIO 25 and 26 controls two lights. A DHT11 on GPIO 15 reports room temperature. The Blynk dashboard gives phone buttons on V1 and V2 plus a temperature gauge.',
      'Physical buttons on GPIO 32 and 33 use INPUT_PULLUP and wire straight to ground. Pressing a button flips the matching light even if WiFi is down. The relays are active low, so LOW turns a light on and HIGH keeps it safely off at boot.',
      'Phone control and manual buttons work side by side, so the house always stays usable. Start with LED bulbs only and never touch relay screws while mains is plugged in. Ask an adult electrician for real 220V wiring, since mains mistakes can be fatal.',
    ],
    bn: [
      'এই ক্যাপস্টোনে সবকিছু মিলে সম্পূর্ণ হোম অটোমেশন সিস্টেম হয়। GPIO 25 ও 26 এর ২-চ্যানেল রিলে দুটি বাতি চালায়। GPIO 15 এর DHT11 ঘরের তাপমাত্রা জানায়। Blynk ড্যাশবোর্ডে V1 ও V2 তে ফোন বোতাম ও তাপমাত্রা গেজ থাকে।',
      'GPIO 32 ও 33 এর ফিজিক্যাল বোতাম INPUT_PULLUP ব্যবহার করে সরাসরি গ্রাউন্ডে লাগে। বোতাম চাপলে WiFi বন্ধ থাকলেও matching বাতি বদলে যায়। রিলে active low, তাই LOW বাতি জ্বালায় এবং HIGH বুটে নিরাপদে বন্ধ রাখে।',
      'ফোন নিয়ন্ত্রণ ও হাতের বোতাম পাশাপাশি কাজ করে, তাই বাসা সবসময় ব্যবহারযোগ্য থাকে। শুরুতে শুধু LED বাল্ব চালাও এবং মেইনস লাগানো থাকতে রিলে স্ক্রু স্পর্শ কোরো না। আসল 220V ওয়্যারিংয়ে প্রাপ্তবয়স্ক ইলেকট্রিশিয়ানের সাহায্য নাও, কারণ মেইনস ভুল প্রাণঘাতী হতে পারে।',
    ],
  },
}

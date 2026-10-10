import { LessonOverview } from './types'

export const overviews: Record<string, LessonOverview> = {
  'l298n-driver': {
    en: [
      'An Arduino pin can only supply about 20 to 40 milliamps, but even a small DC motor needs hundreds of milliamps to spin. Connecting a motor directly can overheat and damage the pin. The L298N driver solves this by taking power from a separate battery and switching it to the motors on Arduino command.',
      'Inside the L298N are two H-bridge circuits, so it can drive two DC motors independently. Each H-bridge flips the polarity across the motor to change direction. The IN1 to IN4 pins set forward, reverse, or stop, following a simple truth table.',
      'Speed is controlled with PWM on the ENA and ENB pins. A value like analogWrite 200 gives about 78 percent speed. Remember to share ground between Arduino and the driver and use a 7 to 12 volt supply for the motors.',
    ],
    bn: [
      'Arduino পিন মাত্র ২০ থেকে ৪০ মিলিঅ্যাম্প দিতে পারে, কিন্তু ছোট DC মোটর ঘুরতে শত শত মিলিঅ্যাম্প লাগে। সরাসরি মোটর লাগালে পিন গরম হয়ে নষ্ট হতে পারে। L298N ড্রাইভার আলাদা ব্যাটারি থেকে পাওয়ার নিয়ে Arduino এর নির্দেশে মোটরে দেয়।',
      'L298N এর ভেতরে দুটি H-bridge সার্কিট আছে, তাই দুটি DC মোটর আলাদাভাবে চালানো যায়। প্রতিটি H-bridge মোটরের পোলারিটি বদলে দিক বদলায়। IN1 থেকে IN4 পিন দিয়ে forward, reverse বা stop ঠিক হয় সহজ truth table মেনে।',
      'ENA ও ENB পিনে PWM দিয়ে গতি নিয়ন্ত্রণ করা হয়। analogWrite 200 মানে প্রায় ৭৮ শতাংশ গতি। Arduino ও ড্রাইভারের GND এক করতে হবে এবং মোটরের জন্য ৭ থেকে ১২ ভোল্ট সাপ্লাই ব্যবহার করতে হবে।',
    ],
  },
  'l293d-driver': {
    en: [
      'Arduino pins cannot provide the current that DC gear motors need, so a driver chip must sit between them. The L293D motor shield plugs right on top of the Arduino and handles that heavy current for you. It draws motor power from its own external supply instead of the Arduino 5V pin.',
      'Each channel on the shield is an H-bridge that reverses motor direction by flipping polarity. The AFMotor library makes this easy with commands like run FORWARD and run BACKWARD. Motors connect to the M1 and M2 screw terminals on the shield.',
      'Speed is set with setSpeed from 0 to 255, which is PWM under the hood. RELEASE lets the motor coast to a stop, while BRAKE stops it firmly. This shield is a simple way to build a two-wheel robot base.',
    ],
    bn: [
      'DC গিয়ার মোটরের যে কারেন্ট দরকার তা Arduino পিন দিতে পারে না, তাই মাঝে ড্রাইভার চিপ লাগে। L293D মোটর শিল্ড সরাসরি Arduino এর ওপরে বসে যায় এবং ভারী কারেন্ট সামলায়। মোটরের পাওয়ার Arduino 5V থেকে না নিয়ে আলাদা বাহ্যিক সাপ্লাই থেকে নেয়।',
      'শিল্ডের প্রতিটি চ্যানেল একটি H-bridge, যা পোলারিটি বদলে মোটরের দিক বদলায়। AFMotor লাইব্রেরি দিয়ে run FORWARD ও run BACKWARD কমান্ডে এটি সহজ হয়। মোটর শিল্ডের M1 ও M2 স্ক্রু টার্মিনালে লাগে।',
      'setSpeed 0 থেকে 255 দিয়ে গতি ঠিক হয়, যা ভেতরে PWM হিসেবে কাজ করে। RELEASE দিলে মোটর ধীরে থামে, আর BRAKE দিলে শক্তভাবে থামে। দুই চাকার রোবট বেস বানাতে এই শিল্ড সহজ উপায়।',
    ],
  },
  'bts7960-driver': {
    en: [
      'Big high-torque DC motors can draw many amps, far beyond what an Arduino pin or a small driver can handle. The BTS7960 is a dual H-bridge module built for these high-current motors. It accepts a separate motor supply up to 24 volts while the Arduino only sends small control signals.',
      'One motor channel uses RPWM and LPWM pins plus R_EN and L_EN enable pins. Driving RPWM with PWM while LPWM stays low spins the motor forward. Swapping them reverses the motor, and setting both low stops it.',
      'The enable pins must be HIGH for the driver to work. PWM duty cycle sets the speed, so lower values are safer for first tests. The module has a heat sink because high current makes heat, so never exceed the motor current rating.',
    ],
    bn: [
      'বড় হাই-টর্ক DC মোটর অনেক অ্যাম্প কারেন্ট টানে, যা Arduino পিন বা ছোট ড্রাইভারের সাধ্যের বাইরে। BTS7960 এই হাই-কারেন্ট মোটরের জন্য তৈরি dual H-bridge মডিউল। মোটরের জন্য ২৪ ভোল্ট পর্যন্ত আলাদা সাপ্লাই নেয়, আর Arduino শুধু ছোট কন্ট্রোল সিগন্যাল পাঠায়।',
      'একটি মোটর চ্যানেলে RPWM ও LPWM পিন এবং R_EN ও L_EN এনেবল পিন থাকে। LPWM low রেখে RPWM এ PWM দিলে মোটর সামনে ঘোরে। দুটি অদলবদল করলে মোটর উল্টো ঘোরে, আর দুটি low করলে থেমে যায়।',
      'ড্রাইভার চালু করতে এনেবল পিন HIGH রাখতে হয়। PWM duty cycle গতি ঠিক করে, তাই প্রথম টেস্টে কম মান নিরাপদ। হাই কারেন্টে গরম হয় বলে মডিউলে heat sink আছে, তাই মোটরের কারেন্ট রেটিং পার করা যাবে না।',
    ],
  },
  'stepper-motor': {
    en: [
      'A stepper motor moves in small fixed steps instead of spinning freely like a DC motor. This makes it perfect when you need precise angles, like pointing a pointer or moving a slider. The common 28BYJ-48 takes 2048 steps for one full turn because of its internal gearing.',
      'Arduino pins cannot drive the motor coils directly, so the ULN2003 driver board sits in between. Its IN1 to IN4 inputs connect to Arduino pins 8 to 11. The board switches coil current in the right sequence to step the motor.',
      'The Stepper library hides the stepping sequence for you. You call setSpeed to set rpm and step with a step count to rotate. Positive steps turn clockwise and negative steps turn counter-clockwise.',
    ],
    bn: [
      'স্টেপার মোটর DC মোটরের মতো অবাধে ঘোরে না, ছোট নির্দিষ্ট step এ ঘোরে। নির্দিষ্ট কোণে ঘোরাতে হলে এটি আদর্শ, যেমন কাঁটা ঘোরানো বা স্লাইডার সরানো। ভেতরের গিয়ারের কারণে 28BYJ-48 এক পাকে ২০৪৮ step নেয়।',
      'Arduino পিন সরাসরি মোটর কয়েল চালাতে পারে না, তাই মাঝে ULN2003 ড্রাইভার বোর্ড থাকে। এর IN1 থেকে IN4 ইনপুট Arduino পিন ৮ থেকে ১১ এ লাগে। বোর্ড সঠিক ক্রমে কয়েল কারেন্ট চালু করে মোটরকে step করায়।',
      'Stepper লাইব্রেরি stepping ক্রম সামলে নেয়। setSpeed দিয়ে rpm ঠিক করো এবং step সংখ্যা দিয়ে ঘোরাও। ধনাত্মক step ঘড়ির কাঁটার দিকে এবং ঋণাত্মক step উল্টো দিকে ঘোরে।',
    ],
  },
  'bluetooth-hc05': {
    en: [
      'The HC-05 module adds wireless serial-over-Bluetooth to your Arduino. Your phone sees it as a wireless serial cable. You pair it once, then send characters from a Bluetooth terminal app.',
      'Wiring crosses over: module TX goes to Arduino RX and module RX goes to Arduino TX. Using SoftwareSerial on pins 10 and 11 keeps the USB serial free for debugging. Both the app and the code must use 9600 baud.',
      'A simple sketch reads one character at a time. Sending 1 turns the LED on and 0 turns it off. The same idea scales up to robot commands like F, B, L, and R for driving.',
    ],
    bn: [
      'HC-05 মডিউল Arduino তে Bluetooth দিয়ে wireless serial যোগ করে। ফোন একে wireless serial তারের মতো দেখে। একবার pair করে Bluetooth terminal অ্যাপ থেকে অক্ষর পাঠানো যায়।',
      'সংযোগ cross করে লাগে: মডিউলের TX Arduino RX এ এবং মডিউলের RX Arduino TX এ যায়। ১০ ও ১১ পিনে SoftwareSerial ব্যবহার করলে USB serial debug এর জন্য খালি থাকে। অ্যাপ ও কোড দুটোতেই ৯৬০০ baud রাখতে হয়।',
      'সহজ স্কেচ একবারে একটি অক্ষর পড়ে। 1 পাঠালে LED জ্বলে আর 0 পাঠালে নেভে। একই ধারণা বাড়িয়ে F, B, L, R কমান্ডে রোবট চালানো যায়।',
    ],
  },
  'nrf24l01': {
    en: [
      'The NRF24L01 Plus is a small 2.4GHz radio that lets two Arduinos talk without wires. One board transmits sensor readings and the other receives them. It is cheaper than WiFi and works without a router or phone.',
      'It connects over SPI using CE, CSN, MOSI, MISO, and SCK pins. Power must be 3.3 volts, never 5 volts. A 10 microfarad capacitor near VCC keeps the radio stable.',
      'Radios link through addresses called pipes and selectable channels. The transmitter opens a writing pipe and the receiver opens the same reading pipe. The RF24 library handles sending and receiving packets for you.',
    ],
    bn: [
      'NRF24L01 Plus ছোট ২.৪GHz রেডিও যা দুটি Arduino কে তার ছাড়া কথা বলতে দেয়। একটি বোর্ড সেন্সর মান পাঠায়, অন্যটি গ্রহণ করে। WiFi এর চেয়ে সস্তা এবং রাউটার বা ফোন ছাড়াই চলে।',
      'এটি CE, CSN, MOSI, MISO ও SCK পিন দিয়ে SPI তে যুক্ত হয়। পাওয়ার ৩.৩ ভোল্ট হতে হবে, কখনো ৫ ভোল্ট নয়। VCC এর কাছে ১০ মাইক্রোফ্যারাড ক্যাপাসিটর রেডিও স্থিতিশীল রাখে।',
      'রেডিও pipe নামের address ও বেছে নেওয়া channel দিয়ে যুক্ত হয়। ট্রান্সমিটার writing pipe খোলে আর রিসিভার একই reading pipe খোলে। RF24 লাইব্রেরি প্যাকেট পাঠানো ও পাওয়া সামলে নেয়।',
    ],
  },
  'smart-dustbin': {
    en: [
      'This project builds a touch-free dustbin that opens its lid when your hand comes close. An HC-SR04 ultrasonic sensor watches the space above the bin. An SG90 servo lifts the lid when something is within about 15 centimeters.',
      'The Arduino loops by measuring distance and comparing it to the open threshold. When a hand is detected, the servo moves to the open angle. When the hand leaves, the servo returns to the closed angle after a short delay.',
      'All parts share 5V and ground, with Trig on pin 9, Echo on pin 10, and servo signal on pin 6. Mount the sensor facing up and link the servo horn to the lid with wire or cardboard. It is a fun first system combining sensing and motion.',
    ],
    bn: [
      'এই প্রজেক্টে হাত কাছে এলে ঢাকনা খুলে যায় এমন touch-free ডাস্টবিন বানানো হয়। HC-SR04 ultrasonic সেন্সর বিনের ওপরের জায়গা দেখে। প্রায় ১৫ সেন্টিমিটারের মধ্যে কিছু এলে SG90 servo ঢাকনা তুলে ধরে।',
      'Arduino বারবার দূরত্ব মেপে খোলার সীমার সাথে তুলনা করে। হাত পেলে servo খোলা কোণে যায়। হাত সরে গেলে অল্প delay পর servo বন্ধ কোণে ফিরে আসে।',
      'সব অংশ common 5V ও GND ব্যবহার করে, Trig ৯ পিনে, Echo ১০ পিনে, servo সিগন্যাল ৬ পিনে। সেন্সর ওপরের দিকে লাগাও এবং servo horn তার বা কার্ডবোর্ড দিয়ে ঢাকনায় যুক্ত করো। sensing ও motion মিলিয়ে এটি মজার প্রথম সিস্টেম।',
    ],
  },
  'security-alarm': {
    en: [
      'This project is a small home security alarm built from simple parts. A PIR sensor detects body motion and a magnetic reed switch detects a door opening. A buzzer and LED sound the alarm when either one triggers.',
      'A push button arms and disarms the whole system. When armed, the LED stays on to show guard mode. When disarmed, motion and door events are ignored.',
      'The PIR connects to pin 2, the reed switch to pin 3 with pullup, the button to pin 4, and buzzer and LED to pins 8 and 13. The code loops by checking the button, then sounding a beep pattern on intrusion. Add an exit delay so you can leave after arming.',
    ],
    bn: [
      'এই প্রজেক্টে সহজ parts দিয়ে ছোট home security alarm বানানো হয়। PIR সেন্সর শরীরের নড়াচড়া ধরে আর magnetic reed switch দরজা খোলা ধরে। যেকোনো একটি trigger করলে buzzer ও LED alarm বাজায়।',
      'একটি push button পুরো সিস্টেম arm ও disarm করে। armed থাকলে guard mode বোঝাতে LED জ্বলে থাকে। disarm থাকলে motion ও door ঘটনা উপেক্ষা করা হয়।',
      'PIR ২ পিনে, reed switch pullup সহ ৩ পিনে, button ৪ পিনে, buzzer ও LED ৮ ও ১৩ পিনে লাগে। কোড button দেখে, তারপর intrusion হলে beep pattern বাজায়। arm করার পর বের হওয়ার জন্য exit delay যোগ করো।',
    ],
  },
  'plant-watering': {
    en: [
      'This project waters your plant automatically when the soil gets dry. A soil moisture sensor sits in the pot and reports dryness as an analog value. A relay switches a small water pump on and off so the Arduino never touches pump current directly.',
      'The code uses two thresholds to avoid rapid on and off switching. When the reading passes the dry limit, the pump starts. When it falls below the wet limit or a five second safety timer ends, the pump stops.',
      'The sensor connects to A0 and the relay input to pin 7. Pump power flows through the relay NO and COM contacts from an external 5V supply. Calibrate the dry and wet values in your own soil for best results.',
    ],
    bn: [
      'এই প্রজেক্টে মাটি শুকিয়ে গেলে গাছে নিজে নিজে পানি দেয়। টবে soil moisture সেন্সর থাকে এবং শুষ্কতা analog মান হিসেবে জানায়। relay ছোট water pump চালু-বন্ধ করে, তাই Arduino সরাসরি pump কারেন্ট ছোঁয় না।',
      'কোডে বারবার চালু-বন্ধ এড়াতে দুটি সীমা ব্যবহার হয়। মান dry সীমা পার হলে pump চালু হয়। wet সীমার নিচে নামলে বা পাঁচ সেকেন্ড safety timer শেষ হলে pump বন্ধ হয়।',
      'সেন্সর A0 তে আর relay ইনপুট ৭ পিনে লাগে। বাহ্যিক 5V সাপ্লাই থেকে relay NO ও COM contact দিয়ে pump পাওয়ার যায়। ভালো ফলের জন্য নিজের মাটিতে dry ও wet মান calibrate করো।',
    ],
  },
  'obstacle-robot': {
    en: [
      'This project combines a motor driver and a distance sensor into a robot that avoids walls by itself. Two DC gear motors on an L298N driver move the chassis. An HC-SR04 ultrasonic sensor on the front watches for obstacles.',
      'The behavior is a simple loop: drive forward while the path is clear. When something comes within about 20 centimeters, stop, turn right, then drive on. The ENA PWM value sets how fast it cruises.',
      'Motor inputs use pins 8 to 11 with ENA on pin 5, and the sensor uses Trig and Echo pins. All grounds stay common and motors take power from a 7 to 12 volt battery. Check distance values in Serial if the robot only spins, since that usually means swapped motor wires.',
    ],
    bn: [
      'এই প্রজেক্টে মোটর ড্রাইভার ও দূরত্ব সেন্সর মিলে নিজে নিজে দেয়াল এড়ানো রোবট হয়। L298N ড্রাইভারে দুটি DC গিয়ার মোটর চেসিস চালায়। সামনে HC-SR04 ultrasonic সেন্সর বাধা দেখে।',
      'আচরণ সহজ loop: পথ খালি থাকলে সামনে চলো। প্রায় ২০ সেন্টিমিটারের মধ্যে কিছু এলে থামো, ডানে ঘোরো, তারপর আবার চলো। ENA PWM মান চলার গতি ঠিক করে।',
      'মোটর ইনপুট ৮ থেকে ১১ পিনে আর ENA ৫ পিনে, সেন্সর Trig ও Echo পিনে লাগে। সব GND common থাকে আর মোটর ৭ থেকে ১২ ভোল্ট ব্যাটারি থেকে পাওয়ার নেয়। রোবট শুধু ঘুরলে Serial এ দূরত্ব দেখো, সাধারণত মোটরের তার অদলবদল হয়েছে।',
    ],
  },
}

import { ProjectGuide } from './project-types'

export const guides: Record<string, ProjectGuide> = {
  'smart-dustbin': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This project builds a touch-free dustbin that opens its lid when your hand comes close. An ultrasonic sensor measures distance and a small servo motor lifts the lid.',
      'It is a fun beginner project. You learn distance sensing, servo control, and simple decision making with if conditions.',
    ],
    overviewBn: [
      'এই প্রজেক্টে একটি হাত না লাগানো ডাস্টবিন বানাবে যা হাত কাছে আনলে ঢাকনা খুলে দেয়। আলট্রাসনিক সেন্সর দূরত্ব মাপে এবং একটি ছোট সার্ভো মোটর ঢাকনা তোলে।',
      'এটি মজার একটি বিগিনার প্রজেক্ট। তুমি দূরত্ব মাপা, সার্ভো চালানো এবং if কন্ডিশন দিয়ে সহজ সিদ্ধান্ত নেওয়া শিখবে।',
    ],
    howItWorks: [
      'The HC-SR04 sensor sends sound pulses from TRIG and listens for the echo on ECHO. Arduino measures the travel time and converts it to distance in centimeters.',
      'If the distance is less than 40 cm, Arduino rotates the SG90 servo from 0 to 90 degrees. The lid stays open for 3 seconds, then closes again.',
      'The servo signal wire connects to D6. Power comes from 5V and GND. If the servo jitters, use a separate 5V supply with common GND.',
    ],
    howItWorksBn: [
      'HC-SR04 সেন্সর TRIG থেকে শব্দের পালস পাঠায় এবং ECHO পিনে প্রতিধ্বনি শোনে। Arduino সময় মেপে সেটিকে সেন্টিমিটারে দূরত্বে বদলে দেয়।',
      'দূরত্ব ৪০ সেমির কম হলে Arduino SG90 সার্ভোকে ০ থেকে ৯০ ডিগ্রিতে ঘোরায়। ঢাকনা ৩ সেকেন্ড খোলা থাকে, তারপর আবার বন্ধ হয়।',
      'সার্ভোর সিগন্যাল তার D6 পিনে লাগে। পাওয়ার আসে 5V এবং GND থেকে। সার্ভো কাঁপলে কমন GND রেখে আলাদা 5V সাপ্লাই ব্যবহার করো।',
    ],
    pins: [
      { from: '5V', to: 'VCC', part: 'Ultrasonic HC-SR04' },
      { from: 'GND', to: 'GND', part: 'Ultrasonic HC-SR04' },
      { from: 'D9', to: 'TRIG', part: 'Ultrasonic HC-SR04', note: 'Trigger output pin', noteBn: 'ট্রিগার আউটপুট পিন' },
      { from: 'D10', to: 'ECHO', part: 'Ultrasonic HC-SR04', note: 'Echo input pin', noteBn: 'ইকো ইনপুট পিন' },
      { from: 'D6', to: 'Signal (Orange)', part: 'SG90 Servo', note: 'PWM signal wire', noteBn: 'PWM সিগন্যাল তার' },
      { from: '5V', to: 'VCC (Red)', part: 'SG90 Servo', note: 'Use external 5V if jittery, share GND', noteBn: 'কাঁপলে আলাদা 5V দাও, GND এক রাখো' },
      { from: 'GND', to: 'GND (Brown)', part: 'SG90 Servo' },
    ],
    steps: [
      'Mount the HC-SR04 on the front of the bin facing outward and fix the servo on the lid hinge.',
      'Wire VCC and GND of the sensor to 5V and GND, TRIG to D9, and ECHO to D10.',
      'Connect servo signal to D6, servo VCC to 5V, and servo GND to GND.',
      'Upload the sketch and open Serial Monitor at 9600 baud to see distance readings.',
      'Bring your hand within 40 cm and check that the lid opens for 3 seconds.',
      'Adjust sensor angle and servo horn position so the lid opens and closes smoothly.',
    ],
    stepsBn: [
      'বিনের সামনে HC-SR04 বাইরের দিকে মুখ করে লাগাও এবং ঢাকনার কবজায় সার্ভো বসাও।',
      'সেন্সরের VCC ও GND 5V ও GND তে দাও, TRIG D9 তে এবং ECHO D10 তে লাগাও।',
      'সার্ভোর সিগন্যাল D6 তে, VCC 5V তে এবং GND কে GND তে লাগাও।',
      'স্কেচ আপলোড করো এবং 9600 বড রেটে Serial Monitor খুলে দূরত্ব দেখো।',
      'হাত ৪০ সেমির ভেতরে আনো এবং দেখো ঢাকনা ৩ সেকেন্ড খুলে থাকে কিনা।',
      'সেন্সরের অ্যাঙ্গেল ও সার্ভোর হর্ন ঠিক করো যাতে ঢাকনা মসৃণভাবে খোলে ও বন্ধ হয়।',
    ],
    code: `// smart_dustbin.ino
// Auto lid opens when hand is closer than 40 cm.
#include <Servo.h>

const int TRIG_PIN = 9;
const int ECHO_PIN = 10;
const int SERVO_PIN = 6;
const int OPEN_DISTANCE_CM = 40;

Servo lidServo;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  lidServo.attach(SERVO_PIN);
  lidServo.write(0);
  Serial.println(F("Smart dustbin ready"));
}

long readDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  if (duration == 0) {
    return 999;
  }
  return duration / 58;
}

void loop() {
  long dist = readDistanceCm();
  Serial.print(F("Distance: "));
  Serial.print(dist);
  Serial.println(F(" cm"));
  if (dist < OPEN_DISTANCE_CM) {
    lidServo.write(90);
    delay(3000);
    lidServo.write(0);
    delay(500);
  }
  delay(200);
}
`,
    codeTitle: 'smart_dustbin.ino',
    codeLanguage: 'cpp',
    tips: [
      'Keep sensor wires short so echo readings stay stable.',
      'If the servo jitters, power it from a separate 5V adapter and join the GND wires.',
      'Point the sensor slightly upward so the bin wall does not cause false triggers.',
    ],
    tipsBn: [
      'সেন্সরের তার ছোট রাখো, তাহলে রিডিং স্থির থাকবে।',
      'সার্ভো কাঁপলে আলাদা 5V অ্যাডাপ্টার দাও এবং GND তার একসাথে জোড়া দাও।',
      'সেন্সর একটু উপরের দিকে তাক করো যাতে বিনের দেয়ালে ভুল ট্রিগার না হয়।',
    ],
  },
  'plant-watering': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This project waters your plant automatically when the soil gets dry. A soil moisture sensor checks the soil and a small pump adds water through a relay switch.',
      'It is perfect for beginners. You learn analog reading, threshold comparison, and safe control of a pump with a relay.',
    ],
    overviewBn: [
      'মাটি শুকিয়ে গেলে এই প্রজেক্ট গাছে নিজে নিজে পানি দেয়। সয়েল ময়েশ্চার সেন্সর মাটি পরীক্ষা করে এবং রিলে সুইচ দিয়ে ছোট পাম্প পানি দেয়।',
      'বিগিনারদের জন্য এটি দারুণ। তুমি অ্যানালগ রিডিং, থ্রেশহোল্ড তুলনা এবং রিলে দিয়ে নিরাপদে পাম্প চালানো শিখবে।',
    ],
    howItWorks: [
      'The soil sensor outputs an analog voltage on AO. Wet soil gives a low number and dry soil gives a high number. Arduino reads it on A0.',
      'When the reading is above about 500, the soil is dry. Arduino pulls relay IN on D7 LOW because the relay is active-low, and the pump runs for 5 seconds.',
    ],
    howItWorksBn: [
      'সয়েল সেন্সর AO পিনে অ্যানালগ ভোল্টেজ দেয়। ভেজা মাটিতে সংখ্যা কম হয়, শুকনো মাটিতে বেশি হয়। Arduino A0 পিনে তা পড়ে।',
      'রিডিং প্রায় ৫০০ এর বেশি হলে মাটি শুকনো। রিলে active-low বলে Arduino D7 পিন LOW করে, তখন পাম্প ৫ সেকেন্ড চলে।',
    ],
    pins: [
      { from: '5V', to: 'VCC', part: 'Soil Moisture Sensor' },
      { from: 'GND', to: 'GND', part: 'Soil Moisture Sensor' },
      { from: 'A0', to: 'AO', part: 'Soil Moisture Sensor', note: 'Analog moisture level', noteBn: 'অ্যানালগ আর্দ্রতার মান' },
      { from: '5V', to: 'VCC', part: '1-Channel Relay' },
      { from: 'GND', to: 'GND', part: '1-Channel Relay' },
      { from: 'D7', to: 'IN', part: '1-Channel Relay', note: 'Active-low: LOW turns pump on', noteBn: 'Active-low: LOW দিলে পাম্প চালু হয়' },
      { from: '5V ext (+)', to: 'COM', part: '1-Channel Relay', note: 'Separate pump supply', noteBn: 'পাম্পের আলাদা সাপ্লাই' },
      { from: 'NO', to: 'Pump +', part: 'Mini Water Pump', note: 'Pump GND to ext supply GND', noteBn: 'পাম্পের GND বাইরের সাপ্লাই GND তে' },
    ],
    steps: [
      'Push the soil probe into the plant pot and keep the top circuit board dry.',
      'Wire soil sensor VCC to 5V, GND to GND, and AO to A0.',
      'Wire relay VCC to 5V, GND to GND, and IN to D7.',
      'Connect the pump through relay COM and NO with a separate 5V battery supply.',
      'Upload the sketch and check Serial Monitor values for wet and dry soil.',
      'Adjust the threshold near 500 and test that the pump runs for 5 seconds when dry.',
    ],
    stepsBn: [
      'সয়েল প্রোব গাছের টবে ঢোকাও এবং উপরের সার্কিট বোর্ড শুকনো রাখো।',
      'সয়েল সেন্সরের VCC 5V তে, GND GND তে এবং AO A0 তে লাগাও।',
      'রিলের VCC 5V তে, GND GND তে এবং IN D7 তে লাগাও।',
      'আলাদা 5V ব্যাটারি দিয়ে রিলের COM ও NO হয়ে পাম্প লাগাও।',
      'স্কেচ আপলোড করো এবং ভেজা ও শুকনো মাটির মান Serial Monitor এ দেখো।',
      'থ্রেশহোল্ড ৫০০ এর কাছে ঠিক করো এবং দেখো শুকনো হলে পাম্প ৫ সেকেন্ড চলে কিনা।',
    ],
    code: `// plant_watering.ino
// Waters plant for 5 seconds when soil reading is above threshold.
const int SOIL_PIN = A0;
const int RELAY_PIN = 7;
const int DRY_THRESHOLD = 500;

void setup() {
  Serial.begin(9600);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH); // relay off (active-low)
  Serial.println(F("Plant watering ready"));
}

void loop() {
  int moisture = analogRead(SOIL_PIN);
  Serial.print(F("Soil: "));
  Serial.println(moisture);
  if (moisture > DRY_THRESHOLD) {
    Serial.println(F("Soil dry, pumping"));
    digitalWrite(RELAY_PIN, LOW); // pump on
    delay(5000);
    digitalWrite(RELAY_PIN, HIGH); // pump off
    delay(2000);
  }
  delay(1000);
}
`,
    codeTitle: 'plant_watering.ino',
    codeLanguage: 'cpp',
    tips: [
      'Never power the pump from Arduino 5V pin. Use a separate battery or adapter.',
      'Calibrate the threshold by testing real wet and dry soil values first.',
      'Keep sensor electronics away from water and dry the probe after use.',
    ],
    tipsBn: [
      'পাম্পে কখনো Arduino 5V পিন থেকে পাওয়ার দিও না। আলাদা ব্যাটারি বা অ্যাডাপ্টার ব্যবহার করো।',
      'আগে আসল ভেজা ও শুকনো মাটির মান দেখে থ্রেশহোল্ড ঠিক করো।',
      'সেন্সরের ইলেকট্রনিক্স পানি থেকে দূরে রাখো এবং ব্যবহার শেষে প্রোব মুছে রাখো।',
    ],
  },
  'fire-alarm': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This project sounds a buzzer when it sees flame or smoke gas. A flame sensor watches for fire light and an MQ-2 sensor watches for smoke and gas.',
      'It teaches digital and analog inputs together. You learn how a simple alarm decision can keep homes safer.',
    ],
    overviewBn: [
      'আগুনের আলো বা ধোঁয়া দেখলে এই প্রজেক্ট বাজার বাজিয়ে সতর্ক করে। ফ্লেম সেন্সর আগুনের আলো দেখে এবং MQ-2 সেন্সর ধোঁয়া ও গ্যাস দেখে।',
      'এটি ডিজিটাল ও অ্যানালগ ইনপুট একসাথে শেখায়। সহজ অ্যালার্ম সিদ্ধান্ত কীভাবে ঘর নিরাপদ রাখে তা তুমি শিখবে।',
    ],
    howItWorks: [
      'The flame sensor gives digital output on DO. It stays HIGH normally and goes LOW when flame is detected. Arduino reads it on D8.',
      'The MQ-2 gives an analog value on AO. Clean air reads low and smoke or gas reads high. Arduino sounds the alarm on D12 if flame is LOW or gas is above 400.',
    ],
    howItWorksBn: [
      'ফ্লেম সেন্সর DO পিনে ডিজিটাল আউটপুট দেয়। সাধারণত HIGH থাকে, আগুন দেখলে LOW হয়। Arduino D8 পিনে তা পড়ে।',
      'MQ-2 AO পিনে অ্যানালগ মান দেয়। পরিষ্কার বাতাসে মান কম, ধোঁয়া বা গ্যাসে বেশি। আগুন LOW হলে বা গ্যাস ৪০০ এর বেশি হলে Arduino D12 এ অ্যালার্ম বাজায়।',
    ],
    pins: [
      { from: '5V', to: 'VCC', part: 'Flame Sensor' },
      { from: 'GND', to: 'GND', part: 'Flame Sensor' },
      { from: 'D8', to: 'DO', part: 'Flame Sensor', note: 'LOW means flame found', noteBn: 'LOW মানে আগুন পাওয়া গেছে' },
      { from: '5V', to: 'VCC', part: 'MQ-2 Gas Sensor' },
      { from: 'GND', to: 'GND', part: 'MQ-2 Gas Sensor' },
      { from: 'A1', to: 'AO', part: 'MQ-2 Gas Sensor', note: 'Burn in 24h for stable readings', noteBn: 'স্থির মানের জন্য ২৪ ঘণ্টা বার্ন-ইন করো' },
      { from: 'D12', to: '+', part: 'Buzzer', note: 'Use 220 ohm series resistor', noteBn: '২২০ ওহম রেজিস্টর সিরিজে দাও' },
      { from: 'GND', to: '-', part: 'Buzzer' },
    ],
    steps: [
      'Place the flame sensor and MQ-2 away from direct wind with Lego or stand support.',
      'Wire flame sensor VCC to 5V, GND to GND, and DO to D8.',
      'Wire MQ-2 VCC to 5V, GND to GND, and AO to A1.',
      'Connect buzzer positive to D12 through a 220 ohm resistor and negative to GND.',
      'Upload the sketch and open Serial Monitor at 9600 baud.',
      'Test with a small lighter far away and check that the buzzer sounds.',
    ],
    stepsBn: [
      'ফ্লেম সেন্সর ও MQ-2 সরাসরি বাতাস থেকে দূরে স্ট্যান্ডে বসাও।',
      'ফ্লেম সেন্সরের VCC 5V তে, GND GND তে এবং DO D8 তে লাগাও।',
      'MQ-2 এর VCC 5V তে, GND GND তে এবং AO A1 তে লাগাও।',
      'বাজারের পজিটিভ ২২০ ওহম রেজিস্টর দিয়ে D12 তে এবং নেগেটিভ GND তে লাগাও।',
      'স্কেচ আপলোড করো এবং 9600 বড রেটে Serial Monitor খোলো।',
      'দূর থেকে ছোট লাইটার দিয়ে পরীক্ষা করো এবং বাজার বাজে কিনা দেখো।',
    ],
    code: `// fire_alarm.ino
// Buzzer on if flame LOW or gas above 400.
const int FLAME_PIN = 8;
const int GAS_PIN = A1;
const int BUZZER_PIN = 12;
const int GAS_THRESHOLD = 400;

void setup() {
  Serial.begin(9600);
  pinMode(FLAME_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
  Serial.println(F("Fire alarm ready"));
}

void loop() {
  int flame = digitalRead(FLAME_PIN);
  int gas = analogRead(GAS_PIN);
  Serial.print(F("Flame: "));
  Serial.print(flame);
  Serial.print(F(" Gas: "));
  Serial.println(gas);
  bool fire = (flame == LOW) || (gas > GAS_THRESHOLD);
  if (fire) {
    tone(BUZZER_PIN, 1000);
    delay(500);
    noTone(BUZZER_PIN);
    delay(300);
  } else {
    noTone(BUZZER_PIN);
    delay(500);
  }
}
`,
    codeTitle: 'fire_alarm.ino',
    codeLanguage: 'cpp',
    tips: [
      'Heat the MQ-2 for a day first so gas readings become stable.',
      'Keep the buzzer sound short in tests to protect your ears.',
      'Never test with big fire. Use a small lighter from a safe distance.',
    ],
    tipsBn: [
      'MQ-2 আগে একদিন গরম করে রাখো, তাহলে গ্যাস রিডিং স্থির হবে।',
      'পরীক্ষার সময় বাজারের শব্দ ছোট রাখো, কান নিরাপদ থাকবে।',
      'বড় আগুন দিয়ে কখনো পরীক্ষা কোরো না। নিরাপদ দূরত্বে ছোট লাইটার ব্যবহার করো।',
    ],
  },
  'weather-station': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This project shows temperature and humidity on an LCD screen and saves the data to an SD card. A DHT11 sensor reads the air and Arduino logs it every few seconds.',
      'It is a great data project for beginners. You learn sensor libraries, I2C display wiring, and simple file logging.',
    ],
    overviewBn: [
      'এই প্রজেক্ট LCD স্ক্রিনে তাপমাত্রা ও আর্দ্রতা দেখায় এবং SD কার্ডে ডেটা সেভ করে। DHT11 সেন্সর বাতাস পড়ে এবং Arduino প্রতি কয়েক সেকেন্ডে তা লগ করে।',
      'বিগিনারদের জন্য এটি চমৎকার ডেটা প্রজেক্ট। তুমি সেন্সর লাইব্রেরি, I2C ডিসপ্লে ও সহজ ফাইল লগিং শিখবে।',
    ],
    howItWorks: [
      'The DHT11 measures temperature and humidity and sends digital data to D2. Arduino reads it with the DHT library.',
      'A 16x2 I2C LCD on A4 (SDA) and A5 (SCL) shows the live values. Address 0x27 is used with the LiquidCrystal_I2C library.',
      'The SD module uses SPI on D11, D12, D13 with CS on D4. Arduino appends temperature and humidity lines to a log file with the SD library.',
    ],
    howItWorksBn: [
      'DHT11 তাপমাত্রা ও আর্দ্রতা মাপে এবং D2 পিনে ডিজিটাল ডেটা পাঠায়। Arduino DHT লাইব্রেরি দিয়ে তা পড়ে।',
      'A4 (SDA) ও A5 (SCL) পিনে 16x2 I2C LCD লাইভ মান দেখায়। LiquidCrystal_I2C লাইব্রেরি দিয়ে 0x27 অ্যাড্রেস ব্যবহার হয়।',
      'SD মডিউল D11, D12, D13 দিয়ে SPI এবং D4 দিয়ে CS ব্যবহার করে। Arduino SD লাইব্রেরি দিয়ে লগ ফাইলে তাপমাত্রা ও আর্দ্রতা লেখে।',
    ],
    pins: [
      { from: '5V', to: 'VCC', part: 'DHT11 Sensor', note: 'Also power LCD and SD from 5V rail', noteBn: 'LCD ও SD তেও 5V রেল থেকে পাওয়ার দাও' },
      { from: 'GND', to: 'GND', part: 'DHT11 Sensor', note: 'Share GND for all modules', noteBn: 'সব মডিউলের GND এক করো' },
      { from: 'D2', to: 'DATA', part: 'DHT11 Sensor', note: 'Needs DHT library', noteBn: 'DHT লাইব্রেরি লাগবে' },
      { from: 'A4', to: 'SDA', part: 'LCD I2C 16x2', note: 'LiquidCrystal_I2C addr 0x27, VCC to 5V GND to GND', noteBn: 'LiquidCrystal_I2C 0x27, VCC 5V ও GND GND তে' },
      { from: 'A5', to: 'SCL', part: 'LCD I2C 16x2' },
      { from: 'D11', to: 'MOSI', part: 'MicroSD Module', note: 'VCC to 5V GND to GND', noteBn: 'VCC 5V তে GND GND তে' },
      { from: 'D12', to: 'MISO', part: 'MicroSD Module' },
      { from: 'D13', to: 'SCK', part: 'MicroSD Module' },
      { from: 'D4', to: 'CS', part: 'MicroSD Module', note: 'Needs SD library', noteBn: 'SD লাইব্রেরি লাগবে' },
    ],
    steps: [
      'Install DHT sensor library, LiquidCrystal_I2C, and SD libraries in Arduino IDE.',
      'Wire DHT11 VCC to 5V, GND to GND, and DATA to D2.',
      'Wire LCD SDA to A4, SCL to A5, plus VCC to 5V and GND to GND.',
      'Wire SD MOSI to D11, MISO to D12, SCK to D13, CS to D4, plus 5V and GND.',
      'Insert a FAT32 formatted SD card and upload the sketch.',
      'Check LCD values and open the log file on a computer to confirm logging.',
    ],
    stepsBn: [
      'Arduino IDE তে DHT sensor library, LiquidCrystal_I2C ও SD লাইব্রেরি ইনস্টল করো।',
      'DHT11 এর VCC 5V তে, GND GND তে এবং DATA D2 তে লাগাও।',
      'LCD এর SDA A4 তে, SCL A5 তে, সাথে VCC 5V তে ও GND GND তে লাগাও।',
      'SD এর MOSI D11 তে, MISO D12 তে, SCK D13 তে, CS D4 তে, সাথে 5V ও GND লাগাও।',
      'FAT32 ফরম্যাট করা SD কার্ড ঢোকাও এবং স্কেচ আপলোড করো।',
      'LCD এর মান দেখো এবং কম্পিউটারে লগ ফাইল খুলে লগিং নিশ্চিত করো।',
    ],
    code: `// weather_station.ino
// Shows DHT11 data on LCD and logs to SD card.
#include <SPI.h>
#include <SD.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT11
#define SD_CS 4

DHT dht(DHT_PIN, DHT_TYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(9600);
  dht.begin();
  lcd.init();
  lcd.backlight();
  lcd.print(F("Weather Station"));
  Serial.println(F("Weather station ready"));
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD fail"));
    lcd.setCursor(0, 1);
    lcd.print(F("SD fail"));
  } else {
    Serial.println(F("SD ok"));
  }
  delay(1500);
  lcd.clear();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println(F("DHT read fail"));
    delay(2000);
    return;
  }
  lcd.setCursor(0, 0);
  lcd.print(F("T:"));
  lcd.print(t);
  lcd.print(F("C "));
  lcd.setCursor(0, 1);
  lcd.print(F("H:"));
  lcd.print(h);
  lcd.print(F("% "));
  Serial.print(F("Temp: "));
  Serial.print(t);
  Serial.print(F(" Hum: "));
  Serial.println(h);
  File f = SD.open("log.txt", FILE_WRITE);
  if (f) {
    f.print(t);
    f.print(",");
    f.println(h);
    f.close();
  }
  delay(5000);
}
`,
    codeTitle: 'weather_station.ino',
    codeLanguage: 'cpp',
    tips: [
      'Format the SD card as FAT32 or the SD library will not read it.',
      'If LCD shows boxes, adjust the back contrast pot and check 0x27 address.',
      'Keep DHT11 away from direct sun for true room readings.',
    ],
    tipsBn: [
      'SD কার্ড FAT32 ফরম্যাট করো, নইলে SD লাইব্রেরি পড়তে পারবে না।',
      'LCD তে বাক্স দেখালে পেছনের কনট্রাস্ট ঘোরাও এবং 0x27 অ্যাড্রেস দেখো।',
      'সঠিক রুম রিডিংয়ের জন্য DHT11 সরাসরি রোদ থেকে দূরে রাখো।',
    ],
  },
}

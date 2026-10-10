import { Esp32LessonsMap } from './types'

export const bluetoothLessons: Esp32LessonsMap = {
  'bluetooth-basics': {
    title: 'Understanding Bluetooth',
    titleBn: 'ব্লুটুথ বোঝা',
    duration: '10 min',
    level: 'beginner',
    description: 'Learn what Bluetooth is. See Classic vs BLE simply. Practice pairing your phone with ESP32.',
    descriptionBn: 'ব্লুটুথ কী তা শিখুন। Classic বনাম BLE সহজে বুঝুন। ফোনের সাথে ESP32 পেয়ার করার অভ্যাস করুন।',
    whatYouWillLearn: [
      'What Bluetooth is in simple words',
      'Difference between Classic Bluetooth and BLE',
      'What Serial-to-Serial means',
      'How to pair your phone with ESP32',
    ],
    whatYouWillLearnBn: [
      'সহজ ভাষায় ব্লুটুথ কী',
      'Classic ব্লুটুথ ও BLE এর পার্থক্য',
      'Serial-to-Serial মানে কী',
      'ফোনের সাথে ESP32 পেয়ার করা',
    ],
    components: ['ESP32 board', 'USB cable', 'Smartphone with Bluetooth'],
    circuitDescription: 'Connect ESP32 to your computer with USB. No extra wiring. Turn on phone Bluetooth for pairing practice.',
    circuitDescriptionBn: 'USB দিয়ে ESP32 কম্পিউটারে সংযুক্ত করুন। অতিরিক্ত তার লাগবে না। পেয়ারিং অভ্যাসের জন্য ফোনের ব্লুটুথ চালু করুন।',
    code: `// Bluetooth Basics - Serial test before using Bluetooth
// Open Serial Monitor at 115200 to see messages

void setup() {
  Serial.begin(115200);
  Serial.println("ESP32 ready!");
  Serial.println("Next: pair phone with ESP32 over Bluetooth.");
}

void loop() {
  Serial.println("ESP32 is running...");
  delay(2000);
}`,
    codeExplanation: [
      { line: 5, text: 'Serial.begin(115200) starts messages to your computer.', textBn: 'Serial.begin(115200) কম্পিউটারে মেসেজ পাঠানো শুরু করে।' },
      { line: 6, text: 'We print ready text so you know ESP32 works.', textBn: 'ESP32 ঠিক আছে বোঝাতে ready লেখা প্রিন্ট করি।' },
      { line: 11, text: 'loop() prints a heartbeat every 2 seconds.', textBn: 'loop() প্রতি ২ সেকেন্ডে একটি মেসেজ প্রিন্ট করে।' },
    ],
    commonMistakes: [
      { mistake: 'Using Classic Bluetooth app for a BLE project', mistakeBn: 'BLE প্রজেক্টে Classic ব্লুটুথ অ্যাপ ব্যবহার', solution: 'Classic uses Serial Bluetooth Terminal. BLE uses nRF Connect. Match the app to your code.', solutionBn: 'Classic এর জন্য Serial Bluetooth Terminal। BLE এর জন্য nRF Connect। কোড অনুযায়ী অ্যাপ বেছে নিন।' },
      { mistake: 'Phone cannot find ESP32', mistakeBn: 'ফোন ESP32 খুঁজে পায় না', solution: 'Upload code first. Keep phone close. Turn phone Bluetooth off and on again.', solutionBn: 'আগে কোড আপলোড করুন। ফোন কাছে রাখুন। ফোনের ব্লুটুথ বন্ধ করে আবার চালু করুন।' },
    ],
    tryItTips: ['Turn on phone Bluetooth and scan for ESP32', 'Open Serial Monitor at 115200 baud to see messages', 'Ask: is my next project Classic or BLE?'],
    tryItTipsBn: ['ফোনের ব্লুটুথ চালু করে ESP32 স্ক্যান করুন', 'Serial Monitor 115200 baud এ খুলে মেসেজ দেখুন', 'ভাবুন: আমার পরের প্রজেক্ট Classic না BLE?'],
  },

  'classic-bluetooth': {
    title: 'ESP32 Classic Bluetooth',
    titleBn: 'ESP32 Classic ব্লুটুথ',
    duration: '15 min',
    level: 'beginner',
    description: 'Use BluetoothSerial to link ESP32 and phone. Echo text both ways. Control an LED with 1 and 0.',
    descriptionBn: 'BluetoothSerial দিয়ে ESP32 ও ফোন যুক্ত করুন। দুই দিকে টেক্সট পাঠান। 1 ও 0 দিয়ে LED চালান।',
    whatYouWillLearn: [
      'Include BluetoothSerial.h on ESP32',
      'Name your ESP32 with SerialBT.begin',
      'Echo text between phone and Serial Monitor',
      'Turn LED on with 1 and off with 0',
    ],
    whatYouWillLearnBn: [
      'ESP32 তে BluetoothSerial.h যোগ করা',
      'SerialBT.begin দিয়ে ESP32 এর নাম দেওয়া',
      'ফোন ও Serial Monitor এর মধ্যে টেক্সট পাঠানো',
      '1 দিয়ে LED চালু ও 0 দিয়ে বন্ধ করা',
    ],
    components: ['ESP32 board', 'USB cable', 'Smartphone with Serial Bluetooth Terminal app', 'LED (optional, onboard LED on GPIO 2 works)'],
    circuitDescription: 'No wiring needed. Uses onboard LED on GPIO 2. Pair phone with ESP32_Robot in Serial Bluetooth Terminal app.',
    circuitDescriptionBn: 'কোনো তার লাগবে না। GPIO 2 এর অনবোর্ড LED ব্যবহার হবে। Serial Bluetooth Terminal অ্যাপে ESP32_Robot পেয়ার করুন।',
    code: `#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

const int ledPin = 2;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Robot");
  pinMode(ledPin, OUTPUT);
  Serial.println("Pair with ESP32_Robot from your phone!");
}

void loop() {
  if (Serial.available()) {
    char c = Serial.read();
    SerialBT.write(c);
  }
  if (SerialBT.available()) {
    char c = SerialBT.read();
    Serial.write(c);
    if (c == '1') {
      digitalWrite(ledPin, HIGH);
      Serial.println("LED ON");
    }
    if (c == '0') {
      digitalWrite(ledPin, LOW);
      Serial.println("LED OFF");
    }
  }
}`,
    codeExplanation: [
      { line: 1, text: 'BluetoothSerial.h adds Classic Bluetooth. ESP32 only.', textBn: 'BluetoothSerial.h Classic ব্লুটুথ যোগ করে। শুধু ESP32 তে চলে।' },
      { line: 3, text: 'SerialBT is our Bluetooth link object.', textBn: 'SerialBT হলো আমাদের ব্লুটুথ সংযোগ।' },
      { line: 9, text: 'SerialBT.begin names your ESP32 ESP32_Robot.', textBn: 'SerialBT.begin আপনার ESP32 এর নাম দেয় ESP32_Robot।' },
      { line: 17, text: 'Text from computer goes to the phone over Bluetooth.', textBn: 'কম্পিউটারের টেক্সট ব্লুটুথে ফোনে যায়।' },
      { line: 22, text: 'Character 1 turns the LED on.', textBn: '1 অক্ষর LED চালু করে।' },
      { line: 26, text: 'Character 0 turns the LED off.', textBn: '0 অক্ষর LED বন্ধ করে।' },
    ],
    commonMistakes: [
      { mistake: 'Trying BluetoothSerial on Arduino Uno', mistakeBn: 'Arduino Uno তে BluetoothSerial চালানো', solution: 'BluetoothSerial works on ESP32 only. Uno has no Bluetooth. Use ESP32 board.', solutionBn: 'BluetoothSerial শুধু ESP32 তে চলে। Uno তে ব্লুটুথ নেই। ESP32 বোর্ড ব্যবহার করুন।' },
      { mistake: 'Using nRF Connect for Classic Bluetooth code', mistakeBn: 'Classic ব্লুটুথ কোডে nRF Connect ব্যবহার', solution: 'Classic code needs Serial Bluetooth Terminal app. nRF Connect is for BLE only.', solutionBn: 'Classic কোডে Serial Bluetooth Terminal অ্যাপ লাগে। nRF Connect শুধু BLE এর জন্য।' },
    ],
    tryItTips: ['Send 1 and 0 from the phone app to blink the LED', 'Type in Serial Monitor and see it on your phone', 'Rename ESP32_Robot to your own name and re-pair'],
    tryItTipsBn: ['ফোন অ্যাপ থেকে 1 ও 0 পাঠিয়ে LED জ্বালান', 'Serial Monitor এ লিখে ফোনে দেখুন', 'ESP32_Robot নাম বদলে নিজের নাম দিন ও আবার পেয়ার করুন'],
  },

  'ble-intro': {
    title: 'Introduction to BLE',
    titleBn: 'BLE পরিচিতি',
    duration: '15 min',
    level: 'beginner',
    description: 'Build your first BLE server named ESP32-BLE. Count button presses. See values with notify in nRF Connect.',
    descriptionBn: 'প্রথম BLE সার্ভার বানান ESP32-BLE নামে। বোতাম চাপ গুনুন। nRF Connect এ notify দিয়ে মান দেখুন।',
    whatYouWillLearn: [
      'What a BLE server and characteristic are',
      'Create a named BLE server on ESP32',
      'Send button count with notify',
      'Read values in nRF Connect app',
    ],
    whatYouWillLearnBn: [
      'BLE সার্ভার ও characteristic কী',
      'ESP32 তে নামসহ BLE সার্ভার বানানো',
      'notify দিয়ে বোতাম গণনা পাঠানো',
      'nRF Connect অ্যাপে মান পড়া',
    ],
    components: ['ESP32 board', 'USB cable', 'Smartphone with nRF Connect app'],
    circuitDescription: 'No wiring needed. Uses BOOT button on GPIO 0. Open nRF Connect and scan for ESP32-BLE.',
    circuitDescriptionBn: 'কোনো তার লাগবে না। GPIO 0 এর BOOT বোতাম ব্যবহার হবে। nRF Connect খুলে ESP32-BLE স্ক্যান করুন।',
    code: `#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHAR_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

BLECharacteristic *pChar;
int count = 0;
const int btnPin = 0;

void setup() {
  Serial.begin(115200);
  pinMode(btnPin, INPUT_PULLUP);
  BLEDevice::init("ESP32-BLE");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  pChar = pService->createCharacteristic(CHAR_UUID, BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY);
  pChar->addDescriptor(new BLE2902());
  pService->start();
  BLEAdvertising *pAdv = BLEDevice::getAdvertising();
  pAdv->addServiceUUID(SERVICE_UUID);
  pAdv->start();
  Serial.println("Open nRF Connect and find ESP32-BLE!");
}

void loop() {
  if (digitalRead(btnPin) == LOW) {
    count++;
    pChar->setValue(String(count).c_str());
    pChar->notify();
    Serial.print("Count: ");
    Serial.println(count);
    delay(300);
  }
  delay(10);
}`,
    codeExplanation: [
      { line: 1, text: 'These 4 includes add BLE support to ESP32.', textBn: 'এই ৪টি include ESP32 তে BLE সাপোর্ট যোগ করে।' },
      { line: 16, text: 'BLEDevice::init names your device ESP32-BLE.', textBn: 'BLEDevice::init ডিভাইসের নাম দেয় ESP32-BLE।' },
      { line: 19, text: 'The characteristic holds the button count value.', textBn: 'characteristic বোতাম গণনার মান ধরে রাখে।' },
      { line: 20, text: 'BLE2902 lets the phone turn on notify.', textBn: 'BLE2902 ফোনকে notify চালু করতে দেয়।' },
      { line: 32, text: 'notify() pushes the new count to your phone.', textBn: 'notify() নতুন গণনা ফোনে পাঠায়।' },
    ],
    commonMistakes: [
      { mistake: 'Using Serial Bluetooth Terminal for BLE code', mistakeBn: 'BLE কোডে Serial Bluetooth Terminal ব্যবহার', solution: 'BLE code needs nRF Connect app. Serial Bluetooth Terminal is for Classic only.', solutionBn: 'BLE কোডে nRF Connect অ্যাপ লাগে। Serial Bluetooth Terminal শুধু Classic এর জন্য।' },
      { mistake: 'Values never update in nRF Connect', mistakeBn: 'nRF Connect এ মান আপডেট হয় না', solution: 'Tap the notify icon (three arrows) on the characteristic. Then press BOOT button.', solutionBn: 'characteristic এর notify আইকনে (তিন তীর) চাপ দিন। তারপর BOOT বোতাম চাপুন।' },
    ],
    tryItTips: ['Press BOOT button and watch count rise in nRF Connect', 'Enable notify on the characteristic first', 'Open Serial Monitor at 115200 to see Count prints'],
    tryItTipsBn: ['BOOT বোতাম চাপুন ও nRF Connect এ গণনা বাড়তে দেখুন', 'আগে characteristic এ notify চালু করুন', 'Serial Monitor 115200 এ খুলে Count প্রিন্ট দেখুন'],
  },

  'bluetooth-car': {
    title: 'Bluetooth Controlled Car',
    titleBn: 'ব্লুটুথ নিয়ন্ত্রিত গাড়ি',
    duration: '25 min',
    level: 'intermediate',
    description: 'Drive a 2-motor car with L298N over Classic Bluetooth. Send F, B, L, R, S from your phone. Stops by default.',
    descriptionBn: 'L298N দিয়ে 2 মোটরের গাড়ি Classic ব্লুটুথে চালান। ফোন থেকে F, B, L, R, S পাঠান। ডিফল্টে থেমে থাকে।',
    whatYouWillLearn: [
      'Wire L298N with 2 DC motors to ESP32',
      'Drive motors with ENA, ENB and IN1 to IN4',
      'Control the car with F, B, L, R, S letters',
      'Keep the car stopped by default for safety',
    ],
    whatYouWillLearnBn: [
      'L298N ও 2 DC মোটর ESP32 এর সাথে লাগানো',
      'ENA, ENB ও IN1 থেকে IN4 দিয়ে মোটর চালানো',
      'F, B, L, R, S অক্ষরে গাড়ি চালানো',
      'নিরাপত্তায় গাড়ি ডিফল্টে থামিয়ে রাখা',
    ],
    components: ['ESP32 board', 'L298N motor driver', '2 DC motors + robot chassis + wheels', 'Separate 4xAA or 2-cell battery for motors', 'Smartphone with Serial Bluetooth Terminal app', 'Jumper wires'],
    circuitDescription: 'ENA→26, IN1→27, IN2→14, IN3→12, IN4→25, ENB→33. Motor battery to L298N 12V+GND. Join ESP32 GND to L298N GND.',
    circuitDescriptionBn: 'ENA→26, IN1→27, IN2→14, IN3→12, IN4→25, ENB→33। মোটর ব্যাটারি L298N 12V+GND তে। ESP32 GND ও L298N GND এক করুন।',
    code: `#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

const int ENA = 26;
const int IN1 = 27;
const int IN2 = 14;
const int IN3 = 12;
const int IN4 = 25;
const int ENB = 33;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Robot");
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENB, OUTPUT);
  stopCar();
  Serial.println("Pair ESP32_Robot. Send F B L R S.");
}

void loop() {
  if (SerialBT.available()) {
    char cmd = SerialBT.read();
    Serial.println(cmd);
    if (cmd == 'F') moveForward();
    else if (cmd == 'B') moveBack();
    else if (cmd == 'L') turnLeft();
    else if (cmd == 'R') turnRight();
    else if (cmd == 'S') stopCar();
  }
}

void moveForward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

void moveBack() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 200);
  analogWrite(ENB, 200);
}

void turnLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
}

void turnRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, 180);
  analogWrite(ENB, 180);
}

void stopCar() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}`,
    codeExplanation: [
      { line: 1, text: 'BluetoothSerial.h works on ESP32 only, not Uno.', textBn: 'BluetoothSerial.h শুধু ESP32 তে চলে, Uno তে নয়।' },
      { line: 14, text: 'SerialBT.begin names the car ESP32_Robot.', textBn: 'SerialBT.begin গাড়ির নাম দেয় ESP32_Robot।' },
      { line: 21, text: 'stopCar() at start keeps wheels still for safety.', textBn: 'শুরুতে stopCar() চাকা থামিয়ে রাখে নিরাপত্তার জন্য।' },
      { line: 29, text: 'F means forward. B back. L left. R right. S stop.', textBn: 'F মানে সামনে। B পেছনে। L বামে। R ডানে। S থামো।' },
      { line: 73, text: 'stopCar() sets all pins LOW and speed to 0.', textBn: 'stopCar() সব পিন LOW ও গতি 0 করে।' },
    ],
    commonMistakes: [
      { mistake: 'Motors powered from ESP32 5V pin', mistakeBn: 'ESP32 5V পিন থেকে মোটরে পাওয়ার', solution: 'Use a separate battery for L298N motor power. Join ESP32 GND to L298N GND.', solutionBn: 'L298N মোটর পাওয়ারে আলাদা ব্যাটারি দিন। ESP32 GND ও L298N GND এক করুন।' },
      { mistake: 'Trying this Bluetooth code on Arduino Uno', mistakeBn: 'Arduino Uno তে এই ব্লুটুথ কোড চালানো', solution: 'BluetoothSerial is ESP32 only. Uno needs an HC-05 module with different code.', solutionBn: 'BluetoothSerial শুধু ESP32 এর। Uno তে HC-05 মডিউল ও ভিন্ন কোড লাগে।' },
      { mistake: 'Car keeps moving after lifting finger', mistakeBn: 'আঙুল সরালেও গাড়ি চলতে থাকে', solution: 'Always send S to stop. Start with low speed like 150 for tests.', solutionBn: 'থামাতে S পাঠান। টেস্টে 150 এর মতো কম গতি দিয়ে শুরু করুন।' },
    ],
    tryItTips: ['Lift wheels off the table for the first test', 'Send S right away if the car runs wild', 'Try speed 150 first, then raise to 200', 'Check IN1-IN4 wiring if one side spins backwards'],
    tryItTipsBn: ['প্রথম টেস্টে চাকা টেবিল থেকে উঁচুতে রাখুন', 'গাড়ি এলোমেলো চললে সাথে সাথে S পাঠান', 'আগে গতি 150 দিন, পরে 200 করুন', 'এক পাশ উল্টো ঘুরলে IN1-IN4 তার দেখুন'],
  },
}

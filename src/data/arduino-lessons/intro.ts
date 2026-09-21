import { ArduinoLessonsMap } from './types'

export const introLessons: ArduinoLessonsMap = {
  'what-is-arduino': {
    title: 'What is Arduino?',
    titleBn: 'আরডুইনো কী?',
    duration: '5 min',
    level: 'beginner',
    description: 'Learn what Arduino is, why it is popular, and how it helps you build electronics projects easily.',
    descriptionBn: 'আরডুইনো কী, কেন জনপ্রিয় এবং কীভাবে এটি ইলেকট্রনিক্স প্রজেক্ট সহজ করে তা শিখুন।',
    whatYouWillLearn: [
      'What an Arduino board is and what it can do',
      'Difference between a microcontroller and a computer',
      'What pins, power, and GND mean',
      'How to upload your first test program',
    ],
    whatYouWillLearnBn: [
      'আরডুইনো বোর্ড কী এবং এটি কী করতে পারে',
      'মাইক্রোকন্ট্রোলার ও কম্পিউটারের পার্থক্য',
      'পিন, পাওয়ার ও GND এর মানে',
      'প্রথম টেস্ট প্রোগ্রাম আপলোড করা',
    ],
    components: ['Arduino Uno', 'USB cable', 'Computer with Arduino IDE'],
    circuitDescription: 'Connect Arduino Uno to your computer with a USB cable. No extra components needed for this lesson.',
    circuitDescriptionBn: 'USB কেবল দিয়ে Arduino Uno কম্পিউটারে সংযুক্ত করুন। এই পাঠে অতিরিক্ত কিছু লাগবে না।',
    code: `// Built-in LED test - upload this to verify your board works
// On Uno/Nano, pin 13 has a built-in LED

const int ledPin = LED_BUILTIN; // Usually pin 13

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("Arduino is ready!");
}

void loop() {
  digitalWrite(ledPin, HIGH);
  Serial.println("LED ON");
  delay(500);

  digitalWrite(ledPin, LOW);
  Serial.println("LED OFF");
  delay(500);
}`,
    codeExplanation: [
      { line: 4, text: 'LED_BUILTIN is the pin connected to the onboard LED.', textBn: 'LED_BUILTIN হলো বোর্ডের LED এর পিন।' },
      { line: 7, text: 'setup() runs once when the board starts.', textBn: 'setup() বোর্ড চালু হলে একবার চলে।' },
      { line: 9, text: 'Serial.begin(9600) lets you see messages on Serial Monitor.', textBn: 'Serial.begin(9600) দিয়ে Serial Monitor এ মেসেজ দেখা যায়।' },
      { line: 14, text: 'loop() repeats forever — blink the LED every 500 ms.', textBn: 'loop() বারবার চলে — প্রতি ৫০০ ms এ LED ব্লিংক করে।' },
    ],
    commonMistakes: [
      { mistake: 'Board not detected in IDE', mistakeBn: 'IDE তে বোর্ড দেখা যাচ্ছে না', solution: 'Install CH340/CP2102 USB driver if needed. Select correct COM port under Tools → Port.', solutionBn: 'প্রয়োজনে CH340/CP2102 ড্রাইভার ইনস্টল করুন। Tools → Port থেকে সঠিক COM পোর্ট বেছে নিন।' },
      { mistake: 'Upload fails', mistakeBn: 'আপলোড ব্যর্থ হয়', solution: 'Check USB cable supports data (not charge-only). Select correct board under Tools → Board.', solutionBn: 'USB কেবল ডেটা সাপোর্ট করে কিনা দেখুন। Tools → Board থেকে সঠিক বোর্ড বেছে নিন।' },
    ],
    tryItTips: ['Open Serial Monitor at 9600 baud to see ON/OFF messages', 'Change delay(500) to delay(200) for faster blinking'],
    tryItTipsBn: ['Serial Monitor 9600 baud এ খুলে ON/OFF মেসেজ দেখুন', 'দ্রুত ব্লিংকের জন্য delay(500) কে delay(200) করুন'],
  },

  'arduino-types': {
    title: 'Types of Arduino Boards',
    titleBn: 'আরডুইনো বোর্ডের ধরন',
    duration: '8 min',
    level: 'beginner',
    description: 'Compare Uno, Nano, Mega, and other boards so you know which one to pick for your project.',
    descriptionBn: 'Uno, Nano, Mega ও অন্যান্য বোর্ডের তুলনা করে আপনার প্রজেক্টের জন্য কোনটি নেবেন তা বুঝুন।',
    whatYouWillLearn: [
      'Popular Arduino board families (Uno, Nano, Mega)',
      'How many pins and memory each type has',
      'When to use a smaller vs larger board',
      'How to read pin labels on any Arduino board',
    ],
    whatYouWillLearnBn: [
      'জনপ্রিয় Arduino বোর্ড (Uno, Nano, Mega)',
      'প্রতিটির পিন ও মেমরি কত',
      'ছোট বনাম বড় বোর্ড কখন ব্যবহার করবেন',
      'যেকোনো বোর্ডে পিন লেবেল পড়া',
    ],
    components: ['Any Arduino board', 'USB cable'],
    circuitDescription: 'Use any Arduino you have. This sketch prints board info over Serial — works on all AVR-based boards.',
    circuitDescriptionBn: 'আপনার যেকোনো Arduino ব্যবহার করুন। এই স্কেচ Serial এ বোর্ড তথ্য প্রিন্ট করে।',
    code: `// Board info sketch - works on Uno, Nano, Mega, etc.
void setup() {
  Serial.begin(9600);
  while (!Serial) { ; } // wait for Serial on native USB boards

  Serial.println(F("=== Arduino Board Info ==="));
  Serial.print(F("CPU frequency: "));
  Serial.print(F_CPU);
  Serial.println(F(" Hz"));

  Serial.print(F("Flash (program) memory: "));
  Serial.print(__FLASH_SIZE__);
  Serial.println(F(" bytes"));

  Serial.print(F("Free RAM estimate: "));
  extern int __heap_start, *__brkval;
  int v;
  Serial.println((int) &v - (__brkval == 0 ? (int) &__heap_start : (int) __brkval));

  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // Heartbeat blink — shows board is running
  digitalWrite(LED_BUILTIN, HIGH);
  delay(100);
  digitalWrite(LED_BUILTIN, LOW);
  delay(900);
}`,
    codeExplanation: [
      { line: 2, text: 'Serial prints text from Arduino to your computer.', textBn: 'Serial দিয়ে Arduino থেকে কম্পিউটারে টেক্সট পাঠানো হয়।' },
      { line: 8, text: 'F_CPU is the clock speed of your chip (e.g. 16000000 = 16 MHz).', textBn: 'F_CPU চিপের ক্লক স্পিড (যেমন 16000000 = 16 MHz)।' },
      { line: 20, text: 'A slow blink every 1 second confirms the board is alive.', textBn: 'প্রতি ১ সেকেন্ডে ধীর ব্লিংক মানে বোর্ড চলছে।' },
    ],
    commonMistakes: [
      { mistake: 'Choosing Mega for a simple LED project', mistakeBn: 'সাধারণ LED প্রজেক্টে Mega নেওয়া', solution: 'Uno or Nano is enough for beginners. Mega is for many sensors/motors at once.', solutionBn: 'শুরুর জন্য Uno বা Nano যথেষ্ট। Mega অনেক সেন্সর/মোটর একসাথে চালাতে ব্যবহার করুন।' },
    ],
    tryItTips: ['Upload and read Serial Monitor output', 'Compare output if you have two different boards'],
    tryItTipsBn: ['আপলোড করে Serial Monitor আউটপুট পড়ুন', 'দুটি ভিন্ন বোর্ড থাকলে আউটপুট তুলনা করুন'],
  },

  'arduino-ide': {
    title: 'Installing Arduino IDE',
    titleBn: 'Arduino IDE ইনস্টল করা',
    duration: '10 min',
    level: 'beginner',
    description: 'Install Arduino IDE, select your board, choose the COM port, and upload code successfully.',
    descriptionBn: 'Arduino IDE ইনস্টল করুন, বোর্ড ও COM পোর্ট বেছে নিন এবং কোড সফলভাবে আপলোড করুন।',
    whatYouWillLearn: [
      'Download and install Arduino IDE 2.x',
      'Select board type and COM port',
      'Verify (compile) code before upload',
      'Use Serial Monitor for debugging',
    ],
    whatYouWillLearnBn: [
      'Arduino IDE 2.x ডাউনলোড ও ইনস্টল',
      'বোর্ড টাইপ ও COM পোর্ট নির্বাচন',
      'আপলোডের আগে Verify (compile)',
      'ডিবাগging এ Serial Monitor ব্যবহার',
    ],
    components: ['Arduino board', 'USB cable', 'Arduino IDE installed'],
    circuitDescription: 'Connect board via USB. Upload the sketch below to confirm IDE setup is correct.',
    circuitDescriptionBn: 'USB দিয়ে বোর্ড সংযুক্ত করুন। IDE সেটআপ ঠিক আছে কিনা নিচের স্কেচ আপলোড করে দেখুন।',
    code: `/*
 * IDE Setup Test
 * 1. Tools → Board → Arduino Uno (or your board)
 * 2. Tools → Port → select COMx / /dev/ttyUSB0
 * 3. Click Upload, then open Serial Monitor at 9600
 */

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.println(F("Upload successful!"));
  Serial.println(F("If you see this, IDE is configured correctly."));
}

void loop() {
  static unsigned long lastToggle = 0;
  static bool ledState = false;

  if (millis() - lastToggle >= 1000) {
    lastToggle = millis();
    ledState = !ledState;
    digitalWrite(LED_BUILTIN, ledState);
    Serial.println(ledState ? F("Tick") : F("Tock"));
  }
}`,
    codeExplanation: [
      { line: 10, text: 'Serial.begin(9600) must match Serial Monitor baud rate.', textBn: 'Serial.begin(9600) Serial Monitor baud rate এর সাথে মিলতে হবে।' },
      { line: 20, text: 'millis() counts milliseconds since power-on — used for non-blocking timing.', textBn: 'millis() পাওয়ার অন থেকে মিলিসেকেন্ড গোনে — non-blocking টাইমিংয়ের জন্য।' },
      { line: 24, text: 'Non-blocking code lets Arduino do other tasks without delay().', textBn: 'Non-blocking কোড delay() ছাড়াই অন্য কাজ করতে দেয়।' },
    ],
    commonMistakes: [
      { mistake: 'Serial Monitor shows garbage characters', mistakeBn: 'Serial Monitor এ অদ্ভুত অক্ষর', solution: 'Set baud rate to 9600 in Serial Monitor bottom-right dropdown.', solutionBn: 'Serial Monitor এর নিচে ডানদিকে baud rate 9600 সেট করুন।' },
      { mistake: 'Wrong board selected', mistakeBn: 'ভুল বোর্ড নির্বাচিত', solution: 'Uno code on Nano usually works, but always pick your exact board in Tools → Board.', solutionBn: 'Uno কোড Nano তে সাধারণত চলে, তবু Tools → Board এ সঠিক বোর্ড বেছে নিন।' },
    ],
    tryItTips: ['Try Verify (checkmark) before Upload to catch syntax errors', 'Use Ctrl+U / Cmd+U shortcut to upload'],
    tryItTipsBn: ['আপলোডের আগে Verify দিয়ে syntax error ধরুন', 'আপলোড shortcut Ctrl+U / Cmd+U ব্যবহার করুন'],
  },

  'first-sketch': {
    title: 'Your First Sketch',
    titleBn: 'আপনার প্রথম স্কেচ',
    duration: '12 min',
    level: 'beginner',
    description: 'Write your first complete Arduino program with setup(), loop(), comments, and variables.',
    descriptionBn: 'setup(), loop(), কমেন্ট ও ভেরিয়েবল দিয়ে প্রথম সম্পূর্ণ Arduino প্রোগ্রাম লিখুন।',
    whatYouWillLearn: [
      'Structure of every Arduino sketch (setup + loop)',
      'How to use variables and pin numbers',
      'Write comments to explain your code',
      'Blink an external LED on pin 8',
    ],
    whatYouWillLearnBn: [
      'প্রতিটি Arduino স্কেচের গঠন (setup + loop)',
      'ভেরিয়েবল ও পিন নম্বর ব্যবহার',
      'কোড ব্যাখ্যায় কমেন্ট লেখা',
      'পিন ৮ এ বাহ্যিক LED ব্লিংক করা',
    ],
    components: ['Arduino Uno', 'LED', '220Ω resistor', 'Breadboard', 'Jumper wires'],
    circuitDescription: 'LED anode (+) → 220Ω resistor → pin 8. LED cathode (-) → GND.',
    circuitDescriptionBn: 'LED anode (+) → 220Ω resistor → pin 8। LED cathode (-) → GND।',
    code: `// My First External LED Sketch
const int ledPin = 8;        // LED connected to digital pin 8
const int blinkDelay = 1000; // 1 second on, 1 second off

void setup() {
  pinMode(ledPin, OUTPUT);   // set pin 8 as output
  Serial.begin(9600);
  Serial.println(F("First sketch running!"));
}

void loop() {
  digitalWrite(ledPin, HIGH);  // turn LED on
  delay(blinkDelay);

  digitalWrite(ledPin, LOW);   // turn LED off
  delay(blinkDelay);
}`,
    codeExplanation: [
      { line: 2, text: 'const int means this value never changes — good for pin numbers.', textBn: 'const int মানে মান পরিবর্তন হয় না — পিন নম্বরের জন্য ভালো।' },
      { line: 6, text: 'pinMode(8, OUTPUT) prepares the pin to drive an LED.', textBn: 'pinMode(8, OUTPUT) LED চালানোর জন্য পিন প্রস্তুত করে।' },
      { line: 12, text: 'digitalWrite sends 5V (HIGH) or 0V (LOW) to the pin.', textBn: 'digitalWrite পিনে 5V (HIGH) বা 0V (LOW) পাঠায়।' },
    ],
    commonMistakes: [
      { mistake: 'LED connected backwards', mistakeBn: 'LED উল্টো সংযুক্ত', solution: 'Long leg (anode) toward + through resistor. Short leg to GND.', solutionBn: 'লম্বা পা (+) রেজিস্টরের দিকে। ছোট পা GND তে।' },
      { mistake: 'No resistor used', mistakeBn: 'রেজিস্টর ব্যবহার না করা', solution: 'Always use 220Ω–330Ω resistor with LED to limit current.', solutionBn: 'LED এর সাথে সর্বদা 220Ω–330Ω রেজিস্টর ব্যবহার করুন।' },
    ],
    tryItTips: ['Change blinkDelay to 250 for fast blink', 'Move LED to pin 12 and update ledPin variable'],
    tryItTipsBn: ['দ্রুত ব্লিংকের জন্য blinkDelay 250 করুন', 'LED পিন 12 তে সরিয়ে ledPin আপডেট করুন'],
  },
}

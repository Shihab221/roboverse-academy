import { ArduinoLessonsMap } from './types'

export const basicsLessons: ArduinoLessonsMap = {
  'understanding-circuits': {
    title: 'Understanding Circuits',
    titleBn: 'সার্কিট বোঝা',
    duration: '8 min',
    level: 'beginner',
    description: 'Learn how electricity flows in a loop from power to GND, and why every circuit needs a complete path.',
    descriptionBn: 'বিদ্যুৎ কীভাবে পাওয়ার থেকে GND পর্যন্ত লুপে প্রবাহিত হয় এবং কেন সম্পূর্ণ পথ দরকার তা শিখুন।',
    whatYouWillLearn: [
      'What voltage, current, and GND mean',
      'How a closed loop lets current flow',
      'Why we use resistors to protect components',
      'Read a simple LED circuit diagram',
    ],
    whatYouWillLearnBn: [
      'ভোল্টেজ, কারেন্ট ও GND এর মানে',
      'বন্ধ লুপে কারেন্ট প্রবাহ',
      'কম্পোনেন্ট রক্ষায় রেজিস্টর',
      'সহজ LED সার্কিট ডায়াগ্রাম পড়া',
    ],
    components: ['Arduino Uno', 'LED', '220Ω resistor', 'Breadboard', 'Jumper wires'],
    circuitDescription: '5V or pin 13 → 220Ω → LED anode. LED cathode → GND. This completes the circuit loop.',
    circuitDescriptionBn: '5V বা pin 13 → 220Ω → LED anode। LED cathode → GND। এতে সার্কিট লুপ সম্পূর্ণ হয়।',
    code: `// Simple circuit test — onboard LED uses same idea: pin → component → GND
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH); // current flows out of pin, through LED, to GND
  delay(1000);
  digitalWrite(ledPin, LOW);  // no current — LED off
  delay(1000);
}`,
    codeExplanation: [
      { line: 8, text: 'HIGH closes the path — current flows from pin through LED to ground.', textBn: 'HIGH পথ বন্ধ করে — কারেন্ট পিন দিয়ে LED হয়ে গ্রাউন্ডে যায়।' },
      { line: 10, text: 'LOW stops current — the circuit is open at the pin.', textBn: 'LOW কারেন্ট বন্ধ — পিনে সার্কিট খোলা।' },
    ],
    commonMistakes: [
      { mistake: 'Open circuit — LED never lights', mistakeBn: 'খোলা সার্কিট — LED জ্বলে না', solution: 'Trace wire from pin to GND. Every connection must be firm in breadboard.', solutionBn: 'পিন থেকে GND পর্যন্ত তার দেখুন। breadboard এ সব সংযোগ দৃঢ় হতে হবে।' },
    ],
    tryItTips: ['Unplug one wire and see LED turn off — that shows an open circuit', 'Measure with multimeter in continuity mode'],
    tryItTipsBn: ['একটি তার খুললে LED নেভে — এটাই open circuit', 'multimeter continuity mode এ পরিমাপ করুন'],
  },

  'breadboard-basics': {
    title: 'Breadboard Basics',
    titleBn: 'ব্রেডবোর্ড বেসিক',
    duration: '6 min',
    level: 'beginner',
    description: 'Learn how breadboard rows and power rails work so you can prototype without soldering.',
    descriptionBn: 'ব্রেডবোর্ডের row ও power rail কীভাবে কাজ করে তা শিখুন — সোল্ডার ছাড়াই প্রোটোটাইপ।',
    whatYouWillLearn: [
      'How breadboard holes are connected internally',
      'Use + and - rails for power and GND',
      'Place components across the center gap',
      'Build a LED circuit on breadboard',
    ],
    whatYouWillLearnBn: [
      'ব্রেডবোর্ডের hole গুলো ভнутরে কীভাবে সংযুক্ত',
      '+ ও - rail এ পাওয়ার ও GND',
      'কেন্দ্রের gap এর দুপাশে কম্পোনেন্ট',
      'ব্রেডবোর্ডে LED সার্কিট',
    ],
    components: ['Arduino Uno', 'Half-size breadboard', 'LED', '220Ω resistor', 'Jumper wires'],
    circuitDescription: 'Arduino 5V → breadboard + rail. GND → - rail. Pin 8 → resistor → LED → - rail.',
    circuitDescriptionBn: 'Arduino 5V → breadboard + rail। GND → - rail। Pin 8 → resistor → LED → - rail।',
    code: `const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println(F("Breadboard LED test"));
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(800);
  digitalWrite(ledPin, LOW);
  delay(800);
}`,
    codeExplanation: [
      { line: 1, text: 'Pin 8 connects to your breadboard row with a jumper wire.', textBn: 'Pin 8 jumper wire দিয়ে breadboard row তে সংযুক্ত।' },
    ],
    commonMistakes: [
      { mistake: 'LED in wrong breadboard row — no connection', mistakeBn: 'ভুল row — সংযোগ নেই', solution: 'Same row holes are connected. LED and resistor must share a row or connect with jumpers.', solutionBn: 'একই row এর hole সংযুক্ত। LED ও resistor এক row তে বা jumper দিয়ে যুক্ত হতে হবে।' },
    ],
    tryItTips: ['Use red jumper for + rail and black for GND', 'Blink two LEDs on different rows using pins 8 and 9'],
    tryItTipsBn: ['+ rail এ লাল, GND তে কালো jumper', 'পিন 8 ও 9 এ দুটি LED ব্লিংক করুন'],
  },

  'resistors-explained': {
    title: 'Resistors Explained',
    titleBn: 'রেজিস্টর ব্যাখ্যা',
    duration: '7 min',
    level: 'beginner',
    description: 'Understand why resistors limit current and how to pick 220Ω for standard LEDs.',
    descriptionBn: 'রেজিস্টর কেন কারেন্ট সীমিত করে এবং LED এর জন্য 220Ω কেন নেবেন তা বুঝুন।',
    whatYouWillLearn: [
      'What resistance (ohms) means',
      'Why LED needs a current-limiting resistor',
      'Calculate rough resistor value (Ohm\'s law idea)',
      'Use color bands or printed value on resistor',
    ],
    whatYouWillLearnBn: [
      'রেজিস্ট্যান্স (ohm) এর মানে',
      'LED এ current-limiting resistor কেন',
      'রough resistor value হিসাব (Ohm\'s law)',
      'রঙের band বা মুদ্রিত মান পড়া',
    ],
    components: ['Arduino Uno', 'LED', '220Ω and 1kΩ resistors', 'Breadboard'],
    circuitDescription: 'Try same LED with 220Ω (bright) vs 1kΩ (dimmer) on pin 9.',
    circuitDescriptionBn: 'পিন 9 এ 220Ω (উজ্জ্বল) বনাম 1kΩ (অনুজ্জ্বল) দিয়ে একই LED চেষ্টা করুন।',
    code: `// Compare brightness — swap resistor on breadboard, code stays same
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(2000);
  digitalWrite(ledPin, LOW);
  delay(500);
}`,
    codeExplanation: [
      { line: 1, text: 'Physical resistor value is chosen in hardware; code only controls ON/OFF.', textBn: 'রেজিস্টর হার্ডওয়্যারে বেছে নেওয়া হয়; কোড শুধু ON/OFF নিয়ন্ত্রণ করে।' },
    ],
    commonMistakes: [
      { mistake: 'LED very dim with 10k resistor', mistakeBn: '10k রেজিস্টরে LED খুব dim', solution: 'Use 220Ω–330Ω for 5V and standard 5mm LED.', solutionBn: '5V ও সাধারণ 5mm LED এর জন্য 220Ω–330Ω ব্যবহার করুন।' },
    ],
    tryItTips: ['Swap 220Ω with 1kΩ and compare brightness', 'Never connect LED directly to 5V without resistor'],
    tryItTipsBn: ['220Ω এর বদলে 1kΩ লাগিয়ে উজ্জ্বলতা তুলনা করুন', 'রেজিস্টর ছাড়া LED সরাসরি 5V তে লাগাবেন না'],
  },

  'leds-and-colors': {
    title: 'LEDs and Colors',
    titleBn: 'LED ও রঙ',
    duration: '5 min',
    level: 'beginner',
    description: 'Learn LED polarity, colors, forward voltage, and control multiple colored LEDs.',
    descriptionBn: 'LED এর polarity, রঙ, forward voltage এবং একাধিক রঙের LED নিয়ন্ত্রণ শিখুন।',
    whatYouWillLearn: [
      'Identify anode (+) and cathode (-) on LED',
      'Different colors have slightly different voltages',
      'Control two LEDs with two pins',
      'Create simple alternating light pattern',
    ],
    whatYouWillLearnBn: [
      'LED এর anode (+) ও cathode (-) চেনা',
      'রঙ ভেদে voltage সামান্য আলাদা',
      'দুটি পিনে দুটি LED নিয়ন্ত্রণ',
      'এলternating light pattern',
    ],
    components: ['Arduino Uno', 'Red LED', 'Green LED', '2× 220Ω resistors', 'Breadboard'],
    circuitDescription: 'Red LED on pin 10 with 220Ω to GND. Green LED on pin 11 with 220Ω to GND.',
    circuitDescriptionBn: 'লাল LED pin 10 এ 220Ω দিয়ে GND। সবুজ LED pin 11 এ 220Ω দিয়ে GND।',
    code: `const int redPin = 10;
const int greenPin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  digitalWrite(redPin, HIGH);
  digitalWrite(greenPin, LOW);
  delay(500);

  digitalWrite(redPin, LOW);
  digitalWrite(greenPin, HIGH);
  delay(500);
}`,
    codeExplanation: [
      { line: 10, text: 'Only one LED on at a time — red on, green off.', textBn: 'এক সময়ে একটি LED — লাল on, সবুজ off।' },
      { line: 14, text: 'Then swap — creates alternating colors.', textBn: 'তারপর বদল — রঙ alternate হয়।' },
    ],
    commonMistakes: [
      { mistake: 'Both LEDs very dim when on together', mistakeBn: 'দুটি LED একসাথে dim', solution: 'Each LED needs its own resistor. Do not share one resistor for two LEDs in parallel incorrectly.', solutionBn: 'প্রতিটি LED এর নিজস্ব resistor দরকার।' },
    ],
    tryItTips: ['Add blue LED on pin 12 for RGB-style pattern', 'Use shorter delay(200) for faster alternation'],
    tryItTipsBn: ['pin 12 এ নীল LED যোগ করুন', 'delay(200) দিয়ে দ্রুত alternate করুন'],
  },
}

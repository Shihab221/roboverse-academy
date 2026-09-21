import { ArduinoLessonsMap } from './types'

export const outputLessons: ArduinoLessonsMap = {
  'led-blink': {
    title: 'LED Blink Tutorial',
    titleBn: 'এলইডি ব্লিংক টিউটোরিয়াল',
    duration: '10 min',
    level: 'beginner',
    description: 'Make an external LED blink on pin 13. The classic first Arduino hardware project.',
    descriptionBn: 'পিন ১৩ এ বাহ্যিক LED ব্লিংক করান। ক্লাসিক প্রথম Arduino হার্ডওয়্যার প্রজেক্ট।',
    whatYouWillLearn: [
      'Connect LED with current-limiting resistor',
      'Use pinMode(), digitalWrite(), and delay()',
      'Understand HIGH vs LOW on digital pins',
      'Upload and test a complete blink sketch',
    ],
    whatYouWillLearnBn: [
      'current-limiting resistor সহ LED সংযোগ',
      'pinMode(), digitalWrite(), delay() ব্যবহার',
      'digital pin এ HIGH vs LOW',
      'সম্পূর্ণ blink sketch আপলোড ও টেস্ট',
    ],
    components: ['Arduino Uno', 'LED', '220Ω resistor', 'Breadboard', 'Jumper wires'],
    circuitDescription: 'Pin 13 → 220Ω → LED anode (+). LED cathode (-) → GND.',
    circuitDescriptionBn: 'Pin 13 → 220Ω → LED anode (+)। LED cathode (-) → GND।',
    code: `const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}`,
    codeExplanation: [
      { line: 1, text: 'Store pin number in a variable for easy changes.', textBn: 'সহজ পরিবর্তনের জন্য পিন নম্বর variable এ।' },
      { line: 4, text: 'OUTPUT mode lets the pin supply 5V or 0V.', textBn: 'OUTPUT mode পিন 5V বা 0V দিতে পারে।' },
      { line: 8, text: 'delay(1000) waits 1000 ms = 1 second.', textBn: 'delay(1000) = ১ সেকেন্ড অপেক্ষা।' },
    ],
    commonMistakes: [
      { mistake: 'LED does not light', mistakeBn: 'LED জ্বলে না', solution: 'Check polarity and resistor. Long leg toward pin through resistor.', solutionBn: 'polarity ও resistor দেখুন।' },
      { mistake: 'LED always on', mistakeBn: 'LED সবসময় জ্বলে', solution: 'Ensure both HIGH and LOW with delays exist in loop().', solutionBn: 'loop() এ HIGH ও LOW দুটো delay আছে কিনা দেখুন।' },
    ],
    tryItTips: ['Change delay to 200 ms for fast blink', 'Use pin 8 if external LED is on pin 8'],
    tryItTipsBn: ['delay 200 ms করুন', 'LED pin 8 এ থাকলে ledPin = 8 করুন'],
  },

  'buzzer-control': {
    title: 'Buzzer Control',
    titleBn: 'বাজার নিয়ন্ত্রণ',
    duration: '8 min',
    level: 'beginner',
    description: 'Control a passive or active buzzer to play beeps and simple alarm tones.',
    descriptionBn: 'passive বা active buzzer দিয়ে beep ও সহজ alarm tone বাজান।',
    whatYouWillLearn: [
      'Wire active buzzer to a digital pin',
      'Generate tones with tone() on passive buzzer',
      'Create beep patterns for alarms',
      'Turn sound off with noTone()',
    ],
    whatYouWillLearnBn: [
      'active buzzer digital pin এ সংযোগ',
      'passive buzzer এ tone() দিয়ে sound',
      'alarm এর জন্য beep pattern',
      'noTone() দিয়ে sound বন্ধ',
    ],
    components: ['Arduino Uno', 'Active buzzer (or passive + transistor)', 'Jumper wires'],
    circuitDescription: 'Active buzzer + to pin 8, - to GND. For passive buzzer use pin 8 through 100Ω.',
    circuitDescriptionBn: 'Active buzzer + pin 8, - GND। Passive buzzer pin 8 এর মাধ্যমে 100Ω।',
    code: `// Active buzzer — HIGH = sound ON
const int buzzerPin = 8;

void setup() {
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  // Beep pattern: short-short-long
  digitalWrite(buzzerPin, HIGH);
  delay(100);
  digitalWrite(buzzerPin, LOW);
  delay(100);

  digitalWrite(buzzerPin, HIGH);
  delay(100);
  digitalWrite(buzzerPin, LOW);
  delay(100);

  digitalWrite(buzzerPin, HIGH);
  delay(400);
  digitalWrite(buzzerPin, LOW);
  delay(800);
}

/*
 * Passive buzzer version — uncomment and use instead:
 *
 * void loop() {
 *   tone(buzzerPin, 1000, 200); // 1 kHz for 200 ms
 *   delay(300);
 *   tone(buzzerPin, 1500, 200);
 *   delay(800);
 * }
 */`,
    codeExplanation: [
      { line: 2, text: 'Active buzzer has built-in oscillator — digital HIGH turns it on.', textBn: 'Active buzzer এ HIGH দিলেই শব্দ।' },
      { line: 10, text: 'Pattern of delays creates recognizable beep sequence.', textBn: 'delay pattern চেনা যায় এমন beep তৈরি করে।' },
    ],
    commonMistakes: [
      { mistake: 'No sound from passive buzzer with digitalWrite only', mistakeBn: 'passive buzzer এ digitalWrite এ শব্দ নেই', solution: 'Use tone(pin, frequency) for passive buzzers.', solutionBn: 'passive buzzer এর জন্য tone() ব্যবহার করুন।' },
    ],
    tryItTips: ['Try tone(buzzerPin, 523) for note C', 'Create SOS pattern with short and long beeps'],
    tryItTipsBn: ['tone(buzzerPin, 523) নোট C', 'SOS pattern short/long beep দিয়ে'],
  },

  'relay-module': {
    title: 'Relay Module',
    titleBn: 'রিলে মডিউল',
    duration: '12 min',
    level: 'beginner',
    description: 'Use a 5V relay module to switch high-voltage devices like lamps and fans safely.',
    descriptionBn: '5V relay module দিয়ে lamp, fan মতো high-voltage ডিভাইস নিরাপদে switch করুন।',
    whatYouWillLearn: [
      'How relay isolates Arduino from AC/high power',
      'Connect relay IN, VCC, GND to Arduino',
      'Switch load with digitalWrite',
      'Safety rules for mains voltage',
    ],
    whatYouWillLearnBn: [
      'relay Arduino কে AC/high power থেকে আলাদা রাখে',
      'relay IN, VCC, GND সংযোগ',
      'digitalWrite দিয়ে load switch',
      'mains voltage নিরাপত্তা',
    ],
    components: ['Arduino Uno', '1-channel 5V relay module', 'LED or small lamp (low voltage test)', 'Jumper wires'],
    circuitDescription: 'Relay VCC→5V, GND→GND, IN→pin 7. Connect test lamp through relay COM and NO terminals.',
    circuitDescriptionBn: 'Relay VCC→5V, GND→GND, IN→pin 7। test lamp relay COM ও NO তে।',
    code: `const int relayPin = 7;
// Most modules: LOW = relay ON, HIGH = OFF (active LOW)
// If yours is opposite, swap HIGH and LOW

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // start with relay OFF
}

void loop() {
  digitalWrite(relayPin, LOW);  // relay ON — load powered
  delay(3000);
  digitalWrite(relayPin, HIGH); // relay OFF
  delay(3000);
}`,
    codeExplanation: [
      { line: 2, text: 'Many relay modules are active LOW — LOW triggers the relay.', textBn: 'অনেক relay active LOW — LOW দিলে ON।' },
      { line: 11, text: 'Never work on mains AC while wiring. Test with low-voltage lamp first.', textBn: 'তার দেওয়ার সময় mains AC স্পর্শ করবেন না। আগে low voltage দিয়ে টেস্ট করুন।' },
    ],
    commonMistakes: [
      { mistake: 'Relay clicks but load does not turn on', mistakeBn: 'relay click কিন্তু load on নয়', solution: 'Check COM/NO/NC wiring. Use multimeter on relay contacts.', solutionBn: 'COM/NO/NC wiring দেখুন।' },
    ],
    tryItTips: ['Add push button on pin 2 to toggle relay manually', 'Use Serial Monitor to log ON/OFF times'],
    tryItTipsBn: ['pin 2 এ button দিয়ে relay toggle', 'Serial Monitor এ ON/OFF log'],
  },

  'lcd-16x2': {
    title: '16x2 LCD Display',
    titleBn: '16x2 LCD ডিসপ্লে',
    duration: '15 min',
    level: 'intermediate',
    description: 'Display text on a classic 16×2 parallel LCD using the LiquidCrystal library.',
    descriptionBn: 'LiquidCrystal library দিয়ে ক্লাসিক 16×2 parallel LCD তে text দেখান।',
    whatYouWillLearn: [
      'Wire LCD RS, E, D4–D7, VSS, VDD, contrast',
      'Use LiquidCrystal library',
      'Print text on line 1 and line 2',
      'Clear screen and set cursor position',
    ],
    whatYouWillLearnBn: [
      'LCD RS, E, D4–D7, VSS, VDD, contrast wiring',
      'LiquidCrystal library',
      'line 1 ও 2 তে text',
      'screen clear ও cursor',
    ],
    components: ['Arduino Uno', '16x2 LCD (HD44780)', '10k potentiometer', 'Breadboard', 'Many jumper wires'],
    circuitDescription: 'Standard 4-bit mode: RS→12, E→11, D4–D7→5–2. VSS→GND, VDD→5V. V0→ pot center for contrast.',
    circuitDescriptionBn: '4-bit mode: RS→12, E→11, D4–D7→5–2। VSS→GND, VDD→5V। V0→ pot contrast।',
    code: `#include <LiquidCrystal.h>

// rs, en, d4, d5, d6, d7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print(F("RoboverseBD"));
  lcd.setCursor(0, 1);
  lcd.print(F("Robotics Academy"));
}

void loop() {
  static unsigned long last = 0;
  if (millis() - last > 1000) {
    last = millis();
    lcd.setCursor(14, 1);
    lcd.print(millis() / 1000 % 10); // update last digit of seconds
  }
}`,
    codeExplanation: [
      { line: 1, text: 'LiquidCrystal library ships with Arduino IDE.', textBn: 'LiquidCrystal library IDE তে থাকে।' },
      { line: 4, text: 'Constructor lists all data and control pins.', textBn: 'Constructor এ সব pin তালিকা।' },
      { line: 8, text: '16 columns, 2 rows — setCursor(col, row) starts at 0.', textBn: '16 column, 2 row — setCursor(col, row) 0 থেকে।' },
    ],
    commonMistakes: [
      { mistake: 'White blocks on first row, nothing visible', mistakeBn: 'শুধু সাদা block', solution: 'Adjust contrast potentiometer on V0 until text appears.', solutionBn: 'V0 pot দিয়ে contrast ঠিক করুন।' },
    ],
    tryItTips: ['Show temperature from a sensor on line 2', 'Scroll long text with lcd.scrollDisplayLeft()'],
    tryItTipsBn: ['line 2 তে sensor temperature', 'lcd.scrollDisplayLeft() দিয়ে scroll'],
  },

  'lcd-i2c': {
    title: 'LCD with I2C Module',
    titleBn: 'I2C LCD মডিউল',
    duration: '12 min',
    level: 'intermediate',
    description: 'Use I2C backpack to drive 16×2 LCD with only 4 wires — SDA, SCL, VCC, GND.',
    descriptionBn: 'I2C backpack দিয়ে মাত্র 4 তারে LCD — SDA, SCL, VCC, GND।',
    whatYouWillLearn: [
      'Benefits of I2C (fewer wires)',
      'Install LiquidCrystal I2C library',
      'Find I2C address with scanner sketch',
      'Display sensor data on LCD',
    ],
    whatYouWillLearnBn: [
      'I2C এর সুবিধা (কম wire)',
      'LiquidCrystal I2C library ইনস্টল',
      'I2C address scanner',
      'LCD তে sensor data',
    ],
    components: ['Arduino Uno', '16x2 LCD with I2C module', '4 jumper wires'],
    circuitDescription: 'LCD VCC→5V, GND→GND, SDA→A4, SCL→A5 (Uno). Nano: A4/A5 same.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, SDA→A4, SCL→A5 (Uno)।',
    code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Address 0x27 common — use I2C scanner if blank screen
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print(F("RoboverseBD"));
  lcd.setCursor(0, 1);
  lcd.print(F("I2C LCD Ready"));
}

void loop() {
  lcd.setCursor(12, 0);
  lcd.print(millis() / 1000);
  delay(500);
}

/*
 * I2C Scanner — upload alone to find address:
 * #include <Wire.h>
 * void setup() {
 *   Wire.begin();
 *   Serial.begin(9600);
 *   for (byte addr = 1; addr < 127; addr++) {
 *     Wire.beginTransmission(addr);
 *     if (Wire.endTransmission() == 0) {
 *       Serial.print("Found: 0x"); Serial.println(addr, HEX);
 *     }
 *   }
 * }
 * void loop() {}
 */`,
    codeExplanation: [
      { line: 5, text: '0x27 or 0x3F are common I2C addresses for LCD backpacks.', textBn: '0x27 বা 0x3F সাধারণ I2C address।' },
      { line: 9, text: 'init() and backlight() must be called before print.', textBn: 'print এর আগে init() ও backlight()।' },
    ],
    commonMistakes: [
      { mistake: 'LCD blank after upload', mistakeBn: 'LCD ফাঁকা', solution: 'Run I2C scanner. Change 0x27 to detected address. Check SDA/SCL not swapped.', solutionBn: 'I2C scanner চালান। address ঠিক করুন।' },
    ],
    tryItTips: ['Install "LiquidCrystal I2C" by Frank de Brabander in Library Manager', 'Combine with DHT11 reading on LCD'],
    tryItTipsBn: ['Library Manager এ LiquidCrystal I2C ইনস্টল', 'DHT11 reading LCD তে দেখান'],
  },

  'servo-motor': {
    title: 'Servo Motor Control',
    titleBn: 'সervo মোটর নিয়ন্ত্রণ',
    duration: '10 min',
    level: 'beginner',
    description: 'Control SG90 servo angle from 0° to 180° using the Servo library.',
    descriptionBn: 'Servo library দিয়ে SG90 servo 0° থেকে 180° পর্যন্ত angle নিয়ন্ত্রণ।',
    whatYouWillLearn: [
      'Servo signal wire to PWM-capable pin',
      'Use Servo.h and write() for angles',
      'Power servo from 5V — use external supply if jittery',
      'Sweep smoothly between min and max angle',
    ],
    whatYouWillLearnBn: [
      'Servo signal PWM pin এ',
      'Servo.h ও write() angle এর জন্য',
      '5V power — jitter হলে external supply',
      'min-max angle sweep',
    ],
    components: ['Arduino Uno', 'SG90 servo', 'Jumper wires', 'External 5V supply (optional)'],
    circuitDescription: 'Servo signal (orange/yellow) → pin 9. Red → 5V, brown → GND. Share GND with Arduino.',
    circuitDescriptionBn: 'Signal → pin 9। Red → 5V, brown → GND। Arduino GND common।',
    code: `#include <Servo.h>

Servo myServo;
const int servoPin = 9;

void setup() {
  myServo.attach(servoPin);
}

void loop() {
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);
    delay(15);
  }
  for (int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}`,
    codeExplanation: [
      { line: 4, text: 'attach() connects servo object to pin 9.', textBn: 'attach() servo কে pin 9 এ bind করে।' },
      { line: 10, text: 'write(angle) sends PWM pulse for that angle 0–180.', textBn: 'write(angle) 0–180 angle এর PWM পাঠায়।' },
    ],
    commonMistakes: [
      { mistake: 'Servo jitters or resets Arduino', mistakeBn: 'servo jitter বা reset', solution: 'Servo draws high current — use external 5V supply, common GND only.', solutionBn: 'external 5V supply ব্যবহার করুন, GND common।' },
    ],
    tryItTips: ['Use potentiometer on A0 to set angle with map()', 'Try myServo.write(90) for center position'],
    tryItTipsBn: ['A0 potentiometer map() দিয়ে angle', 'myServo.write(90) center'],
  },
}

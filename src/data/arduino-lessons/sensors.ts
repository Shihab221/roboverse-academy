import { ArduinoLessonsMap } from './types'

export const sensorLessons: ArduinoLessonsMap = {
  'ultrasonic-sensor': {
    title: 'Ultrasonic Distance Sensor',
    titleBn: 'আল্ট্রাসনিক দূরত্ব সেন্সর',
    duration: '12 min',
    level: 'beginner',
    description: 'Measure distance in cm with HC-SR04 using pulseIn() and speed of sound formula.',
    descriptionBn: 'HC-SR04 দিয়ে pulseIn() ও শব্দের গতি দিয়ে cm এ দূরত্ব মাপুন।',
    whatYouWillLearn: [
      'Connect Trig and Echo pins correctly',
      'Send 10 µs trigger pulse',
      'Measure echo time with pulseIn()',
      'Convert time to distance in centimeters',
    ],
    whatYouWillLearnBn: [
      'Trig ও Echo pin সঠিক সংযোগ',
      '10 µs trigger pulse',
      'pulseIn() দিয়ে echo time',
      'সময়কে cm এ রূপান্তর',
    ],
    components: ['Arduino Uno', 'HC-SR04', 'Jumper wires'],
    circuitDescription: 'VCC→5V, GND→GND, Trig→pin 9, Echo→pin 10.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, Trig→9, Echo→10।',
    code: `const int trigPin = 9;
const int echoPin = 10;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH, 30000); // timeout 30 ms
  float distanceCm = duration * 0.0343 / 2;

  if (duration == 0) {
    Serial.println(F("Out of range"));
  } else {
    Serial.print(F("Distance: "));
    Serial.print(distanceCm);
    Serial.println(F(" cm"));
  }
  delay(200);
}`,
    codeExplanation: [
      { line: 14, text: '10 µs HIGH pulse starts ultrasonic measurement.', textBn: '10 µs HIGH pulse মাপ শুরু করে।' },
      { line: 17, text: 'pulseIn returns round-trip time in microseconds.', textBn: 'pulseIn round-trip time µs এ।' },
      { line: 18, text: 'Divide by 2 because sound goes to object and back.', textBn: '২ দিয়ে ভাগ — যাওয়া-আসা।' },
    ],
    commonMistakes: [
      { mistake: 'Always 0 cm', mistakeBn: 'সবসময় 0', solution: 'Check Trig/Echo not swapped. Object within 2–400 cm range.', solutionBn: 'Trig/Echo swap হয়েছে কিনা দেখুন।' },
    ],
    tryItTips: ['Light LED when distance < 10 cm', 'Average 5 readings for stability'],
    tryItTipsBn: ['10 cm এর কমে LED', '৫টি reading average'],
  },

  'ldr-sensor': {
    title: 'LDR Light Sensor',
    titleBn: 'LDR আলো সেন্সর',
    duration: '8 min',
    level: 'beginner',
    description: 'Read light level with an LDR voltage divider on analog pin A0.',
    descriptionBn: 'A0 এ LDR voltage divider দিয়ে আলোর মাত্রা পড়ুন।',
    whatYouWillLearn: [
      'Build LDR + resistor voltage divider',
      'Use analogRead() for 0–1023 values',
      'Map values to light level or LED control',
      'Turn on LED when dark',
    ],
    whatYouWillLearnBn: [
      'LDR + resistor voltage divider',
      'analogRead() 0–1023',
      'map() দিয়ে LED control',
      'অন্ধকারে LED on',
    ],
    components: ['Arduino Uno', 'LDR', '10kΩ resistor', 'LED', '220Ω resistor'],
    circuitDescription: 'LDR from 5V to A0. 10k from A0 to GND. LED on pin 8.',
    circuitDescriptionBn: 'LDR 5V থেকে A0। 10k A0 থেকে GND। LED pin 8।',
    code: `const int ldrPin = A0;
const int ledPin = 8;
const int darkThreshold = 500; // adjust after testing

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightValue = analogRead(ldrPin);
  Serial.print(F("Light ADC: "));
  Serial.println(lightValue);

  if (lightValue < darkThreshold) {
    digitalWrite(ledPin, HIGH); // dark — turn on light
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(200);
}`,
    codeExplanation: [
      { line: 11, text: 'analogRead returns 0 (0V) to 1023 (5V).', textBn: 'analogRead 0 থেকে 1023।' },
      { line: 15, text: 'Low ADC in dark room when LDR resistance rises.', textBn: 'অন্ধকারে LDR resistance বাড়ে, ADC কম।' },
    ],
    commonMistakes: [
      { mistake: 'Values never change', mistakeBn: 'মান পরিবর্তন হয় না', solution: 'Cover LDR or shine phone flashlight — verify wiring to A0.', solutionBn: 'LDR ঢেকে বা flashlight দিয়ে টেস্ট করুন।' },
    ],
    tryItTips: ['Print map(lightValue, 0, 1023, 0, 100) as percent', 'Calibrate darkThreshold in your room'],
    tryItTipsBn: ['percent হিসেবে map()', 'darkThreshold calibrate'],
  },

  'ir-sensor': {
    title: 'IR Sensor',
    titleBn: 'IR সেন্সর',
    duration: '10 min',
    level: 'beginner',
    description: 'Detect obstacles with IR obstacle avoidance module (digital output).',
    descriptionBn: 'IR obstacle module (digital output) দিয়ে বাধা detect করুন।',
    whatYouWillLearn: [
      'Wire IR module VCC, GND, OUT',
      'Read digital LOW when object detected',
      'Use pull-up if module is open-collector',
      'Build line or obstacle detector',
    ],
    whatYouWillLearnBn: [
      'IR VCC, GND, OUT wiring',
      'object detect এ digital LOW',
      'pull-up প্রয়োজন হলে',
      'obstacle detector',
    ],
    components: ['Arduino Uno', 'IR obstacle sensor module', 'LED', '220Ω resistor'],
    circuitDescription: 'VCC→5V, GND→GND, OUT→pin 2. LED on pin 13.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, OUT→pin 2। LED pin 13।',
    code: `const int irPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(irPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int detected = digitalRead(irPin);
  // Many modules: LOW = object near (active LOW)
  bool obstacle = (detected == LOW);

  digitalWrite(ledPin, obstacle ? HIGH : LOW);
  Serial.println(obstacle ? F("Obstacle!") : F("Clear"));
  delay(100);
}`,
    codeExplanation: [
      { line: 11, text: 'digitalRead returns HIGH or LOW from sensor output.', textBn: 'digitalRead HIGH বা LOW।' },
      { line: 13, text: 'Most cheap modules output LOW when IR reflects off object.', textBn: 'অধিকাংশ module object এ LOW।' },
    ],
    commonMistakes: [
      { mistake: 'Always shows obstacle', mistakeBn: 'সবসময় obstacle', solution: 'Adjust potentiometer on module. Avoid direct sunlight on sensor.', solutionBn: 'module pot adjust করুন। সরাসরি sunlight এড়ান।' },
    ],
    tryItTips: ['If inverted, check for HIGH instead of LOW', 'Count objects passing with Serial counter'],
    tryItTipsBn: ['উল্টো হলে HIGH check', 'Serial counter'],
  },

  'pir-motion': {
    title: 'PIR Motion Sensor',
    titleBn: 'PIR মোশন সেন্সর',
    duration: '10 min',
    level: 'beginner',
    description: 'Detect human motion with HC-SR501 PIR sensor and trigger alarm or light.',
    descriptionBn: 'HC-SR501 PIR দিয়ে motion detect করে alarm বা light trigger।',
    whatYouWillLearn: [
      'PIR warm-up time (~30 seconds)',
      'Digital OUT when motion detected',
      'Adjust sensitivity and time delay on module',
      'Build motion-activated light',
    ],
    whatYouWillLearnBn: [
      'PIR warm-up ~30 sec',
      'motion এ digital OUT',
      'sensitivity/time adjust',
      'motion-activated light',
    ],
    components: ['Arduino Uno', 'HC-SR501 PIR', 'LED or relay', 'Jumper wires'],
    circuitDescription: 'PIR VCC→5V, GND→GND, OUT→pin 2. Load on pin 13.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, OUT→pin 2। Load pin 13।',
    code: `const int pirPin = 2;
const int lightPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(lightPin, OUTPUT);
  Serial.begin(9600);
  Serial.println(F("PIR warming up... wait 30 sec"));
  delay(30000);
  Serial.println(F("Ready!"));
}

void loop() {
  if (digitalRead(pirPin) == HIGH) {
    digitalWrite(lightPin, HIGH);
    Serial.println(F("Motion detected!"));
  } else {
    digitalWrite(lightPin, LOW);
  }
  delay(200);
}`,
    codeExplanation: [
      { line: 10, text: 'PIR needs warm-up for stable baseline — do not skip.', textBn: 'PIR warm-up দরকার।' },
      { line: 16, text: 'HIGH on OUT means motion in detection zone.', textBn: 'OUT HIGH = motion।' },
    ],
    commonMistakes: [
      { mistake: 'False triggers constantly', mistakeBn: 'অবিরত false trigger', solution: 'Wait full warm-up. Reduce sensitivity screw. Point away from heat sources.', solutionBn: 'warm-up অপেক্ষা, sensitivity কমান।' },
    ],
    tryItTips: ['Keep light on 30 sec after motion with millis timer', 'Log motion events to Serial'],
    tryItTipsBn: ['millis timer 30 sec light', 'Serial log'],
  },

  'dht11-temp': {
    title: 'DHT11 Temperature Sensor',
    titleBn: 'DHT11 তাপমাত্রা সেন্সর',
    duration: '12 min',
    level: 'beginner',
    description: 'Read temperature and humidity with DHT11 using DHT sensor library.',
    descriptionBn: 'DHT library দিয়ে DHT11 থেকে temperature ও humidity পড়ুন।',
    whatYouWillLearn: [
      'Install DHT sensor library',
      'Single data pin wiring with 10k pull-up',
      'Read humidity and temperature in loop',
      'Handle read failures gracefully',
    ],
    whatYouWillLearnBn: [
      'DHT library ইনস্টল',
      'single data pin + 10k pull-up',
      'humidity ও temperature read',
      'read fail handle',
    ],
    components: ['Arduino Uno', 'DHT11 module', 'Jumper wires'],
    circuitDescription: 'VCC→5V, GND→GND, DATA→pin 4. Many modules include built-in pull-up.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, DATA→pin 4।',
    code: `#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(2000); // DHT11 max sample rate 1 Hz

  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();

  if (isnan(humidity) || isnan(tempC)) {
    Serial.println(F("DHT read failed!"));
    return;
  }

  Serial.print(F("Humidity: "));
  Serial.print(humidity);
  Serial.print(F("%  Temp: "));
  Serial.print(tempC);
  Serial.println(F(" C"));
}`,
    codeExplanation: [
      { line: 1, text: 'Install "DHT sensor library" by Adafruit in Library Manager.', textBn: 'Library Manager এ Adafruit DHT library।' },
      { line: 14, text: 'Wait at least 2 seconds between DHT11 reads.', textBn: 'DHT11 read এর মাঝে 2 sec।' },
      { line: 18, text: 'isnan checks for failed communication.', textBn: 'isnan fail check।' },
    ],
    commonMistakes: [
      { mistake: 'Failed to read from DHT', mistakeBn: 'DHT read fail', solution: 'Check data pin number. Add 10k resistor 5V to DATA if bare sensor.', solutionBn: 'data pin ও pull-up দেখুন।' },
    ],
    tryItTips: ['Show values on I2C LCD', 'Alert when temp > 30°C'],
    tryItTipsBn: ['I2C LCD তে দেখান', '30°C এর উপরে alert'],
  },

  'ds18b20-temp': {
    title: 'DS18B20 Waterproof Temp',
    titleBn: 'DS18B20 waterproof temp',
    duration: '10 min',
    level: 'intermediate',
    description: 'Read accurate waterproof temperature with OneWire DS18B20 sensor.',
    descriptionBn: 'OneWire DS18B20 দিয়ে accurate waterproof temperature।',
    whatYouWillLearn: [
      'OneWire bus — multiple sensors on one pin',
      'Install OneWire and DallasTemperature libraries',
      '4.7k pull-up on data line',
      'Read Celsius with getTempCByIndex(0)',
    ],
    whatYouWillLearnBn: [
      'OneWire bus',
      'OneWire + DallasTemperature library',
      '4.7k pull-up',
      'getTempCByIndex(0)',
    ],
    components: ['Arduino Uno', 'DS18B20 waterproof probe', '4.7kΩ resistor', 'Jumper wires'],
    circuitDescription: 'Red→5V, Black→GND, Yellow data→pin 7 + 4.7k to 5V.',
    circuitDescriptionBn: 'Red→5V, Black→GND, Yellow→pin 7 + 4.7k to 5V।',
    code: `#include <OneWire.h>
#include <DallasTemperature.h>

const int oneWirePin = 7;
OneWire oneWire(oneWirePin);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);

  if (tempC == DEVICE_DISCONNECTED_C) {
    Serial.println(F("Sensor disconnected"));
  } else {
    Serial.print(F("Water temp: "));
    Serial.print(tempC);
    Serial.println(F(" C"));
  }
  delay(1000);
}`,
    codeExplanation: [
      { line: 6, text: 'OneWire allows many DS18B20 on same data pin.', textBn: 'OneWire এ many sensor এক pin এ।' },
      { line: 14, text: 'requestTemperatures() starts conversion (~750 ms).', textBn: 'requestTemperatures() conversion শুরু।' },
    ],
    commonMistakes: [
      { mistake: '-127°C or disconnected', mistakeBn: '-127°C', solution: 'Add 4.7k pull-up 5V to data. Check GND and data pin.', solutionBn: '4.7k pull-up যোগ করুন।' },
    ],
    tryItTips: ['Dip probe in ice water — expect ~0°C', 'Use getDeviceCount() for multiple sensors'],
    tryItTipsBn: ['বরফের পানিতে ~0°C', 'getDeviceCount() multiple sensor'],
  },

  'gas-sensors': {
    title: 'Gas Sensors (MQ Series)',
    titleBn: 'MQ গ্যাস সেন্সর',
    duration: '15 min',
    level: 'intermediate',
    description: 'Read MQ-2 smoke/LPG sensor on analog pin and detect gas threshold.',
    descriptionBn: 'MQ-2 analog pin এ পড়ে gas threshold detect করুন।',
    whatYouWillLearn: [
      'MQ sensor needs preheat (~24h for best accuracy)',
      'Analog A0 output increases with gas concentration',
      'Calibrate threshold in clean air first',
      'Trigger buzzer when gas level high',
    ],
    whatYouWillLearnBn: [
      'MQ preheat ~24h',
      'gas বাড়লে A0 বাড়ে',
      'clean air তে calibrate',
      'buzzer trigger',
    ],
    components: ['Arduino Uno', 'MQ-2 module', 'Buzzer on pin 8'],
    circuitDescription: 'VCC→5V, GND→GND, A0→A0. D0 optional for digital threshold.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, A0→A0।',
    code: `const int mqPin = A0;
const int buzzerPin = 8;
int cleanAirValue = 100; // calibrate: read in fresh air after preheat

void setup() {
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
  Serial.println(F("MQ-2 preheating... read baseline in Serial"));
}

void loop() {
  int gasValue = analogRead(mqPin);
  Serial.print(F("Gas ADC: "));
  Serial.println(gasValue);

  if (gasValue > cleanAirValue + 150) {
    digitalWrite(buzzerPin, HIGH);
    Serial.println(F("WARNING: Gas/smoke high!"));
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  delay(500);
}`,
    codeExplanation: [
      { line: 3, text: 'Set cleanAirValue after reading Serial in fresh air.', textBn: 'fresh air এ cleanAirValue সেট করুন।' },
      { line: 15, text: 'Threshold offset (+150) triggers alarm above baseline.', textBn: 'baseline + 150 threshold।' },
    ],
    commonMistakes: [
      { mistake: 'Always alarming', mistakeBn: 'সবসময় alarm', solution: 'Increase offset or preheat longer. MQ sensors are not precise without calibration.', solutionBn: 'offset বাড়ান বা preheat।' },
    ],
    tryItTips: ['Never use near open flame for LPG test — use isopropyl vapor carefully', 'Log baseline on startup'],
    tryItTipsBn: ['LPG test এ open flame নয়', 'startup baseline log'],
  },

  'soil-moisture': {
    title: 'Soil Moisture Sensor',
    titleBn: 'মাটির আর্দ্রতা সেন্সর',
    duration: '8 min',
    level: 'beginner',
    description: 'Measure soil moisture with capacitive or resistive sensor on analog pin.',
    descriptionBn: 'analog pin এ capacitive/resistive sensor দিয়ে soil moisture।',
    whatYouWillLearn: [
      'Prefer capacitive sensor (no corrosion)',
      'Dry soil = high ADC, wet = low (resistive type)',
      'Calibrate dry and wet values',
      'Control water pump relay when dry',
    ],
    whatYouWillLearnBn: [
      'capacitive sensor ভালো',
      'dry=high ADC, wet=low',
      'calibrate dry/wet',
      'dry হলে pump relay',
    ],
    components: ['Arduino Uno', 'Soil moisture sensor', 'Jumper wires'],
    circuitDescription: 'VCC→3.3V or 5V (module spec), GND→GND, A0→A0.',
    circuitDescriptionBn: 'VCC→3.3V/5V, GND→GND, A0→A0।',
    code: `const int moisturePin = A0;
const int pumpRelayPin = 7;

int dryValue = 800;  // calibrate in air
int wetValue = 400;  // calibrate in water

void setup() {
  pinMode(pumpRelayPin, OUTPUT);
  digitalWrite(pumpRelayPin, HIGH); // relay OFF
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(moisturePin);
  int moisturePercent = map(constrain(raw, wetValue, dryValue), dryValue, wetValue, 0, 100);

  Serial.print(F("Moisture: "));
  Serial.print(moisturePercent);
  Serial.println(F("%"));

  if (moisturePercent < 30) {
    digitalWrite(pumpRelayPin, LOW); // pump ON
  } else if (moisturePercent > 60) {
    digitalWrite(pumpRelayPin, HIGH); // pump OFF
  }
  delay(2000);
}`,
    codeExplanation: [
      { line: 16, text: 'map() converts ADC to 0–100% moisture.', textBn: 'map() 0–100% moisture।' },
      { line: 21, text: 'Hysteresis: pump on below 30%, off above 60%.', textBn: '30% নিচে pump on, 60% উপরে off।' },
    ],
    commonMistakes: [
      { mistake: 'Readings drift over weeks (resistive)', mistakeBn: 'resistive drift', solution: 'Use capacitive sensor. Do not leave powered 24/7 on cheap probes.', solutionBn: 'capacitive ব্যবহার করুন।' },
    ],
    tryItTips: ['Record dry/wet ADC in Serial then update constants', 'Only power sensor during read to reduce corrosion'],
    tryItTipsBn: ['dry/wet ADC record', 'read সময় power on'],
  },

  'rain-sensor': {
    title: 'Rain Sensor',
    titleBn: 'বৃষ্টি সেন্সর',
    duration: '8 min',
    level: 'beginner',
    description: 'Detect rain with rain sensor module analog or digital output.',
    descriptionBn: 'rain sensor module analog/digital দিয়ে বৃষ্টি detect।',
    whatYouWillLearn: [
      'Analog rain intensity on A0',
      'Digital D0 with onboard pot threshold',
      'Send alert when rain starts',
      'Close window servo demo logic',
    ],
    whatYouWillLearnBn: [
      'A0 analog intensity',
      'D0 pot threshold',
      'rain alert',
      'window close logic',
    ],
    components: ['Arduino Uno', 'Rain sensor module', 'LED pin 13'],
    circuitDescription: 'VCC→5V, GND→GND, A0→A0, D0→pin 2 (optional).',
    circuitDescriptionBn: 'VCC→5V, GND→GND, A0→A0, D0→pin 2।',
    code: `const int rainAnalog = A0;
const int rainDigital = 2;
const int ledPin = 13;

void setup() {
  pinMode(rainDigital, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int rainLevel = analogRead(rainAnalog);
  bool raining = digitalRead(rainDigital) == LOW; // often LOW when wet

  Serial.print(F("Rain ADC: "));
  Serial.println(rainLevel);

  digitalWrite(ledPin, raining ? HIGH : LOW);
  if (raining) Serial.println(F("Rain detected!"));
  delay(500);
}`,
    codeExplanation: [
      { line: 13, text: 'Lower ADC usually means more water on pad.', textBn: 'বেশি পানি = সাধারণত কম ADC।' },
    ],
    commonMistakes: [
      { mistake: 'False rain when humid', mistakeBn: 'humid এ false rain', solution: 'Adjust module potentiometer. Wipe sensor dry for baseline.', solutionBn: 'pot adjust, sensor শুকান।' },
    ],
    tryItTips: ['Drop water on pad to test', 'Combine with buzzer alert'],
    tryItTipsBn: ['পানি drip test', 'buzzer alert'],
  },

  'flame-sensor': {
    title: 'Flame Sensor',
    titleBn: 'আগুন সেন্সর',
    duration: '8 min',
    level: 'beginner',
    description: 'Detect fire with IR flame sensor module and trigger alarm.',
    descriptionBn: 'IR flame module দিয়ে fire detect ও alarm।',
    whatYouWillLearn: [
      'Flame sensor detects IR from fire',
      'Digital and analog outputs',
      'Safe testing with lighter at distance',
      'Fire alarm with buzzer',
    ],
    whatYouWillLearnBn: [
      'flame IR detect',
      'digital/analog output',
      'safe lighter test',
      'fire alarm',
    ],
    components: ['Arduino Uno', 'Flame sensor module', 'Buzzer pin 8'],
    circuitDescription: 'VCC→5V, GND→GND, D0→pin 2, A0→A0 optional.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, D0→pin 2।',
    code: `const int flamePin = 2;
const int buzzerPin = 8;

void setup() {
  pinMode(flamePin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool fire = (digitalRead(flamePin) == LOW); // active LOW on most modules

  if (fire) {
    digitalWrite(buzzerPin, HIGH);
    Serial.println(F("FIRE DETECTED!"));
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  delay(100);
}`,
    codeExplanation: [
      { line: 10, text: 'LOW when flame IR detected — verify with lighter test.', textBn: 'flame এ LOW — lighter test।' },
    ],
    commonMistakes: [
      { mistake: 'Triggered by sunlight', mistakeBn: 'sunlight trigger', solution: 'Shield sensor. Adjust sensitivity pot. Use indoors for test.', solutionBn: 'shield, pot adjust।' },
    ],
    tryItTips: ['Never leave fire unattended during test', 'Add relay to cut power on fire detect'],
    tryItTipsBn: ['test fire unattended নয়', 'relay power cut'],
  },

  'water-level': {
    title: 'Water Level Sensor',
    titleBn: 'পানির level সেন্সর',
    duration: '8 min',
    level: 'beginner',
    description: 'Measure water level with contact or ultrasonic sensor for tank projects.',
    descriptionBn: 'contact/ultrasonic দিয়ে tank water level।',
    whatYouWillLearn: [
      'Contact level sensor analog output',
      'Map immersion depth to percentage',
      'Low level alert with buzzer',
      'Prevent pump dry-run logic',
    ],
    whatYouWillLearnBn: [
      'contact sensor analog',
      'depth to percent',
      'low level alert',
      'pump dry-run prevent',
    ],
    components: ['Arduino Uno', 'Water level sensor strip', 'Buzzer', 'LED'],
    circuitDescription: 'Level sensor +→5V, -→GND, S→A0. Strip submerged in tank.',
    circuitDescriptionBn: '+→5V, -→GND, S→A0। strip tank এ।',
    code: `const int levelPin = A0;
const int buzzerPin = 8;
const int lowThreshold = 200; // ADC below this = tank low

void setup() {
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int level = analogRead(levelPin);
  int percent = map(constrain(level, 0, 600), 0, 600, 0, 100);

  Serial.print(F("Water level ~"));
  Serial.print(percent);
  Serial.println(F("%"));

  if (level < lowThreshold) {
    digitalWrite(buzzerPin, HIGH);
    Serial.println(F("LOW WATER!"));
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  delay(1000);
}`,
    codeExplanation: [
      { line: 12, text: 'Calibrate map max (600) to your tank full reading.', textBn: 'tank full reading দিয়ে map calibrate।' },
    ],
    commonMistakes: [
      { mistake: 'Corrosion on cheap strip sensors', mistakeBn: 'corrosion', solution: 'Use capacitive level sensor for permanent install.', solutionBn: 'capacitive level sensor ব্যবহার।' },
    ],
    tryItTips: ['Mark tank empty and full ADC values', 'Stop pump when level too low'],
    tryItTipsBn: ['empty/full ADC mark', 'low level pump stop'],
  },
}

import { ArduinoLessonsMap } from './types'

export const projectLessons: ArduinoLessonsMap = {
  'smart-dustbin': {
    title: 'Smart Dustbin',
    titleBn: 'স্মার্ট ডাস্টবিন',
    duration: '25 min',
    level: 'intermediate',
    description: 'Build an automatic dustbin lid that opens when you approach using ultrasonic sensor and servo.',
    descriptionBn: 'ultrasonic + servo দিয়ে কাছে এলে ঢাকনা খুলে যায় এমন smart dustbin।',
    whatYouWillLearn: [
      'Combine ultrasonic distance + servo motor',
      'Open lid when distance < 15 cm',
      'Close lid after delay when hand leaves',
      'Mount components on a bin prototype',
    ],
    whatYouWillLearnBn: [
      'ultrasonic + servo combine',
      '15 cm এ lid open',
      'delay পর close',
      'bin prototype mount',
    ],
    components: ['Arduino Uno', 'HC-SR04', 'SG90 servo', 'Jumper wires', 'Cardboard bin'],
    circuitDescription: 'Ultrasonic Trig→9, Echo→10. Servo signal→pin 6. Common 5V/GND.',
    circuitDescriptionBn: 'Trig→9, Echo→10। Servo→6। common 5V/GND।',
    code: `#include <Servo.h>

const int trigPin = 9, echoPin = 10;
Servo lidServo;
const int closedAngle = 0;
const int openAngle = 90;
const int openDistance = 15; // cm

long readDistanceCm() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long d = pulseIn(echoPin, HIGH, 25000);
  return d * 0.0343 / 2;
}

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  lidServo.attach(6);
  lidServo.write(closedAngle);
  Serial.begin(9600);
}

void loop() {
  long dist = readDistanceCm();
  if (dist > 0 && dist < openDistance) {
    lidServo.write(openAngle);
    Serial.println(F("Lid OPEN"));
  } else {
    lidServo.write(closedAngle);
  }
  delay(200);
}`,
    codeExplanation: [
      { line: 10, text: 'readDistanceCm() wraps HC-SR04 trigger and echo logic.', textBn: 'readDistanceCm() HC-SR04 logic wrap।' },
      { line: 28, text: 'Open when valid reading under 15 cm.', textBn: '15 cm এর নিচে open।' },
    ],
    commonMistakes: [
      { mistake: 'Lid opens randomly', mistakeBn: 'random open', solution: 'Increase openDistance threshold or add averaging of 3 readings.', solutionBn: 'threshold বা average reading।' },
    ],
    tryItTips: ['Add buzzer beep when opening', 'Use millis() to auto-close after 3 seconds'],
    tryItTipsBn: ['open এ buzzer', 'millis() 3 sec auto close'],
  },

  'security-alarm': {
    title: 'Security Alarm System',
    titleBn: 'সিকিউরিটি অ্যালার্ম',
    duration: '30 min',
    level: 'intermediate',
    description: 'PIR motion + magnetic door sensor + buzzer for a simple home security alarm.',
    descriptionBn: 'PIR + door sensor + buzzer দিয়ে simple home security alarm।',
    whatYouWillLearn: [
      'Combine PIR and door reed switch',
      'Arm/disarm with push button',
      'Loud alarm pattern on intrusion',
      'Exit delay after arming',
    ],
    whatYouWillLearnBn: [
      'PIR + reed switch',
      'button arm/disarm',
      'intrusion alarm pattern',
      'exit delay',
    ],
    components: ['Arduino Uno', 'PIR', 'Magnetic reed switch', 'Buzzer', 'Push button', 'LED'],
    circuitDescription: 'PIR→pin 2, Reed→pin 3 (INPUT_PULLUP), Button→pin 4, Buzzer→pin 8, LED→pin 13.',
    circuitDescriptionBn: 'PIR→2, Reed→3, Button→4, Buzzer→8, LED→13।',
    code: `const int pirPin = 2, doorPin = 3, btnPin = 4, buzzerPin = 8, ledPin = 13;
bool armed = false;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(doorPin, INPUT_PULLUP);
  pinMode(btnPin, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void alarm() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(buzzerPin, HIGH);
    digitalWrite(ledPin, HIGH);
    delay(200);
    digitalWrite(buzzerPin, LOW);
    digitalWrite(ledPin, LOW);
    delay(200);
  }
}

void loop() {
  if (digitalRead(btnPin) == LOW) {
    armed = !armed;
    Serial.println(armed ? F("ARMED") : F("DISARMED"));
    delay(500);
  }

  if (armed) {
    digitalWrite(ledPin, HIGH);
    bool motion = digitalRead(pirPin) == HIGH;
    bool doorOpen = digitalRead(doorPin) == HIGH; // reed open when door open
    if (motion || doorOpen) alarm();
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
    codeExplanation: [
      { line: 1, text: 'INPUT_PULLUP: button/reed LOW when triggered (connected to GND).', textBn: 'INPUT_PULLUP trigger এ LOW।' },
      { line: 28, text: 'Alarm when armed AND (motion OR door open).', textBn: 'armed + motion/door = alarm।' },
    ],
    commonMistakes: [
      { mistake: 'Alarm when disarmed', mistakeBn: 'disarmed এ alarm', solution: 'Check armed flag. Debounce button with delay after toggle.', solutionBn: 'armed flag, button debounce।' },
    ],
    tryItTips: ['Add 10 second exit delay after arming', 'Send SMS with GSM module upgrade'],
    tryItTipsBn: ['arm পর 10 sec exit delay', 'GSM SMS upgrade'],
  },

  'plant-watering': {
    title: 'Auto Plant Watering',
    titleBn: 'অটো প্ল্যান্ট ওয়াটারিং',
    duration: '25 min',
    level: 'intermediate',
    description: 'Automatically water plants when soil moisture drops below threshold using pump relay.',
    descriptionBn: 'soil moisture কমলে relay pump দিয়ে auto watering।',
    whatYouWillLearn: [
      'Soil moisture sensor calibration',
      'Relay-controlled water pump',
      'Hysteresis to avoid rapid on/off',
      'Timed watering duration limit',
    ],
    whatYouWillLearnBn: [
      'moisture calibrate',
      'relay pump',
      'hysteresis',
      'watering time limit',
    ],
    components: ['Arduino Uno', 'Soil moisture sensor', '5V relay', 'Mini water pump', 'Tube'],
    circuitDescription: 'Moisture A0→A0. Relay IN→pin 7. Pump through relay NO/COM. External 5V for pump.',
    circuitDescriptionBn: 'Moisture A0। Relay IN→7। pump relay NO/COM।',
    code: `const int moisturePin = A0;
const int relayPin = 7;
const int dryThreshold = 350;
const int wetThreshold = 550;
unsigned long pumpStart = 0;
const unsigned long maxPumpMs = 5000;
bool pumping = false;

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // relay OFF
  Serial.begin(9600);
}

void loop() {
  int moisture = analogRead(moisturePin);
  Serial.print(F("Moisture ADC: "));
  Serial.println(moisture);

  if (!pumping && moisture > dryThreshold) {
    digitalWrite(relayPin, LOW); // pump ON
    pumping = true;
    pumpStart = millis();
    Serial.println(F("Watering started"));
  }

  if (pumping && (moisture < wetThreshold || millis() - pumpStart > maxPumpMs)) {
    digitalWrite(relayPin, HIGH); // pump OFF
    pumping = false;
    Serial.println(F("Watering stopped"));
  }
  delay(2000);
}`,
    codeExplanation: [
      { line: 4, text: 'Higher ADC = drier soil on most resistive sensors.', textBn: 'বেশি ADC = dry soil।' },
      { line: 22, text: 'Max 5 second pump run prevents flooding if sensor fails.', textBn: 'max 5 sec flood prevent।' },
    ],
    commonMistakes: [
      { mistake: 'Pump runs continuously', mistakeBn: 'continuous pump', solution: 'Verify relay active LOW/HIGH. Set maxPumpMs safety limit.', solutionBn: 'relay logic, maxPumpMs।' },
    ],
    tryItTips: ['Calibrate dryThreshold in your soil', 'Water only once per hour with extra timer'],
    tryItTipsBn: ['dryThreshold calibrate', 'hourly limit timer'],
  },

  'obstacle-robot': {
    title: 'Obstacle Avoiding Robot',
    titleBn: 'বাধা এড়ানো রোবট',
    duration: '35 min',
    level: 'advanced',
    description: 'Build a robot that drives forward, detects obstacles with ultrasonic, turns, and continues.',
    descriptionBn: 'ultrasonic দিয়ে বাধা detect করে turn করে এগিয়ে যায় এমন robot।',
    whatYouWillLearn: [
      'Integrate L298N + HC-SR04 on one robot',
      'Stop, scan left/right, choose clear path',
      'Motor control functions forward/turn',
      'Power distribution for motors and Arduino',
    ],
    whatYouWillLearnBn: [
      'L298N + HC-SR04 এক robot',
      'stop, scan, turn',
      'motor functions',
      'power distribution',
    ],
    components: ['Arduino Uno', 'L298N', '2× DC motors + chassis', 'HC-SR04', 'Battery 7–12V'],
    circuitDescription: 'Motors on L298N IN1–IN4 pins 8–11, ENA 5. Ultrasonic Trig 9, Echo 10. Sensor on front.',
    circuitDescriptionBn: 'L298N IN 8–11, ENA 5। Ultrasonic 9,10। sensor সামনে।',
    code: `const int IN1=8, IN2=9, IN3=10, IN4=11, ENA=5;
const int trigPin=12, echoPin=13;

long distanceCm() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  return pulseIn(echoPin, HIGH, 30000) * 0.0343 / 2;
}

void forward() {
  digitalWrite(IN1,HIGH); digitalWrite(IN2,LOW);
  digitalWrite(IN3,HIGH); digitalWrite(IN4,LOW);
  analogWrite(ENA, 180);
}
void stopMotors() {
  digitalWrite(IN1,LOW); digitalWrite(IN2,LOW);
  digitalWrite(IN3,LOW); digitalWrite(IN4,LOW);
}
void turnRight() {
  digitalWrite(IN1,HIGH); digitalWrite(IN2,LOW);
  digitalWrite(IN3,LOW); digitalWrite(IN4,HIGH);
  analogWrite(ENA, 160);
}

void setup() {
  pinMode(IN1,OUTPUT); pinMode(IN2,OUTPUT);
  pinMode(IN3,OUTPUT); pinMode(IN4,OUTPUT);
  pinMode(trigPin,OUTPUT); pinMode(echoPin,INPUT);
  Serial.begin(9600);
}

void loop() {
  long dist = distanceCm();
  Serial.println(dist);
  if (dist > 0 && dist < 20) {
    stopMotors();
    delay(300);
    turnRight();
    delay(500);
    stopMotors();
    delay(200);
  } else {
    forward();
  }
  delay(100);
}`,
    codeExplanation: [
      { line: 30, text: 'If obstacle closer than 20 cm, stop and turn right.', textBn: '20 cm এ stop + right turn।' },
      { line: 37, text: 'Else drive forward — simple bump-turn behavior.', textBn: 'নাহলে forward।' },
    ],
    commonMistakes: [
      { mistake: 'Robot only spins', mistakeBn: 'only spin', solution: 'Check motor wiring on L298N. Verify distance readings in Serial.', solutionBn: 'motor wiring, Serial distance।' },
    ],
    tryItTips: ['Add left scan function for smarter path choice', 'Reduce speed with lower analogWrite'],
    tryItTipsBn: ['left scan smarter path', 'lower PWM speed'],
  },
}

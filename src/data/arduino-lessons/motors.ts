import { ArduinoLessonsMap } from './types'

export const motorLessons: ArduinoLessonsMap = {
  'l298n-driver': {
    title: 'L298N Motor Driver',
    titleBn: 'L298N মোটর ড্রাইভার',
    duration: '15 min',
    level: 'intermediate',
    description: 'Drive 2 DC motors forward and reverse with L298N H-bridge module.',
    descriptionBn: 'L298N H-bridge দিয়ে 2 DC motor forward/reverse চালান।',
    whatYouWillLearn: [
      'L298N IN1–IN4 and ENA/ENB pins',
      'Remove 5V jumper if using separate motor supply',
      'Truth table for forward, reverse, stop',
      'PWM speed control on ENA',
    ],
    whatYouWillLearnBn: [
      'IN1–IN4, ENA/ENB pin',
      '5V jumper remove',
      'forward/reverse/stop truth table',
      'ENA PWM speed',
    ],
    components: ['Arduino Uno', 'L298N module', '2× DC motors', '7–12V battery', 'Jumper wires'],
    circuitDescription: 'IN1→8, IN2→9, IN3→10, IN4→11, ENA→5, ENB→6. Motor power 7–12V to +12V/GND on module.',
    circuitDescriptionBn: 'IN1→8, IN2→9, IN3→10, IN4→11, ENA→5, ENB→6। motor power 7–12V।',
    code: `const int IN1 = 8, IN2 = 9, IN3 = 10, IN4 = 11;
const int ENA = 5;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void forward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 200); // ~78% speed
}

void stopMotors() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void loop() {
  forward();
  delay(2000);
  stopMotors();
  delay(1000);
}`,
    codeExplanation: [
      { line: 15, text: 'IN1 HIGH + IN2 LOW = motor A forward.', textBn: 'IN1 HIGH + IN2 LOW = motor A forward।' },
      { line: 19, text: 'analogWrite(ENA, 0–255) controls speed via PWM.', textBn: 'analogWrite speed PWM।' },
    ],
    commonMistakes: [
      { mistake: 'Motors weak or Arduino resets', mistakeBn: 'motor weak/reset', solution: 'Use external 7–12V for motors. Connect GND common. Remove 5V enable jumper.', solutionBn: 'external 7–12V, common GND।' },
    ],
    tryItTips: ['Add reverse() function swapping HIGH/LOW', 'Use pin 3 for ENA if only one motor'],
    tryItTipsBn: ['reverse() function', 'single motor ENA pin 3'],
  },

  'l293d-driver': {
    title: 'L293D Motor Shield',
    titleBn: 'L293D মোটর শিল্ড',
    duration: '12 min',
    level: 'intermediate',
    description: 'Use Arduino Motor Shield R3 with AFMotor library for easy robot control.',
    descriptionBn: 'AFMotor library দিয়ে Motor Shield R3 এ robot control।',
    whatYouWillLearn: [
      'Stack Motor Shield on Arduino',
      'M1 and M2 motor ports',
      'AFMotor library run(FORWARD) and setSpeed()',
      'External power jack on shield for motors',
    ],
    whatYouWillLearnBn: [
      'Shield stack',
      'M1, M2 port',
      'run(FORWARD), setSpeed()',
      'external power jack',
    ],
    components: ['Arduino Uno', 'L293D Motor Shield', '2× DC gear motors', 'Battery pack'],
    circuitDescription: 'Stack shield on Uno. Motors to M1/M2 terminals. Power shield via VIN jack (6–12V).',
    circuitDescriptionBn: 'Shield stack। M1/M2 motor। VIN jack 6–12V।',
    code: `// Install "Adafruit Motor Shield library" (AFMotor)
#include <AFMotor.h>

AF_DCMotor motor1(1); // port M1
AF_DCMotor motor2(2); // port M2

void setup() {
  motor1.setSpeed(200); // 0-255
  motor2.setSpeed(200);
}

void loop() {
  motor1.run(FORWARD);
  motor2.run(FORWARD);
  delay(2000);

  motor1.run(RELEASE);
  motor2.run(RELEASE);
  delay(1000);
}`,
    codeExplanation: [
      { line: 4, text: 'Motor port 1 and 2 match M1/M2 screw terminals.', textBn: 'port 1,2 = M1/M2।' },
      { line: 13, text: 'RELEASE stops motor (coast). BRAKE stops firmly.', textBn: 'RELEASE coast, BRAKE firm stop।' },
    ],
    commonMistakes: [
      { mistake: 'Motors not spinning', mistakeBn: 'motor spin নয়', solution: 'Install AFMotor library. Enable external power on shield.', solutionBn: 'AFMotor library, external power।' },
    ],
    tryItTips: ['Try BACKWARD for reverse', 'Different speeds for turning robot'],
    tryItTipsBn: ['BACKWARD reverse', 'different speed turn'],
  },

  'bts7960-driver': {
    title: 'BTS7960 High Power Driver',
    titleBn: 'BTS7960 হাই পাওয়ার ড্রাইভার',
    duration: '12 min',
    level: 'intermediate',
    description: 'Control high-current DC motors with BTS7960 dual H-bridge module.',
    descriptionBn: 'BTS7960 dual H-bridge দিয়ে high-current DC motor।',
    whatYouWillLearn: [
      'RPWM/LPWM and R_EN/L_EN enable pins',
      'Separate motor supply up to 24V',
      'PWM for speed, digital for direction',
      'Heat sink and current limits',
    ],
    whatYouWillLearnBn: [
      'RPWM/LPWM, R_EN/L_EN',
      '24V motor supply',
      'PWM speed, digital direction',
      'heat sink, current limit',
    ],
    components: ['Arduino Uno', 'BTS7960 module', 'High torque DC motor', 'Suitable battery'],
    circuitDescription: 'R_EN/L_EN→5V. RPWM→pin 5, LPWM→pin 6 (one motor). Motor terminals to M+ M-.',
    circuitDescriptionBn: 'R_EN/L_EN→5V। RPWM→5, LPWM→6। M+ M- motor।',
    code: `const int RPWM = 5;
const int LPWM = 6;
const int R_EN = 7;
const int L_EN = 8;

void setup() {
  pinMode(RPWM, OUTPUT);
  pinMode(LPWM, OUTPUT);
  pinMode(R_EN, OUTPUT);
  pinMode(L_EN, OUTPUT);
  digitalWrite(R_EN, HIGH);
  digitalWrite(L_EN, HIGH);
}

void loop() {
  // Forward
  analogWrite(RPWM, 180);
  analogWrite(LPWM, 0);
  delay(2000);

  // Stop
  analogWrite(RPWM, 0);
  analogWrite(LPWM, 0);
  delay(1000);
}`,
    codeExplanation: [
      { line: 14, text: 'Enable pins must be HIGH to activate driver.', textBn: 'enable HIGH দরকার।' },
      { line: 19, text: 'RPWM PWM + LPWM 0 = forward. Reverse swaps pins.', textBn: 'RPWM PWM forward। reverse swap।' },
    ],
    commonMistakes: [
      { mistake: 'Module gets very hot', mistakeBn: 'module hot', solution: 'Ensure heat sink mounted. Do not exceed motor current rating.', solutionBn: 'heat sink, current rating।' },
    ],
    tryItTips: ['Never enable both RPWM and LPWM high at once', 'Use lower PWM for testing'],
    tryItTipsBn: ['RPWM LPWM একসাথে high নয়', 'test এ low PWM'],
  },

  'stepper-motor': {
    title: 'Stepper Motor Control',
    titleBn: 'স্টেপার মোটর',
    duration: '15 min',
    level: 'intermediate',
    description: 'Drive 28BYJ-48 stepper with ULN2003 driver board using Stepper library.',
    descriptionBn: 'Stepper library দিয়ে ULN2003 + 28BYJ-48 stepper।',
    whatYouWillLearn: [
      'Stepper moves in fixed steps (precise angles)',
      'ULN2003 IN1–IN4 to Arduino pins 8–11',
      'setSpeed() and step(steps) functions',
      'Steps per revolution for 28BYJ-48 (2048)',
    ],
    whatYouWillLearnBn: [
      'fixed step angle',
      'IN1–IN4 pin 8–11',
      'setSpeed(), step()',
      '2048 steps/rev 28BYJ-48',
    ],
    components: ['Arduino Uno', '28BYJ-48 stepper', 'ULN2003 driver board'],
    circuitDescription: 'Plug stepper into ULN2003 board. IN1–IN4 → pins 8, 9, 10, 11. Board 5V/GND to Arduino.',
    circuitDescriptionBn: 'IN1–IN4 → 8,9,10,11। 5V/GND Arduino।',
    code: `#include <Stepper.h>

const int stepsPerRevolution = 2048; // 28BYJ-48 gear ratio
Stepper myStepper(stepsPerRevolution, 8, 10, 9, 11); // IN1, IN3, IN2, IN4 order

void setup() {
  myStepper.setSpeed(10); // rpm
}

void loop() {
  myStepper.step(stepsPerRevolution);  // one full turn CW
  delay(1000);
  myStepper.step(-stepsPerRevolution); // one full turn CCW
  delay(1000);
}`,
    codeExplanation: [
      { line: 4, text: 'Pin order matches ULN2003 IN1–IN4 wiring (8,10,9,11 is common fix).', textBn: 'pin order wiring match।' },
      { line: 11, text: 'Negative steps rotate counter-clockwise.', textBn: 'negative step CCW।' },
    ],
    commonMistakes: [
      { mistake: 'Motor vibrates but does not turn', mistakeBn: 'vibrate no turn', solution: 'Check wire order. Use 8,10,9,11 pin sequence for 28BYJ-48.', solutionBn: 'wire order 8,10,9,11।' },
    ],
    tryItTips: ['step(512) for quarter turn', 'Slow speed with setSpeed(5) for torque'],
    tryItTipsBn: ['step(512) quarter turn', 'setSpeed(5) torque'],
  },
}

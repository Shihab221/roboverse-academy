import { ProjectGuide } from './project-types'

export const guides: Record<string, ProjectGuide> = {
  'line-follower-robot': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This robot follows a black line on a white floor using two IR sensors. It is a perfect first robot because you can see it think and correct itself.',
      'You will mount two IR sensors in front, connect an L298N motor driver, and power the motors from a separate 12V battery. The Arduino only decides direction.',
    ],
    overviewBn: [
      'এই রোবটটি দুটি IR সেন্সর দিয়ে সাদা মেঝেতে কালো লাইন অনুসরণ করে। এটি প্রথম রোবট হিসেবে দারুণ কারণ এটি কীভাবে নিজেকে ঠিক করে তা তুমি দেখতে পাবে।',
      'তুমি সামনে দুটি IR সেন্সর লাগাবে, L298N মোটর ড্রাইভার যুক্ত করবে এবং আলাদা 12V ব্যাটারি থেকে মোটরে পাওয়ার দেবে। Arduino শুধু দিক ঠিক করবে।',
    ],
    howItWorks: [
      'Each IR sensor shines infrared light down and measures reflection. White floor reflects a lot, black line reflects very little. The sensor output goes LOW on black and HIGH on white.',
      'The Arduino reads left sensor on D8 and right sensor on D9. If both see black, both motors run forward. If left sensor loses the line, the robot turns right to find it again, and opposite for the right side.',
      'Speed is controlled with PWM on ENA and ENB. Lower PWM makes the robot slower and more stable on sharp turns.',
    ],
    howItWorksBn: [
      'প্রতিটি IR সেন্সর নিচে ইনফ্রারেড আলো ফেলে এবং প্রতিফলন মাপে। সাদা মেঝে বেশি আলো ফেরায়, কালো লাইন খুব কম আলো ফেরায়। কালোতে আউটপুট LOW হয়, সাদাতে HIGH হয়।',
      'Arduino D8 পিনে বাম সেন্সর এবং D9 পিনে ডান সেন্সর পড়ে। দুটোই কালো দেখলে দুটি মোটর সামনে চলে। বাম সেন্সর লাইন হারালে রোবট ডানে ঘোরে, ডান সেন্সর হারালে বামে ঘোরে।',
      'ENA এবং ENB পিনে PWM দিয়ে গতি নিয়ন্ত্রণ করা হয়। কম PWM দিলে রোবট ধীরে চলে এবং বাঁকে স্থির থাকে।',
    ],
    pins: [
      { from: 'D8', to: 'OUT', part: 'Left IR Sensor', note: 'Left sensor signal', noteBn: 'বাম সেন্সরের সিগন্যাল' },
      { from: 'D9', to: 'OUT', part: 'Right IR Sensor', note: 'Right sensor signal', noteBn: 'ডান সেন্সরের সিগন্যাল' },
      { from: '5V', to: 'VCC', part: 'Left IR Sensor', note: 'Power for left sensor', noteBn: 'বাম সেন্সরের পাওয়ার' },
      { from: 'GND', to: 'GND', part: 'Left IR Sensor', note: 'Common ground', noteBn: 'কমন গ্রাউন্ড' },
      { from: '5V', to: 'VCC', part: 'Right IR Sensor', note: 'Power for right sensor', noteBn: 'ডান সেন্সরের পাওয়ার' },
      { from: 'GND', to: 'GND', part: 'Right IR Sensor', note: 'Common ground', noteBn: 'কমন গ্রাউন্ড' },
      { from: 'D2', to: 'IN1', part: 'L298N Motor Driver', note: 'Left motor direction 1', noteBn: 'বাম মোটরের দিক ১' },
      { from: 'D3', to: 'IN2', part: 'L298N Motor Driver', note: 'Left motor direction 2', noteBn: 'বাম মোটরের দিক ২' },
      { from: 'D4', to: 'IN3', part: 'L298N Motor Driver', note: 'Right motor direction 1', noteBn: 'ডান মোটরের দিক ১' },
      { from: 'D5', to: 'IN4', part: 'L298N Motor Driver', note: 'Right motor direction 2', noteBn: 'ডান মোটরের দিক ২' },
      { from: 'D10', to: 'ENA', part: 'L298N Motor Driver', note: 'PWM speed left', noteBn: 'বাম গতির PWM' },
      { from: 'D11', to: 'ENB', part: 'L298N Motor Driver', note: 'PWM speed right', noteBn: 'ডান গতির PWM' },
    ],
    steps: [
      'Mount two IR sensors at the front, 2 cm above the floor and 3 cm apart. Left OUT goes to D8, right OUT goes to D9, VCC to 5V, GND to GND.',
      'Wire L298N IN1 to D2, IN2 to D3, IN3 to D4, IN4 to D5, ENA to D10, ENB to D11. Connect left motor to OUT1 and OUT2, right motor to OUT3 and OUT4.',
      'Connect 12V battery positive to L298N 12V input and battery negative to L298N GND. Add one wire from L298N GND to Arduino GND for common ground.',
      'First test motors without sensors. Upload the sketch, lift the wheels off the table, and check both wheels spin forward. Swap motor wires if one spins backward.',
      'Place the robot on a black tape line on white paper. Adjust the small blue knob on each IR sensor until the onboard LED changes exactly on the line.',
      'Upload the final sketch and let the robot run. Start with PWM speed 150 and increase only if it follows smoothly.',
      'If it shakes too much, move sensors closer together and lower the speed. Clean the floor because dust confuses IR sensors.',
    ],
    stepsBn: [
      'সামনে দুটি IR সেন্সর মেঝে থেকে ২ সেমি উপরে এবং ৩ সেমি দূরত্বে লাগাও। বাম OUT D8 এ, ডান OUT D9 এ, VCC 5V এ, GND GND তে দাও।',
      'L298N এর IN1 D2 তে, IN2 D3 তে, IN3 D4 তে, IN4 D5 তে, ENA D10 এ, ENB D11 এ দাও। বাম মোটর OUT1 ও OUT2 তে, ডান মোটর OUT3 ও OUT4 তে দাও।',
      '12V ব্যাটারির পজিটিভ L298N এর 12V ইনপুটে এবং নেগেটিভ L298N GND তে দাও। L298N GND থেকে Arduino GND তে একটি তার দিয়ে কমন গ্রাউন্ড করো।',
      'প্রথমে সেন্সর ছাড়া মোটর পরীক্ষা করো। কোড আপলোড করে চাকা টেবিল থেকে উঁচুতে ধরো এবং দুটি চাকা সামনে ঘোরে কিনা দেখো। উল্টো ঘুরলে মোটরের তার বদলে দাও।',
      'সাদা কাগজে কালো টেপের লাইনে রোবট বসাও। প্রতিটি IR সেন্সরের ছোট নীল নব ঘুরিয়ে ঠিক করো যেন লাইনে এলইডি বদলায়।',
      'চূড়ান্ত কোড আপলোড করে রোবট চালাও। PWM গতি 150 দিয়ে শুরু করো এবং মসৃণ চললে তবেই বাড়াও।',
      'বেশি কাঁপলে সেন্সর কাছাকাছি আনো এবং গতি কমাও। মেঝে পরিষ্কার রাখো কারণ ধুলায় IR সেন্সর ভুল করে।',
    ],
    code: `// Line Follower Robot - 2x IR + L298N
// Left IR OUT -> D8, Right IR OUT -> D9
// L298N: IN1 D2, IN2 D3, IN3 D4, IN4 D5, ENA D10, ENB D11

const int LEFT_SENSOR = 8;
const int RIGHT_SENSOR = 9;
const int IN1 = 2;
const int IN2 = 3;
const int IN3 = 4;
const int IN4 = 5;
const int ENA = 10;
const int ENB = 11;
const int SPEED = 150;

void setup() {
  pinMode(LEFT_SENSOR, INPUT);
  pinMode(RIGHT_SENSOR, INPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int left = digitalRead(LEFT_SENSOR);
  int right = digitalRead(RIGHT_SENSOR);
  Serial.print(left);
  Serial.print(right);
  Serial.println();

  // LOW = black line, HIGH = white floor
  if (left == LOW && right == LOW) {
    goStraight();
  } else if (left == HIGH && right == LOW) {
    turnRight();
  } else if (left == LOW && right == HIGH) {
    turnLeft();
  } else {
    stopMotors();
  }
  delay(20);
}

void goStraight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void stopMotors() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}
`,
    codeTitle: 'line_follower.ino',
    codeLanguage: 'cpp',
    tips: [
      'Always test motors first with wheels in the air. Fix direction before testing the line.',
      'Keep sensor height near 2 cm. Too high makes the line blurry.',
      'Use fresh batteries. Slow motors on low battery look like code errors.',
      'Start on a wide straight line, then try curves after it works.',
    ],
    tipsBn: [
      'আগে চাকা উঁচুতে ধরে মোটর পরীক্ষা করো। লাইনে দেওয়ার আগেই দিক ঠিক করো।',
      'সেন্সরের উচ্চতা ২ সেমির কাছে রাখো। বেশি উঁচু হলে লাইন ঝাপসা লাগে।',
      'ভালো ব্যাটারি ব্যবহার করো। কম চার্জে মোটর ধীরে চলে, কোডের দোষ মনে হয়।',
      'প্রথমে চওড়া সোজা লাইনে চালাও, কাজ করলে পরে বাঁক চেষ্টা করো।',
    ],
  },
  'bluetooth-car': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This car moves with commands from your phone over Bluetooth. You press forward, back, left, right, or stop in a Bluetooth control app.',
      'An HC-05 module receives letters and the Arduino drives an L298N motor driver. SoftwareSerial on D10 and D11 keeps the USB port free for debugging.',
    ],
    overviewBn: [
      'এই গাড়ি ফোন থেকে ব্লুটুথ কমান্ডে চলে। ব্লুটুথ কন্ট্রোল অ্যাপে তুমি সামনে, পেছনে, বামে, ডানে বা থামো চাপ দেবে।',
      'HC-05 মডিউল অক্ষর গ্রহণ করে এবং Arduino L298N মোটর ড্রাইভার চালায়। D10 ও D11 এ SoftwareSerial ব্যবহার করায় USB পোর্ট ডিবাগের জন্য খালি থাকে।',
    ],
    howItWorks: [
      'The phone sends one letter at a time: F for forward, B for back, L for left, R for right, S for stop. The HC-05 passes each letter to the Arduino at 9600 baud.',
      'SoftwareSerial listens on D10 for HC-05 TX and talks on D11 to HC-05 RX. HC-05 RX is 3.3V only, so D11 goes through a 1k and 2k resistor divider to drop 5V down to about 3.3V.',
      'The Arduino sets L298N IN1 to IN4 for direction and writes PWM 150 to ENA on D6 and ENB on D9 for steady speed. D10 and D11 are kept free from motors to avoid clash with Bluetooth.',
    ],
    howItWorksBn: [
      'ফোন একবারে একটি অক্ষর পাঠায়: F মানে সামনে, B মানে পেছনে, L মানে বামে, R মানে ডানে, S মানে থামো। HC-05 প্রতিটি অক্ষর 9600 baud গতিতে Arduino কে দেয়।',
      'SoftwareSerial D10 পিনে HC-05 TX শোনে এবং D11 পিনে HC-05 RX এর সাথে কথা বলে। HC-05 RX শুধু 3.3V নেয়, তাই D11 থেকে 1k ও 2k রেজিস্টর দিয়ে 5V কমিয়ে প্রায় 3.3V করা হয়।',
      'Arduino দিকের জন্য L298N এর IN1 থেকে IN4 সেট করে এবং স্থির গতির জন্য D6 এর ENA ও D9 এর ENB তে PWM 150 লেখে। ব্লুটুথের সাথে সংঘাত এড়াতে D10 ও D11 মোটরে ব্যবহার করা হয় না।',
    ],
    pins: [
      { from: '5V', to: 'VCC', part: 'HC-05 Bluetooth', note: '5V power', noteBn: '5V পাওয়ার' },
      { from: 'GND', to: 'GND', part: 'HC-05 Bluetooth', note: 'Common ground', noteBn: 'কমন গ্রাউন্ড' },
      { from: 'D10', to: 'TXD', part: 'HC-05 Bluetooth', note: 'HC-05 TX to Arduino RX', noteBn: 'HC-05 TX থেকে Arduino RX' },
      { from: 'D11', to: 'RXD', part: 'HC-05 Bluetooth', note: 'Through 1k/2k divider, 3.3V only', noteBn: '1k/2k ভাগে, শুধু 3.3V' },
      { from: 'D2', to: 'IN1', part: 'L298N Motor Driver', note: 'Left motor dir 1', noteBn: 'বাম মোটর দিক ১' },
      { from: 'D3', to: 'IN2', part: 'L298N Motor Driver', note: 'Left motor dir 2', noteBn: 'বাম মোটর দিক ২' },
      { from: 'D4', to: 'IN3', part: 'L298N Motor Driver', note: 'Right motor dir 1', noteBn: 'ডান মোটর দিক ১' },
      { from: 'D5', to: 'IN4', part: 'L298N Motor Driver', note: 'Right motor dir 2', noteBn: 'ডান মোটর দিক ২' },
      { from: 'D6', to: 'ENA', part: 'L298N Motor Driver', note: 'PWM speed left', noteBn: 'বাম গতির PWM' },
      { from: 'D9', to: 'ENB', part: 'L298N Motor Driver', note: 'PWM speed right', noteBn: 'ডান গতির PWM' },
    ],
    steps: [
      'Pair the HC-05 with your phone using code 1234 or 0000. Install any Bluetooth RC car app that sends letters.',
      'Wire HC-05 VCC to 5V and GND to GND. Connect HC-05 TXD directly to D10. Connect D11 through a divider to HC-05 RXD: D11 to 1k, 1k to RXD, RXD to 2k, 2k to GND.',
      'Wire L298N IN1 to D2, IN2 to D3, IN3 to D4, IN4 to D5, ENA to D6, ENB to D9. Keep D10 and D11 only for Bluetooth.',
      'Power motors from a separate battery into L298N 12V and GND. Join L298N GND to Arduino GND for common ground.',
      'Upload the sketch, open Serial Monitor at 9600, and type F B L R S to test motors with wheels lifted.',
      'Connect the app to HC-05, press each button briefly, and check the car moves correctly. Swap motor wires if left and right are reversed.',
      'Drive slowly first on a flat floor. Keep the phone charged because weak Bluetooth disconnects often.',
    ],
    stepsBn: [
      '1234 বা 0000 কোড দিয়ে HC-05 ফোনের সাথে পেয়ার করো। অক্ষর পাঠায় এমন Bluetooth RC car অ্যাপ ইনস্টল করো।',
      'HC-05 VCC 5V তে এবং GND GND তে দাও। HC-05 TXD সরাসরি D10 এ দাও। D11 থেকে ভাগ করে HC-05 RXD এ দাও: D11 থেকে 1k, 1k থেকে RXD, RXD থেকে 2k, 2k থেকে GND।',
      'L298N এর IN1 D2 তে, IN2 D3 তে, IN3 D4 তে, IN4 D5 তে, ENA D6 এ, ENB D9 এ দাও। D10 ও D11 শুধু ব্লুটুথের জন্য রাখো।',
      'আলাদা ব্যাটারি থেকে L298N এর 12V ও GND তে মোটর পাওয়ার দাও। L298N GND থেকে Arduino GND তে জুড়ে কমন গ্রাউন্ড করো।',
      'কোড আপলোড করে Serial Monitor 9600 তে খুলে চাকা উঁচুতে ধরে F B L R S লিখে মোটর পরীক্ষা করো।',
      'অ্যাপ HC-05 এর সাথে যুক্ত করে প্রতিটি বোতাম অল্প চাপো এবং গাড়ি ঠিক চলে কিনা দেখো। বাম ডান উল্টো হলে মোটরের তার বদলাও।',
      'প্রথমে সমতল মেঝেতে ধীরে চালাও। ফোনে চার্জ রাখো কারণ দুর্বল ব্লুটুথ বারবার বিচ্ছিন্ন হয়।',
    ],
    code: `// Bluetooth Car - HC-05 + L298N
// HC-05 TX -> D10, HC-05 RX -> D11 via 1k/2k divider
// L298N: IN1 D2, IN2 D3, IN3 D4, IN4 D5, ENA D6, ENB D9

#include <SoftwareSerial.h>

SoftwareSerial btSerial(10, 11);
const int IN1 = 2;
const int IN2 = 3;
const int IN3 = 4;
const int IN4 = 5;
const int ENA = 6;
const int ENB = 9;
const int SPEED = 150;

void setup() {
  Serial.begin(9600);
  btSerial.begin(9600);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  stopCar();
  Serial.println("Bluetooth car ready. Send F B L R S.");
}

void loop() {
  if (btSerial.available()) {
    char cmd = btSerial.read();
    Serial.println(cmd);
    if (cmd == 'F') {
      forward();
    } else if (cmd == 'B') {
      backward();
    } else if (cmd == 'L') {
      turnLeft();
    } else if (cmd == 'R') {
      turnRight();
    } else if (cmd == 'S') {
      stopCar();
    }
  }
  if (Serial.available()) {
    char c = Serial.read();
    btSerial.write(c);
  }
}

void forward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void backward() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void stopCar() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}
`,
    codeTitle: 'bluetooth_car.ino',
    codeLanguage: 'cpp',
    tips: [
      'Never connect HC-05 RX directly to 5V. Always use the 1k and 2k divider.',
      'Keep motor pins away from D10 and D11 or Bluetooth will glitch.',
      'If the app disconnects, turn the car off and on, then reconnect.',
      'Test with Serial Monitor first. If F works there, the app will work too.',
    ],
    tipsBn: [
      'HC-05 RX কখনো সরাসরি 5V তে দিও না। সবসময় 1k ও 2k ভাগ ব্যবহার করো।',
      'মোটর পিন D10 ও D11 থেকে দূরে রাখো, না হলে ব্লুটুথ সমস্যা করবে।',
      'অ্যাপ বিচ্ছিন্ন হলে গাড়ি বন্ধ করে চালু করো, তারপর আবার যুক্ত করো।',
      'আগে Serial Monitor দিয়ে পরীক্ষা করো। সেখানে F কাজ করলে অ্যাপেও কাজ করবে।',
    ],
  },
  'obstacle-avoiding-robot': {
    boardLabel: 'Arduino Uno',
    boardLabelBn: 'Arduino Uno',
    overview: [
      'This robot drives on its own and turns away from walls and furniture. An ultrasonic sensor on a small servo looks left and right like a head.',
      'When something is closer than 25 cm, the robot stops, scans both sides, and turns toward the clearer side. No remote is needed.',
    ],
    overviewBn: [
      'এই রোবট নিজে চলে এবং দেয়াল ও আসবাব থেকে সরে যায়। ছোট সার্ভোতে বসানো অতিস্বনক সেন্সর মাথার মতো বামে ও ডানে তাকায়।',
      'কিছু ২৫ সেমির কাছে এলে রোবট থামে, দুই পাশে মাপে এবং খালি দিকে ঘোরে। কোনো রিমোট লাগে না।',
    ],
    howItWorks: [
      'The HC-SR04 sends a sound pulse from TRIG on D9 and listens on ECHO on D10. Distance equals echo time divided by 58 in cm. Short time means a close wall.',
      'A SG90 servo on D7 points the sensor forward, then left, then right. The Arduino compares left and right distances and picks the bigger gap.',
      'The L298N drives both motors with IN1 to IN4 on D2 to D5 and PWM speed on ENA D6 and ENB D11. The robot runs on a separate battery with common GND to the Arduino.',
    ],
    howItWorksBn: [
      'HC-SR04 D9 এর TRIG থেকে শব্দ পাঠায় এবং D10 এর ECHO তে শোনে। দূরত্ব হলো প্রতিধ্বনি সময় ভাগ ৫৮, সেমিতে। কম সময় মানে কাছের দেয়াল।',
      'D7 এর SG90 সার্ভো সেন্সরকে সামনে, তারপর বামে, তারপর ডানে ঘোরায়। Arduino বাম ও ডান দূরত্ব তুলনা করে বড় ফাঁকা দিক বেছে নেয়।',
      'L298N D2 থেকে D5 এর IN1 থেকে IN4 দিয়ে দুটি মোটর চালায় এবং D6 এর ENA ও D11 এর ENB তে PWM গতি দেয়। রোবট আলাদা ব্যাটারিতে চলে এবং Arduino এর সাথে কমন GND থাকে।',
    ],
    pins: [
      { from: 'D9', to: 'TRIG', part: 'Ultrasonic HC-SR04', note: 'Trigger pulse out', noteBn: 'ট্রিগার পালস আউট' },
      { from: 'D10', to: 'ECHO', part: 'Ultrasonic HC-SR04', note: 'Echo pulse in', noteBn: 'ইকো পালস ইন' },
      { from: '5V', to: 'VCC', part: 'Ultrasonic HC-SR04 + Servo', note: 'Shared 5V power', noteBn: 'যৌথ 5V পাওয়ার' },
      { from: 'GND', to: 'GND', part: 'Ultrasonic HC-SR04 + Servo', note: 'Shared ground', noteBn: 'যৌথ গ্রাউন্ড' },
      { from: 'D7', to: 'SIG', part: 'SG90 Servo', note: 'Servo signal', noteBn: 'সার্ভো সিগন্যাল' },
      { from: 'D2', to: 'IN1', part: 'L298N Motor Driver', note: 'Left motor dir 1', noteBn: 'বাম মোটর দিক ১' },
      { from: 'D3', to: 'IN2', part: 'L298N Motor Driver', note: 'Left motor dir 2', noteBn: 'বাম মোটর দিক ২' },
      { from: 'D4', to: 'IN3', part: 'L298N Motor Driver', note: 'Right motor dir 1', noteBn: 'ডান মোটর দিক ১' },
      { from: 'D5', to: 'IN4', part: 'L298N Motor Driver', note: 'Right motor dir 2', noteBn: 'ডান মোটর দিক ২' },
      { from: 'D6', to: 'ENA', part: 'L298N Motor Driver', note: 'PWM speed left', noteBn: 'বাম গতির PWM' },
      { from: 'D11', to: 'ENB', part: 'L298N Motor Driver', note: 'PWM speed right', noteBn: 'ডান গতির PWM' },
    ],
    steps: [
      'Mount the SG90 servo at the front center and fix the HC-SR04 on top of its horn. Connect servo signal to D7, power to 5V, ground to GND.',
      'Wire HC-SR04 TRIG to D9 and ECHO to D10. Share 5V and GND rails with the servo on a breadboard.',
      'Wire L298N IN1 to D2, IN2 to D3, IN3 to D4, IN4 to D5, ENA to D6, ENB to D11. Connect motors to OUT1 with OUT2 and OUT3 with OUT4.',
      'Power the L298N from a separate battery pack into 12V and GND. Add a wire from L298N GND to Arduino GND for common ground.',
      'Upload the sketch and open Serial Monitor at 9600. Hold your hand in front and check distance numbers fall below 25.',
      'Place the robot on the floor with space ahead. It should drive forward, stop near walls, scan left and right, then turn to the clearer side.',
      'If it turns the wrong way, swap left and right motor wires. If it shakes, lower PWM speed and tighten the sensor mount.',
    ],
    stepsBn: [
      'সামনে মাঝখানে SG90 সার্ভো বসাও এবং তার হর্নের উপর HC-SR04 লাগাও। সার্ভো সিগন্যাল D7 তে, পাওয়ার 5V তে, গ্রাউন্ড GND তে দাও।',
      'HC-SR04 এর TRIG D9 এ এবং ECHO D10 এ দাও। ব্রেডবোর্ডে সার্ভোর সাথে 5V ও GND ভাগ করে দাও।',
      'L298N এর IN1 D2 তে, IN2 D3 তে, IN3 D4 তে, IN4 D5 তে, ENA D6 এ, ENB D11 এ দাও। মোটর OUT1 সাথে OUT2 এবং OUT3 সাথে OUT4 এ দাও।',
      'আলাদা ব্যাটারি থেকে L298N এর 12V ও GND তে পাওয়ার দাও। L298N GND থেকে Arduino GND তে তার দিয়ে কমন গ্রাউন্ড করো।',
      'কোড আপলোড করে Serial Monitor 9600 তে খোলো। সামনে হাত ধরো এবং দূরত্ব ২৫ এর নিচে নামে কিনা দেখো।',
      'সামনে জায়গা রেখে মেঝেতে রোবট বসাও। এটি সামনে চলবে, দেয়ালের কাছে থামবে, বাম ডান মাপবে, তারপর খালি দিকে ঘুরবে।',
      'ভুল দিকে ঘুরলে বাম ও ডান মোটরের তার বদলাও। কাঁপলে PWM গতি কমাও এবং সেন্সর শক্ত করে লাগাও।',
    ],
    code: `// Obstacle Avoiding Robot - HC-SR04 on SG90 + L298N
// Sonar: TRIG D9, ECHO D10. Servo signal D7.
// L298N: IN1 D2, IN2 D3, IN3 D4, IN4 D5, ENA D6, ENB D11

#include <Servo.h>

const int TRIG = 9;
const int ECHO = 10;
const int SERVO_PIN = 7;
const int IN1 = 2;
const int IN2 = 3;
const int IN3 = 4;
const int IN4 = 5;
const int ENA = 6;
const int ENB = 11;
const int SPEED = 150;
const int STOP_CM = 25;

Servo neck;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  neck.attach(SERVO_PIN);
  neck.write(90);
  Serial.begin(9600);
  delay(500);
}

void loop() {
  neck.write(90);
  delay(200);
  long front = readCm();
  Serial.println(front);

  if (front > STOP_CM || front <= 0) {
    goForward();
  } else {
    stopMotors();
    delay(300);
    neck.write(150);
    delay(400);
    long left = readCm();
    neck.write(30);
    delay(400);
    long right = readCm();
    neck.write(90);
    delay(200);
    if (left > right) {
      turnLeft();
      delay(500);
    } else {
      turnRight();
      delay(500);
    }
    stopMotors();
    delay(200);
  }
  delay(50);
}

long readCm() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long us = pulseIn(ECHO, HIGH, 30000);
  long cm = us / 58;
  return cm;
}

void goForward() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnLeft() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void turnRight() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  analogWrite(ENA, SPEED);
  analogWrite(ENB, SPEED);
}

void stopMotors() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);
}
`,
    codeTitle: 'obstacle_avoiding.ino',
    codeLanguage: 'cpp',
    tips: [
      'Fix the sensor tight on the servo. A loose sensor gives jumping numbers.',
      'Test on a hard wall first. Soft curtains absorb sound and look far.',
      'Keep USB cable away from wheels during first test to avoid pulling.',
      'If it stops too late, raise STOP_CM from 25 to 30.',
    ],
    tipsBn: [
      'সেন্সর সার্ভোতে শক্ত করে লাগাও। ঢিলা সেন্সরে সংখ্যা লাফায়।',
      'প্রথমে শক্ত দেয়ালে পরীক্ষা করো। নরম পর্দা শব্দ শোষে, দূর মনে হয়।',
      'প্রথম পরীক্ষায় USB তার চাকা থেকে দূরে রাখো যেন টান না লাগে।',
      'দেরিতে থামলে STOP_CM ২৫ থেকে ৩০ করো।',
    ],
  },
}

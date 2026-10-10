import { Esp32LessonsMap } from './types'

export const introLessons: Esp32LessonsMap = {
  'what-is-esp32': {
    title: 'What is ESP32?',
    titleBn: 'ESP32 কী?',
    duration: '5 min',
    level: 'beginner',
    description: 'Meet the ESP32. It is a tiny, cheap chip with WiFi and Bluetooth built in.',
    descriptionBn: 'ESP32 এর সাথে পরিচয় করো। এটি ছোট, সস্তা একটি চিপ যাতে WiFi ও Bluetooth আছে।',
    whatYouWillLearn: [
      'What the ESP32 chip is',
      'Why it has two brains (dual-core)',
      'What WiFi and Bluetooth on one chip means',
      'What projects you can build with it',
    ],
    whatYouWillLearnBn: [
      'ESP32 চিপ কী',
      'কেন এতে দুটি ব্রেইন (dual-core) আছে',
      'এক চিপে WiFi ও Bluetooth থাকার মানে',
      'এটি দিয়ে কী কী প্রজেক্ট বানানো যায়',
    ],
    components: ['ESP32 DevKit V1 board', 'Micro-USB cable', 'Computer with Arduino IDE'],
    circuitDescription: 'Plug your ESP32 into the computer with a micro-USB cable. No extra parts needed.',
    circuitDescriptionBn: 'Micro-USB কেবল দিয়ে ESP32 কম্পিউটারে লাগাও। অতিরিক্ত কিছু লাগবে না।',
    code: `// ESP32 Hello - your first look at ESP32 power

const int ledPin = 2; // Onboard LED on most ESP32 DevKit boards

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  Serial.println("Hello from ESP32!");
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
      { line: 3, text: 'GPIO 2 connects to the small blue LED on most ESP32 boards.', textBn: 'GPIO 2 বেশিরভাগ ESP32 বোর্ডের ছোট নীল LED এর সাথে যুক্ত।' },
      { line: 5, text: 'setup() runs one time when ESP32 turns on.', textBn: 'setup() ESP32 চালু হলে একবার চলে।' },
      { line: 7, text: 'Serial.begin(115200) starts talking to your computer. ESP32 uses 115200 speed.', textBn: 'Serial.begin(115200) কম্পিউটারের সাথে কথা বলা শুরু করে। ESP32 এ 115200 স্পিড ব্যবহার হয়।' },
      { line: 11, text: 'loop() repeats forever. It blinks the LED every 500 ms.', textBn: 'loop() বারবার চলে। প্রতি ৫০০ ms এ LED ব্লিংক করে।' },
    ],
    commonMistakes: [
      { mistake: 'Thinking ESP32 is just like Arduino', mistakeBn: 'ESP32 কে Arduino এর মতো ভাবা', solution: 'ESP32 is stronger and has WiFi. But it uses 3.3V, not 5V. Be gentle with pins.', solutionBn: 'ESP32 বেশি শক্তিশালী এবং WiFi আছে। কিন্তু এটি 5V নয়, 3.3V ব্যবহার করে। পিনে সাবধান থাকো।' },
      { mistake: 'Serial Monitor shows strange symbols', mistakeBn: 'Serial Monitor এ অদ্ভুত চিহ্ন দেখা যায়', solution: 'Set Serial Monitor speed to 115200. It must match Serial.begin(115200).', solutionBn: 'Serial Monitor স্পিড 115200 সেট করো। এটি Serial.begin(115200) এর সাথে মিলতে হবে।' },
    ],
    tryItTips: ['Open Serial Monitor at 115200 to see Hello messages', 'Change delay(500) to delay(1000) for slow blinking'],
    tryItTipsBn: ['115200 স্পিডে Serial Monitor খুলে Hello মেসেজ দেখো', 'ধীর ব্লিংকের জন্য delay(500) কে delay(1000) করো'],
  },

  'esp32-vs-arduino': {
    title: 'ESP32 vs Arduino',
    titleBn: 'ESP32 বনাম Arduino',
    duration: '6 min',
    level: 'beginner',
    description: 'Learn how ESP32 and Arduino are different. See the 3.3V warning and pick the right board.',
    descriptionBn: 'ESP32 ও Arduino এর পার্থক্য শিখো। 3.3V সতর্কতা দেখো এবং সঠিক বোর্ড বেছে নাও।',
    whatYouWillLearn: [
      'How ESP32 is different from Arduino Uno',
      'Why ESP32 pins use 3.3V logic only',
      'When to pick Arduino for simple projects',
      'When to pick ESP32 for WiFi projects',
    ],
    whatYouWillLearnBn: [
      'ESP32 Arduino Uno থেকে কীভাবে আলাদা',
      'কেন ESP32 পিনে শুধু 3.3V ব্যবহার হয়',
      'সাধারণ প্রজেক্টে Arduino কখন নেবে',
      'WiFi প্রজেক্টে ESP32 কখন নেবে',
    ],
    components: ['ESP32 board', 'Arduino Uno (optional, to compare)', 'USB cables'],
    circuitDescription: 'Connect only the ESP32 with USB. Keep the Arduino aside just to compare size and pins.',
    circuitDescriptionBn: 'শুধু ESP32 USB দিয়ে সংযুক্ত করো। তুলনা করতে Arduino পাশে রাখো।',
    code: `// ESP32 vs Arduino - same blink, different chip
// ESP32 uses 3.3V logic - never give it 5V on a pin!

const int ledPin = 2; // 3.3V onboard LED pin

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  Serial.println("ESP32 running at 3.3V!");
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);

  digitalWrite(ledPin, LOW);
  delay(1000);
}`,
    codeExplanation: [
      { line: 2, text: 'ESP32 pins can only take 3.3V. 5V can damage the chip.', textBn: 'ESP32 পিনে শুধু 3.3V দেওয়া যায়। 5V দিলে চিপ নষ্ট হতে পারে।' },
      { line: 4, text: 'We store the LED pin in a variable so it is easy to change.', textBn: 'LED পিন একটি ভেরিয়েবলে রাখি যাতে বদলানো সহজ হয়।' },
      { line: 8, text: 'Serial at 115200 is the normal speed for ESP32.', textBn: 'ESP32 এর জন্য 115200 হলো সাধারণ Serial স্পিড।' },
      { line: 12, text: 'loop() blinks the LED slowly, one second on and one second off.', textBn: 'loop() LED ধীরে ব্লিংক করে, এক সেকেন্ড অন ও এক সেকেন্ড অফ।' },
    ],
    commonMistakes: [
      { mistake: 'Giving 5V to an ESP32 pin', mistakeBn: 'ESP32 পিনে 5V দেওয়া', solution: 'Never connect 5V sensors directly. Use 3.3V power pin or a level shifter.', solutionBn: '5V সেন্সর সরাসরি লাগিও না। 3.3V পাওয়ার পিন বা level shifter ব্যবহার করো।' },
      { mistake: 'Picking ESP32 for every project', mistakeBn: 'প্রতিটি প্রজেক্টে ESP32 নেওয়া', solution: 'Simple LED or motor toy? Arduino Uno is easier. Need WiFi or Bluetooth? Pick ESP32.', solutionBn: 'সাধারণ LED বা মোটর খেলনা? Arduino Uno সহজ। WiFi বা Bluetooth লাগলে ESP32 নাও।' },
    ],
    tryItTips: ['Read the 3V3 label on your ESP32 board', 'List one project for Arduino and one for ESP32'],
    tryItTipsBn: ['তোমার ESP32 বোর্ডে 3V3 লেখাটি পড়ো', 'Arduino এর জন্য একটি ও ESP32 এর জন্য একটি প্রজেক্ট লিখো'],
  },

  'esp32-board-overview': {
    title: 'ESP32 Board Overview',
    titleBn: 'ESP32 বোর্ড পরিচিতি',
    duration: '7 min',
    level: 'beginner',
    description: 'Explore the ESP32 DevKit V1 board. Find the USB port, buttons, LED, and power pins.',
    descriptionBn: 'ESP32 DevKit V1 বোর্ড ঘুরে দেখো। USB পোর্ট, বোতাম, LED ও পাওয়ার পিন খুঁজে বের করো।',
    whatYouWillLearn: [
      'Parts of the ESP32 DevKit V1 board',
      'What EN and BOOT buttons do',
      'Where the onboard LED on GPIO 2 is',
      'Why ADC2 pins fail when WiFi is on',
    ],
    whatYouWillLearnBn: [
      'ESP32 DevKit V1 বোর্ডের অংশগুলো',
      'EN ও BOOT বোতাম কী করে',
      'GPIO 2 এর onboard LED কোথায়',
      'WiFi চালু থাকলে ADC2 পিন কেন কাজ করে না',
    ],
    components: ['ESP32 DevKit V1 board', 'Micro-USB cable', 'Computer'],
    circuitDescription: 'Look at your DevKit V1. Find micro-USB at the end, EN and BOOT buttons, GPIO 2 LED, and 3V3/GND pins.',
    circuitDescriptionBn: 'তোমার DevKit V1 দেখো। এক প্রান্তে micro-USB, EN ও BOOT বোতাম, GPIO 2 LED এবং 3V3/GND পিন খুঁজো।',
    code: `// ESP32 DevKit V1 board test
// EN = reset, BOOT = hold if upload fails

const int ledPin = 2; // GPIO 2 onboard blue LED

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  Serial.println("DevKit V1 ready!");
}

void loop() {
  digitalWrite(ledPin, HIGH);
  Serial.println("GPIO 2 HIGH - LED ON");
  delay(500);

  digitalWrite(ledPin, LOW);
  Serial.println("GPIO 2 LOW - LED OFF");
  delay(500);
}`,
    codeExplanation: [
      { line: 4, text: 'GPIO 2 has a blue LED on most DevKit boards. We blink it to test the board.', textBn: 'বেশিরভাগ DevKit বোর্ডে GPIO 2 তে নীল LED আছে। বোর্ড টেস্ট করতে এটি ব্লিংক করি।' },
      { line: 8, text: 'Serial at 115200 lets you confirm the board is alive.', textBn: '115200 Serial দিয়ে বোর্ড চলছে কিনা নিশ্চিত হওয়া যায়।' },
      { line: 12, text: 'loop() turns GPIO 2 on and off to blink the onboard LED.', textBn: 'loop() GPIO 2 অন-অফ করে onboard LED ব্লিংক করে।' },
    ],
    commonMistakes: [
      { mistake: 'Pressing BOOT during normal run', mistakeBn: 'সাধারণভাবে চলার সময় BOOT চাপা', solution: 'BOOT is only for upload problems. EN button restarts the board.', solutionBn: 'BOOT শুধু আপলোড সমস্যায় লাগে। EN বোতাম বোর্ড রিস্টার্ট করে।' },
      { mistake: 'Using ADC2 pins with WiFi on', mistakeBn: 'WiFi চালু রেখে ADC2 পিন ব্যবহার করা', solution: 'For sensor reading with WiFi, use ADC1 pins like GPIO 32-35.', solutionBn: 'WiFi সহ সেন্সর পড়তে GPIO 32-35 এর মতো ADC1 পিন ব্যবহার করো।' },
    ],
    tryItTips: ['Press EN and watch Serial Monitor restart message', 'Find 3V3 and GND pins with your finger (power off first)'],
    tryItTipsBn: ['EN চাপো এবং Serial Monitor এ রিস্টার্ট মেসেজ দেখো', 'পাওয়ার বন্ধ করে আঙুল দিয়ে 3V3 ও GND পিন খুঁজো'],
  },

  'setup-esp32-arduino-ide': {
    title: 'Setting up ESP32 in Arduino IDE',
    titleBn: 'Arduino IDE তে ESP32 সেটআপ',
    duration: '10 min',
    level: 'beginner',
    description: 'Add ESP32 to Arduino IDE step by step. Install drivers, pick the board, and fix upload errors.',
    descriptionBn: 'ধাপে ধাপে Arduino IDE তে ESP32 যোগ করো। ড্রাইভার ইনস্টল করো, বোর্ড বেছে নাও এবং আপলোড সমস্যা ঠিক করো।',
    whatYouWillLearn: [
      'How to add the ESP32 board manager URL',
      'How to install the esp32 platform',
      'How to select ESP32 Dev Module and COM port',
      'What to do if upload fails (hold BOOT)',
    ],
    whatYouWillLearnBn: [
      'ESP32 board manager URL কীভাবে যোগ করবে',
      'esp32 প্ল্যাটফর্ম কীভাবে ইনস্টল করবে',
      'ESP32 Dev Module ও COM পোর্ট কীভাবে বাছবে',
      'আপলোড ব্যর্থ হলে কী করবে (BOOT ধরে রাখা)',
    ],
    components: ['ESP32 board', 'Micro-USB data cable', 'Arduino IDE 2.x'],
    circuitDescription: 'Plug ESP32 into USB. Follow the steps, then upload the test sketch below.',
    circuitDescriptionBn: 'ESP32 USB তে লাগাও। ধাপগুলো অনুসরণ করো, তারপর নিচের টেস্ট স্কেচ আপলোড করো।',
    code: `// ESP32 setup test - upload to check your IDE
// Board: ESP32 Dev Module, Baud: 115200

void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT); // GPIO 2 on most boards

  Serial.println("ESP32 setup OK!");
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.println("Tick");
  delay(1000);

  digitalWrite(LED_BUILTIN, LOW);
  Serial.println("Tock");
  delay(1000);
}`,
    codeExplanation: [
      { line: 5, text: 'Serial.begin(115200) must match the Serial Monitor speed.', textBn: 'Serial.begin(115200) Serial Monitor স্পিডের সাথে মিলতে হবে।' },
      { line: 6, text: 'LED_BUILTIN is GPIO 2 on most ESP32 boards.', textBn: 'বেশিরভাগ ESP32 বোর্ডে LED_BUILTIN হলো GPIO 2।' },
      { line: 11, text: 'loop() blinks the LED and prints Tick-Tock every second.', textBn: 'loop() LED ব্লিংক করে এবং প্রতি সেকেন্ডে Tick-Tock প্রিন্ট করে।' },
    ],
    commonMistakes: [
      { mistake: 'Board URL not added, esp32 missing', mistakeBn: 'Board URL যোগ না করায় esp32 পাওয়া যাচ্ছে না', solution: 'Open File → Preferences. Add https://dl.espressiv.com/dl/package_esp32_index.json to board URLs. Then install esp32 in Boards Manager.', solutionBn: 'File → Preferences খোলো। https://dl.espressiv.com/dl/package_esp32_index.json যোগ করো। তারপর Boards Manager থেকে esp32 ইনস্টল করো।' },
      { mistake: 'Upload fails or no COM port', mistakeBn: 'আপলোড ব্যর্থ হয় বা COM পোর্ট নেই', solution: 'Install CP2102 or CH340 USB driver. Pick ESP32 Dev Module and correct COM port. Hold BOOT during upload if it fails.', solutionBn: 'CP2102 বা CH340 USB ড্রাইভার ইনস্টল করো। ESP32 Dev Module ও সঠিক COM পোর্ট বাছো। ব্যর্থ হলে আপলোডের সময় BOOT ধরে রাখো।' },
    ],
    tryItTips: ['Use File → Preferences to paste the board manager URL', 'If upload stops, hold BOOT, press EN once, then release BOOT'],
    tryItTipsBn: ['Board manager URL বসাতে File → Preferences ব্যবহার করো', 'আপলোড আটকে গেলে BOOT ধরে EN একবার চাপো, তারপর BOOT ছাড়ো'],
  },

  'first-esp32-sketch': {
    title: 'Your First ESP32 Sketch',
    titleBn: 'তোমার প্রথম ESP32 স্কেচ',
    duration: '10 min',
    level: 'beginner',
    description: 'Write and upload your first ESP32 program. Blink the onboard LED and say hello on Serial.',
    descriptionBn: 'তোমার প্রথম ESP32 প্রোগ্রাম লিখো ও আপলোড করো। onboard LED ব্লিংক করো এবং Serial এ hello বলো।',
    whatYouWillLearn: [
      'Parts of every sketch: setup() and loop()',
      'How to blink the onboard LED on GPIO 2',
      'How to print hello messages on Serial',
      'How to change blink speed yourself',
    ],
    whatYouWillLearnBn: [
      'প্রতিটি স্কেচের অংশ: setup() ও loop()',
      'GPIO 2 এর onboard LED কীভাবে ব্লিংক করবে',
      'Serial এ hello মেসেজ কীভাবে প্রিন্ট করবে',
      'নিজে ব্লিংক স্পিড কীভাবে বদলাবে',
    ],
    components: ['ESP32 DevKit V1 board', 'Micro-USB cable', 'Arduino IDE with ESP32 installed'],
    circuitDescription: 'No wiring needed. The LED on GPIO 2 is already on the board. Just upload over USB.',
    circuitDescriptionBn: 'কোনো তার লাগবে না। GPIO 2 এর LED বোর্ডেই আছে। শুধু USB দিয়ে আপলোড করো।',
    code: `// My first ESP32 sketch - blink GPIO 2
const int ledPin = 2; // Onboard LED

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(115200);
  Serial.println("My first ESP32 sketch running!");
}

void loop() {
  digitalWrite(ledPin, HIGH); // LED on
  Serial.println("Hello! LED is ON");
  delay(1000);

  digitalWrite(ledPin, LOW); // LED off
  Serial.println("Hello! LED is OFF");
  delay(1000);
}`,
    codeExplanation: [
      { line: 2, text: 'ledPin 2 is the onboard LED. A variable makes code easy to read.', textBn: 'ledPin 2 হলো onboard LED। ভেরিয়েবল কোড পড়া সহজ করে।' },
      { line: 4, text: 'setup() runs once. It sets the pin as output and starts Serial.', textBn: 'setup() একবার চলে। এটি পিন আউটপুট করে ও Serial চালু করে।' },
      { line: 10, text: 'loop() repeats forever. HIGH turns the LED on for one second.', textBn: 'loop() বারবার চলে। HIGH LED এক সেকেন্ড জ্বালায়।' },
      { line: 15, text: 'LOW turns the LED off for one second, then it repeats.', textBn: 'LOW LED এক সেকেন্ড নেভায়, তারপর আবার শুরু হয়।' },
    ],
    commonMistakes: [
      { mistake: 'LED does not blink', mistakeBn: 'LED ব্লিংক করে না', solution: 'Check Tools → Board is ESP32 Dev Module. On rare boards the LED is on another pin — try GPIO 5.', solutionBn: 'Tools → Board এ ESP32 Dev Module আছে কিনা দেখো। কিছু বোর্ডে LED অন্য পিনে থাকে — GPIO 5 চেষ্টা করো।' },
      { mistake: 'No text on Serial Monitor', mistakeBn: 'Serial Monitor এ লেখা আসে না', solution: 'Set baud to 115200. Pick the right COM port. Press EN to restart the board.', solutionBn: 'Baud 115200 সেট করো। সঠিক COM পোর্ট বাছো। বোর্ড রিস্টার্ট করতে EN চাপো।' },
    ],
    tryItTips: ['Change both delay(1000) to delay(200) for fast blinking', 'Change the Hello text to your own name and re-upload'],
    tryItTipsBn: ['দ্রুত ব্লিংকের জন্য দুটি delay(1000) কে delay(200) করো', 'Hello লেখায় নিজের নাম বসিয়ে আবার আপলোড করো'],
  },
}

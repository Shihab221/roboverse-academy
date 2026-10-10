import { Esp32LessonsMap } from './types'

export const iotLessons: Esp32LessonsMap = {
  'iot-intro': {
    title: 'What is IoT?',
    titleBn: 'IoT কী?',
    duration: '8 min',
    level: 'beginner',
    description: 'Learn what IoT means. See the path device to WiFi to cloud to phone with everyday examples.',
    descriptionBn: 'IoT মানে কী শিখুন। ডিভাইস থেকে WiFi থেকে ক্লাউড থেকে ফোন পর্যন্ত পথটি দৈনন্দিন উদাহরণে দেখুন।',
    whatYouWillLearn: [
      'What IoT means in simple words',
      'The path device to WiFi to cloud to phone',
      'Everyday IoT examples around you',
      'How ESP32 fits into IoT projects',
    ],
    whatYouWillLearnBn: [
      'সহজ ভাষায় IoT এর মানে',
      'ডিভাইস থেকে WiFi থেকে ক্লাউড থেকে ফোন পর্যন্ত পথ',
      'আপনার চারপাশে দৈনন্দিন IoT উদাহরণ',
      'IoT প্রজেক্টে ESP32 কীভাবে কাজ করে',
    ],
    components: ['ESP32 board', 'USB cable', 'Computer with Arduino IDE'],
    circuitDescription: 'No wiring needed. Just connect ESP32 to your computer with USB. We only print messages.',
    circuitDescriptionBn: 'কোনো ওয়্যারিং লাগবে না। শুধু USB দিয়ে ESP32 কম্পিউটারে লাগান। আমরা শুধু মেসেজ প্রিন্ট করব।',
    code: `// What is IoT? Demo - no hardware needed
// We pretend to read a sensor and send it to the cloud

void setup() {
  Serial.begin(115200);
  Serial.println("IoT demo starting...");
}

void loop() {
  int fakeTemp = 25 + random(0, 5);
  Serial.print("Device -> WiFi -> Cloud -> Phone: Temp = ");
  Serial.print(fakeTemp);
  Serial.println(" C");
  delay(2000);
}`,
    codeExplanation: [
      { line: 4, text: 'setup() runs once when ESP32 starts.', textBn: 'ESP32 চালু হলে setup() একবার চলে।' },
      { line: 5, text: 'Serial.begin(115200) starts messages to your computer.', textBn: 'Serial.begin(115200) কম্পিউটারে মেসেজ শুরু করে।' },
      { line: 10, text: 'We make a fake temperature between 25 and 29.', textBn: 'আমরা ২৫ থেকে ২৯ এর মধ্যে নকল তাপমাত্রা বানাই।' },
      { line: 11, text: 'This line shows the IoT path from device to phone.', textBn: 'এই লাইন ডিভাইস থেকে ফোন পর্যন্ত IoT পথ দেখায়।' },
    ],
    commonMistakes: [
      { mistake: 'Serial Monitor shows nothing', mistakeBn: 'Serial Monitor এ কিছু দেখা যায় না', solution: 'Set baud rate to 115200 in Serial Monitor. Press RST button on ESP32.', solutionBn: 'Serial Monitor এ baud rate 115200 সেট করুন। ESP32 এর RST বোতাম চাপুন।' },
      { mistake: 'Thinking you need WiFi for this lesson', mistakeBn: 'মনে করা এই পাঠে WiFi লাগবে', solution: 'No WiFi needed here. This is only a Serial demo of the idea.', solutionBn: 'এখানে WiFi লাগবে না। এটি শুধু ধারণার Serial ডেমো।' },
    ],
    tryItTips: ['Open Serial Monitor at 115200 baud to see messages', 'Change delay(2000) to delay(1000) for faster updates', 'Think of one IoT device in your home while watching output'],
    tryItTipsBn: ['Serial Monitor 115200 baud এ খুলে মেসেজ দেখুন', 'দ্রুত আপডেটের জন্য delay(2000) কে delay(1000) করুন', 'আউটপুট দেখতে দেখতে বাসার একটি IoT ডিভাইসের কথা ভাবুন'],
  },

  'blynk-setup': {
    title: 'Getting Started with Blynk',
    titleBn: 'Blynk দিয়ে শুরু',
    duration: '15 min',
    level: 'beginner',
    description: 'Control an ESP32 LED from your phone. Use Blynk IoT app and web dashboard with a button.',
    descriptionBn: 'ফোন থেকে ESP32 LED নিয়ন্ত্রণ করুন। বোতাম দিয়ে Blynk IoT অ্যাপ ও ওয়েব ড্যাশবোর্ড ব্যবহার করুন।',
    whatYouWillLearn: [
      'Create a Blynk account and template',
      'Find your BLYNK_AUTH_TOKEN',
      'Control GPIO 2 LED with button on V0',
      'Send sensor values with BlynkTimer',
    ],
    whatYouWillLearnBn: [
      'Blynk অ্যাকাউন্ট ও টেমপ্লেট তৈরি',
      'আপনার BLYNK_AUTH_TOKEN খোঁজা',
      'V0 বোতাম দিয়ে GPIO 2 LED নিয়ন্ত্রণ',
      'BlynkTimer দিয়ে সেন্সর মান পাঠানো',
    ],
    components: ['ESP32 board', 'USB cable', 'Phone with Blynk IoT app', 'WiFi connection'],
    circuitDescription: 'No extra wiring needed. Built-in LED on GPIO 2 is used. Connect ESP32 with USB for power.',
    circuitDescriptionBn: 'অতিরিক্ত ওয়্যারিং লাগবে না। GPIO 2 এর বিল্ট-ইন LED ব্যবহার হবে। পাওয়ারের জন্য USB দিয়ে ESP32 লাগান।',
    code: `// Blynk LED control - button on V0 controls GPIO 2 LED
#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "YOUR_DEVICE_NAME"
#define BLYNK_AUTH_TOKEN "YOUR_BLYNK_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>

char ssid[] = "YOUR_WIFI_NAME";
char pass[] = "YOUR_WIFI_PASSWORD";

const int ledPin = 2;
BlynkTimer timer;

void sendSensor() {
  int value = analogRead(34);
  Blynk.virtualWrite(V1, value);
  Serial.println(value);
}

BLYNK_WRITE(V0) {
  int state = param.asInt();
  digitalWrite(ledPin, state);
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, sendSensor);
}

void loop() {
  Blynk.run();
  timer.run();
}`,
    codeExplanation: [
      { line: 2, text: 'BLYNK_TEMPLATE_ID comes from your Blynk web dashboard.', textBn: 'BLYNK_TEMPLATE_ID আপনার Blynk ওয়েব ড্যাশবোর্ড থেকে আসে।' },
      { line: 7, text: 'BlynkSimpleEsp32.h connects ESP32 to Blynk cloud.', textBn: 'BlynkSimpleEsp32.h ESP32 কে Blynk ক্লাউডে যুক্ত করে।' },
      { line: 21, text: 'BLYNK_WRITE(V0) runs when you press the app button.', textBn: 'অ্যাপ বোতাম চাপলে BLYNK_WRITE(V0) চলে।' },
      { line: 34, text: 'Blynk.run() keeps the phone connection alive.', textBn: 'Blynk.run() ফোন সংযোগ চালু রাখে।' },
    ],
    commonMistakes: [
      { mistake: 'Invalid auth token error', mistakeBn: 'ভুল auth token এরর', solution: 'Copy BLYNK_AUTH_TOKEN fresh from web dashboard. Check TEMPLATE_ID and DEVICE_NAME match exactly.', solutionBn: 'ওয়েব ড্যাশবোর্ড থেকে BLYNK_AUTH_TOKEN নতুন করে কপি করুন। TEMPLATE_ID ও DEVICE_NAME হুবহু মিলিয়ে নিন।' },
      { mistake: 'Button does nothing', mistakeBn: 'বোতামে কিছু হয় না', solution: 'Set button widget to V0 in the app. Set mode to Switch, not Push.', solutionBn: 'অ্যাপে বোতাম V0 তে সেট করুন। Push নয়, Switch মোড দিন।' },
    ],
    tryItTips: ['Create a Button on V0 and a Gauge on V1 in the dashboard', 'Watch Serial Monitor at 115200 while pressing the button', 'Change 2000L to 5000L to send data slower'],
    tryItTipsBn: ['ড্যাশবোর্ডে V0 তে Button ও V1 তে Gauge বানান', 'বোতাম চাপার সময় Serial Monitor 115200 তে দেখুন', 'ধীরে ডেটা পাঠাতে 2000L কে 5000L করুন'],
  },

  'thingspeak': {
    title: 'Send Data to ThingSpeak',
    titleBn: 'ThingSpeak এ ডেটা পাঠান',
    duration: '15 min',
    level: 'beginner',
    description: 'Send DHT11 temperature and humidity to ThingSpeak. See live graphs on your channel page.',
    descriptionBn: 'DHT11 তাপমাত্রা ও আর্দ্রতা ThingSpeak এ পাঠান। আপনার চ্যানেল পেজে লাইভ গ্রাফ দেখুন।',
    whatYouWillLearn: [
      'Create a ThingSpeak channel and fields',
      'Find your write API key',
      'Read DHT11 on GPIO 15',
      'Send data with HTTP GET every 20 seconds',
    ],
    whatYouWillLearnBn: [
      'ThingSpeak চ্যানেল ও ফিল্ড তৈরি',
      'আপনার write API key খোঁজা',
      'GPIO 15 এ DHT11 পড়া',
      'প্রতি ২০ সেকেন্ডে HTTP GET দিয়ে ডেটা পাঠানো',
    ],
    components: ['ESP32 board', 'DHT11 sensor', 'Jumper wires', 'Breadboard', 'WiFi connection'],
    circuitDescription: 'DHT11 VCC to 3V3. DHT11 GND to GND. DHT11 DATA to GPIO 15.',
    circuitDescriptionBn: 'DHT11 VCC থেকে 3V3। DHT11 GND থেকে GND। DHT11 DATA থেকে GPIO 15।',
    code: `// Send DHT11 data to ThingSpeak every 20 seconds
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
String apiKey = "YOUR_WRITE_API_KEY";

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected!");
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  Serial.print("Temp: ");
  Serial.print(temp);
  Serial.print(" Hum: ");
  Serial.println(hum);
  String url = "http://api.thingspeak.com/update?api_key=" + apiKey + "&field1=" + String(temp) + "&field2=" + String(hum);
  HTTPClient http;
  http.begin(url);
  int code = http.GET();
  Serial.println(code);
  http.end();
  delay(20000);
}`,
    codeExplanation: [
      { line: 6, text: 'DHTPIN 15 means the sensor data wire is on GPIO 15.', textBn: 'DHTPIN 15 মানে সেন্সর ডেটা তার GPIO 15 এ।' },
      { line: 15, text: 'Serial.begin(115200) lets you see WiFi and sensor logs.', textBn: 'Serial.begin(115200) দিয়ে WiFi ও সেন্সর লগ দেখা যায়।' },
      { line: 33, text: 'The URL carries your key plus field1 and field2 values.', textBn: 'URL আপনার key সহ field1 ও field2 মান বহন করে।' },
      { line: 39, text: 'delay(20000) waits 20 seconds to respect the free limit.', textBn: 'delay(20000) ফ্রি লিমিট মানতে ২০ সেকেন্ড অপেক্ষা করে।' },
    ],
    commonMistakes: [
      { mistake: 'Data not updating on ThingSpeak', mistakeBn: 'ThingSpeak এ ডেটা আপডেট হয় না', solution: 'Wait at least 15 seconds between updates. Free accounts reject faster posts.', solutionBn: 'আপডেটের মাঝে কমপক্ষে ১৫ সেকেন্ড অপেক্ষা করুন। ফ্রি অ্যাকাউন্ট দ্রুত পোস্ট নেয় না।' },
      { mistake: 'Wrong API key', mistakeBn: 'ভুল API key', solution: 'Use the Write API Key from your channel, not the Read key. Paste it exactly.', solutionBn: 'Read key নয়, চ্যানেলের Write API Key ব্যবহার করুন। হুবহু বসান।' },
      { mistake: 'DHT reads nan', mistakeBn: 'DHT এ nan দেখায়', solution: 'Check DATA wire on GPIO 15. Check VCC is 3V3. Try a new sensor.', solutionBn: 'GPIO 15 এ DATA তার দেখুন। VCC 3V3 কিনা দেখুন। নতুন সেন্সর চেষ্টা করুন।' },
    ],
    tryItTips: ['Open your channel page to watch live graphs', 'Blow gently on DHT11 to see humidity rise', 'Try field1 for temp and field2 for humidity charts'],
    tryItTipsBn: ['লাইভ গ্রাফ দেখতে চ্যানেল পেজ খুলুন', 'আর্দ্রতা বাড়া দেখতে DHT11 এ হালকা ফুঁ দিন', 'তাপমাত্রায় field1 ও আর্দ্রতায় field2 চার্ট চেষ্টা করুন'],
  },

  'firebase-esp32': {
    title: 'ESP32 with Firebase',
    titleBn: 'Firebase এর সাথে ESP32',
    duration: '20 min',
    level: 'intermediate',
    description: 'Control an LED from Firebase. Push DHT11 readings using simple HTTP REST calls. No hard libraries.',
    descriptionBn: 'Firebase থেকে LED নিয়ন্ত্রণ করুন। সহজ HTTP REST দিয়ে DHT11 রিডিং পাঠান। কঠিন লাইব্রেরি নেই।',
    whatYouWillLearn: [
      'Create a Realtime Database project',
      'Read an LED value with HTTP GET',
      'Push sensor data with HTTP PUT',
      'Avoid fragile Firebase libraries',
    ],
    whatYouWillLearnBn: [
      'Realtime Database প্রজেক্ট তৈরি',
      'HTTP GET দিয়ে LED মান পড়া',
      'HTTP PUT দিয়ে সেন্সর ডেটা পাঠানো',
      'ভঙ্গুর Firebase লাইব্রেরি এড়ানো',
    ],
    components: ['ESP32 board', 'DHT11 sensor', 'LED or built-in GPIO 2 LED', 'WiFi connection', 'Firebase account'],
    circuitDescription: 'DHT11 DATA to GPIO 15, VCC to 3V3, GND to GND. LED on GPIO 2 follows the Firebase value.',
    circuitDescriptionBn: 'DHT11 DATA থেকে GPIO 15, VCC থেকে 3V3, GND থেকে GND। GPIO 2 LED Firebase মান অনুসরণ করে।',
    code: `// ESP32 with Firebase Realtime Database using plain HTTP REST
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
String baseUrl = "https://YOUR-PROJECT.firebaseio.com";

const int ledPin = 2;

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  dht.begin();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected!");
}

void loop() {
  HTTPClient http;
  http.begin(baseUrl + "/led.json");
  int getCode = http.GET();
  String payload = http.getString();
  Serial.println(payload);
  if (payload.indexOf("1") >= 0) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  http.end();
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  String data = "{\\"temp\\":" + String(temp) + ",\\"hum\\":" + String(hum) + "}";
  HTTPClient http2;
  http2.begin(baseUrl + "/sensor.json");
  http2.PUT(data);
  http2.end();
  delay(5000);
}`,
    codeExplanation: [
      { line: 12, text: 'baseUrl is your Firebase project address.', textBn: 'baseUrl আপনার Firebase প্রজেক্ট ঠিকানা।' },
      { line: 30, text: 'We GET /led.json to read the LED value.', textBn: 'LED মান পড়তে আমরা /led.json GET করি।' },
      { line: 34, text: 'If the value has 1, the LED turns on.', textBn: 'মানে 1 থাকলে LED জ্বলে।' },
      { line: 45, text: 'PUT sends sensor JSON to /sensor.json.', textBn: 'PUT /sensor.json এ সেন্সর JSON পাঠায়।' },
    ],
    commonMistakes: [
      { mistake: 'Permission denied from Firebase', mistakeBn: 'Firebase থেকে Permission denied', solution: 'Set Realtime Database rules to test mode or allow read and write for practice.', solutionBn: 'অনুশীলনের জন্য Realtime Database rules টেস্ট মোডে দিন।' },
      { mistake: 'Wrong project URL', mistakeBn: 'ভুল প্রজেক্ট URL', solution: 'Copy the exact URL from Firebase console. Keep .firebaseio.com and no extra slash.', solutionBn: 'Firebase console থেকে হুবহু URL কপি করুন। .firebaseio.com রাখুন।' },
    ],
    tryItTips: ['Change /led value in Firebase console and watch the LED', 'Check /sensor data appear in the database viewer', 'Open Serial Monitor at 115200 to see GET and PUT logs'],
    tryItTipsBn: ['Firebase console এ /led মান বদলে LED দেখুন', 'ডাটাবেজ ভিউয়ারে /sensor ডেটা দেখুন', 'GET ও PUT লগ দেখতে Serial Monitor 115200 তে খুলুন'],
  },

  'smart-home': {
    title: 'Smart Home Project',
    titleBn: 'স্মার্ট হোম প্রজেক্ট',
    duration: '25 min',
    level: 'intermediate',
    description: 'Build a mini smart home. Control a lamp or fan with a relay. Watch room temperature on Blynk.',
    descriptionBn: 'একটি ছোট স্মার্ট হোম বানান। রিলে দিয়ে ল্যাম্প বা ফ্যান চালান। Blynk এ রুম তাপমাত্রা দেখুন।',
    whatYouWillLearn: [
      'Wire a relay module safely on GPIO 25',
      'Control a lamp or fan from Blynk button V0',
      'Show DHT11 temperature on gauge V1',
      'Follow mains safety rules as a beginner',
    ],
    whatYouWillLearnBn: [
      'GPIO 25 এ রিলে মডিউল নিরাপদে লাগানো',
      'Blynk বোতাম V0 থেকে ল্যাম্প বা ফ্যান চালানো',
      'গেজ V1 তে DHT11 তাপমাত্রা দেখানো',
      'শিক্ষানবিশ হিসেবে মেইনস নিরাপত্তা মানা',
    ],
    components: ['ESP32 board', 'Relay module (5V)', 'DHT11 sensor', 'Lamp or fan', 'Phone with Blynk app', 'WiFi connection'],
    circuitDescription: 'Relay VCC to 5V (VIN), GND to GND, IN to GPIO 25. DHT11 DATA to GPIO 15. Lamp wires go through relay COM and NO terminals.',
    circuitDescriptionBn: 'রিলে VCC থেকে 5V (VIN), GND থেকে GND, IN থেকে GPIO 25। DHT11 DATA থেকে GPIO 15। ল্যাম্পের তার রিলে COM ও NO টার্মিনালে যায়।',
    code: `// Smart Home with Blynk - relay on GPIO 25 + DHT11 on GPIO 15
#define BLYNK_TEMPLATE_ID "YOUR_TEMPLATE_ID"
#define BLYNK_DEVICE_NAME "YOUR_SMART_HOME"
#define BLYNK_AUTH_TOKEN "YOUR_BLYNK_AUTH_TOKEN"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const int relayPin = 25;
char ssid[] = "YOUR_WIFI_NAME";
char pass[] = "YOUR_WIFI_PASSWORD";
BlynkTimer timer;

BLYNK_WRITE(V0) {
  int state = param.asInt();
  digitalWrite(relayPin, state);
}

void sendTemp() {
  float temp = dht.readTemperature();
  Blynk.virtualWrite(V1, temp);
  Serial.println(temp);
}

void setup() {
  Serial.begin(115200);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH);
  dht.begin();
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(5000L, sendTemp);
}

void loop() {
  Blynk.run();
  timer.run();
}`,
    codeExplanation: [
      { line: 14, text: 'relayPin 25 drives the relay IN pin.', textBn: 'relayPin 25 রিলে IN পিন চালায়।' },
      { line: 19, text: 'Button V0 sets the relay on or off.', textBn: 'বোতাম V0 রিলে অন বা অফ করে।' },
      { line: 31, text: 'Serial.begin(115200) shows relay and temp logs.', textBn: 'Serial.begin(115200) রিলে ও তাপমাত্রা লগ দেখায়।' },
      { line: 33, text: 'HIGH at start keeps an ACTIVE-LOW relay safely off.', textBn: 'শুরুতে HIGH একটি ACTIVE-LOW রিলে নিরাপদে অফ রাখে।' },
    ],
    commonMistakes: [
      { mistake: 'Relay works in reverse', mistakeBn: 'রিলে উল্টো কাজ করে', solution: 'Many relays are ACTIVE-LOW. LOW turns on, HIGH turns off. Swap logic if needed.', solutionBn: 'অনেক রিলে ACTIVE-LOW। LOW মানে অন, HIGH মানে অফ। প্রয়োজনে লজিক বদলান।' },
      { mistake: 'Touching mains wires while powered', mistakeBn: 'পাওয়ার থাকতে মেইনস তারে হাত দেওয়া', solution: 'Never touch relay screw terminals when plugged in. Ask an adult or teacher for mains wiring help.', solutionBn: 'প্লাগ লাগানো থাকতে রিলে স্ক্রু টার্মিনালে হাত দেবেন না। মেইনস ওয়্যারিংয়ে বড়দের সাহায্য নিন।' },
    ],
    tryItTips: ['Test first with an LED instead of a real lamp', 'Add a Blynk Button on V0 and Gauge on V1', 'Unplug mains power before changing any relay wire'],
    tryItTipsBn: ['আগে আসল ল্যাম্প নয়, LED দিয়ে পরীক্ষা করুন', 'V0 তে Button ও V1 তে Gauge যোগ করুন', 'রিলে তার বদলানোর আগে মেইনস পাওয়ার খুলে নিন'],
  },
}

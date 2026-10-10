import { Esp32LessonsMap } from './types'

export const wifiLessons: Esp32LessonsMap = {
  'wifi-basics': {
    title: 'Understanding WiFi Basics',
    titleBn: 'ওয়াইফাই এর মূল ধারণা',
    duration: '8 min',
    level: 'beginner',
    description: 'Learn what SSID, password, and IP address mean. See why ESP32 needs 2.4GHz WiFi. Scan nearby networks with a simple sketch.',
    descriptionBn: 'SSID, পাসওয়ার্ড ও IP ঠিকানা কী তা শিখুন। ESP32 এর জন্য কেন 2.4GHz ওয়াইফাই লাগে দেখুন। সহজ স্কেচ দিয়ে কাছের নেটওয়ার্ক স্ক্যান করুন।',
    whatYouWillLearn: [
      'What SSID and WiFi password mean',
      'Why ESP32 needs 2.4GHz WiFi and does NOT support 5GHz',
      'What an IP address is',
      'How to scan nearby networks with WiFi.scanNetworks()',
    ],
    whatYouWillLearnBn: [
      'SSID ও ওয়াইফাই পাসওয়ার্ড কী',
      'ESP32 এর কেন 2.4GHz ওয়াইফাই লাগে এবং কেন 5GHz চলে না',
      'IP ঠিকানা কী',
      'WiFi.scanNetworks() দিয়ে কাছের নেটওয়ার্ক স্ক্যান করা',
    ],
    components: ['ESP32 board', 'USB cable', 'Computer with Arduino IDE'],
    circuitDescription: 'No circuit needed. Just connect ESP32 to your computer with a USB cable. Open Serial Monitor at 115200 baud to see the scan results.',
    circuitDescriptionBn: 'কোনো সার্কিট লাগবে না। শুধু USB কেবল দিয়ে ESP32 কম্পিউটারে সংযুক্ত করুন। স্ক্যান ফলাফল দেখতে Serial Monitor 115200 baud এ খুলুন।',
    code: `#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("Scanning nearby WiFi networks...");

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  int networkCount = WiFi.scanNetworks();
  Serial.print("Found ");
  Serial.print(networkCount);
  Serial.println(" networks:");

  for (int i = 0; i < networkCount; i++) {
    Serial.print(i + 1);
    Serial.print(": ");
    Serial.print(WiFi.SSID(i));
    Serial.print(" (signal: ");
    Serial.print(WiFi.RSSI(i));
    Serial.println(" dBm)");
  }

  Serial.println("Scan done!");
}

void loop() {
  delay(5000);
}`,
    codeExplanation: [
      { line: 1, text: '#include <WiFi.h> gives your sketch all WiFi functions.', textBn: '#include <WiFi.h> স্কেচে সব ওয়াইফাই ফাংশন যোগ করে।' },
      { line: 4, text: 'Serial.begin(115200) starts messages to your computer. ESP32 uses 115200 speed.', textBn: 'Serial.begin(115200) কম্পিউটারে মেসেজ পাঠানো চালু করে। ESP32 এ 115200 স্পিড ব্যবহার হয়।' },
      { line: 12, text: 'WiFi.scanNetworks() scans nearby networks and returns how many it found.', textBn: 'WiFi.scanNetworks() কাছের নেটওয়ার্ক স্ক্যান করে কয়টি পেয়েছে তা জানায়।' },
      { line: 20, text: 'WiFi.SSID(i) is the name of one found network.', textBn: 'WiFi.SSID(i) পাওয়া একটি নেটওয়ার্কের নাম।' },
    ],
    commonMistakes: [
      { mistake: 'Looking for your network on 5GHz only router band', mistakeBn: 'শুধু 5GHz ব্যান্ডে নিজের নেটওয়ার্ক খোঁজা', solution: 'ESP32 does NOT support 5GHz. Use a 2.4GHz network. Check your router settings.', solutionBn: 'ESP32 5GHz সাপোর্ট করে না। 2.4GHz নেটওয়ার্ক ব্যবহার করুন। রাউটার সেটিং দেখুন।' },
      { mistake: 'Serial Monitor shows nothing', mistakeBn: 'Serial Monitor এ কিছু দেখা যায় না', solution: 'Set baud rate to 115200. Press the EN/RST button on ESP32 once.', solutionBn: 'Baud rate 115200 সেট করুন। ESP32 এর EN/RST বোতাম একবার চাপুন।' },
    ],
    tryItTips: [
      'Open Serial Monitor at 115200 baud and count your home networks',
      'Move ESP32 near and far from the router and compare signal dBm values',
      'Find your own SSID in the list before the next lesson',
    ],
    tryItTipsBn: [
      'Serial Monitor 115200 baud এ খুলে আপনার বাসার নেটওয়ার্কগুলো গুনুন',
      'রাউটারের কাছে ও দূরে নিয়ে signal dBm মান তুলনা করুন',
      'পরের পাঠের আগে তালিকায় নিজের SSID খুঁজে বের করুন',
    ],
  },

  'connect-wifi': {
    title: 'Connecting ESP32 to WiFi',
    titleBn: 'ESP32 ওয়াইফাইতে সংযুক্ত করা',
    duration: '10 min',
    level: 'beginner',
    description: 'Connect ESP32 to your home WiFi with WiFi.begin(). Wait for WL_CONNECTED with a timeout. Print your IP address with WiFi.localIP().',
    descriptionBn: 'WiFi.begin() দিয়ে ESP32 বাসার ওয়াইফাইতে সংযুক্ত করুন। timeout সহ WL_CONNECTED এর জন্য অপেক্ষা করুন। WiFi.localIP() দিয়ে IP ঠিকানা প্রিন্ট করুন।',
    whatYouWillLearn: [
      'How to use WiFi.begin(ssid, password)',
      'How to wait for WL_CONNECTED with a timeout',
      'How to print your IP with WiFi.localIP()',
      'How to auto-reconnect when WiFi drops',
    ],
    whatYouWillLearnBn: [
      'WiFi.begin(ssid, password) কীভাবে ব্যবহার করবেন',
      'timeout সহ WL_CONNECTED এর জন্য অপেক্ষা করা',
      'WiFi.localIP() দিয়ে IP প্রিন্ট করা',
      'ওয়াইফাই বিচ্ছিন্ন হলে auto-reconnect করা',
    ],
    components: ['ESP32 board', 'USB cable', '2.4GHz WiFi network'],
    circuitDescription: 'No circuit needed. Connect ESP32 via USB. Replace YourWiFiName and YourPassword with your real 2.4GHz network name and password.',
    circuitDescriptionBn: 'কোনো সার্কিট লাগবে না। USB দিয়ে ESP32 সংযুক্ত করুন। YourWiFiName ও YourPassword এর জায়গায় আপনার আসল 2.4GHz নাম ও পাসওয়ার্ড লিখুন।',
    code: `#include <WiFi.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  delay(500);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  int tries = 0;
  while (WiFi.status() != WL_CONNECTED && tries < 20) {
    delay(500);
    Serial.print(".");
    tries++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("");
    Serial.println("Connection failed. Check name and password.");
  }
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi lost. Reconnecting...");
    WiFi.reconnect();
    delay(5000);
  }
  delay(1000);
}`,
    codeExplanation: [
      { line: 3, text: 'ssid is your WiFi name. Replace it with your real 2.4GHz name.', textBn: 'ssid আপনার ওয়াইফাই নাম। আপনার আসল 2.4GHz নাম লিখুন।' },
      { line: 12, text: 'WiFi.begin(ssid, password) starts connecting to WiFi.', textBn: 'WiFi.begin(ssid, password) ওয়াইফাই সংযোগ শুরু করে।' },
      { line: 15, text: 'This loop waits for WL_CONNECTED, but stops after 20 tries (timeout).', textBn: 'এই লুপ WL_CONNECTED এর জন্য অপেক্ষা করে, তবে ২০ বার পর থেমে যায় (timeout)।' },
      { line: 25, text: 'WiFi.localIP() prints the IP address given by your router.', textBn: 'WiFi.localIP() রাউটার দেওয়া IP ঠিকানা প্রিন্ট করে।' },
      { line: 35, text: 'WiFi.reconnect() tries to join the network again if it drops.', textBn: 'সংযোগ বিচ্ছিন্ন হলে WiFi.reconnect() আবার যুক্ত হওয়ার চেষ্টা করে।' },
    ],
    commonMistakes: [
      { mistake: 'Trying to connect to a 5GHz network', mistakeBn: '5GHz নেটওয়ার্কে সংযুক্ত হওয়ার চেষ্টা', solution: 'ESP32 only works on 2.4GHz. Pick the 2.4GHz SSID from your router.', solutionBn: 'ESP32 শুধু 2.4GHz এ চলে। রাউটারের 2.4GHz SSID বেছে নিন।' },
      { mistake: 'Wrong password typed', mistakeBn: 'ভুল পাসওয়ার্ড লেখা', solution: 'Check capital and small letters. Re-type ssid and password carefully.', solutionBn: 'বড় ও ছোট হাতের অক্ষর দেখুন। ssid ও পাসওয়ার্ড যত্নে আবার লিখুন।' },
    ],
    tryItTips: [
      'Change tries < 20 to tries < 40 for a longer timeout',
      'Unplug your router briefly and watch the auto-reconnect message',
      'Copy the printed IP address — you need it in the next lesson',
    ],
    tryItTipsBn: [
      'বেশি সময়ের জন্য tries < 20 কে tries < 40 করুন',
      'রাউটার কিছুক্ষণ বন্ধ করে auto-reconnect মেসেজ দেখুন',
      'প্রিন্ট হওয়া IP ঠিকানা লিখে রাখুন — পরের পাঠে লাগবে',
    ],
  },

  'web-server': {
    title: 'Creating a Simple Web Server',
    titleBn: 'সহজ ওয়েব সার্ভার তৈরি',
    duration: '12 min',
    level: 'intermediate',
    description: 'Turn ESP32 into a tiny website. Use WebServer to show a Hello page with uptime. Learn server.on(), server.begin(), and server.handleClient().',
    descriptionBn: 'ESP32 কে ছোট ওয়েবসাইট বানান। WebServer দিয়ে Hello ও uptime পেজ দেখান। server.on(), server.begin() ও server.handleClient() শিখুন।',
    whatYouWillLearn: [
      'What a web server on ESP32 means',
      'How to use server.on("/", handleRoot)',
      'How to start the server with server.begin()',
      'Why server.handleClient() must run in loop()',
    ],
    whatYouWillLearnBn: [
      'ESP32 এ ওয়েব সার্ভার মানে কী',
      'server.on("/", handleRoot) কীভাবে ব্যবহার করবেন',
      'server.begin() দিয়ে সার্ভার চালু করা',
      'কেন server.handleClient() loop() এ চালাতে হয়',
    ],
    components: ['ESP32 board', 'USB cable', '2.4GHz WiFi network', 'Phone or computer browser'],
    circuitDescription: 'No circuit needed. ESP32 and your phone must join the same WiFi. Open the printed IP address in your browser.',
    circuitDescriptionBn: 'কোনো সার্কিট লাগবে না। ESP32 ও আপনার ফোন একই ওয়াইফাইতে যুক্ত থাকতে হবে। ব্রাউজারে প্রিন্ট হওয়া IP ঠিকানা খুলুন।',
    code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";

WebServer server(80);

void handleRoot() {
  unsigned long seconds = millis() / 1000;
  String message = "<h1>Hello from ESP32!</h1>";
  message += "<p>Uptime: " + String(seconds) + " seconds</p>";
  server.send(200, "text/html", message);
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.print("Open in browser: http://");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.begin();
  Serial.println("Web server started!");
}

void loop() {
  server.handleClient();
}`,
    codeExplanation: [
      { line: 2, text: '#include <WebServer.h> adds the simple web server library.', textBn: '#include <WebServer.h> সহজ ওয়েব সার্ভার লাইব্রেরি যোগ করে।' },
      { line: 7, text: 'WebServer server(80) creates a server on port 80, the normal web port.', textBn: 'WebServer server(80) পোর্ট 80 এ সার্ভার বানায়, এটি সাধারণ ওয়েব পোর্ট।' },
      { line: 31, text: 'server.on("/", handleRoot) runs handleRoot when browser opens the main page.', textBn: 'server.on("/", handleRoot) ব্রাউজার মূল পেজ খুললে handleRoot চালায়।' },
      { line: 32, text: 'server.begin() starts listening for visitors.', textBn: 'server.begin() ভিজিটরের জন্য শোনা শুরু করে।' },
      { line: 37, text: 'server.handleClient() answers each visitor. It must stay in loop().', textBn: 'server.handleClient() প্রতিটি ভিজিটরের উত্তর দেয়। এটি loop() এ থাকতেই হবে।' },
    ],
    commonMistakes: [
      { mistake: 'Forgetting server.handleClient() in loop()', mistakeBn: 'loop() এ server.handleClient() ভুলে যাওয়া', solution: 'Page never loads without it. Keep server.handleClient() inside loop().', solutionBn: 'এটি ছাড়া পেজ লোড হয় না। loop() এর ভেতরে server.handleClient() রাখুন।' },
      { mistake: 'Phone and ESP32 on different networks', mistakeBn: 'ফোন ও ESP32 ভিন্ন নেটওয়ার্কে', solution: 'Join both to the same 2.4GHz WiFi. Then open the IP address again.', solutionBn: 'দুটোকেই একই 2.4GHz ওয়াইফাইতে যুক্ত করুন। তারপর IP ঠিকানা আবার খুলুন।' },
    ],
    tryItTips: [
      'Refresh the page after 10 seconds and watch uptime grow',
      'Change Hello from ESP32! to your own name',
      'Open the IP on your phone browser too',
    ],
    tryItTipsBn: [
      '১০ সেকেন্ড পর পেজ refresh করে uptime বাড়তে দেখুন',
      'Hello from ESP32! এর জায়গায় নিজের নাম লিখুন',
      'ফোনের ব্রাউজারেও IP ঠিকানা খুলুন',
    ],
  },

  'control-led-web': {
    title: 'Control LED from Web Browser',
    titleBn: 'ব্রাউজার থেকে LED নিয়ন্ত্রণ',
    duration: '12 min',
    level: 'beginner',
    description: 'Add ON and OFF buttons to your ESP32 webpage. Tap buttons to turn the GPIO 2 LED on and off from any browser.',
    descriptionBn: 'ESP32 ওয়েবপেজে ON ও OFF বোতাম যোগ করুন। যেকোনো ব্রাউজার থেকে বোতাম চেপে GPIO 2 LED জ্বালান ও নিভান।',
    whatYouWillLearn: [
      'How to add /on and /off routes to a web server',
      'How to control GPIO 2 LED from a webpage',
      'How buttons link to routes with href',
      'How to test with phone and computer browser',
    ],
    whatYouWillLearnBn: [
      'ওয়েব সার্ভারে /on ও /off route কীভাবে যোগ করবেন',
      'ওয়েবপেজ থেকে GPIO 2 LED কীভাবে নিয়ন্ত্রণ করবেন',
      'href দিয়ে বোতাম কীভাবে route এ যুক্ত হয়',
      'ফোন ও কম্পিউটার ব্রাউজারে পরীক্ষা করা',
    ],
    components: ['ESP32 board', 'USB cable', '2.4GHz WiFi network', 'Phone or computer browser'],
    circuitDescription: 'No extra parts needed. Most ESP32 boards have a built-in blue LED on GPIO 2. Open the printed IP in your browser and tap ON/OFF.',
    circuitDescriptionBn: 'অতিরিক্ত কিছু লাগবে না। বেশিরভাগ ESP32 বোর্ডে GPIO 2 এ নীল LED থাকে। ব্রাউজারে প্রিন্ট হওয়া IP খুলে ON/OFF চাপুন।',
    code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";
const int ledPin = 2;

WebServer server(80);

String webPage() {
  String page = "<h1>ESP32 LED Control</h1>";
  page += "<p><a href=\\"/on\\"><button>TURN ON</button></a></p>";
  page += "<p><a href=\\"/off\\"><button>TURN OFF</button></a></p>";
  return page;
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  WiFi.begin(ssid, password);
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.print("Open in browser: http://");
  Serial.println(WiFi.localIP());

  server.on("/", []() {
    server.send(200, "text/html", webPage());
  });
  server.on("/on", []() {
    digitalWrite(ledPin, HIGH);
    server.send(200, "text/html", webPage());
  });
  server.on("/off", []() {
    digitalWrite(ledPin, LOW);
    server.send(200, "text/html", webPage());
  });
  server.begin();
  Serial.println("Web server started!");
}

void loop() {
  server.handleClient();
}`,
    codeExplanation: [
      { line: 6, text: 'ledPin 2 is the built-in LED on most ESP32 boards.', textBn: 'ledPin 2 বেশিরভাগ ESP32 বোর্ডের বিল্ট-ইন LED।' },
      { line: 19, text: 'pinMode(ledPin, OUTPUT) lets us turn the LED on and off.', textBn: 'pinMode(ledPin, OUTPUT) LED জ্বালানো ও নিভানো সম্ভব করে।' },
      { line: 37, text: '/on route sets the LED HIGH (on) and shows the page again.', textBn: '/on route LED HIGH (on) করে আবার পেজ দেখায়।' },
      { line: 41, text: '/off route sets the LED LOW (off) and shows the page again.', textBn: '/off route LED LOW (off) করে আবার পেজ দেখায়।' },
      { line: 50, text: 'server.handleClient() must stay in loop() or buttons stop working.', textBn: 'server.handleClient() loop() এ থাকতেই হবে, নাহলে বোতাম কাজ করবে না।' },
    ],
    commonMistakes: [
      { mistake: 'Forgetting server.handleClient() in loop()', mistakeBn: 'loop() এ server.handleClient() ভুলে যাওয়া', solution: 'Buttons do nothing without it. Add server.handleClient() to loop().', solutionBn: 'এটি ছাড়া বোতাম কাজ করে না। loop() এ server.handleClient() যোগ করুন।' },
      { mistake: 'LED does not light on some boards', mistakeBn: 'কিছু বোর্ডে LED জ্বলে না', solution: 'Some boards use a different pin. Try an external LED with 220 ohm resistor on GPIO 2.', solutionBn: 'কিছু বোর্ডে পিন ভিন্ন হয়। GPIO 2 এ 220 ohm রেজিস্টর সহ বাহ্যিক LED চেষ্টা করুন।' },
    ],
    tryItTips: [
      'Tap ON and watch the blue LED on the ESP32 board',
      'Open the same IP on your phone and computer at once',
      'Change button text TURN ON to your own words',
    ],
    tryItTipsBn: [
      'ON চাপুন ও ESP32 বোর্ডের নীল LED দেখুন',
      'একই IP ফোন ও কম্পিউটারে একসাথে খুলুন',
      'বোতামের TURN ON লেখা নিজের ভাষায় বদলান',
    ],
  },

  'display-sensor-web': {
    title: 'Display Sensor Data on Webpage',
    titleBn: 'ওয়েবপেজে সেন্সর ডেটা দেখানো',
    duration: '12 min',
    level: 'beginner',
    description: 'Read light level with an LDR on GPIO 34 and show it on a webpage. The page refreshes every 5 seconds. Uses ADC1 which is safe with WiFi on.',
    descriptionBn: 'GPIO 34 এ LDR দিয়ে আলোর মান পড়ুন ও ওয়েবপেজে দেখান। পেজ প্রতি ৫ সেকেন্ডে refresh হয়। WiFi চালু থাকলেও নিরাপদ ADC1 ব্যবহার করা হয়েছে।',
    whatYouWillLearn: [
      'How to wire an LDR voltage divider to GPIO 34',
      'Why ADC1 pins are safe with WiFi on (WiFi disables ADC2)',
      'How to read 0-4095 with analogRead()',
      'How to auto-refresh a webpage every 5 seconds',
    ],
    whatYouWillLearnBn: [
      'LDR voltage divider GPIO 34 এ কীভাবে সংযুক্ত করবেন',
      'WiFi চালু থাকলে কেন ADC1 পিন নিরাপদ (WiFi ADC2 বন্ধ করে দেয়)',
      'analogRead() দিয়ে 0-4095 কীভাবে পড়বেন',
      'প্রতি ৫ সেকেন্ডে ওয়েবপেজ auto-refresh করা',
    ],
    components: ['ESP32 board', 'LDR photoresistor', '10k ohm resistor', 'Breadboard', 'Jumper wires', 'Phone or computer browser'],
    circuitDescription: 'LDR one leg to 3V3. LDR other leg to GPIO 34 and to 10k resistor. Resistor other end to GND. This voltage divider gives 0-4095 on analogRead.',
    circuitDescriptionBn: 'LDR এর এক পা 3V3 তে। অন্য পা GPIO 34 ও 10k রেজিস্টরে। রেজিস্টরের অন্য প্রান্ত GND তে। এই voltage divider এ analogRead এ 0-4095 পাওয়া যায়।',
    code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YourWiFiName";
const char* password = "YourPassword";
const int ldrPin = 34;

WebServer server(80);

void handleRoot() {
  int value = analogRead(ldrPin);
  String page = "<meta http-equiv=\\"refresh\\" content=\\"5\\">";
  page += "<h1>ESP32 Light Sensor</h1>";
  page += "<p>Light value: " + String(value) + " (0-4095)</p>";
  page += "<p>Page refreshes every 5 seconds</p>";
  server.send(200, "text/html", page);
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.print("Open in browser: http://");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.begin();
  Serial.println("Web server started!");
}

void loop() {
  server.handleClient();
}`,
    codeExplanation: [
      { line: 6, text: 'ldrPin 34 is an ADC1 pin, so it works even when WiFi is on.', textBn: 'ldrPin 34 একটি ADC1 পিন, তাই WiFi চালু থাকলেও কাজ করে।' },
      { line: 11, text: 'analogRead() gives 0-4095 for light level. Cover LDR to see it change.', textBn: 'analogRead() আলোর মান 0-4095 দেয়। LDR ঢেকে মান বদলাতে দেখুন।' },
      { line: 12, text: 'This meta tag tells the browser to refresh the page every 5 seconds.', textBn: 'এই meta ট্যাগ ব্রাউজারকে প্রতি ৫ সেকেন্ডে পেজ refresh করতে বলে।' },
      { line: 40, text: 'server.handleClient() answers the browser on every loop.', textBn: 'server.handleClient() প্রতিটি loop এ ব্রাউজারের উত্তর দেয়।' },
    ],
    commonMistakes: [
      { mistake: 'Using ADC2 pins (like GPIO 4, 12-15, 25-27) with WiFi', mistakeBn: 'WiFi সহ ADC2 পিন (যেমন GPIO 4, 12-15, 25-27) ব্যবহার', solution: 'WiFi disables ADC2. Always use ADC1 pins like 32-39 for sensors with WiFi.', solutionBn: 'WiFi ADC2 বন্ধ করে দেয়। WiFi সহ সেন্সরে সর্বদা 32-39 এর মতো ADC1 পিন ব্যবহার করুন।' },
      { mistake: 'LDR value stuck at 0 or 4095', mistakeBn: 'LDR মান 0 বা 4095 এ আটকে থাকা', solution: 'Check the 10k resistor wiring. GPIO 34 must join LDR and resistor middle point.', solutionBn: '10k রেজিস্টর সংযোগ দেখুন। GPIO 34 LDR ও রেজিস্টরের মাঝখানে যুক্ত থাকতে হবে।' },
    ],
    tryItTips: [
      'Cover the LDR with your hand and watch the value drop after refresh',
      'Shine a phone torch on the LDR and watch the value rise',
      'Change content="5" to content="2" for faster refresh',
    ],
    tryItTipsBn: [
      'হাত দিয়ে LDR ঢাকুন ও refresh এর পর মান কমতে দেখুন',
      'ফোনের টর্চ LDR এ ধরুন ও মান বাড়তে দেখুন',
      'দ্রুত refresh এর জন্য content="5" কে content="2" করুন',
    ],
  },
}

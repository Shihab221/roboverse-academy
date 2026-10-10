import { Esp32LessonsMap } from './types'

export const advancedLessons: Esp32LessonsMap = {
  'weather-station-iot': {
    title: 'IoT Weather Station',
    titleBn: 'আইওটি ওয়েদার স্টেশন',
    duration: '25 min',
    level: 'intermediate',
    description: 'You made it to the finale track! Build a real IoT weather station with DHT11 and an OLED display, then upload data to ThingSpeak cloud. You can see your room weather anywhere!',
    descriptionBn: 'তুমি ফিনালে ট্র্যাকে পৌঁছে গেছো! DHT11 ও OLED ডিসপ্লে দিয়ে সত্যিকারের আইওটি ওয়েদার স্টেশন বানাও, তারপর ThingSpeak ক্লাউডে ডেটা পাঠাও। যেকোনো জায়গা থেকে তোমার ঘরের আবহাওয়া দেখো!',
    whatYouWillLearn: [
      'Wire DHT11 on GPIO 15 and read temperature and humidity',
      'Show live values on 0.96 inch OLED SSD1306 over I2C',
      'Upload sensor data to ThingSpeak cloud every 20 seconds',
      'Debug WiFi and sensor problems like a pro',
    ],
    whatYouWillLearnBn: [
      'GPIO 15 এ DHT11 লাগিয়ে তাপমাত্রা ও আর্দ্রতা পড়া',
      'I2C দিয়ে ০.৯৬ ইঞ্চি OLED SSD1306 এ লাইভ মান দেখানো',
      'প্রতি ২০ সেকেন্ডে ThingSpeak ক্লাউডে ডেটা পাঠানো',
      'প্রোর মতো WiFi ও সেন্সর সমস্যা ঠিক করা',
    ],
    components: ['ESP32 DevKit', 'DHT11 sensor', '0.96 inch OLED SSD1306 (I2C)', 'Breadboard', 'Jumper wires', 'USB cable'],
    circuitDescription: 'DHT11 VCC to 3V3, GND to GND, DATA to GPIO 15. OLED VCC to 3V3, GND to GND, SDA to GPIO 21, SCL to GPIO 22. Install DHT sensor library and Adafruit_SSD1306 plus Adafruit_GFX libraries.',
    circuitDescriptionBn: 'DHT11 VCC থেকে 3V3, GND থেকে GND, DATA থেকে GPIO 15। OLED VCC থেকে 3V3, GND থেকে GND, SDA থেকে GPIO 21, SCL থেকে GPIO 22। DHT sensor library এবং Adafruit_SSD1306 ও Adafruit_GFX লাইব্রেরি ইনস্টল করো।',
    code: `#include <WiFi.h>
#include <DHT.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <HTTPClient.h>

// ----- REPLACE WITH YOUR OWN VALUES -----
const char* WIFI_SSID = "YOUR_WIFI_NAME";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
const String THINGSPEAK_API_KEY = "YOUR_THINGSPEAK_API_KEY";

#define DHT_PIN 15
#define DHT_TYPE DHT11
#define OLED_SDA 21
#define OLED_SCL 22

DHT dht(DHT_PIN, DHT_TYPE);
Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  Serial.begin(115200);
  dht.begin();
  Wire.begin(OLED_SDA, OLED_SCL);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected!");
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  Serial.print("Temp: ");
  Serial.print(temp);
  Serial.print(" C, Humidity: ");
  Serial.print(hum);
  Serial.println(" %");
  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Temp: ");
  display.print(temp);
  display.println(" C");
  display.print("Hum: ");
  display.print(hum);
  display.println(" %");
  display.display();
  HTTPClient http;
  String url = "http://api.thingspeak.com/update?api_key=" + THINGSPEAK_API_KEY + "&field1=" + String(temp) + "&field2=" + String(hum);
  http.begin(url);
  int code = http.GET();
  Serial.print("ThingSpeak response: ");
  Serial.println(code);
  http.end();
  delay(20000);
}`,
    codeExplanation: [
      { line: 9, text: 'Replace with your WiFi name. This placeholder connects ESP32 to your home network.', textBn: 'তোমার WiFi নাম বসাও। এই জায়গাটি ESP32 কে তোমার বাসার নেটওয়ার্কে যুক্ত করে।' },
      { line: 24, text: 'Wire.begin starts I2C on SDA 21 and SCL 22 for the OLED.', textBn: 'Wire.begin OLED এর জন্য SDA 21 ও SCL 22 এ I2C চালু করে।' },
      { line: 25, text: 'display.begin uses address 0x3C. Most 0.96 inch OLEDs use this address.', textBn: 'display.begin 0x3C ঠিকানা ব্যবহার করে। বেশিরভাগ ০.৯৬ ইঞ্চি OLED এই ঠিকানা ব্যবহার করে।' },
      { line: 39, text: 'Read temperature from DHT11 on GPIO 15. Short and simple!', textBn: 'GPIO 15 এর DHT11 থেকে তাপমাত্রা পড়ো। ছোট ও সহজ!' },
      { line: 56, text: 'Build the ThingSpeak upload URL with your API key and sensor values.', textBn: 'তোমার API কী ও সেন্সর মান দিয়ে ThingSpeak আপলোড URL বানাও।' },
      { line: 62, text: 'Wait 20 seconds. ThingSpeak needs this gap between uploads.', textBn: '২০ সেকেন্ড অপেক্ষা করো। ThingSpeak আপলোডের মাঝে এই বিরতি চায়।' },
    ],
    commonMistakes: [
      { mistake: 'OLED stays black — wrong I2C address 0x3C vs 0x3D', mistakeBn: 'OLED কালো থাকে — ভুল I2C ঠিকানা 0x3C বনাম 0x3D', solution: 'Try 0x3D if 0x3C shows nothing. Run an I2C scanner sketch to find your display address.', solutionBn: '0x3C তে কিছু না এলে 0x3D চেষ্টা করো। তোমার ডিসপ্লে ঠিকানা খুঁজতে I2C scanner স্কেচ চালাও।' },
      { mistake: 'DHT shows nan values', mistakeBn: 'DHT nan মান দেখায়', solution: 'Check DATA pin is on GPIO 15. Add 2 second gap between reads. DHT11 is slow.', solutionBn: 'DATA পিন GPIO 15 এ আছে কিনা দেখো। পড়ার মাঝে ২ সেকেন্ড বিরতি দাও। DHT11 ধীর সেন্সর।' },
    ],
    tryItTips: ['Change delay(20000) to try faster updates, but keep at least 15 seconds for ThingSpeak', 'Add field3 with heat index and graph it on ThingSpeak', 'Celebrate! Your weather data is now on the cloud'],
    tryItTipsBn: ['দ্রুত আপডেটে delay(20000) বদলে দেখো, তবে ThingSpeak এর জন্য অন্তত ১৫ সেকেন্ড রাখো', 'heat index দিয়ে field3 যোগ করো এবং ThingSpeak এ গ্রাফ দেখো', 'উদযাপন করো! তোমার আবহাওয়া ডেটা এখন ক্লাউডে'],
  },

  'security-camera': {
    title: 'WiFi Security Camera',
    titleBn: 'ওয়াইফাই সিকিউরিটি ক্যামেরা',
    duration: '30 min',
    level: 'advanced',
    description: 'Wow, look how far you came! Turn an AI-Thinker ESP32-CAM into a WiFi security camera. Stream live video at http://<ip>:81/stream and watch it on your phone!',
    descriptionBn: 'বাহ, তুমি কতদূর এসেছো দেখো! AI-Thinker ESP32-CAM কে WiFi সিকিউরিটি ক্যামেরা বানাও। http://<ip>:81/stream এ লাইভ ভিডিও দেখো তোমার ফোনে!',
    whatYouWillLearn: [
      'Set up AI-Thinker ESP32-CAM with the standard camera pin map',
      'Stream live JPEG video over WiFi on port 81',
      'Flash ESP32-CAM safely with FTDI adapter',
      'Fix brownout and power problems with stable 5V supply',
    ],
    whatYouWillLearnBn: [
      'স্ট্যান্ডার্ড ক্যামেরা পিন ম্যাপ দিয়ে AI-Thinker ESP32-CAM সেটআপ',
      'পোর্ট 81 এ WiFi দিয়ে লাইভ JPEG ভিডিও স্ট্রিম',
      'FTDI অ্যাডাপ্টার দিয়ে নিরাপদে ESP32-CAM ফ্ল্যাশ',
      'স্থিতিশীল 5V সাপ্লাই দিয়ে brownout ও পাওয়ার সমস্যা ঠিক করা',
    ],
    components: ['AI-Thinker ESP32-CAM board', 'FTDI USB-to-Serial adapter', 'Jumper wires', 'Stable 5V 2A power supply', 'WiFi network'],
    circuitDescription: 'For flashing only: FTDI TX to ESP32-CAM RX, FTDI RX to TX, GND to GND, 5V to 5V. Connect GPIO 0 to GND only for flashing, remove it after upload. For running, power with stable 5V 2A — weak power causes brownout reboot.',
    circuitDescriptionBn: 'শুধু ফ্ল্যাশের জন্য: FTDI TX থেকে ESP32-CAM RX, FTDI RX থেকে TX, GND থেকে GND, 5V থেকে 5V। শুধু ফ্ল্যাশের সময় GPIO 0 কে GND করো, আপলোড শেষে খুলে ফেলো। চালানোর জন্য স্থিতিশীল 5V 2A দাও — দুর্বল পাওয়ারে brownout রিবুট হয়।',
    code: `#include "esp_camera.h"
#include <WiFi.h>

// ----- REPLACE WITH YOUR OWN VALUES -----
const char* WIFI_SSID = "YOUR_WIFI_NAME";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";

#define PWDN_GPIO_NUM 32
#define XCLK_GPIO_NUM 0
#define SIOD_GPIO_NUM 26
#define SIOC_GPIO_NUM 27
#define Y9_GPIO_NUM 35
#define Y8_GPIO_NUM 34
#define Y7_GPIO_NUM 39
#define Y6_GPIO_NUM 36
#define Y5_GPIO_NUM 21
#define Y4_GPIO_NUM 19
#define Y3_GPIO_NUM 18
#define Y2_GPIO_NUM 5
#define VSYNC_GPIO_NUM 25
#define HREF_GPIO_NUM 23
#define PCLK_GPIO_NUM 22

void setup() {
  Serial.begin(115200);
  camera_config_t config;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_siod = SIOD_GPIO_NUM;
  config.pin_sioc = SIOC_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.ledc_timer = LEDC_TIMER_0;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_VGA;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.println("Camera init failed!");
    return;
  }
  Serial.println("Camera ready!");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected!");
  Serial.print("Stream at http://");
  Serial.print(WiFi.localIP());
  Serial.println(":81/stream");
}

void loop() {
  Serial.print("Camera IP: ");
  Serial.println(WiFi.localIP());
  delay(10000);
}`,
    codeExplanation: [
      { line: 5, text: 'Replace with your WiFi name. Camera must join WiFi to stream video.', textBn: 'তোমার WiFi নাম বসাও। ভিডিও স্ট্রিমে ক্যামেরা WiFi তে যুক্ত হতেই হবে।' },
      { line: 8, text: 'PWDN on GPIO 32 powers the camera sensor on and off.', textBn: 'GPIO 32 এর PWDN ক্যামেরা সেন্সর অন-অফ করে।' },
      { line: 49, text: 'esp_camera_init starts the camera with the full pin map above.', textBn: 'esp_camera_init উপরের সম্পূর্ণ পিন ম্যাপ দিয়ে ক্যামেরা চালু করে।' },
      { line: 63, text: 'Open http://<ip>:81/stream in a browser to see live video.', textBn: 'লাইভ ভিডিও দেখতে ব্রাউজারে http://<ip>:81/stream খুলো।' },
      { line: 69, text: 'Print IP every 10 seconds so you never lose the stream address.', textBn: 'প্রতি ১০ সেকেন্ডে IP প্রিন্ট করো যেন স্ট্রিম ঠিকানা না হারাও।' },
    ],
    commonMistakes: [
      { mistake: 'Brownout reboot or camera init failed — weak power', mistakeBn: 'Brownout রিবুট বা camera init failed — দুর্বল পাওয়ার', solution: 'Use stable 5V 2A supply to 5V pin. Do not power ESP32-CAM from weak USB serial only. Thick short wires help.', solutionBn: '5V পিনে স্থিতিশীল 5V 2A সাপ্লাই দাও। শুধু দুর্বল USB serial দিয়ে ESP32-CAM চালিও না। মোটা ছোট তার ব্যবহার করো।' },
      { mistake: 'Upload fails or board stuck — GPIO 0 left grounded', mistakeBn: 'আপলোড ব্যর্থ বা বোর্ড আটকে — GPIO 0 গ্রাউন্ডে রয়ে গেছে', solution: 'Connect GPIO 0 to GND only for flashing. Remove the jumper after upload, then press RST to run normally.', solutionBn: 'শুধু ফ্ল্যাশের সময় GPIO 0 কে GND করো। আপলোড শেষে জাম্পার খুলে RST চাপ দিয়ে স্বাভাবিকভাবে চালাও।' },
    ],
    tryItTips: ['Select board AI-Thinker ESP32-CAM and set 115200 baud in Serial Monitor', 'If stream lags, change FRAMESIZE_VGA to FRAMESIZE_QVGA for speed', 'You built a real security camera — amazing work!'],
    tryItTipsBn: ['বোর্ড AI-Thinker ESP32-CAM বেছে নাও এবং Serial Monitor এ 115200 baud সেট করো', 'স্ট্রিম ধীর হলে গতি বাড়াতে FRAMESIZE_VGA কে FRAMESIZE_QVGA করো', 'তুমি সত্যিকারের সিকিউরিটি ক্যামেরা বানিয়েছো — অসাধারণ কাজ!'],
  },

  'home-automation': {
    title: 'Complete Home Automation',
    titleBn: 'সম্পূর্ণ হোম অটোমেশন',
    duration: '35 min',
    level: 'advanced',
    description: 'This is your grand capstone! Control 2 home lights with a 2-channel relay, DHT11 sensor, Blynk dashboard, and physical buttons. Manual plus auto logic keeps lights working even if WiFi drops. You are a maker now!',
    descriptionBn: 'এটাই তোমার গ্র্যান্ড ক্যাপস্টোন! ২-চ্যানেল রিলে, DHT11 সেন্সর, Blynk ড্যাশবোর্ড ও ফিজিক্যাল বোতাম দিয়ে ২টি বাতি নিয়ন্ত্রণ করো। WiFi বন্ধ হলেও ম্যানুয়াল ও অটো লজিকে বাতি চলবে। তুমি এখন সত্যিকারের মেকার!',
    whatYouWillLearn: [
      'Drive 2-channel relay on GPIO 25 and 26 with ACTIVE-LOW logic',
      'Add physical override buttons on GPIO 32 and 33 with INPUT_PULLUP',
      'Build Blynk multi-button dashboard for phone control',
      'Combine manual and auto logic so switches always work',
      'Follow mains-safety rules for real home loads',
    ],
    whatYouWillLearnBn: [
      'ACTIVE-LOW লজিকে GPIO 25 ও 26 এ ২-চ্যানেল রিলে চালানো',
      'INPUT_PULLUP দিয়ে GPIO 32 ও 33 এ ফিজিক্যাল ওভাররাইড বোতাম যোগ',
      'ফোন নিয়ন্ত্রণে Blynk মাল্টি-বোতাম ড্যাশবোর্ড বানানো',
      'ম্যানুয়াল ও অটো লজিক মিলিয়ে সুইচ সবসময় চালু রাখা',
      'আসল বাসার লোডে mains-safety নিয়ম মানা',
    ],
    components: ['ESP32 DevKit', '2-channel 5V relay module (ACTIVE-LOW)', 'DHT11 sensor', '2x push buttons', 'Breadboard', 'Jumper wires', 'Blynk app on phone'],
    circuitDescription: 'Relay IN1 to GPIO 25, IN2 to GPIO 26, VCC to 5V, GND to GND. DHT11 DATA to GPIO 15. Buttons from GPIO 32 and GPIO 33 to GND with INPUT_PULLUP — no resistor needed. Warning: mains 220V can kill. Start with LED bulbs only, ask an adult electrician for mains wiring.',
    circuitDescriptionBn: 'রিলে IN1 থেকে GPIO 25, IN2 থেকে GPIO 26, VCC থেকে 5V, GND থেকে GND। DHT11 DATA থেকে GPIO 15। GPIO 32 ও GPIO 33 থেকে বোতাম GND তে INPUT_PULLUP দিয়ে — রেজিস্টর লাগবে না। সতর্কতা: mains 220V প্রাণঘাতী। শুরুতে শুধু LED বাল্ব চালাও, mains ওয়্যারিংয়ে প্রাপ্তবয়স্ক ইলেকট্রিশিয়ানের সাহায্য নাও।',
    code: `#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

// ----- REPLACE WITH YOUR OWN VALUES -----
const char* WIFI_SSID = "YOUR_WIFI_NAME";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
char BLYNK_AUTH[] = "YOUR_BLYNK_AUTH_TOKEN";

#define DHT_PIN 15
#define DHT_TYPE DHT11
#define RELAY1_PIN 25
#define RELAY2_PIN 26
#define BTN1_PIN 32
#define BTN2_PIN 33

DHT dht(DHT_PIN, DHT_TYPE);
bool autoMode = false;
bool relay1State = false;
bool relay2State = false;

BLYNK_WRITE(V1) {
  relay1State = param.asInt();
  digitalWrite(RELAY1_PIN, relay1State ? LOW : HIGH);
}
BLYNK_WRITE(V2) {
  relay2State = param.asInt();
  digitalWrite(RELAY2_PIN, relay2State ? LOW : HIGH);
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(RELAY1_PIN, OUTPUT);
  pinMode(RELAY2_PIN, OUTPUT);
  digitalWrite(RELAY1_PIN, HIGH);
  digitalWrite(RELAY2_PIN, HIGH);
  pinMode(BTN1_PIN, INPUT_PULLUP);
  pinMode(BTN2_PIN, INPUT_PULLUP);
  Blynk.begin(BLYNK_AUTH, WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Home automation ready!");
}

void loop() {
  Blynk.run();
  if (digitalRead(BTN1_PIN) == LOW) {
    relay1State = !relay1State;
    digitalWrite(RELAY1_PIN, relay1State ? LOW : HIGH);
    Serial.println("Button 1 pressed!");
    delay(300);
  }
  if (digitalRead(BTN2_PIN) == LOW) {
    relay2State = !relay2State;
    digitalWrite(RELAY2_PIN, relay2State ? LOW : HIGH);
    Serial.println("Button 2 pressed!");
    delay(300);
  }
  float temp = dht.readTemperature();
  Blynk.virtualWrite(V0, temp);
  Serial.print("Temp: ");
  Serial.println(temp);
  delay(2000);
}`,
    codeExplanation: [
      { line: 8, text: 'Replace with your Blynk auth token from the Blynk app dashboard.', textBn: 'Blynk অ্যাপ ড্যাশবোর্ড থেকে তোমার auth token বসাও।' },
      { line: 36, text: 'HIGH means relay OFF here. This relay is ACTIVE-LOW, so LOW turns it ON.', textBn: 'এখানে HIGH মানে রিলে OFF। এই রিলে ACTIVE-LOW, তাই LOW দিলে ON হয়।' },
      { line: 38, text: 'INPUT_PULLUP keeps button HIGH until pressed. No extra resistor needed.', textBn: 'INPUT_PULLUP চাপ না দেওয়া পর্যন্ত বোতাম HIGH রাখে। অতিরিক্ত রেজিস্টর লাগে না।' },
      { line: 45, text: 'Blynk.run keeps phone dashboard and ESP32 in sync. Keep it in loop.', textBn: 'Blynk.run ফোন ড্যাশবোর্ড ও ESP32 একসাথে রাখে। loop এ রাখো।' },
      { line: 48, text: 'Physical button toggles relay with ACTIVE-LOW write, even without WiFi.', textBn: 'ফিজিক্যাল বোতাম ACTIVE-LOW write দিয়ে রিলে বদলায়, WiFi ছাড়াও চলে।' },
      { line: 59, text: 'Send temperature to Blynk virtual pin V0 for the phone gauge.', textBn: 'ফোন গেজের জন্য Blynk virtual pin V0 তে তাপমাত্রা পাঠাও।' },
    ],
    commonMistakes: [
      { mistake: 'Relay works backwards — forgot it is ACTIVE-LOW', mistakeBn: 'রিলে উল্টো কাজ করে — ACTIVE-LOW ভুলে গেছো', solution: 'Write LOW to turn relay ON and HIGH to turn OFF. Start with HIGH in setup so lights stay OFF at boot.', solutionBn: 'রিলে ON করতে LOW ও OFF করতে HIGH লেখো। setup এ HIGH দিয়ে শুরু করো যেন বুটে বাতি OFF থাকে।' },
      { mistake: 'Buttons read random values or mains wiring without care', mistakeBn: 'বোতাম এলোমেলো মান পড়ে বা অসাবধানে mains ওয়্যারিং', solution: 'Use INPUT_PULLUP and wire button to GND. Never touch 220V mains — test with LEDs first and call an electrician.', solutionBn: 'INPUT_PULLUP ব্যবহার করে বোতাম GND তে লাগাও। 220V mains কখনো স্পর্শ কোরো না — আগে LED দিয়ে পরীক্ষা করো ও ইলেকট্রিশিয়ান ডাকো।' },
    ],
    tryItTips: ['Make Blynk buttons on V1 and V2 as switches, plus a V0 gauge for temperature', 'Unplug WiFi router once — physical buttons should still toggle relays', 'You finished the whole ESP32 track — time to show your smart home to family!'],
    tryItTipsBn: ['V1 ও V2 তে Blynk বোতাম সুইচ হিসেবে ও তাপমাত্রায় V0 গেজ বানাও', 'একবার WiFi রাউটার বন্ধ করো — ফিজিক্যাল বোতামে রিলে বদলানো উচিত', 'তুমি পুরো ESP32 ট্র্যাক শেষ করেছো — পরিবারকে তোমার স্মার্ট হোম দেখানোর সময়!'],
  },
}

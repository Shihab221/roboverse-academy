import { ProjectGuide } from './project-types'

export const guides: Record<string, ProjectGuide> = {
  'smart-home-iot': {
    boardLabel: 'ESP32 DevKit',
    boardLabelBn: 'ESP32 DevKit',
    overview: [
      'This project turns your room into a smart home using an ESP32. You can turn two lights or fans on and off from your phone with the Blynk app. You can also see live room temperature on your phone.',
      'It is perfect for beginners. You learn relays, a DHT11 temperature sensor, and basic IoT cloud control in one simple build.',
    ],
    overviewBn: [
      'এই প্রজেক্টে ESP32 দিয়ে আপনার ঘর স্মার্ট হোমে পরিণত হবে। Blynk অ্যাপ দিয়ে ফোন থেকে দুটি লাইট বা ফ্যান চালু বন্ধ করতে পারবেন। ফোনে লাইভ রুমের তাপমাত্রাও দেখতে পারবেন।',
      'এটি নতুনদের জন্য উপযুক্ত। একটি সহজ প্রজেক্টে রিলে, DHT11 তাপমাত্রা সেন্সর এবং বেসিক IoT ক্লাউড কন্ট্রোল শিখবেন।',
    ],
    howItWorks: [
      'The ESP32 connects to your home WiFi and links to the Blynk cloud. A button on virtual pin V0 controls both relays from the phone. The DHT11 sensor reads temperature and sends it to virtual pin V1 every two seconds.',
      'The 2-channel relay works in ACTIVE-LOW mode. That means GPIO 25 or GPIO 26 goes LOW to turn the relay ON. GPIO HIGH turns it OFF. The relay contacts switch the lamp circuit like a remote-controlled wall switch.',
      'The DHT11 data pin connects to GPIO 15. The ESP32 reads it with a simple digital protocol. Blynk shows the value as a live gauge on your dashboard.',
    ],
    howItWorksBn: [
      'ESP32 আপনার বাসার WiFi এর সাথে যুক্ত হয়ে Blynk ক্লাউডে সংযোগ করে। V0 ভার্চুয়াল পিনের বাটন ফোন থেকে দুটি রিলে নিয়ন্ত্রণ করে। DHT11 সেন্সর তাপমাত্রা মেপে প্রতি দুই সেকেন্ডে V1 পিনে পাঠায়।',
      '২ চ্যানেল রিলে ACTIVE-LOW মোডে কাজ করে। অর্থাৎ GPIO 25 বা GPIO 26 LOW হলে রিলে ON হয়। HIGH হলে OFF হয়। রিলে কন্টাক্ট বাতির সার্কিটকে রিমোট সুইচের মতো চালু বন্ধ করে।',
      'DHT11 এর ডাটা পিন GPIO 15 এ যুক্ত থাকে। ESP32 সহজ ডিজিটাল প্রোটোকলে এটি পড়ে। Blynk ড্যাশবোর্ডে মানটি লাইভ গেজ হিসেবে দেখায়।',
    ],
    pins: [
      { from: 'GPIO 25', to: 'IN1', part: 'Relay Module', note: 'Active LOW relay 1', noteBn: 'অ্যাকটিভ LOW রিলে ১' },
      { from: 'GPIO 26', to: 'IN2', part: 'Relay Module', note: 'Active LOW relay 2', noteBn: 'অ্যাকটিভ LOW রিলে ২' },
      { from: 'VIN (5V)', to: 'VCC', part: 'Relay Module', note: 'Relay needs 5V from VIN pin', noteBn: 'রিলের জন্য VIN পিন থেকে ৫ ভোল্ট দরকার' },
      { from: 'GND', to: 'GND', part: 'Relay Module', note: 'Common GND for ESP32 and relay', noteBn: 'ESP32 ও রিলের কমন GND' },
      { from: 'GPIO 15', to: 'DATA', part: 'DHT11 Sensor', note: 'Temperature data line', noteBn: 'তাপমাত্রার ডাটা লাইন' },
      { from: '3V3', to: 'VCC', part: 'DHT11 Sensor', note: 'DHT11 power 3.3V', noteBn: 'DHT11 এর পাওয়ার ৩.৩ ভোল্ট' },
      { from: 'GND', to: 'GND', part: 'DHT11 Sensor', note: 'Common GND', noteBn: 'কমন GND' },
    ],
    steps: [
      'Wire the relay VCC to ESP32 VIN (5V) and GND to GND. Connect IN1 to GPIO 25 and IN2 to GPIO 26. Do not connect any mains wire yet.',
      'Wire DHT11 VCC to 3V3, GND to GND, and DATA to GPIO 15. Add a 10k pull-up resistor between DATA and VCC if your module has none.',
      'Create a Blynk template, add a Button on V0 and a Gauge on V1. Copy your Template ID, Device Name, and Auth Token into the code placeholders.',
      'Install ESP32 board support, Blynk library, and DHT library in Arduino IDE. Select ESP32 Dev Module and the correct COM port.',
      'Upload the code with only USB and low-voltage wiring connected. Open Serial Monitor at 115200 and confirm WiFi and Blynk are connected.',
      'Test relays without mains first. Listen for the click sound when you press the V0 button. Check that V1 shows room temperature.',
      'WARNING: Mains electricity can kill. Ask an adult or electrician to wire the bulb through the COM and NO relay terminals. Never touch open mains wires when power is on.',
      'Mount everything in a plastic box. Keep mains wires separate from low-voltage wires. Control your home from the Blynk app.',
    ],
    stepsBn: [
      'রিলের VCC ESP32 এর VIN (৫ ভোল্ট) এ এবং GND GND তে লাগান। IN1 GPIO 25 এ এবং IN2 GPIO 26 এ লাগান। এখনো কোনো মেইনস তার লাগাবেন না।',
      'DHT11 এর VCC 3V3 তে, GND GND তে এবং DATA GPIO 15 এ লাগান। মডিউলে না থাকলে DATA ও VCC এর মাঝে ১০k পুল-আপ রেজিস্টর দিন।',
      'Blynk টেমপ্লেট বানিয়ে V0 তে একটি বাটন ও V1 এ একটি গেজ যোগ করুন। Template ID, Device Name ও Auth Token কোডের জায়গায় বসান।',
      'Arduino IDE তে ESP32 বোর্ড সাপোর্ট, Blynk লাইব্রেরি ও DHT লাইব্রেরি ইনস্টল করুন। ESP32 Dev Module ও সঠিক COM পোর্ট সিলেক্ট করুন।',
      'শুধু USB ও লো-ভোল্টেজ সংযোগ রেখে কোড আপলোড করুন। 115200 এ Serial Monitor খুলে WiFi ও Blynk সংযোগ নিশ্চিত করুন।',
      'আগে মেইনস ছাড়া রিলে পরীক্ষা করুন। V0 বাটন চাপলে ক্লিক শব্দ শুনুন। V1 এ রুমের তাপমাত্রা দেখা যাচ্ছে কিনা দেখুন।',
      'সতর্কতা: মেইনস বিদ্যুৎ প্রাণঘাতী হতে পারে। বাল্বের তার COM ও NO টার্মিনাল দিয়ে লাগাতে বড় কারো বা ইলেকট্রিশিয়ানের সাহায্য নিন। পাওয়ার চালু থাকলে খোলা মেইনস তারে হাত দেবেন না।',
      'সবকিছু প্লাস্টিক বাক্সে বসান। মেইনস তার লো-ভোল্টেজ তার থেকে আলাদা রাখুন। Blynk অ্যাপ থেকে ঘর নিয়ন্ত্রণ করুন।',
    ],
    code: `// smart_home.ino - ESP32 Smart Home with Blynk + DHT11 + 2 relays
#define BLYNK_TEMPLATE_ID "TMPLxxxxxx"
#define BLYNK_DEVICE_NAME "Smart Home"
#define BLYNK_AUTH_TOKEN "YourAuthTokenHere"

#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>

char ssid[] = "YourWiFiName";
char pass[] = "YourWiFiPassword";

#define RELAY1 25
#define RELAY2 26
#define DHTPIN 15
#define DHTTYPE DHT11
#define BTN_VPIN V0
#define TEMP_VPIN V1

DHT dht(DHTPIN, DHTTYPE);
BlynkTimer timer;

BLYNK_CONNECTED() {
  Blynk.syncVirtual(BTN_VPIN);
}

BLYNK_WRITE(BTN_VPIN) {
  int state = param.asInt();
  // ACTIVE-LOW: button ON -> relays LOW
  digitalWrite(RELAY1, state ? LOW : HIGH);
  digitalWrite(RELAY2, state ? LOW : HIGH);
  Serial.print("Relay state: ");
  Serial.println(state ? "ON" : "OFF");
}

void sendTemp() {
  float t = dht.readTemperature();
  if (isnan(t)) {
    Serial.println("DHT read failed");
    return;
  }
  Serial.print("Temp: ");
  Serial.println(t);
  Blynk.virtualWrite(TEMP_VPIN, t);
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY1, OUTPUT);
  pinMode(RELAY2, OUTPUT);
  digitalWrite(RELAY1, HIGH); // OFF at start (active low)
  digitalWrite(RELAY2, HIGH);
  dht.begin();
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  timer.setInterval(2000L, sendTemp);
}

void loop() {
  Blynk.run();
  timer.run();
}`,
    codeTitle: 'smart_home.ino',
    codeLanguage: 'cpp',
    tips: [
      'If relays switch opposite, swap HIGH and LOW logic in the button handler.',
      'If temperature shows nan, check GPIO 15 wiring and add a 10k pull-up resistor.',
      'Use a good 5V 2A USB adapter. Weak power causes WiFi drops and relay chatter.',
      'Keep Blynk Auth Token private. Do not share screenshots with the token visible.',
    ],
    tipsBn: [
      'রিলে উল্টো কাজ করলে বাটন হ্যান্ডলারে HIGH ও LOW লজিক বদলে দিন।',
      'তাপমাত্রা nan দেখালে GPIO 15 সংযোগ দেখুন ও ১০k পুল-আপ রেজিস্টর যোগ করুন।',
      'ভালো ৫ ভোল্ট ২ অ্যাম্পিয়ার অ্যাডাপ্টার ব্যবহার করুন। দুর্বল পাওয়ারে WiFi ছুটে যায় ও রিলে কাঁপে।',
      'Blynk Auth Token গোপন রাখুন। টোকেন দেখা যায় এমন স্ক্রিনশট শেয়ার করবেন না।',
    ],
  },
  'security-camera': {
    boardLabel: 'AI-Thinker ESP32-CAM',
    boardLabelBn: 'AI-Thinker ESP32-CAM',
    overview: [
      'This project builds a low-cost WiFi security camera with the ESP32-CAM. It streams live video to your phone or laptop browser. You can mount it at your door or room for simple monitoring.',
      'You learn camera wiring, WiFi video streaming, and stable power design. No extra camera module is needed because the board has one built in.',
    ],
    overviewBn: [
      'এই প্রজেক্টে ESP32-CAM দিয়ে কম খরচে WiFi সিকিউরিটি ক্যামেরা বানাবেন। ফোন বা ল্যাপটপ ব্রাউজারে লাইভ ভিডিও দেখা যাবে। দরজা বা ঘরে লাগিয়ে সহজ নজরদারি করা যায়।',
      'ক্যামেরা সংযোগ, WiFi ভিডিও স্ট্রিমিং ও স্থিতিশীল পাওয়ার ডিজাইন শিখবেন। বোর্ডে ক্যামেরা বিল্ট-ইন থাকায় আলাদা মডিউল লাগে না।',
    ],
    howItWorks: [
      'The ESP32-CAM reads frames from the OV2640 camera using its special camera pins. The code starts a web server for the control page and a stream server on port 81. Your browser loads MJPEG frames from that stream URL.',
      'GPIO 0 controls flashing mode. When GPIO 0 is tied to GND at reset, the board enters download mode. After flashing, you must remove that jumper and press reset to run the camera.',
      'Stable 5V power is critical. The camera plus WiFi draws short current peaks. Weak power causes brownout resets and a frozen stream. A good 5V 2A supply fixes most stream problems.',
    ],
    howItWorksBn: [
      'ESP32-CAM বিশেষ ক্যামেরা পিন দিয়ে OV2640 ক্যামেরা থেকে ফ্রেম পড়ে। কোড কন্ট্রোল পেজের জন্য ওয়েব সার্ভার ও 81 পোর্টে স্ট্রিম সার্ভার চালু করে। ব্রাউজার সেই স্ট্রিম URL থেকে MJPEG ফ্রেম লোড করে।',
      'GPIO 0 ফ্ল্যাশিং মোড নিয়ন্ত্রণ করে। রিসেটের সময় GPIO 0 GND তে যুক্ত থাকলে বোর্ড ডাউনলোড মোডে যায়। ফ্ল্যাশ শেষে জাম্পার খুলে রিসেট চাপলে ক্যামেরা চলে।',
      'স্থিতিশীল ৫ ভোল্ট পাওয়ার খুব জরুরি। ক্যামেরা ও WiFi হঠাৎ বেশি কারেন্ট টানে। দুর্বল পাওয়ারে ব্রাউনআউট রিসেট হয় ও স্ট্রিম আটকে যায়। ভালো ৫ ভোল্ট ২ অ্যাম্পিয়ার সাপ্লাই বেশিরভাগ সমস্যা ঠিক করে।',
    ],
    pins: [
      { from: 'GPIO 0', to: 'GND (jumper)', part: 'FTDI Programmer', note: 'Tie to GND only while flashing', noteBn: 'শুধু ফ্ল্যাশের সময় GND তে যুক্ত করুন' },
      { from: 'U0R (GPIO 3)', to: 'TX', part: 'FTDI Programmer', note: 'ESP32 RX receives FTDI TX', noteBn: 'ESP32 RX এ FTDI TX যাবে' },
      { from: 'U0T (GPIO 1)', to: 'RX', part: 'FTDI Programmer', note: 'ESP32 TX goes to FTDI RX', noteBn: 'ESP32 TX FTDI RX এ যাবে' },
      { from: '5V', to: 'VCC (5V)', part: 'FTDI Programmer', note: 'Use stable 5V 2A supply', noteBn: 'স্থিতিশীল ৫ ভোল্ট ২ অ্যাম্পিয়ার সাপ্লাই দিন' },
      { from: 'GND', to: 'GND', part: 'FTDI Programmer', note: 'Common GND always', noteBn: 'সবসময় কমন GND' },
      { from: 'GPIO 4', to: 'Flash LED', part: 'Onboard LED', note: 'Built-in white flash LED', noteBn: 'বিল্ট-ইন সাদা ফ্ল্যাশ LED' },
      { from: 'GPIO 33', to: 'Red LED', part: 'Onboard LED', note: 'Status LED on back', noteBn: 'পেছনে স্ট্যাটাস LED' },
    ],
    steps: [
      'Connect FTDI to ESP32-CAM: VCC to 5V, GND to GND, TX to U0R, RX to U0T. Add a jumper from GPIO 0 to GND for flashing mode.',
      'Select AI-Thinker ESP32-CAM in Arduino IDE. Install the ESP32 board package version 2 or newer. Set a fast baud rate like 921600 for upload.',
      'Put your WiFi name and password in the code. Upload, then open Serial Monitor at 115200 to see the camera IP address.',
      'Remove the GPIO 0 to GND jumper. Press the RST button once. Wait 10 seconds for WiFi to connect.',
      'Open the printed IP address in a browser for the control page. Open the same IP with port 81 and path stream for direct video.',
      'If the image is dark, increase frame size and turn on the flash LED from the web page. Focus the lens by gently rotating it.',
      'If you see brownout or reset loops, change to a stable 5V 2A adapter with a short thick USB cable. Do not power from a weak laptop port.',
      'Mount the camera in a small case with the lens and antenna outside. Save the stream URL for daily monitoring.',
    ],
    stepsBn: [
      'FTDI ESP32-CAM এ লাগান: VCC 5V তে, GND GND তে, TX U0R এ, RX U0T তে। ফ্ল্যাশিং মোডের জন্য GPIO 0 থেকে GND তে জাম্পার দিন।',
      'Arduino IDE তে AI-Thinker ESP32-CAM সিলেক্ট করুন। ESP32 বোর্ড প্যাকেজ ভার্সন ২ বা নতুন ইনস্টল করুন। আপলোডে 921600 এর মতো দ্রুত বড রেট দিন।',
      'কোডে WiFi নাম ও পাসওয়ার্ড বসান। আপলোড করে 115200 এ Serial Monitor খুলে ক্যামেরার IP ঠিকানা দেখুন।',
      'GPIO 0 থেকে GND জাম্পার খুলে ফেলুন। RST বাটন একবার চাপুন। WiFi যুক্ত হতে ১০ সেকেন্ড অপেক্ষা করুন।',
      'কন্ট্রোল পেজের জন্য IP ঠিকানা ব্রাউজারে খুলুন। সরাসরি ভিডিওর জন্য একই IP 81 পোর্ট ও stream পাথে খুলুন।',
      'ছবি অন্ধকার হলে ওয়েব পেজ থেকে ফ্রেম সাইজ বাড়ান ও ফ্ল্যাশ LED চালু করুন। লেন্স আস্তে ঘুরিয়ে ফোকাস করুন।',
      'ব্রাউনআউট বা বারবার রিসেট দেখলে মোটা ছোট USB কেবলসহ স্থিতিশীল ৫ ভোল্ট ২ অ্যাম্পিয়ার অ্যাডাপ্টার ব্যবহার করুন। দুর্বল ল্যাপটপ পোর্ট থেকে পাওয়ার দেবেন না।',
      'লেন্স ও অ্যান্টেনা বাইরে রেখে ছোট বাক্সে ক্যামেরা বসান। প্রতিদিন দেখার জন্য স্ট্রিম URL সংরক্ষণ করুন।',
    ],
    code: `// security_camera.ino - ESP32-CAM video stream on port 81
#include "esp_camera.h"
#include <WiFi.h>
#include "esp_http_server.h"

const char* ssid = "YourWiFiName";
const char* password = "YourWiFiPassword";

// AI-Thinker ESP32-CAM standard pin map
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

#define PART_BOUNDARY "123456789000000000000987654321"
static const char* STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;
static httpd_handle_t stream_httpd = NULL;

static esp_err_t stream_handler(httpd_req_t *req) {
  camera_fb_t *fb = NULL;
  esp_err_t res = httpd_resp_set_type(req, STREAM_CONTENT_TYPE);
  if (res != ESP_OK) return res;
  char part_buf[64];
  while (true) {
    fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Frame capture failed");
      res = ESP_FAIL;
      break;
    }
    size_t hlen = snprintf(part_buf, 64, "--" PART_BOUNDARY " Content-Type: image/jpeg Content-Length: %u ", (uint32_t)fb->len);
    res = httpd_resp_send_chunk(req, part_buf, hlen);
    if (res == ESP_OK) res = httpd_resp_send_chunk(req, (const char*)fb->buf, fb->len);
    if (res == ESP_OK) res = httpd_resp_send_chunk(req, " ", 2);
    esp_camera_fb_return(fb);
    if (res != ESP_OK) break;
  }
  return res;
}

void startStreamServer() {
  httpd_config_t config = HTTPD_DEFAULT_CONFIG();
  config.server_port = 81;
  httpd_uri_t stream_uri = { .uri = "/stream", .method = HTTP_GET, .handler = stream_handler, .user_ctx = NULL };
  if (httpd_start(&stream_httpd, &config) == ESP_OK) {
    httpd_register_uri_handler(stream_httpd, &stream_uri);
  }
}

void setup() {
  Serial.begin(115200);
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_VGA;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  if (esp_camera_init(&config) != ESP_OK) {
    Serial.println("Camera init failed. Check power supply.");
    return;
  }
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Camera ready. Stream at http://");
  Serial.print(WiFi.localIP());
  Serial.println(":81/stream");
  startStreamServer();
}

void loop() {
  delay(10000);
}`,
    codeTitle: 'security_camera.ino',
    codeLanguage: 'cpp',
    tips: [
      'Brownout resets almost always mean weak power. Switch to a 5V 2A adapter first.',
      'If upload fails, hold the RST button, press upload, then release RST after compiling.',
      'GPIO 0 to GND jumper is only for flashing. Remove it or the camera will not boot.',
      'Keep the WiFi router close during testing. Weak signal lowers frame rate a lot.',
    ],
    tipsBn: [
      'ব্রাউনআউট রিসেট মানেই প্রায় সবসময় দুর্বল পাওয়ার। আগে ৫ ভোল্ট ২ অ্যাম্পিয়ার অ্যাডাপ্টার বদলান।',
      'আপলোড ব্যর্থ হলে RST চেপে ধরে আপলোড চাপুন, কম্পাইল শেষে RST ছাড়ুন।',
      'GPIO 0 থেকে GND জাম্পার শুধু ফ্ল্যাশের জন্য। না খুললে ক্যামেরা চালু হবে না।',
      'পরীক্ষার সময় রাউটার কাছে রাখুন। দুর্বল সিগন্যালে ফ্রেম রেট অনেক কমে যায়।',
    ],
  },
  'home-automation-pi': {
    boardLabel: 'Raspberry Pi 4',
    boardLabelBn: 'রাসবেরি পাই ৪',
    overview: [
      'This project makes a Raspberry Pi home controller. One relay controls a lamp, a DHT11 shows room climate, and two push buttons work as manual overrides. A Flask web page shows live status on port 5000.',
      'It is great for learning real home automation. You practice BCM GPIO numbering, sensor reading, button inputs, and a simple Python web server.',
    ],
    overviewBn: [
      'এই প্রজেক্টে রাসবেরি পাই দিয়ে হোম কন্ট্রোলার বানাবেন। একটি রিলে বাতি চালায়, DHT11 ঘরের আবহাওয়া দেখায় ও দুটি পুশ বাটন ম্যানুয়াল ওভাররাইড হিসেবে কাজ করে। Flask ওয়েব পেজ 5000 পোর্টে লাইভ স্ট্যাটাস দেখায়।',
      'এটি আসল হোম অটোমেশন শেখার জন্য দারুণ। BCM GPIO নম্বর, সেন্সর পড়া, বাটন ইনপুট ও সহজ পাইথন ওয়েব সার্ভার অনুশীলন হবে।',
    ],
    howItWorks: [
      'The Pi uses BCM pin numbers. Relay IN connects to GPIO 17 as an output. Buttons on GPIO 22 and GPIO 23 use INPUT_PULLUP mode. Pressing a button pulls the pin LOW and toggles the relay without the web page.',
      'DHT11 data connects to GPIO 4 and is read with the Adafruit_DHT library. The script stores the latest temperature, humidity, and relay state in memory. Flask renders them on a status page and offers on and off URLs.',
      'Flask runs on port 5000 on your home network. Any phone on the same WiFi can open the Pi IP with port 5000 to control the lamp. The loop keeps buttons responsive while the web server runs in the same program.',
    ],
    howItWorksBn: [
      'পাই BCM পিন নম্বর ব্যবহার করে। রিলে IN GPIO 17 এ আউটপুট হিসেবে যুক্ত থাকে। GPIO 22 ও GPIO 23 এর বাটন INPUT_PULLUP মোডে থাকে। বাটন চাপলে পিন LOW হয় ও ওয়েব পেজ ছাড়াই রিলে টগল হয়।',
      'DHT11 ডাটা GPIO 4 এ যুক্ত থাকে ও Adafruit_DHT লাইব্রেরি দিয়ে পড়া হয়। স্ক্রিপ্ট সর্বশেষ তাপমাত্রা, আর্দ্রতা ও রিলে অবস্থা মনে রাখে। Flask স্ট্যাটাস পেজে দেখায় ও অন অফ URL দেয়।',
      'Flask বাসার নেটওয়ার্কে 5000 পোর্টে চলে। একই WiFi এর যেকোনো ফোন পাই এর IP 5000 পোর্টসহ খুলে বাতি নিয়ন্ত্রণ করতে পারে। লুপ বাটন সচল রাখে ও ওয়েব সার্ভার একই প্রোগ্রামে চলে।',
    ],
    pins: [
      { from: 'GPIO 17 (BCM)', to: 'IN', part: 'Relay Module', note: 'Relay control output', noteBn: 'রিলে নিয়ন্ত্রণ আউটপুট' },
      { from: '5V', to: 'VCC', part: 'Relay Module', note: 'Relay coil needs 5V', noteBn: 'রিলে কয়েলের জন্য ৫ ভোল্ট' },
      { from: 'GND', to: 'GND', part: 'Relay Module', note: 'Common GND', noteBn: 'কমন GND' },
      { from: 'GPIO 4 (BCM)', to: 'DATA', part: 'DHT11 Sensor', note: 'Adafruit_DHT data pin', noteBn: 'Adafruit_DHT ডাটা পিন' },
      { from: '3V3', to: 'VCC', part: 'DHT11 Sensor', note: 'DHT11 power 3.3V', noteBn: 'DHT11 এর পাওয়ার ৩.৩ ভোল্ট' },
      { from: 'GND', to: 'GND', part: 'DHT11 Sensor', note: 'Common GND', noteBn: 'কমন GND' },
      { from: 'GPIO 22 (BCM)', to: 'Button 1 leg', part: 'Push Button', note: 'INPUT_PULLUP override ON', noteBn: 'INPUT_PULLUP ওভাররাইড ON' },
      { from: 'GPIO 23 (BCM)', to: 'Button 2 leg', part: 'Push Button', note: 'INPUT_PULLUP override OFF', noteBn: 'INPUT_PULLUP ওভাররাইড OFF' },
      { from: 'GND', to: 'Button other leg', part: 'Push Button', note: 'Buttons connect pin to GND', noteBn: 'বাটন পিনকে GND তে যুক্ত করে' },
    ],
    steps: [
      'Wire relay VCC to 5V, GND to GND, and IN to GPIO 17. Wire DHT11 VCC to 3V3, GND to GND, and DATA to GPIO 4. Do not wire mains yet.',
      'Wire two buttons: one side to GND, other side to GPIO 22 and GPIO 23. The code uses internal pull-ups so no extra resistors are needed.',
      'Install needed software with pip: RPi.GPIO, Adafruit_DHT, and Flask. Enable nothing extra because GPIO works by default on Pi OS.',
      'Save the code as home_auto.py and run it with python3. Open the Pi IP with port 5000 on your phone browser.',
      'Test the web buttons and both physical buttons. Confirm temperature and humidity update on the status page.',
      'WARNING: Mains electricity can kill. Ask an electrician to wire the lamp through COM and NO terminals. Never touch mains wires while powered.',
      'Set the script to auto-start if needed. Keep the Pi in a ventilated case away from mains wiring.',
      'Share the status page URL with family on the same WiFi. Check relay clicks and sensor values daily for one week.',
    ],
    stepsBn: [
      'রিলে VCC 5V তে, GND GND তে ও IN GPIO 17 এ লাগান। DHT11 VCC 3V3 তে, GND GND তে ও DATA GPIO 4 এ লাগান। এখনো মেইনস লাগাবেন না।',
      'দুটি বাটন লাগান: এক পাশ GND তে, অন্য পাশ GPIO 22 ও GPIO 23 এ। কোড ভেতরের পুল-আপ ব্যবহার করে তাই আলাদা রেজিস্টর লাগে না।',
      'pip দিয়ে প্রয়োজনীয় সফটওয়্যার ইনস্টল করুন: RPi.GPIO, Adafruit_DHT ও Flask। Pi OS এ GPIO ডিফল্ট চলে তাই আলাদা কিছু চালু লাগে না।',
      'কোড home_auto.py নামে সেভ করে python3 দিয়ে চালান। ফোন ব্রাউজারে পাই এর IP 5000 পোর্টসহ খুলুন।',
      'ওয়েব বাটন ও দুটি ফিজিক্যাল বাটন পরীক্ষা করুন। স্ট্যাটাস পেজে তাপমাত্রা ও আর্দ্রতা আপডেট হচ্ছে কিনা দেখুন।',
      'সতর্কতা: মেইনস বিদ্যুৎ প্রাণঘাতী। বাতির তার COM ও NO টার্মিনাল দিয়ে লাগাতে ইলেকট্রিশিয়ানের সাহায্য নিন। পাওয়ার থাকলে মেইনস তারে হাত দেবেন না।',
      'দরকার হলে স্ক্রিপ্ট অটো-স্টার্টে দিন। পাই বাতাস চলাচল করে এমন বাক্সে মেইনস তার থেকে দূরে রাখুন।',
      'একই WiFi এ পরিবারের সাথে স্ট্যাটাস পেজ URL শেয়ার করুন। এক সপ্তাহ প্রতিদিন রিলে ক্লিক ও সেন্সর মান দেখুন।',
    ],
    code: `# home_auto.py - Raspberry Pi home automation with Flask on port 5000
import threading
import time
from flask import Flask
import RPi.GPIO as GPIO
import Adafruit_DHT

RELAY_PIN = 17
DHT_PIN = 4
BTN_ON = 22
BTN_OFF = 23
DHT_SENSOR = Adafruit_DHT.DHT11

GPIO.setmode(GPIO.BCM)
GPIO.setup(RELAY_PIN, GPIO.OUT)
GPIO.output(RELAY_PIN, GPIO.HIGH)  # relay OFF (active low)
GPIO.setup(BTN_ON, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(BTN_OFF, GPIO.IN, pull_up_down=GPIO.PUD_UP)

state = {"relay": False, "temp": 0.0, "hum": 0.0}
app = Flask(__name__)

def read_sensor_loop():
    while True:
        h, t = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
        if h is not None and t is not None:
            state["hum"] = round(h, 1)
            state["temp"] = round(t, 1)
        time.sleep(2)

def button_loop():
    while True:
        if GPIO.input(BTN_ON) == GPIO.LOW:
            GPIO.output(RELAY_PIN, GPIO.LOW)
            state["relay"] = True
            time.sleep(0.4)
        if GPIO.input(BTN_OFF) == GPIO.LOW:
            GPIO.output(RELAY_PIN, GPIO.HIGH)
            state["relay"] = False
            time.sleep(0.4)
        time.sleep(0.05)

@app.route("/")
def home():
    on = state["relay"]
    return ("<h1>Home Automation</h1>"
            "<p>Relay: " + ("ON" if on else "OFF") + "</p>"
            "<p>Temp: " + str(state["temp"]) + " C</p>"
            "<p>Humidity: " + str(state["hum"]) + " %</p>"
            "<a href='/on'>Turn ON</a> | <a href='/off'>Turn OFF</a>")

@app.route("/on")
def on():
    GPIO.output(RELAY_PIN, GPIO.LOW)
    state["relay"] = True
    return "Relay ON <a href='/'>Back</a>"

@app.route("/off")
def off():
    GPIO.output(RELAY_PIN, GPIO.HIGH)
    state["relay"] = False
    return "Relay OFF <a href='/'>Back</a>"

if __name__ == "__main__":
    threading.Thread(target=read_sensor_loop, daemon=True).start()
    threading.Thread(target=button_loop, daemon=True).start()
    app.run(host="0.0.0.0", port=5000)`,
    codeTitle: 'home_auto.py',
    codeLanguage: 'python',
    tips: [
      'Use BCM mode always. BOARD numbers look different and will wire to wrong pins.',
      'If DHT shows None, check GPIO 4 wiring and wait 2 seconds between reads.',
      'If buttons bounce, the small sleep delays in the loop already fix most cases.',
      'Open the page with your Pi IP, example 192.168.1.10:5000, not localhost from phone.',
    ],
    tipsBn: [
      'সবসময় BCM মোড ব্যবহার করুন। BOARD নম্বর আলাদা ও ভুল পিনে সংযোগ হবে।',
      'DHT None দেখালে GPIO 4 সংযোগ দেখুন ও পড়ার মাঝে ২ সেকেন্ড অপেক্ষা করুন।',
      'বাটন বাউন্স করলে লুপের ছোট sleep দেরি বেশিরভাগ ক্ষেত্রে ঠিক করে।',
      'ফোন থেকে localhost নয়, পাই এর IP দিয়ে খুলুন, যেমন 192.168.1.10:5000।',
    ],
  },
  'face-detection-pi': {
    boardLabel: 'Raspberry Pi 4',
    boardLabelBn: 'রাসবেরি পাই ৪',
    overview: [
      'This project adds face detection to your Raspberry Pi camera. It finds faces in live video, draws boxes around them, and counts how many people are in view. It is a fun first step into computer vision.',
      'You use Python and OpenCV with a ready-made Haar cascade file. No machine learning training is needed. A normal Pi Camera and Raspberry Pi 4 are enough.',
    ],
    overviewBn: [
      'এই প্রজেক্টে রাসবেরি পাই ক্যামেরায় ফেস ডিটেকশন যোগ করবেন। লাইভ ভিডিওতে মুখ খুঁজে বাক্স আঁকে ও কতজন আছে গুনে দেখায়। কম্পিউটার ভিশনে এটি মজার প্রথম ধাপ।',
      'রেডিমেড Haar cascade ফাইলসহ পাইথন ও OpenCV ব্যবহার করবেন। মেশিন লার্নিং ট্রেনিং লাগে না। সাধারণ পাই ক্যামেরা ও রাসবেরি পাই ৪ যথেষ্ট।',
    ],
    howItWorks: [
      'The Pi Camera captures frames through libcamera. OpenCV converts each frame to gray because the cascade detector works faster on gray images. detectMultiScale scans boxes of many sizes to find face patterns.',
      'Each found face returns x, y, width, and height. The script draws a green rectangle on the color frame and writes the total face count on top. You see boxes move live as people move.',
      'You can run headless or with preview. Headless mode only prints the count and saves photos. Preview mode opens a window with boxes. Press q to quit safely in preview mode.',
    ],
    howItWorksBn: [
      'পাই ক্যামেরা libcamera দিয়ে ফ্রেম ধরে। OpenCV প্রতি ফ্রেম ধূসর করে কারণ cascade ডিটেক্টর ধূসর ছবিতে দ্রুত কাজ করে। detectMultiScale অনেক সাইজের বাক্স স্ক্যান করে মুখের প্যাটার্ন খোঁজে।',
      'প্রতি পাওয়া মুখ x, y, প্রস্থ ও উচ্চতা দেয়। স্ক্রিপ্ট রঙিন ফ্রেমে সবুজ আয়ত আঁকে ও উপরে মোট মুখের সংখ্যা লেখে। মানুষ নড়লে বাক্স লাইভ নড়তে দেখা যায়।',
      'হেডলেস বা প্রিভিউসহ চালাতে পারেন। হেডলেস মোডে শুধু সংখ্যা প্রিন্ট হয় ও ছবি সেভ হয়। প্রিভিউ মোডে বাক্সসহ উইন্ডো খোলে। প্রিভিউ মোডে q চেপে নিরাপদে বন্ধ করুন।',
    ],
    pins: [
      { from: 'CSI port', to: 'Camera ribbon', part: 'Pi Camera', note: 'Ribbon blue side faces USB ports', noteBn: 'ফিতার নীল পাশ USB পোর্টের দিকে' },
      { from: '5V', to: '5V pin', part: 'Power Supply', note: 'Official 5V 3A Pi adapter', noteBn: 'অফিসিয়াল ৫ ভোল্ট ৩ অ্যাম্পিয়ার অ্যাডাপ্টার' },
      { from: 'GND', to: 'GND pin', part: 'Power Supply', note: 'Stable common ground', noteBn: 'স্থিতিশীল কমন গ্রাউন্ড' },
      { from: 'HDMI 0', to: 'Monitor cable', part: 'Display (preview)', note: 'Needed only for preview mode', noteBn: 'শুধু প্রিভিউ মোডে দরকার' },
      { from: 'USB port', to: 'Keyboard', part: 'Input (preview)', note: 'Needed to press q and quit', noteBn: 'q চেপে বন্ধ করতে দরকার' },
      { from: 'WiFi', to: 'SSH terminal', part: 'Remote Access (headless)', note: 'Use SSH for headless run', noteBn: 'হেডলেস চালাতে SSH ব্যবহার করুন' },
    ],
    steps: [
      'Connect the Pi Camera ribbon to the CSI port with power off. Blue side faces the USB ports. Lock the clip gently.',
      'Open raspi-config, enable the camera interface, then reboot. Test with libcamera-hello to confirm video appears.',
      'Install OpenCV with pip or apt and confirm haarcascade_frontalface_default.xml exists on your system.',
      'Save the code as face_detect.py. Set PREVIEW to True for monitor view or False for headless SSH use.',
      'Run with python3 face_detect.py. Point the camera at your face from one meter away in good light.',
      'Check green boxes around faces and the count on top. Press q to quit in preview mode or Ctrl plus C in headless mode.',
      'If no face is found, improve room light and keep your face straight. Lower minNeighbors to 4 for easier detection.',
      'Save sample photos with boxes for your project report. Clean the lens gently if the image looks blurry.',
    ],
    stepsBn: [
      'পাওয়ার বন্ধ রেখে পাই ক্যামেরার ফিতা CSI পোর্টে লাগান। নীল পাশ USB পোর্টের দিকে রাখুন। ক্লিপ আস্তে আটকান।',
      'raspi-config খুলে ক্যামেরা ইন্টারফেস চালু করে রিবুট করুন। libcamera-hello দিয়ে ভিডিও আসছে কিনা পরীক্ষা করুন।',
      'pip বা apt দিয়ে OpenCV ইনস্টল করে haarcascade_frontalface_default.xml ফাইল আছে কিনা নিশ্চিত করুন।',
      'কোড face_detect.py নামে সেভ করুন। মনিটর ভিউতে PREVIEW True করুন বা হেডলেস SSH এ False রাখুন।',
      'python3 face_detect.py দিয়ে চালান। ভালো আলোতে এক মিটার দূর থেকে ক্যামেরার দিকে মুখ করুন।',
      'মুখের চারপাশে সবুজ বাক্স ও উপরে সংখ্যা দেখুন। প্রিভিউ মোডে q চাপুন বা হেডলেসে Ctrl ও C চাপুন।',
      'মুখ না পেলে ঘরের আলো বাড়ান ও মুখ সোজা রাখুন। সহজ ডিটেকশনে minNeighbors ৪ করুন।',
      'প্রজেক্ট রিপোর্টে বাক্সসহ নমুনা ছবি সেভ করুন। ছবি ঝাপসা হলে লেন্স আস্তে পরিষ্কার করুন।',
    ],
    code: `# face_detect.py - Pi Camera face detection with OpenCV
import cv2
from picamera2 import Picamera2

PREVIEW = True  # False for headless SSH run
CASCADE_PATH = "/usr/share/opencv4/haarcascades/haarcascade_frontalface_default.xml"

face_cascade = cv2.CascadeClassifier(CASCADE_PATH)
if face_cascade.empty():
    raise SystemExit("Cascade file not found. Install opencv data files.")

picam = Picamera2()
picam.configure(picam.create_preview_configuration(main={"size": (640, 480)}))
picam.start()

print("Press q to quit (preview) or Ctrl+C to stop (headless).")
while True:
    frame = picam.capture_array()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(60, 60))
    count = len(faces)
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.putText(frame, "Faces: " + str(count), (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    print("Faces found:", count)
    if PREVIEW:
        cv2.imshow("Face Detection", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

picam.stop()
if PREVIEW:
    cv2.destroyAllWindows()
print("Stopped.")`,
    codeTitle: 'face_detect.py',
    codeLanguage: 'python',
    tips: [
      'Good front light matters more than camera price. Face a window for best results.',
      'If detection is slow, use 640 by 480 resolution and close other heavy apps.',
      'If the cascade path is wrong, find the xml file location and update CASCADE_PATH.',
      'Hold the camera steady. Shaky video breaks detection and draws flickering boxes.',
    ],
    tipsBn: [
      'ক্যামেরার দামের চেয়ে ভালো সামনের আলো জরুরি। ভালো ফলের জন্য জানালার দিকে মুখ করুন।',
      'ডিটেকশন ধীর হলে ৬৪০ বাই ৪৮০ রেজোলিউশন দিন ও ভারী অ্যাপ বন্ধ করুন।',
      'cascade পাথ ভুল হলে xml ফাইলের অবস্থান খুঁজে CASCADE_PATH আপডেট করুন।',
      'ক্যামেরা স্থির ধরুন। কাঁপা ভিডিওতে ডিটেকশন ভাঙে ও বাক্স কাঁপে।',
    ],
  },
  'robotic-arm': {
    boardLabel: 'Raspberry Pi 4',
    boardLabelBn: 'রাসবেরি পাই ৪',
    overview: [
      'This project builds a small 4-axis robotic arm with SG90 servos. It can grab a light object, lift it, turn, and place it down. You control base, shoulder, elbow, and gripper joints.',
      'Beginners can wire servos directly with gpiozero. No extra driver board is needed. You learn angles, smooth motion, and a simple pick-and-place sequence.',
    ],
    overviewBn: [
      'এই প্রজেক্টে SG90 সার্ভো দিয়ে ছোট ৪-অক্ষের রোবোটিক আর্ম বানাবেন। হালকা বস্তু ধরে তুলে ঘুরিয়ে নামিয়ে রাখতে পারে। বেস, শোল্ডার, এলবো ও গ্রিপার জয়েন্ট নিয়ন্ত্রণ করবেন।',
      'নতুনরা gpiozero দিয়ে সরাসরি সার্ভো লাগাতে পারে। আলাদা ড্রাইভার বোর্ড লাগে না। অ্যাঙ্গেল, মসৃণ গতি ও সহজ পিক-অ্যান্ড-প্লেস সিকোয়েন্স শিখবেন।',
    ],
    howItWorks: [
      'Each SG90 turns from minus 90 to plus 90 degrees. gpiozero AngularServo sends fast pulses to hold each angle. Base turns left and right, shoulder and elbow lift up and down, and the gripper opens and closes.',
      'Smooth motion comes from small steps with short delays. Instead of jumping from 0 to 60 at once, the code moves 1 degree at a time. This lowers shaking and makes the arm look stable.',
      'A pick-and-place sequence is a list of poses with pauses. The arm opens the gripper, moves down, closes to grab, lifts, turns to the target, moves down, and opens to release.',
    ],
    howItWorksBn: [
      'প্রতি SG90 মাইনাস ৯০ থেকে প্লাস ৯০ ডিগ্রি ঘোরে। gpiozero AngularServo প্রতি অ্যাঙ্গেল ধরে রাখতে দ্রুত পালস পাঠায়। বেস ডানে বামে ঘোরে, শোল্ডার ও এলবো উপরে নিচে ওঠে নামে, গ্রিপার খোলে ও বন্ধ হয়।',
      'ছোট ধাপ ও ছোট দেরি থেকে মসৃণ গতি আসে। একবারে ০ থেকে ৬০ না গিয়ে কোড ১ ডিগ্রি করে চলে। এতে কাঁপুনি কমে ও আর্ম স্থির দেখায়।',
      'পিক-অ্যান্ড-প্লেস সিকোয়েন্স হলো বিরতিসহ কয়েকটি ভঙ্গির তালিকা। আর্ম গ্রিপার খোলে, নিচে নামে, ধরে বন্ধ করে, তোলে, লক্ষ্যের দিকে ঘোরে, নিচে নামে ও ছাড়তে খোলে।',
    ],
    pins: [
      { from: 'GPIO 12 (BCM)', to: 'Signal (orange)', part: 'Base SG90 Servo', note: 'AngularServo base joint', noteBn: 'AngularServo বেস জয়েন্ট' },
      { from: 'GPIO 13 (BCM)', to: 'Signal (orange)', part: 'Shoulder SG90 Servo', note: 'AngularServo shoulder joint', noteBn: 'AngularServo শোল্ডার জয়েন্ট' },
      { from: 'GPIO 18 (BCM)', to: 'Signal (orange)', part: 'Elbow SG90 Servo', note: 'AngularServo elbow joint', noteBn: 'AngularServo এলবো জয়েন্ট' },
      { from: 'GPIO 19 (BCM)', to: 'Signal (orange)', part: 'Gripper SG90 Servo', note: 'AngularServo gripper joint', noteBn: 'AngularServo গ্রিপার জয়েন্ট' },
      { from: 'External 5V 2A (+)', to: 'VCC (red) all servos', part: 'Servo Power Supply', note: 'SEPARATE 5V 2A supply for servos', noteBn: 'সার্ভোর জন্য আলাদা ৫ ভোল্ট ২ অ্যাম্পিয়ার সাপ্লাই' },
      { from: 'External GND', to: 'GND (brown) all servos', part: 'Servo Power Supply', note: 'Tie servo GND to Pi GND', noteBn: 'সার্ভো GND পাই GND তে যুক্ত করুন' },
      { from: 'GND (Pi)', to: 'External GND', part: 'Common Ground', note: 'Common GND is critical', noteBn: 'কমন GND খুব জরুরি' },
    ],
    steps: [
      'Assemble the plastic arm frame loosely. Attach 4 SG90 servos as base, shoulder, elbow, and gripper. Do not tighten fully before testing center angles.',
      'Connect only signal wires to GPIO 12, 13, 18, and 19. Connect all servo red wires to external 5V and brown wires to external GND.',
      'Join external GND to a Pi GND pin. This common GND is critical. Without it servos will jitter and move wrong.',
      'Install gpiozero with pip. Save the code as arm.py. Keep the arm on a table with space to turn safely.',
      'Run with python3 arm.py. The arm first centers all joints, then runs one smooth pick-and-place demo.',
      'Adjust the open and close gripper angles for your object. Use light foam or a bottle cap. Never grab heavy or sharp items.',
      'Tune shoulder and elbow angles so the arm does not hit the table. Tighten screws only after motion looks smooth.',
      'Power off before changing wires. Never power servos from the Pi 5V pin because 4 servos draw too much current.',
    ],
    stepsBn: [
      'প্লাস্টিক আর্ম ফ্রেম ঢিলা করে জোড়া দিন। বেস, শোল্ডার, এলবো ও গ্রিপার হিসেবে ৪টি SG90 লাগান। সেন্টার অ্যাঙ্গেল পরীক্ষার আগে পুরো টাইট করবেন না।',
      'শুধু সিগন্যাল তার GPIO 12, 13, 18 ও 19 এ লাগান। সব সার্ভোর লাল তার বাইরের ৫ ভোল্টে ও বাদামি তার বাইরের GND তে লাগান।',
      'বাইরের GND পাই এর GND পিনে যুক্ত করুন। এই কমন GND খুব জরুরি। এটা ছাড়া সার্ভো কাঁপবে ও ভুল ঘুরবে।',
      'pip দিয়ে gpiozero ইনস্টল করুন। কোড arm.py নামে সেভ করুন। ঘোরার জায়গা রেখে টেবিলে আর্ম রাখুন।',
      'python3 arm.py দিয়ে চালান। আর্ম আগে সব জয়েন্ট সেন্টার করে, তারপর একটি মসৃণ পিক-অ্যান্ড-প্লেস ডেমো চালায়।',
      'আপনার বস্তু অনুযায়ী গ্রিপার খোলা বন্ধ অ্যাঙ্গেল ঠিক করুন। হালকা ফোম বা বোতলের ছিপি ব্যবহার করুন। ভারী বা ধারালো জিনিস ধরবেন না।',
      'শোল্ডার ও এলবো অ্যাঙ্গেল ঠিক করুন যাতে আর্ম টেবিলে না লাগে। গতি মসৃণ দেখালে তবেই স্ক্রু টাইট করুন।',
      'তার বদলানোর আগে পাওয়ার বন্ধ করুন। পাই এর ৫ ভোল্ট পিন থেকে সার্ভো চালাবেন না কারণ ৪টি সার্ভো বেশি কারেন্ট টানে।',
    ],
    code: `# arm.py - 4 servo robotic arm with smooth pick and place
from gpiozero import AngularServo
from time import sleep

base = AngularServo(12, min_angle=-90, max_angle=90)
shoulder = AngularServo(13, min_angle=-90, max_angle=90)
elbow = AngularServo(18, min_angle=-90, max_angle=90)
gripper = AngularServo(19, min_angle=-90, max_angle=90)

def move_smooth(servo, target, step=1, delay=0.02):
    start = servo.angle if servo.angle is not None else 0
    if target > start:
        angles = range(int(start), int(target) + 1, step)
    else:
        angles = range(int(start), int(target) - 1, -step)
    for a in angles:
        servo.angle = a
        sleep(delay)

def pose(b, s, e, g, wait=0.5):
    move_smooth(base, b)
    move_smooth(shoulder, s)
    move_smooth(elbow, e)
    move_smooth(gripper, g)
    sleep(wait)

def pick_and_place():
    print("Centering arm...")
    pose(0, 0, 0, 0, wait=1)
    print("Go to pick...")
    pose(-30, 20, -20, -40)   # gripper open
    pose(-30, -10, -30, -40)  # move down
    pose(-30, -10, -30, 30)   # close to grab
    sleep(0.5)
    pose(-30, 20, -20, 30)    # lift up
    print("Go to place...")
    pose(30, 20, -20, 30)     # turn to target
    pose(30, -10, -30, 30)    # move down
    pose(30, -10, -30, -40)   # open to release
    sleep(0.5)
    pose(0, 0, 0, 0)          # home
    print("Done.")

if __name__ == "__main__":
    try:
        pick_and_place()
    except KeyboardInterrupt:
        print("Stopped by user.")`,
    codeTitle: 'arm.py',
    codeLanguage: 'python',
    tips: [
      'Always use a separate 5V 2A supply for servos and join GND to the Pi.',
      'If a servo shakes, lower the step delay and check that GND wires are tight.',
      'If motion is reversed, swap the sign of that joint angle in the pose calls.',
      'Start with small light objects. Heavy load strips SG90 plastic gears fast.',
    ],
    tipsBn: [
      'সার্ভোর জন্য সবসময় আলাদা ৫ ভোল্ট ২ অ্যাম্পিয়ার সাপ্লাই দিন ও GND পাইতে যুক্ত করুন।',
      'সার্ভো কাঁপলে স্টেপ দেরি কমান ও GND তার টাইট আছে কিনা দেখুন।',
      'গতি উল্টো হলে pose কলে সেই জয়েন্টের অ্যাঙ্গেলের চিহ্ন বদলে দিন।',
      'ছোট হালকা বস্তু দিয়ে শুরু করুন। ভারী লোডে SG90 প্লাস্টিক গিয়ার দ্রুত নষ্ট হয়।',
    ],
  },
}

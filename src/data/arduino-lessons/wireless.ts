import { ArduinoLessonsMap } from './types'

export const wirelessLessons: ArduinoLessonsMap = {
  'bluetooth-hc05': {
    title: 'HC-05 Bluetooth Module',
    titleBn: 'HC-05 ব্লুটুথ মডিউল',
    duration: '15 min',
    level: 'intermediate',
    description: 'Control Arduino with smartphone via HC-05 Bluetooth serial (9600 baud).',
    descriptionBn: 'HC-05 Bluetooth serial (9600) দিয়ে smartphone থেকে Arduino control।',
    whatYouWillLearn: [
      'HC-05 TX/RX cross-connect to Arduino (TX→RX, RX→TX)',
      'Use SoftwareSerial or separate hardware Serial',
      'Send single characters to toggle LED',
      'Pair module with phone Bluetooth app',
    ],
    whatYouWillLearnBn: [
      'TX/RX cross connect',
      'SoftwareSerial',
      'character দিয়ে LED toggle',
      'phone pair',
    ],
    components: ['Arduino Uno', 'HC-05 module', 'LED pin 13', 'Jumper wires'],
    circuitDescription: 'HC-05 VCC→5V, GND→GND, TX→pin 10 (Arduino RX), RX→pin 11 (Arduino TX) via voltage divider if 3.3V only.',
    circuitDescriptionBn: 'VCC→5V, GND→GND, TX→10, RX→11 (3.3V হলে divider)।',
    code: `#include <SoftwareSerial.h>

SoftwareSerial BTSerial(10, 11); // RX, TX
const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  BTSerial.begin(9600);
  pinMode(ledPin, OUTPUT);
  Serial.println(F("HC-05 ready. Send 1=ON 0=OFF"));
}

void loop() {
  if (BTSerial.available()) {
    char cmd = BTSerial.read();
    if (cmd == '1') {
      digitalWrite(ledPin, HIGH);
      BTSerial.println(F("LED ON"));
    } else if (cmd == '0') {
      digitalWrite(ledPin, LOW);
      BTSerial.println(F("LED OFF"));
    }
  }
}`,
    codeExplanation: [
      { line: 3, text: 'SoftwareSerial on pins 10,11 leaves USB Serial for debug.', textBn: 'SoftwareSerial debug এর জন্য USB Serial free।' },
      { line: 14, text: 'Read one char from Bluetooth app terminal.', textBn: 'Bluetooth app থেকে char read।' },
    ],
    commonMistakes: [
      { mistake: 'Garbled characters', mistakeBn: 'garbled text', solution: 'Match 9600 baud on app and code. Swap TX/RX if no data.', solutionBn: '9600 baud match, TX/RX swap।' },
    ],
    tryItTips: ['Use app "Serial Bluetooth Terminal"', 'Send motor commands F/B/L/R for robot'],
    tryItTipsBn: ['Serial Bluetooth Terminal app', 'F/B/L/R robot'],
  },

  'nrf24l01': {
    title: 'NRF24L01 RF Module',
    titleBn: 'NRF24L01 RF মডিউল',
    duration: '18 min',
    level: 'advanced',
    description: 'Send wireless data between two Arduinos with NRF24L01+ 2.4GHz modules.',
    descriptionBn: 'দুটি Arduino তে NRF24L01+ দিয়ে wireless data।',
    whatYouWillLearn: [
      'SPI wiring CE, CSN, MOSI, MISO, SCK',
      'Install RF24 library by TMRh20',
      'Transmitter sends counter, receiver prints',
      'Add 10µF cap near module VCC for stability',
    ],
    whatYouWillLearnBn: [
      'SPI CE, CSN wiring',
      'RF24 library',
      'TX counter, RX print',
      '10µF cap VCC',
    ],
    components: ['2× Arduino Uno', '2× NRF24L01+', 'Jumper wires', '10µF capacitor'],
    circuitDescription: 'CE→9, CSN→10, MOSI→11, MISO→12, SCK→13. VCC→3.3V (NOT 5V!). GND→GND.',
    circuitDescriptionBn: 'CE→9, CSN→10, MOSI→11, MISO→12, SCK→13। VCC→3.3V! GND→GND।',
    code: `// TRANSMITTER CODE — upload to first Arduino
#include <SPI.h>
#include <RF24.h>

RF24 radio(9, 10); // CE, CSN
const byte address[6] = "00001";
uint32_t counter = 0;

void setup() {
  Serial.begin(9600);
  if (!radio.begin()) {
    Serial.println(F("Radio failed!"));
    while (1) {}
  }
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_LOW);
  radio.stopListening();
}

void loop() {
  char msg[32];
  snprintf(msg, sizeof(msg), "Count:%lu", counter++);
  radio.write(msg, sizeof(msg));
  Serial.println(msg);
  delay(1000);
}

/*
 * RECEIVER — second Arduino:
 * radio.openReadingPipe(0, address);
 * radio.startListening();
 * if (radio.available()) { radio.read(&msg, sizeof(msg)); Serial.println(msg); }
 */`,
    codeExplanation: [
      { line: 5, text: 'Same address on TX and RX pipes must match.', textBn: 'TX RX same address।' },
      { line: 8, text: 'radio.begin() fails if wiring wrong or not 3.3V.', textBn: 'begin() fail = wiring/3.3V।' },
    ],
    commonMistakes: [
      { mistake: 'Radio failed on begin()', mistakeBn: 'Radio failed', solution: 'Use 3.3V only. Add 10µF cap. Short wires.', solutionBn: '3.3V only, 10µF cap।' },
    ],
    tryItTips: ['Upload TX to one board, RX sketch to other', 'Start with PA_LOW for close range test'],
    tryItTipsBn: ['TX/RX separate board', 'PA_LOW close test'],
  },
}

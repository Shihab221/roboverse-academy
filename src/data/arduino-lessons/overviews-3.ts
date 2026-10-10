import { LessonOverview } from './types'

export const overviews: Record<string, LessonOverview> = {
  'ultrasonic-sensor': {
    en: [
      'The HC-SR04 ultrasonic sensor measures distance without touching anything. It sends a short burst of high frequency sound from the Trig pin. The sound hits an object and bounces back to the Echo pin.',
      'Arduino measures the round trip time with pulseIn in microseconds. Sound travels at about 0.0343 centimeters per microsecond. The distance formula divides by two because the sound goes out and comes back.',
      'The output is a distance reading in centimeters, usually from 2 to 400 cm. A common project is a parking helper that lights an LED when something is closer than 10 cm. The same sensor is used in obstacle avoiding robots.',
    ],
    bn: [
      'HC-SR04 আল্ট্রাসনিক সেন্সর কোনো কিছু না ছুঁয়েই দূরত্ব মাপে। এটি Trig পিন দিয়ে উচ্চ কম্পাঙ্কের ছোট শব্দ তরঙ্গ পাঠায়। সেই শব্দ বস্তুতে লেগে ফিরে এসে Echo পিনে ধরা পড়ে।',
      'Arduino pulseIn দিয়ে যাওয়া-আসার মোট সময় মাইক্রোসেকেন্ডে মাপে। শব্দ প্রতি মাইক্রোসেকেন্ডে প্রায় ০.০৩৪৩ সেন্টিমিটার যায়। যাওয়া-আসা দুই দিক বলে দূরত্বের সূত্রে দুই দিয়ে ভাগ করা হয়।',
      'এর আউটপুট হলো সেন্টিমিটারে দূরত্ব, সাধারণত ২ থেকে ৪০০ সেমি। একটি জনপ্রিয় প্রজেক্ট হলো পার্কিং সহায়ক, যেখানে ১০ সেমির কাছে কিছু এলে LED জ্বলে। একই সেন্সর বাধা এড়ানো রোবটেও ব্যবহার হয়।',
    ],
  },
  'ldr-sensor': {
    en: [
      'An LDR is a small sensor whose resistance changes with light. Bright light makes its resistance low. Darkness makes its resistance high.',
      'With a 10k resistor it forms a voltage divider on analog pin A0. Arduino reads it with analogRead as a number from 0 to 1023. A low number means dark and a high number means bright.',
      'A classic project is an automatic night lamp. The LED turns on when the reading falls below a threshold like 500. The same idea is used in street lights and automatic brightness control.',
    ],
    bn: [
      'LDR একটি ছোট সেন্সর যার রেজিস্ট্যান্স আলোর সাথে বদলায়। উজ্জ্বল আলোতে এর রেজিস্ট্যান্স কমে যায়। অন্ধকারে এর রেজিস্ট্যান্স বেড়ে যায়।',
      '10k রেজিস্টরের সাথে এটি A0 অ্যানালগ পিনে ভোল্টেজ ডিভাইডার তৈরি করে। Arduino analogRead দিয়ে ০ থেকে ১০২৩ সংখ্যায় তা পড়ে। কম সংখ্যা মানে অন্ধকার আর বেশি সংখ্যা মানে উজ্জ্বল।',
      'একটি পরিচিত প্রজেক্ট হলো স্বয়ংক্রিয় রাতের বাতি। রিডিং ৫০০ এর নিচে নামলে LED জ্বলে ওঠে। একই ধারণা রাস্তার বাতি ও স্বয়ংক্রিয় ব্রাইটনেস নিয়ন্ত্রণে ব্যবহার হয়।',
    ],
  },
  'ir-sensor': {
    en: [
      'The IR obstacle sensor detects nearby objects using invisible infrared light. It shines IR light forward and watches for a reflection. A strong reflection means an object is close.',
      'The module gives a simple digital output of HIGH or LOW. Most cheap modules give LOW when an object is detected. Arduino reads it with digitalRead on pin 2.',
      'A common project is an obstacle detector that lights an LED when something is near. The same module is used in line follower robots and object counters. You can adjust its range with the small potentiometer on the board.',
    ],
    bn: [
      'IR অবস্টাকল সেন্সর অদৃশ্য ইনফ্রারেড আলো দিয়ে কাছের বস্তু শনাক্ত করে। এটি সামনে IR আলো ছড়ায় এবং প্রতিফলন দেখে। শক্ত প্রতিফলন মানে কাছে বস্তু আছে।',
      'মডিউলটি HIGH বা LOW ডিজিটাল আউটপুট দেয়। বেশিরভাগ সস্তা মডিউল বস্তু পেলে LOW দেয়। Arduino ২ নম্বর পিনে digitalRead দিয়ে তা পড়ে।',
      'একটি সাধারণ প্রজেক্ট হলো বাধা শনাক্তকারী, যেখানে কাছে কিছু এলে LED জ্বলে। একই মডিউল লাইন ফলোয়ার রোবট ও বস্তু গণনায় ব্যবহার হয়। বোর্ডের ছোট পটেনশিওমিটার ঘুরিয়ে এর রেঞ্জ ঠিক করা যায়।',
    ],
  },
  'pir-motion': {
    en: [
      'The HC-SR501 PIR sensor detects human and animal motion using body heat. Every warm body gives off invisible infrared energy. The sensor watches for sudden changes in that heat.',
      'It gives a simple digital output on its OUT pin. The output stays HIGH while motion is in its view. Arduino reads it with digitalRead, usually on pin 2.',
      'Wait about 30 seconds after power on so the sensor can warm up. A popular project is a motion activated light or alarm. It is also used in automatic doors and security systems.',
    ],
    bn: [
      'HC-SR501 PIR সেন্সর শরীরের তাপ দিয়ে মানুষ ও প্রাণীর নড়াচড়া শনাক্ত করে। প্রতিটি উষ্ণ শরীর থেকে অদৃশ্য ইনফ্রারেড শক্তি বের হয়। এই তাপের হঠাৎ পরিবর্তন সেন্সরটি লক্ষ করে।',
      'এটি OUT পিনে সহজ ডিজিটাল আউটপুট দেয়। সামনে নড়াচড়া থাকলে আউটপুট HIGH থাকে। Arduino সাধারণত ২ নম্বর পিনে digitalRead দিয়ে তা পড়ে।',
      'পাওয়ার দেওয়ার পর প্রায় ৩০ সেকেন্ড গরম হওয়ার জন্য অপেক্ষা করুন। একটি জনপ্রিয় প্রজেক্ট হলো নড়াচড়ায় জ্বলা বাতি বা অ্যালার্ম। এটি স্বয়ংক্রিয় দরজা ও নিরাপত্তা ব্যবস্থায়ও ব্যবহার হয়।',
    ],
  },
  'dht11-temp': {
    en: [
      'The DHT11 is a small digital sensor that measures air temperature and humidity. It has its own tiny chip that converts readings to digital numbers. You only need one data wire plus power.',
      'Arduino reads it with the DHT sensor library on a single data pin. The output is humidity in percent and temperature in Celsius. A failed reading returns an error you can check and skip.',
      'A common project is a mini weather station on the Serial Monitor. You can sound an alert when the room goes above 30 degrees. Wait at least two seconds between reads because the sensor is slow.',
    ],
    bn: [
      'DHT11 একটি ছোট ডিজিটাল সেন্সর যা বাতাসের তাপমাত্রা ও আর্দ্রতা মাপে। এর ভেতরে ছোট চিপ রিডিংকে ডিজিটাল সংখ্যায় বদলে দেয়। পাওয়ার ছাড়া মাত্র একটি ডেটা তার দরকার হয়।',
      'Arduino DHT সেন্সর লাইব্রেরি দিয়ে একটি ডেটা পিনে তা পড়ে। আউটপুট হলো শতাংশে আর্দ্রতা ও সেলসিয়াসে তাপমাত্রা। পড়া ব্যর্থ হলে ত্রুটি আসে, যা পরীক্ষা করে এড়িয়ে যাওয়া যায়।',
      'একটি সাধারণ প্রজেক্ট হলো Serial Monitor এ ছোট আবহাওয়া কেন্দ্র। ঘর ৩০ ডিগ্রির উপরে গেলে অ্যালার্ট বাজানো যায়। সেন্সরটি ধীর বলে দুই রিডিংয়ের মাঝে অন্তত দুই সেকেন্ড অপেক্ষা করুন।',
    ],
  },
  'ds18b20-temp': {
    en: [
      'The DS18B20 is an accurate digital temperature sensor in a waterproof metal probe. It can sit in water, soil, or outside air. The steel cover protects it from rust and splashes.',
      'It uses the OneWire system, so many sensors can share one data pin. Arduino reads it with the OneWire and DallasTemperature libraries. A 4.7k pull-up resistor on the data line keeps the signal stable.',
      'The output is temperature in Celsius with decimal precision. A popular project is a water tank or aquarium thermometer. Dip it in ice water to test, where it should read near 0 degrees.',
    ],
    bn: [
      'DS18B20 একটি নির্ভুল ডিজিটাল তাপমাত্রা সেন্সর, যা পানিরোধী ধাতব প্রোবে থাকে। এটি পানি, মাটি বা বাইরের বাতাসে রাখা যায়। ইস্পাতের আবরণ একে মরিচা ও পানির ছিটা থেকে রক্ষা করে।',
      'এটি OneWire পদ্ধতি ব্যবহার করে, তাই অনেক সেন্সর একটি ডেটা পিন ভাগ করতে পারে। Arduino OneWire ও DallasTemperature লাইব্রেরি দিয়ে তা পড়ে। ডেটা লাইনে 4.7k পুল-আপ রেজিস্টর সংকেত স্থির রাখে।',
      'এর আউটপুট দশমিকসহ সেলসিয়াসে তাপমাত্রা। একটি জনপ্রিয় প্রজেক্ট হলো পানির ট্যাংক বা অ্যাকুরিয়াম থার্মোমিটার। পরীক্ষার জন্য বরফ পানিতে ডুবান, যেখানে প্রায় ০ ডিগ্রি দেখানো উচিত।',
    ],
  },
}

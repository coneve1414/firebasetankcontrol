//adding ntp protocol below
#include <WiFiUdp.h>
#include <NTPClient.h>
//required below
#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include "FirebaseESP8266.h"
#include <WiFiUdp.h>
#include <ArduinoOTA.h>
#include <DallasTemperature.h>
#include <OneWire.h>
#define FIREBASE_HOST "tankstatuscontrol-ce.firebaseio.com" //Without http:// or https:// schemes
#define FIREBASE_AUTH "zTJKbI4Lo5SaivvnZx4DIDlw0kzXCjjea3dzE60W"
//#include <BlynkSimpleEsp8266.h>
#include <DHT.h>
#include <time.h>

/*
 * Created by K. Suwatchai (Mobizt)
 * 
 * Email: k_suwatchai@hotmail.com
 * 
 * Github: https://github.com/mobizt
 * 
 * Copyright (c) 2019 mobizt
 * 
 * This example is for the beginner
 *
*/

#define ONE_WIRE_BUS 4                          //D2 pin of nodemcu
#define LED_WIFI 15                             //D8 pin of nodemcu
#define LED_UPLOAD 13                             //D7 pin of nodemcu

OneWire oneWire(ONE_WIRE_BUS);
 
DallasTemperature sensors(&oneWire);   

//1. Change the following info
//#define FIREBASE_HOST "YOUR_FIREBASE_PROJECT.firebaseio.com"
//#define FIREBASE_AUTH "YOUR_FIREBASE_DATABASE_SECRET"
#define WIFI_SSID "FiOS-Y7BIW"
#define WIFI_PASSWORD "nanny794way4739ego"

WiFiUDP ntpUDP;

NTPClient timeClient(ntpUDP, "time.google.com", -18000, 60000);

//modifying for UTC Time
//const char* ntpServer = "time.google.com";
//const long  gmtOffset_sec = -18000;
//const int   daylightOffset_sec = 3600;


//2. Define FirebaseESP8266 data object for data sending and receiving
//Define FirebaseESP8266 data object
FirebaseData firebaseData;


unsigned long sendDataPrevMillis = 0;

String path = "/namf";
String tankId ="tank02";

uint16_t count = 0;

void printResult(FirebaseData &data);

void setup()
{
  pinMode(LED_WIFI, OUTPUT);
  pinMode(LED_UPLOAD, OUTPUT);
  digitalWrite(LED_WIFI, LOW);
  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    //digitalWrite(LED_WIFI, LOW);
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  digitalWrite(LED_WIFI, HIGH);
  Serial.println(WiFi.localIP());
  Serial.println();

  timeClient.begin();  //time client for NTP protocol

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Set the size of WiFi rx/tx buffers in the case where we want to work with large data.
  firebaseData.setBSSLBufferSize(1024, 1024);

  //Set the size of HTTP response buffers in the case where we want to work with large data.
  firebaseData.setResponseSize(1024);

  if (!Firebase.beginStream(firebaseData, path))
  {
    Serial.println("------------------------------------");
    Serial.println("Can't begin stream connection...");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }
  sensors.begin();

  // Port defaults to 8266
   ArduinoOTA.setPort(8266);

  // Hostname defaults to esp8266-[ChipID]
   ArduinoOTA.setHostname("Tank01");

  // No authentication by default
  // ArduinoOTA.setPassword((const char *)"123");

  ArduinoOTA.onStart([]() {
    Serial.println("Start");
  });
  ArduinoOTA.onEnd([]() {
    Serial.println("\nEnd");
  });
  ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
    Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
  });
  ArduinoOTA.onError([](ota_error_t error) {
    Serial.printf("Error[%u]: ", error);
    if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");
    else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");
    else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");
    else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");
    else if (error == OTA_END_ERROR) Serial.println("End Failed");
  });
  ArduinoOTA.begin();
}

void loop()
{
  delay(200);
  ArduinoOTA.handle();
  timeClient.update();
  sensors.requestTemperatures();   
  firebaseSendData();
}

void printResult(FirebaseData &data)
{

  if (data.dataType() == "int")
    Serial.println(data.intData());
  else if (data.dataType() == "float")
    Serial.println(data.floatData(), 5);
  else if (data.dataType() == "double")
    printf("%.9lf\n", data.doubleData());
  else if (data.dataType() == "boolean")
    Serial.println(data.boolData() == 1 ? "true" : "false");
  else if (data.dataType() == "string")
    Serial.println(data.stringData());
  else if (data.dataType() == "json")
  {
    Serial.println();
    FirebaseJson &json = data.jsonObject();
    //Print all object data
    Serial.println("Pretty printed JSON data:");
    String jsonStr;
    json.toString(jsonStr, true);
    Serial.println(jsonStr);
    Serial.println();
    Serial.println("Iterate JSON data:");
    Serial.println();
    size_t len = json.iteratorBegin();
    String key, value = "";
    int type = 0;
    for (size_t i = 0; i < len; i++)
    {
      json.iteratorGet(i, type, key, value);
      Serial.print(i);
      Serial.print(", ");
      Serial.print("Type: ");
      Serial.print(type == FirebaseJson::JSON_OBJECT ? "object" : "array");
      if (type == FirebaseJson::JSON_OBJECT)
      {
        Serial.print(", Key: ");
        Serial.print(key);
      }
      Serial.print(", Value: ");
      Serial.println(value);
    }
    json.iteratorEnd();
  }
  else if (data.dataType() == "array")
  {
    Serial.println();
    //get array data from FirebaseData using FirebaseJsonArray object
    FirebaseJsonArray &arr = data.jsonArray();
    //Print all array values
    Serial.println("Pretty printed Array:");
    String arrStr;
    arr.toString(arrStr, true);
    Serial.println(arrStr);
    Serial.println();
    Serial.println("Iterate array values:");
    Serial.println();
    for (size_t i = 0; i < arr.size(); i++)
    {
      Serial.print(i);
      Serial.print(", Value: ");

      FirebaseJsonData &jsonData = data.jsonData();
      //Get the result data from FirebaseJsonArray object
      arr.get(jsonData, i);
      if (jsonData.typeNum == FirebaseJson::JSON_BOOL)
        Serial.println(jsonData.boolValue ? "true" : "false");
      else if (jsonData.typeNum == FirebaseJson::JSON_INT)
        Serial.println(jsonData.intValue);
      else if (jsonData.typeNum == FirebaseJson::JSON_DOUBLE)
        printf("%.9lf\n", jsonData.doubleValue);
      else if (jsonData.typeNum == FirebaseJson::JSON_STRING ||
               jsonData.typeNum == FirebaseJson::JSON_NULL ||
               jsonData.typeNum == FirebaseJson::JSON_OBJECT ||
               jsonData.typeNum == FirebaseJson::JSON_ARRAY)
        Serial.println(jsonData.stringValue);
    }
  }
}

void firebaseSendData() {
   if (millis() - sendDataPrevMillis > 15000)
  {
    sendDataPrevMillis = millis();
    digitalWrite(LED_UPLOAD, HIGH);
    count++;

    Serial.println("------------------------------------");
    Serial.println("Set string...");

    int x = round(sensors.getTempFByIndex(0));
    //String temp = (sensors.getTempFByIndex(0) + " "),

    String y = timeClient.getFormattedTime();
    if (Firebase.setInt(firebaseData, path + "/tanks/" + tankId + "/temp", x))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
      digitalWrite(LED_UPLOAD, LOW);
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
      digitalWrite(LED_UPLOAD, LOW);
    }
    if (Firebase.set(firebaseData, path + "/tanks/" + tankId + "/time", y))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
      digitalWrite(LED_UPLOAD, LOW);
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
      digitalWrite(LED_UPLOAD, LOW);
    }
//    if (Firebase.set(firebaseData, path + "/history/" + tankId + "/" + y, x))
//    {
//      digitalWrite(LED_UPLOAD, HIGH);
//      Serial.println("PASSED");
//      //Serial.println("PATH: " + firebaseData.dataPath());
//      //Serial.println("TYPE: " + firebaseData.dataType());
//      //Serial.print("VALUE: ");
//      //printResult(firebaseData);
//      Serial.println("------------------------------------");
//      Serial.println();
//      digitalWrite(LED_UPLOAD, LOW);
//    }
//    else
//    {
//      Serial.println("FAILED");
//      Serial.println("REASON: " + firebaseData.errorReason());
//      Serial.println("------------------------------------");
//      Serial.println();
//      digitalWrite(LED_UPLOAD, LOW);
//    }

  }

//  if (!Firebase.readStream(firebaseData))
//  {
//    Serial.println("------------------------------------");
//    Serial.println("Can't read stream data...");
//    Serial.println("REASON: " + firebaseData.errorReason());
//    Serial.println("------------------------------------");
//    Serial.println();
//    digitalWrite(LED_UPLOAD, LOW);
//  }
//
//  if (firebaseData.streamTimeout())
//  {
//    Serial.println("Stream timeout, resume streaming...");
//    Serial.println();
//    digitalWrite(LED_UPLOAD, LOW);
//  }
//
//  if (firebaseData.streamAvailable())
//  {
//    Serial.println("------------------------------------");
//    Serial.println("Stream Data available...");
//    Serial.println("STREAM PATH: " + firebaseData.streamPath());
//    Serial.println("EVENT PATH: " + firebaseData.dataPath());
//    Serial.println("DATA TYPE: " + firebaseData.dataType());
//    Serial.println("EVENT TYPE: " + firebaseData.eventType());
//    Serial.print("VALUE: ");
//    printResult(firebaseData);
//    Serial.println("------------------------------------");
//    Serial.println();
//    digitalWrite(LED_UPLOAD, LOW);
//  }

}

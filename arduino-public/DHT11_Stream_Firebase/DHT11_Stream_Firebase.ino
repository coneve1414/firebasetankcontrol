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
String monitorType = "temp";

#define ONE_WIRE_BUS 4                          //D2 pin of nodemcu
#define DHT_BUS 4
#define DHT_TYPE DHT11 //DHT Sensor Version
int epoch;
int year; 
int month;
int day;
int hour;
String historyPath;
String historyPathNoMonitor;
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "time.google.com", -18000, 60000);

DHT dht(DHT_BUS, DHT_TYPE);

//OneWire oneWire(ONE_WIRE_BUS);
 //***MODIFIED CODE TO WORK WITH HUMINIDY***
//DallasTemperature sensors(&oneWire);

//1. Change the following info
//#define FIREBASE_HOST "YOUR_FIREBASE_PROJECT.firebaseio.com"
//#define FIREBASE_AUTH "YOUR_FIREBASE_DATABASE_SECRET"
#define WIFI_SSID "FiOS-Y7BIW"
#define WIFI_PASSWORD "nanny794way4739ego"


//2. Define FirebaseESP8266 data object for data sending and receiving
//Define FirebaseESP8266 data object
FirebaseData firebaseData;

unsigned long sendDataPrevMillis = 0;

String path = "/namf";
String tankId = "tank03";
String idPath = "/tanks/"+tankId+"/temp";
String idPath2 = "/tanks/"+tankId+"/humidity";
uint16_t count = 0;

void printResult(FirebaseData &data);

void setup()
{

  Serial.begin(115200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  timeClient.begin();
  
  dht.begin();
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
  //sensors.begin(); //MODIFIED CODE

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

void getHour() {
  double secsSince1970 = timeClient.getEpochTime();
  unsigned long epoch = (secsSince1970-14400);
  hour = ((epoch  % 86400L) / 3600);
}
void getYear() {
  double secsSince1970 = timeClient.getEpochTime();
  unsigned long epoch = (secsSince1970-14400);
  year = ((epoch / 31556926)+1970);
}

void getFormattedDate2() {
  double secsSince1970 = timeClient.getEpochTime();
  unsigned long epoch = (secsSince1970-14400);
  int s = epoch;
    int z = s / 86400 + 719468;
    int era = (z >= 0 ? z : z - 146096) / 146097;
    unsigned doe = static_cast<unsigned>(z - era * 146097);
    unsigned yoe = (doe - doe/1460 + doe/36524 - doe/146096) / 365;
    int y = static_cast<int>(yoe) + era * 400;
    int doy = static_cast<int>(doe - (365*yoe + yoe/4 - yoe/100));
    int mp = (5*doy + 2)/153;
    int d = doy - (153*mp+2)/5 + 1;
    int m = mp + (mp < 10 ? 3 : -9);
    int h = ((epoch  % 86400L) / 3600);
    y += (m <= 2);
    Serial.println(m);
    Serial.println(d);
    Serial.println(y);
    String y2 = String(y);
    String m2 = String(m);
    String d2 = String(d);
    String h2 = String(h);
    historyPath = y2+"/"+m2+"/"+d2+"/"+h2+"/"+tankId+"/"+monitorType;
    historyPathNoMonitor = y2+"/"+m2+"/"+d2+"/"+h2+"/"+tankId;
    Serial.println(historyPath);
}

void getMonth() {
  double secsSince1970 = timeClient.getEpochTime();
  unsigned long epoch = (secsSince1970-14400);
  month = (epoch  % 86400L) / 3600;
}

void loop()
{
  timeClient.update();
  delay(200);
  
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);
  ArduinoOTA.handle();
  //sensors.requestTemperatures();   //MODIFIED CODE
  
  if (millis() - sendDataPrevMillis > 15000)
  {
    sendDataPrevMillis = millis();
    count++;
   // getYear();
    getFormattedDate2();
    //Serial.println(year);

    Serial.println("------------------------------------");
    Serial.println("Set string...");

    int x = round(dht.readHumidity());
    int y = round(f);
    //String temp = (sensors.getTempFByIndex(0) + " "),
    
    if (Firebase.setInt(firebaseData, path + idPath, y))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }
    if (Firebase.setInt(firebaseData, path + idPath2, x))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }
    if (Firebase.setInt(firebaseData, path + "/history/"+historyPath, y))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }
    if (Firebase.setInt(firebaseData, path + "/history/"+historyPathNoMonitor+"/humidity", x))
    {
      Serial.println("PASSED");
      //Serial.println("PATH: " + firebaseData.dataPath());
      //Serial.println("TYPE: " + firebaseData.dataType());
      //Serial.print("VALUE: ");
      //printResult(firebaseData);
      Serial.println("------------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("FAILED");
      Serial.println("REASON: " + firebaseData.errorReason());
      Serial.println("------------------------------------");
      Serial.println();
    }

  }

  if (!Firebase.readStream(firebaseData))
  {
    Serial.println("------------------------------------");
    Serial.println("Can't read stream data...");
    Serial.println("REASON: " + firebaseData.errorReason());
    Serial.println("------------------------------------");
    Serial.println();
  }

  if (firebaseData.streamTimeout())
  {
    Serial.println("Stream timeout, resume streaming...");
    Serial.println();
  }

  if (firebaseData.streamAvailable())
  {
    Serial.println("------------------------------------");
    Serial.println("Stream Data available...");
    Serial.println("STREAM PATH: " + firebaseData.streamPath());
    Serial.println("EVENT PATH: " + firebaseData.dataPath());
    Serial.println("DATA TYPE: " + firebaseData.dataType());
    Serial.println("EVENT TYPE: " + firebaseData.eventType());
    Serial.print("VALUE: ");
    printResult(firebaseData);
    Serial.println("------------------------------------");
    Serial.println();
  }
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

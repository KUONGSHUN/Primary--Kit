#ifndef _KS_H_
#define _KS_H_

//#define GYRO_PORT_M0

#define USER	0x80
#define C0	USER+1
#define C1	USER+2

#define C	USER+11
#define D	USER+12
#define E	USER+13
#define F	USER+14



#define C_PIN	3
#define D_PIN	8
#define E_PIN	10
#define F_PIN	2

//pin define
#define C0_PIN_0	0
#define C0_PIN_1	1

// 位置后面需要改回来
#define C1_PIN_0	A5	//SCL
#define C1_PIN_1	A4	//SDA



#define C0_D   C0_PIN_1
#define C0_E   C0_PIN_0

// 位置后面需要改回来
#define C1_D   C1_PIN_0
#define C1_E   C1_PIN_1


#include <utility/Servo.h>
#include <utility/Wire.h>
#include <utility/EEPROM.h>
#include <utility/SoftwareSerial.h>
#include <utility/SPI.h>

#include "Arduino.h"
#include "Ks_LED.h"
#include "Ks_Button.h"
#include "Ks_Buzzer.h"
#include "Ks_Potentiometer.h"
#include "Ks_Light.h"
#include "Ks_DHTxx.h"
#include "Ks_Touch.h"
#include "Ks_Sound.h"
#include "Ks_Joystick.h"


//#include "Ks_DCMotor.h"
/* #include "Ks_Relay.h"
#include "Ks_Button.h"
#include "Ks_RGB.h"
#include "Ks_TiltSwitch.h"
#include "Ks_Vibration.h"
#include "Ks_ITR.h"
#include "Ks_Hall.h"
#include "Ks_LimitSwitch.h"



#include "Ks_MQ.h"
#include "Ks_Flame.h"
#include "Ks_4ADButton.h"



#include "Ks_LineFinder.h"
#include "Ks_4DigitDisplay.h"
#include "Ks_Motor.h"
#include "Ks_Dual_Motor.h"
#include "Ks_IRSendRev.h"
#include "Ks_RTC.h"
#include "Ks_BlueTooth.h"
#include "Ks_Joystick.h"
#include "Ks_Gyro.h "*/
#include "Ks_Port.h"

/* #include "Ks_Touch.h"

#include "Ks_ir.h"

#include "Ks_Stepper.h"
#include "Ks_Matrix.h"
#include "Ks_GLLED.h"
#include "KS_DS18B20.h" */

#define STRING_VERSION_CONFIG_H __DATE__ " " __TIME__ //Get system time
//


#endif
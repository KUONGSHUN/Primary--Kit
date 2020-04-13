'use strict';

goog.provide('Blockly.Arduino.ks');

goog.require('Blockly.Arduino');

// 设置数字量
Blockly.Arduino.Baron_digital_write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  // var dropdown_pin = this.getFieldValue('PIN');
  // var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

// 读数字量
Blockly.Arduino.Baron_digital_read = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = +dropdown_stat+'==digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// 设置PWM
Blockly.Arduino.Baron_analog_write = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite('+dropdown_pin+','+value_num+');\n'
    return code;
};



// 读模拟口
Blockly.Arduino.Baron_analog_read = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// LED
Blockly.Arduino.Baron_Led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_stat = this.getFieldValue('STAT');
  /*Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  //Blockly.Arduino.definitions_['var_nova_led'+dropdown_pin] = 'LED  led_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'led_'+dropdown_pin+'.'+dropdown_stat+';\n'*******************************调用函数   但这样LED不能实现PWM,所以还是不调用了      */
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;

  
};

// Led_PWM
Blockly.Arduino.Baron_Led_PWM = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  // Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
   // Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    //var code = 'analogWrite('+dropdown_pin+','+value_num+');\n'
 //  Blockly.Arduino.definitions_['var_nova_led'+dropdown_pin] = 'LED  led_'+dropdown_pin+''+'('+dropdown_pin+');';
  //var code = 'led_'+dropdown_pin+'.brightness(100-'+value_num+');\n'
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite('+dropdown_pin+','+value_num+');\n'
    return code;
 
};

Blockly.Arduino.Baron_Laser = Blockly.Arduino.Baron_Led;

// Active_Buzzer
 Blockly.Arduino.Baron_Active_Buzzer = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_stat = this.getFieldValue('STAT');
  /*Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  //Blockly.Arduino.definitions_['var_nova_led'+dropdown_pin] = 'LED  led_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'led_'+dropdown_pin+'.'+dropdown_stat+';\n'*******************************调用函数   但这样LED不能实现PWM,所以还是不调用了      */
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

// Buzzer Passive
  Blockly.Arduino.Baron_Passive_Buzzer1=function(){
     var dropdown_pin = this.getFieldValue('PIN');
     var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
     var code="tone("+dropdown_pin+","+fre+");\n";
   //  Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
     Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
     // Blockly.Arduino.definitions_['var_nova_buzzer'+dropdown_pin] = 'Buzzer  Buzzer_'+dropdown_pin+''+'('+dropdown_pin+');';
     return code;

   /*  */
  };
  // Buzzer Passive
  
// Buzzer Passive
  /*Blockly.Arduino.yf_buzzer2=function(){
     var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
     var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
     var code="tone("+dropdown_pin+","+fre+");\n";
     Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
     return code;
  };

*/
  Blockly.Arduino.Baron_Passive_Buzzer2=function(){
    /* var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
     var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
     var dur = Blockly.Arduino.valueToCode(this, 'DURATION',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
     var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
     Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
     return code;*/

     var dropdown_pin = this.getFieldValue('PIN');
     var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
     var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
      Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
      Blockly.Arduino.definitions_['var_nova_buzzer'+dropdown_pin] = 'Buzzer  Buzzer_'+dropdown_pin+''+'('+dropdown_pin+');';
      var code = 'Buzzer_'+dropdown_pin+'.tone('+fre+','+dur+');\n'
      return code;
  };


// Button
Blockly.Arduino.Baron_Button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  Blockly.Arduino.definitions_['var_nova_button'+dropdown_pin] = 'Button  Button_'+dropdown_pin+''+'('+dropdown_pin+');';
  var STAT = this.getFieldValue('STAT');
  var code = +STAT+'== Button_'+dropdown_pin+'.state()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//电位计
  Blockly.Arduino.Baron_Potentiometer = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
    Blockly.Arduino.definitions_['var_Potentiometer'+dropdown_pin] = 'Potentiometer Potentiometer_'+dropdown_pin+''+'('+dropdown_pin+');';
    var code = 'map(Potentiometer_'+dropdown_pin+'.read(), 0, 1023, 0, 100)';
     
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };



// 光敏
Blockly.Arduino.Baron_Light = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  Blockly.Arduino.definitions_['var_Light'+dropdown_pin] = 'Light Light_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Light_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 温湿度
Blockly.Arduino.Baron_DHTxx = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('dht');
  Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  Blockly.Arduino.definitions_['var_nova_dht'+dropdown_pin] = 'DHT DHT_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'DHT_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  
 Blockly.Arduino.Baron_Motor = Blockly.Arduino.Baron_Led_PWM;
 Blockly.Arduino.Baron_Touch  = Blockly.Arduino.Baron_Button;

// 交通灯
Blockly.Arduino.Baron_Traffic_lights = function() {
    var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var Y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
    var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);
   
     Blockly.Arduino.setups_['setup_output_'+11] = 'pinMode('+11+', OUTPUT);';
     Blockly.Arduino.setups_['setup_output_'+10] = 'pinMode('+10+', OUTPUT);';
     Blockly.Arduino.setups_['setup_output_'+9] = 'pinMode('+9+', OUTPUT);';
    var code = 'analogWrite('+11+','+R+');analogWrite('+10+','+Y+');analogWrite('+9+','+G+');\n';
    return code;

  };
 

 // Ultrasonic 超声波 SR04
  Blockly.Arduino.Baron_Ultrasonic = function () {
      var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PINT', Blockly.Arduino.ORDER_ATOMIC);
      var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PINE', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
      Blockly.Arduino.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', INPUT);';
      var funcName = 'checkdistance_' + dropdown_pin1 + '_' + dropdown_pin2;
      var code = 'float' + ' ' + funcName + '() {\n'
    + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n' 
    + '  delayMicroseconds(2);\n'
    + '  digitalWrite(' + dropdown_pin1 + ', HIGH);\n' 
    + '  delayMicroseconds(10);\n'
    + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n'
    + '  float distance = pulseIn(' + dropdown_pin2 + ', HIGH) / 58.00;\n'
    + '  delay(10);\n' 
    + '  return distance;\n'
    + '}\n';
      Blockly.Arduino.definitions_[funcName] = code;
      return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino.Baron_RGB=function(){
   
    var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);
   
     Blockly.Arduino.setups_['setup_output_'+9] = 'pinMode('+9+', OUTPUT);';
     Blockly.Arduino.setups_['setup_output_'+10] = 'pinMode('+10+', OUTPUT);';
     Blockly.Arduino.setups_['setup_output_'+11] = 'pinMode('+11+', OUTPUT);';
    var code = 'analogWrite('+10+','+R+');analogWrite('+9+','+G+');analogWrite('+11+','+B+');\n';
    return code;

  };

 // 声音
Blockly.Arduino.Baron_Sound = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  Blockly.Arduino.definitions_['var_nova_Sound'+dropdown_pin] = 'Sound  Sound_'+dropdown_pin+''+'('+dropdown_pin+');';
  var code = 'Sound_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



// 摇杆
//Blockly.Arduino.Baron_joystick_d = Blockly.Arduino.Baron_Button ;


// 摇杆
Blockly.Arduino.Baron_joystick_a = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('Joystick');
 Blockly.Arduino.definitions_['include_ks'] = '#include "Ks.h"';
  Blockly.Arduino.definitions_['var_nova_joystick'+dropdown_pin] = 'Joystick joystick_'+dropdown_pin+''+'('+dropdown_pin+');';
  Blockly.Arduino.setups_['setup_nova_joystick'+dropdown_pin] = 'joystick_'+dropdown_pin+'.init();\n';
  var code = 'joystick_'+dropdown_pin+'.'+dropdown_stat+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};






 Blockly.Arduino.Baron_SR501 = Blockly.Arduino.Baron_Light;

 //红外接收模块
  Blockly.Arduino.Baron_ir_recv = function() {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare'+variable] = 'long '+variable+';';
     var dropdown_pin = this.getFieldValue('PIN');
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['define_ir_recv'] = '#include <IRremote.h>';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['var_ir_recv'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\ndecode_results results_'+dropdown_pin+';\n';
    Blockly.Arduino.setups_['setup_ir_recv_'+dropdown_pin] = 'irrecv_'+dropdown_pin+'.enableIRIn();';
    var code="if (irrecv_"+dropdown_pin+".decode(&results_"+dropdown_pin+")) {\n"
    code += '  '+variable+'=results_'+dropdown_pin+'.value;\n';
    code += branch;
    code +='  irrecv_'+dropdown_pin+'.resume();\n'
    code +='} else {\n';
    code +=branch2;
    code +='}\n';
    return code;
  };

 

//红外mini遥控器键值
  Blockly.Arduino.Baron_ir_val = function() {
    // Numeric value.
    var code = (this.getFieldValue('VAL'));
    // -4.abs() returns -4 in Dart due to strange order of operation choices.
    // -4 is actually an operator and a number.  Reflect this in the order.
    var order = code < 0 ?
        Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, order];
  };

  // Blockly.rgb_display_ledcount = 'rgb_display';
  //RGB
  Blockly.Arduino.Baron_display_rgb_init=function(){
      var dropdown_rgbpin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
      var value_ledcount = Blockly.Arduino.valueToCode(this, 'LEDCOUNT', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
      Blockly.Arduino.definitions_['include_display'] = '#include "Adafruit_NeoPixel.h"';
      Blockly.Arduino.definitions_['var_rgb_display'] = 'Adafruit_NeoPixel  rgb_display' + '(' + value_ledcount + ',' + dropdown_rgbpin + ');';
      Blockly.Arduino.setups_['setup_rgb_displaybegin_'] = 'rgb_display.begin();';
      Blockly.Arduino.setups_['setup_rgb_display_initshow'] = 'rgb_display.show();  // Initialize all pixels to off';
      return '';
  };

  Blockly.Arduino.Baron_display_rgb=function(){
    // var dropdown_rgbpin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var value_led = Blockly.Arduino.valueToCode(this, '_LED_', Blockly.Arduino.ORDER_ATOMIC);
    var value_rvalue = Blockly.Arduino.valueToCode(this, 'RVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var value_gvalue = Blockly.Arduino.valueToCode(this, 'GVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var value_bvalue = Blockly.Arduino.valueToCode(this, 'BVALUE', Blockly.Arduino.ORDER_ATOMIC);
    // Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    // Blockly.Arduino.definitions_['include_display'] = '#include "Mixly.h"';
    // if (!Blockly.Arduino.definitions_['var_rgb_display']) {
    //     Blockly.Arduino.definitions_['var_rgb_display'] = 'Adafruit_NeoPixel  rgb_display' + '(' + value_led + ');';
    //     Blockly.Arduino.setups_['setup_rgb_displaybegin_'] = 'rgb_display' + '.begin();';
    //     Blockly.Arduino.setups_['setup_rgb_displaysetpin'] = 'rgb_display' + '.setPin(' + dropdown_rgbpin + ');';
    // }
    var code = 'rgb_display'+'.setPixelColor('+value_led+'-1, '+value_rvalue+','+value_gvalue+','+value_bvalue+');\n';
    code+='rgb_display'+'.show();\n';
    return code;
  };

  Blockly.Arduino.Baron_display_rgb2=function(){
    var value_led = Blockly.Arduino.valueToCode(this, '_LED_', Blockly.Arduino.ORDER_ATOMIC);
    var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
    var color = goog.color.hexToRgb(colour_rgb_led_color);
    var code = 'rgb_display'+'.setPixelColor('+value_led+'-1, '+color+');\n';
    code+='rgb_display'+'.show();\n';
    return code;
  };

  Blockly.Arduino.Baron_display_rgb_rgbtoc=function(){
    var value_rvalue = Blockly.Arduino.valueToCode(this, 'RVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var value_gvalue = Blockly.Arduino.valueToCode(this, 'GVALUE', Blockly.Arduino.ORDER_ATOMIC);
    var value_bvalue = Blockly.Arduino.valueToCode(this, 'BVALUE', Blockly.Arduino.ORDER_ATOMIC);
    // var code = value_rvalue<<16 + value_gvalue<<8 + value_bvalue;
    var code = 'rgb_display.Color('+ value_rvalue + ',' + value_gvalue + ',' + value_bvalue +')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];

  };

  Blockly.Arduino.Baron_display_rgb3=function(){
    var value_led = Blockly.Arduino.valueToCode(this, '_LED_', Blockly.Arduino.ORDER_ATOMIC);
    var value_rgb = Blockly.Arduino.valueToCode(this, 'RGBVAL', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'rgb_display'+'.setPixelColor('+value_led+'-1, '+value_rgb+');\n';
    code+='rgb_display'+'.show();\n';
    return code;
  };

  Blockly.Arduino.Baron_display_rgb_setbrightness=function(){
    var rgb_brightness = Blockly.Arduino.valueToCode(this, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'rgb_display.setBrightness('+ rgb_brightness +');\n';
    return code;
  };


 // PM-R3多功能扩展板 TB6612
  Blockly.Arduino.Baron_pmr3_tb6612_motor=function(){
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_dir = this.getFieldValue('DIR');
    var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_4'] = 'pinMode(4, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_5'] = 'pinMode(5, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_6'] = 'pinMode(6, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_7'] = 'pinMode(7, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_w4'] = 'digitalWrite(4, LOW);';
    Blockly.Arduino.setups_['setup_output_w5'] = 'digitalWrite(5, LOW);';
    Blockly.Arduino.setups_['setup_output_w6'] = 'digitalWrite(6, LOW);';
    Blockly.Arduino.setups_['setup_output_w7'] = 'digitalWrite(7, LOW);';
    var funcName='yf_setMotor';
    var funcCode='void '+funcName+'(int motorId, int motorDir, int speed) {\n' 
      + '  int speedPin, directionPin;\n'
      + '  if (motorId == 1) {         // motor 1\n'
      + '    speedPin = 5;\n'
      + '    directionPin = 4;\n'
      + '  } else if (motorId == 2) {  // motor 2\n'
      + '    speedPin = 6;\n'
      + '    directionPin = 7;\n'
      + '  } else {\n'
      + '    return;\n'
      + '  }\n'
      + '  if (speed == 0) {\n'                 // 停止
      + '    digitalWrite(speedPin, 0);\n'
      + '  } else {\n'
      + '    if(motorDir == 0) {\n'             // 反向
      + '      digitalWrite(directionPin, LOW);\n'
      + '      analogWrite(speedPin, speed);\n'
      + '    } else if(motorDir == 1) {\n'      // 正向
      + '      digitalWrite(directionPin, HIGH);\n'
      + '      analogWrite(speedPin, speed);\n'
      + '    }\n'
      + '  }\n'
      + '}\n';
    Blockly.Arduino.definitions_[funcName] = funcCode;
    var code = funcName +'('+ dropdown_pin +','+ dropdown_dir +','+ speed +');\n';
    return code;
  };

  Blockly.Arduino.Baron_pmr3_tb6612_motor_stop=function(){
    var dropdown_pin = this.getFieldValue('PIN');
    Blockly.Arduino.setups_['setup_output_4'] = 'pinMode(4, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_5'] = 'pinMode(5, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_6'] = 'pinMode(6, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_7'] = 'pinMode(7, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_w4'] = 'digitalWrite(4, LOW);';
    Blockly.Arduino.setups_['setup_output_w5'] = 'digitalWrite(5, LOW);';
    Blockly.Arduino.setups_['setup_output_w6'] = 'digitalWrite(6, LOW);';
    Blockly.Arduino.setups_['setup_output_w7'] = 'digitalWrite(7, LOW);';
    var funcName='yf_setMotor';
    var funcCode='void '+funcName+'(int motorId, int motorDir, int speed) {\n' 
      + '  int speedPin, directionPin;\n'
      + '  if (motorId == 1) {         // motor 1\n'
      + '    speedPin = 5;\n'
      + '    directionPin = 4;\n'
      + '  } else if (motorId == 2) {  // motor 2\n'
      + '    speedPin = 6;\n'
      + '    directionPin = 7;\n'
      + '  } else {\n'
      + '    return;\n'
      + '  }\n'
      + '  if (speed == 0) {\n'                 // 停止
      + '    digitalWrite(speedPin, 0);\n'
      + '  } else {\n'
      + '    if(motorDir == 0) {\n'             // 反向
      + '      digitalWrite(directionPin, LOW);\n'
      + '      analogWrite(speedPin, speed);\n'
      + '    } else if(motorDir == 1) {\n'      // 正向
      + '      digitalWrite(directionPin, HIGH);\n'
      + '      analogWrite(speedPin, speed);\n'
      + '    }\n'
      + '  }\n'
      + '}\n';
    Blockly.Arduino.definitions_[funcName] = funcCode;
    var code = funcName +'(' + dropdown_pin +',0,0); \n';
    return code;
  };
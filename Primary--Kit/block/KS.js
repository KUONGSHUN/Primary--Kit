'use strict';

goog.provide('Blockly.Blocks.ks');

goog.require('Blockly.Blocks');

var NOVA_PORTS =[["C0", "C0"],["C1", "C1"],["C", "C"],["D", "D"],["E", "E"],["F", "F"],
["M2", "M2"],["M3", "M3"],["M0", "M0"],["M1", "M1"],["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"]];

var THREE_PORTS =[["S0", "S0"],["S1", "S1"],["S2", "S2"],["S3", "S3"],
["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"]];

var Baron_PORTS =[["A", "A0"],["B", "A1"],["C", "C"],["D", "D"],["E", "E"],["F", "F"]];
var LED_PORTS =[["C", "C"],["D", "D"],["E", "E"],["F", "F"]];
var Buzzer_PORTS =[["C", "3"],["D", "8"],["E", "10"],["F", "2"]];

var PWM_PORTS =[["C", "C"],["E", "E"]];
var ANALOG_PORTS =[["A", "A0"],["B", "A1"]];
var DCMOTOR_PORTS =[["C", "C"],["E", "E"]];

var UL_PORTS =[["E", "E"]];

var JD_PORTS =[["D", "D"],["F", "F"]];
var JA_PORTS =[["X", "A2"],["Y", "A3"]];



var SERVO_PORTS =[["S0", "2"],["S1", "9"],["S2", "10"],["S3", "13"],
["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"]];

var DITIGAL_PORTS =[["S0", "S0"],["S1", "S1"],["S2", "S2"],["S3", "S3"]];



var FOUR_PORTS =[["C1", "C1"],["M0", "M0"],["M1", "M1"],["M2", "M2"],["M3", "M3"],["C0", "C0"]];

var MOTOR_PORTS =[["M0", "M0"],["M1", "M1"],["M2", "M2"],["M3", "M3"]];

var MOTOR_PORTS_2 =[["M1", "M1"],["M0", "M0"],["M2", "M2"],["M3", "M3"]];

var BLUETOOTH_PORTS =[["M2", "M2"],["C0", "C0"]];  

var Joystick_PORT =[["C1", "C1"],["F", "F"]];

var RTC_TIME = [[Blockly.LKL_NOVA_RTC_SEC, "getSecond()"],[Blockly.LKL_NOVA_RTC_MIN, "getMinute()"],
                [Blockly.LKL_NOVA_RTC_HOUR, "getHour()"],[Blockly.LKL_NOVA_RTC_WEEK, "getWeek()"],
                [Blockly.LKL_NOVA_RTC_DAY, "getDay()"],[Blockly.LKL_NOVA_RTC_MON, "getMonth()"],
                [Blockly.LKL_NOVA_RTC_YEAR, "getYear()"]];


// 颜色

var ksColor_base = '#00ABCD';  //基础
// 设置数字量
Blockly.Blocks.Baron_digital_write = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
     .appendField(new Blockly.FieldImage("../../media/KS/Arduino.png", 70, 50))
         .appendField(Blockly.LKL_DIGITAL_OUT)
           this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
      this.appendValueInput("STAT")
          .appendField(Blockly.MIXLY_STAT)
          .setCheck([Number,Boolean]);
      // this.appendDummyInput("")
      //     .appendField(Blockly.MIXLY_STAT)
      //     .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], 
      //[Blockly.MIXLY_LOW, "LOW"]]), "STAT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
    }
  };



// 读数字量
Blockly.Blocks.Baron_digital_read = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/KS/Arduino.png", 70, 50))
        .appendField(Blockly.LKL_DIGITAL_IN)
      this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
          this.appendDummyInput("")
          .appendField(Blockly.MIXLY_STAT)
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "1"], [Blockly.MIXLY_LOW, "0"]]), "STAT");
      this.setOutput(true, Boolean);
      this.setInputsInline(true);
      this.setTooltip('');
      this.setTooltip(Blockly.LANG_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

// 设置PWM
Blockly.Blocks.Baron_analog_write = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/KS/Arduino.png", 70, 50))
          .appendField(Blockly.MIXLY_ANALOGWRITE)
      .appendField(new Blockly.FieldImage("../../media/KS/KS_pwm.png", 100, 60))
this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
      this.appendValueInput("NUM", Number)
          .appendField(Blockly.MIXLY_VALUE2)
          .setCheck(Number);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
  }
};

// 读模拟口
Blockly.Blocks.Baron_analog_read={
init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
     .appendField(new Blockly.FieldImage("../../media/KS/Arduino.png", 70, 50))
        .appendField(Blockly.LKL_NOVA_ANALOG_READ)
          this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
      this.setInputsInline(true);
      this.setOutput(true, Number);
      this.setTooltip('');
/*      
        .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(ANALOG_PORTS), "PIN");
  this.setOutput(true, Number);
  this.setInputsInline(true);*/
  }
};



// LED
Blockly.Blocks.Baron_Led = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_NOVA_LED)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_led.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
        .appendField(Blockly.LKL_NOVA_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_LED_ON, "on()"], [Blockly.LKL_NOVA_LED_OFF, "off()"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// Led_PWM
Blockly.Blocks.Baron_Led_PWM = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_NOVA_LED)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_led.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(PWM_PORTS), "PIN")
   this.appendValueInput("NUM", Number)
        .setCheck(Number)
        .appendField(Blockly.LKL_NOVA_LED_PWM);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

// Laser
Blockly.Blocks.Baron_Laser = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_Baron_LED)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_Laser.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
        .appendField(Blockly.LKL_NOVA_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_LED_ON, "on()"], [Blockly.LKL_NOVA_LED_OFF, "off()"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


// 有源蜂鸣器
Blockly.Blocks.Baron_Active_Buzzer = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_Baron_BUZZER)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_Buzzer.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
        .appendField(Blockly.LKL_NOVA_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_LED_ON, "on()"], [Blockly.LKL_NOVA_LED_OFF, "off()"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// Buzzer Passive - 无源蜂鸣器
  Blockly.Blocks.Baron_Passive_Buzzer1={
  init:function(){
       this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_Baron_BUZZER1)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_Buzzer.png", 149, 82))
            .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(Buzzer_PORTS), "PIN")
      /*this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);***********************************************Pin****/
      this.appendValueInput('FREQUENCY')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_FREQUENCY);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Buzzer Passive - 无源蜂鸣器+持续时间
  Blockly.Blocks.Baron_Passive_Buzzer2={
  init:function(){
      this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_Baron_BUZZER1)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_Buzzer.png", 149, 82)) 
            .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        .appendField(Blockly.LKL_NOVA_FREQUENCY);
    this.appendValueInput('DURATION')
        .setCheck(Number)
        .appendField(Blockly.LKL_NOVA_LKL_DURATION);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    }
  };



// 单按钮
Blockly.Blocks.Baron_Button = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_NOVA_BTN)
       .appendField(new Blockly.FieldImage("../../media/KS/KS_Button.png", 149, 82))
      .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_BUTTON_PRESSED, "1"],[Blockly.LKL_NOVA_BUTTON_RELEASED, "0"]]), "STAT");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

// 电位计
Blockly.Blocks.Baron_Potentiometer = {
init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_NOVA_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/KS/Ks_Potentiometer.png", 149, 82)) 
        .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(ANALOG_PORTS), "PIN");
  this.setOutput(true, Number);
  this.setInputsInline(true);
  }
};



// 光敏
Blockly.Blocks.Baron_Light={
init: function() {
     this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_NOVA_LIGHT)
    .appendField(new Blockly.FieldImage("../../media/KS/Ks_Light.png", 149, 82)) 
        .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(ANALOG_PORTS), "PIN");
  this.setOutput(true, Number);
  this.setInputsInline(true);
  }
};

// 温湿度
Blockly.Blocks.Baron_DHTxx={
init: function() {
     this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_NOVA_DHT11)
    .appendField(new Blockly.FieldImage("../../media/KS/Ks_DHTxx.png", 149, 82)) 
        .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN");
    this.appendDummyInput("")
      .appendField(Blockly.LKL_NOVA_TYPE)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_DHT11_H, "readHumidity()"], [Blockly.LKL_NOVA_DHT11_T, "readTemperature()"]]), "dht");
  this.setOutput(true, Number);
  this.setInputsInline(true);
  }
};

Blockly.Blocks.Baron_Motor = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
    .appendField(Blockly.LKL_NOVA_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/KS/Ks_DCMotor.png", 149, 82)) 
    .appendField(Blockly.LKL_NOVA_PORT)
    .appendField(new Blockly.FieldDropdown(DCMOTOR_PORTS), "PIN");
   this.appendValueInput("NUM", Number)
        .setCheck(Number)
        .appendField(Blockly.LKL_NOVA_MOTOR_SPEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 触摸
Blockly.Blocks.Baron_Touch = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_BARON_TOUCH)
       .appendField(new Blockly.FieldImage("../../media/KS/KS_Touch.png", 180, 149))
      .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(LED_PORTS), "PIN")
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_BUTTON_PRESSED, "1"],[Blockly.LKL_NOVA_BUTTON_RELEASED, "0"]]), "STAT");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
 
// 交通灯
Blockly.Blocks.Baron_Traffic_lights = {
  init: function() {
    this.setColour(ksColor_base);
    this.appendDummyInput("")
      .appendField(Blockly.LKL_Baron_LED1)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_JTD.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT1) 
      /*.appendField(new Blockly.FieldDropdown(LED_PORTS1), "PIN")///////////////////////////////////////调用端口
          this.appendValueInput("STAT")
          .appendField(Blockly.MIXLY_STAT)
          .setCheck([Number,Boolean]);/////////////////////////////官方PinMode*/
           this.appendValueInput("R", Number)
            .appendField(Blockly.LKL_Baron_R)
          .setCheck(Number);

          this.appendValueInput("Y", Number)
           .appendField(Blockly.LKL_Baron_Y)
          .setCheck(Number);

          this.appendValueInput("G", Number)
           .appendField(Blockly.LKL_Baron_G)
          .setCheck(Number);
          this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      /*.appendField(Blockly.LKL_NOVA_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_LED_ON, "on()"], [Blockly.LKL_NOVA_LED_OFF, "off()"]]), "STAT");
           调用库时使用这段设置PinMode*/
   
  }
};

// 超声波
Blockly.Blocks.Baron_Ultrasonic={
init: function() {
   this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_NOVA_ULTRASONIC)
    .appendField(new Blockly.FieldImage("../../media/KS/KS_Ultrasonic.png", 149, 82))
    .appendField(Blockly.LKL_NOVA_PORT1) 
       this.appendValueInput("PINT", Number)
              .appendField('Trig#')
              .setCheck(Number);
          this.appendValueInput("PINE", Number)
              .appendField('Echo#')
              .setCheck(Number);
          this.setInputsInline(true);
          this.setOutput(true, Number);
          this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

/*    //RGB点亮模块1 - 灯号、R值、G值、B值
  Blockly.Blocks.Baron_display_rgb = {
       this.setColour(ksColor_base);
    this.appendDummyInput("")
              .appendField(Blockly.LKL_NOVA_ULTRASONIC)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB.png", 149, 82))
              .appendField(Blockly.LKL_NOVA_PORT1) */
   //RGB点亮模块1 - 灯号、R值、G值、B值
  Blockly.Blocks.Baron_RGB = {
      init: function () {
          this.setColour(ksColor_base);
    this.appendDummyInput("")
        .appendField(Blockly.LKL_Baron_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB.png", 149, 82))
              .appendField(Blockly.LKL_NOVA_PORT1) 
         
          this.appendValueInput("R", Number)
            .appendField(Blockly.LKL_Baron_R)
          .setCheck(Number);

          this.appendValueInput("G", Number)
           .appendField(Blockly.LKL_Baron_G)
          .setCheck(Number);

          this.appendValueInput("B", Number)
           .appendField(Blockly.LKL_Baron_B)
          .setCheck(Number);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);

      }
  };

// 声音
Blockly.Blocks.Baron_Sound = {
  init: function() {
     this.setColour(ksColor_base);
    this.appendDummyInput("")
          .appendField(Blockly.LKL_NOVA_SOUND)
      .appendField(new Blockly.FieldImage("../../media/KS/KS_Sound.png", 149, 82))
          .appendField(Blockly.LKL_NOVA_PORT)
          .appendField(new Blockly.FieldDropdown(ANALOG_PORTS), "PIN");
    this.setOutput(true, Number);
    this.setInputsInline(true);
    }
};

// Joystick digital  - 摇杆按钮数字
 /* Blockly.Blocks.Baron_joystick_d = {
    init: function() {
      this.setColour(ksColor_base);
    this.appendDummyInput("")
            .appendField(Blockly.LKL_Baron_JOYSTICK_D)
            .appendField(new Blockly.FieldImage("../../media/KS/KS_JOYSTICK.png", 149, 82))
            .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(JD_PORTS), "PIN")
      .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_BUTTON_PRESSED, "0"],[Blockly.LKL_NOVA_BUTTON_RELEASED, "1"]]), "STAT");
    this.setOutput(true, Number);
    this.setTooltip('');
    }
  };*/
  
Blockly.Blocks.Baron_joystick_a = {
    init: function() {
      this.setColour(ksColor_base);
    this.appendDummyInput("")
          .appendField(Blockly.LKL_Baron_JOYSTICK_A)
           .appendField(new Blockly.FieldImage("../../media/KS/KS_JOYSTICK.png", 149, 82))
        .appendField(Blockly.LKL_NOVA_PORT)
        .appendField(new Blockly.FieldDropdown(JD_PORTS), "PIN");
    this.appendDummyInput("")
      .appendField(Blockly.LKL_NOVA_GET_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.LKL_NOVA_readX, "readX()"], [Blockly.LKL_NOVA_readY, "readY()"]]), "Joystick");
  this.setOutput(true, Number);
  this.setInputsInline(true);
  }
};

// 热释
Blockly.Blocks.Baron_SR501 = {
  init: function() {
     this.setColour(ksColor_base);
    this.appendDummyInput("")
          .appendField(Blockly.LKL_Baron_SR501)
      .appendField(new Blockly.FieldImage("../../media/KS/KS_SR501.png", 149, 82))
          .appendField(Blockly.LKL_NOVA_PORT)
          .appendField(new Blockly.FieldDropdown(ANALOG_PORTS), "PIN");
    this.setOutput(true, Number);
    this.setInputsInline(true);
    }
};
  Blockly.Blocks.Baron_ir_recv = {
    init: function() {
      this.setColour(ksColor_base);
    this.appendDummyInput("")
          .appendField(Blockly.LKL_Baron_IR_RECEIVE)
          .appendField(new Blockly.FieldImage("../../media/KS/KS_IR.png", 149, 82))
      .appendField(Blockly.LKL_NOVA_PORT)
      .appendField(new Blockly.FieldDropdown(Buzzer_PORTS), "PIN")
       .appendField("   ")//空格的作用
       .appendField(Blockly.LKL_Baron_IR_Data)
      .appendField(new Blockly.FieldTextInput('Ksir_item'), 'VAR');
      this.appendStatementInput('DO')
          .appendField(Blockly.MIXLY_IR_RECEIVE_YES);
      this.appendStatementInput('DO2')
          .appendField(Blockly.MIXLY_IR_RECEIVE_NO);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function() {
      return [this.getFieldValue('VAR')]; },
    renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
        this.setTitleValue(newName, 'VAR');
      }
    }
  };

   var KS_IR_VAL=[  
    
    [{'src': '../../media/KS/KS_IR/KS_OK.png',  'width': 33, 'height': 33, 'alt': 'KS_OK'},          '0xFF02FD'],
    [{'src': '../../media/KS/KS_IR/KS_F.png',   'width': 33, 'height': 33, 'alt': 'KS_F'},           '0xFF629D'],
    [{'src': '../../media/KS/KS_IR/KS_B.png',   'width': 33, 'height': 33, 'alt': 'KS_B'},           '0xFFA857'],
    [{'src': '../../media/KS/KS_IR/KS_L.png',   'width': 33, 'height': 33, 'alt': 'KS_L'},           '0xFF22DD'],
    [{'src': '../../media/KS/KS_IR/KS_R.png',   'width': 33, 'height': 33, 'alt': 'KS_R'},           '0xFFC23D'],
    [{'src': '../../media/KS/KS_IR/KS_X.png',   'width': 33, 'height': 33, 'alt': 'KS_X'},           '0xFF42BD'],
    [{'src': '../../media/KS/KS_IR/KS_K.png',   'width': 33, 'height': 33, 'alt': 'KS_K'},           '0xFF52AD'],
    [{'src': '../../media/KS/KS_IR/KS_0.png',   'width': 33, 'height': 33, 'alt': 'KS_0'},           '0xFF4AB5'],
    [{'src': '../../media/KS/KS_IR/KS_1.png',   'width': 33, 'height': 33, 'alt': 'KS_1'},           '0xFF6897'],
    [{'src': '../../media/KS/KS_IR/KS_2.png',   'width': 33, 'height': 33, 'alt': 'KS_2'},           '0xFF9867'],
    [{'src': '../../media/KS/KS_IR/KS_3.png',   'width': 33, 'height': 33, 'alt': 'KS_3'},           '0xFFB04F'],
    [{'src': '../../media/KS/KS_IR/KS_4.png',   'width': 33, 'height': 33, 'alt': 'KS_4'},           '0xFF30CF'],
    [{'src': '../../media/KS/KS_IR/KS_5.png',   'width': 33, 'height': 33, 'alt': 'KS_5'},           '0xFF18E7'],
    [{'src': '../../media/KS/KS_IR/KS_6.png',   'width': 33, 'height': 33, 'alt': 'KS_6'},           '0xFF7A85'],
    [{'src': '../../media/KS/KS_IR/KS_7.png',   'width': 33, 'height': 33, 'alt': 'KS_7'},           '0xFF10EF'],
    [{'src': '../../media/KS/KS_IR/KS_8.png',   'width': 33, 'height': 33, 'alt': 'KS_8'},           '0xFF38C7'],
    [{'src': '../../media/KS/KS_IR/KS_9.png',   'width': 33, 'height': 33, 'alt': 'KS_9'},           '0xFF5AA5'],
    ];

  Blockly.Blocks.Baron_ir_val = {
    init: function() {
       this.setColour(ksColor_base);
      this.appendDummyInput()
          .appendField(Blockly.LKL_Baron_IR_Key)
          .appendField(new Blockly.FieldDropdown(KS_IR_VAL), 'VAL');
      this.setOutput(true, Number);
      this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    }
  };

  //RGB初始化 引脚 、灯数
  Blockly.Blocks.Baron_display_rgb_init = {
      init: function () {
           this.setColour(ksColor_base);
          this.appendDummyInput("")
              .appendField(Blockly.MIXLY_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB1.png",92, 38));
          this.appendValueInput("PIN", Number)
             .setCheck(Number)
             .setAlign(Blockly.ALIGN_RIGHT)
             .appendField(Blockly.MIXLY_PIN);
          this.appendValueInput("LEDCOUNT")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_COUNT);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip(Blockly.MIXLY_YFTIP_RGB_INIT);
      }
  };

  //RGB点亮模块1 - 灯号、R值、G值、B值
  Blockly.Blocks.Baron_display_rgb = {
      init: function () {
          this.setColour(ksColor_base);
           this.appendDummyInput("")
              .appendField(Blockly.MIXLY_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB1.png",92, 38));
          // this.appendValueInput("PIN", Number)
          //     .setCheck(Number)
          //     .setAlign(Blockly.ALIGN_RIGHT)
          //     .appendField(Blockly.MIXLY_PIN);
          this.appendValueInput("_LED_", Number)
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_NUM);
          this.appendValueInput("RVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_R);
          this.appendValueInput("GVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_G);
          this.appendValueInput("BVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_B);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip('');
      }
  };

 ///RGB点亮模块2 - 灯号、可视直选颜色
  Blockly.Blocks.Baron_display_rgb2 = {
      init: function () {
         this.setColour(ksColor_base);
    this.appendDummyInput("")
              .appendField(Blockly.MIXLY_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB1.png",92, 38));
          this.appendValueInput("_LED_", Number)
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_NUM);
          this.appendDummyInput("")
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(new Blockly.FieldColour("#99FF99"), "RGB_LED_COLOR");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      }
  };

  //RGB值转换24位颜色值 （24位颜色值：8位R，8位G，8位B）
  Blockly.Blocks.Baron_display_rgb_rgbtoc = {
      init: function () {
          this.setColour(ksColor_base);
          this.appendValueInput("RVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_R);
          this.appendValueInput("GVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_G);
          this.appendValueInput("BVALUE")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_B);
          this.appendDummyInput("")
              .appendField("TO")
              .appendField(Blockly.MIXLY_YF_RGB_RGB);
          this.setOutput(true, Number);
          this.setInputsInline(true);
          this.setTooltip('');
      }
  };  

  //RGB点亮模块3 - 灯号、24位颜色值 0~16777216
  Blockly.Blocks.Baron_display_rgb3 = {
      init: function () {
          this.setColour(ksColor_base);
          this.appendDummyInput("")
              .appendField(Blockly.MIXLY_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB1.png",92, 38));
          this.appendValueInput("_LED_", Number)
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_RGB_NUM);
          this.appendValueInput("RGBVAL")
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_YF_RGB_RGB);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip(Blockly.MIXLY_YFTIP_RGB_RGB3);
      }
  };

  //RGB设置亮度模块 - 256亮度级 0~255
  Blockly.Blocks.Baron_display_rgb_setbrightness = {
      init: function () {
            this.setColour(ksColor_base);
             this.appendDummyInput("")
              .appendField(Blockly.MIXLY_RGB)
              .appendField(new Blockly.FieldImage("../../media/KS/KS_RGB1.png",92, 38));
          this.appendValueInput("BRIGHTNESS", Number)
              .setCheck(Number)
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(Blockly.MIXLY_YF_RGB_BRIGHTNESS);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip(Blockly.MIXLY_YFTIP_RGB_BRIGHTNESS);
      }
  };
  var KS_MS=[  
    [{'src': '../../media/KS/KS_M1.png', 'width': 70, 'height': 46, 'alt': 'M1'}, '1'],
    [{'src': '../../media/KS/KS_M2.png', 'width': 70, 'height': 46, 'alt': 'M2'}, '2']];
  var KS_PMR3_MS=[  
    [{'src': '../../media/KS/KS_M1.png', 'width': 70, 'height': 46, 'alt': 'M1'}, '1'],
    [{'src': '../../media/KS/KS_M2.png', 'width': 70, 'height': 46, 'alt': 'M2'}, '2']];
  // Motor direction - 电机转向
  var KS_PMR3_MD=[[Blockly.MIXLY_YFPMR3_MOTOR_DIRECTION_F , '1'],[Blockly.MIXLY_YFPMR3_MOTOR_DIRECTION_D , '0']];
  
  Blockly.Blocks.Baron_pmr3_tb6612_motor={
  init:function(){
      this.setColour(ksColor_base);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_YFPMR3)
          .appendField(new Blockly.FieldImage("../../media/KS/KS_Motor.png", 142, 73))
          .appendField(Blockly.MIXLY_YFPMR3_MOTOR)
          .appendField(new Blockly.FieldDropdown(KS_PMR3_MS), 'PIN');
      this.appendDummyInput()
          .appendField(" ")
          .appendField(new Blockly.FieldDropdown(KS_PMR3_MD), 'DIR');
      this.appendValueInput('speed')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_YFPMR3_MOTOR_SPEED);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_YFPMR3_MOTOR_SPEED_RANGE);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip("多功能扩展板");
      this.setHelpUrl('https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-16388987067.9.5be57a55AtRpbl&id=38073351291');
    }
  };
  
  Blockly.Blocks.Baron_pmr3_tb6612_motor_stop={
  init:function(){
      this.setColour(ksColor_base);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_YFPMR3)
          .appendField(new Blockly.FieldImage("../../media/KS/KS_Motor.png", 142, 73))
          .appendField(Blockly.MIXLY_YFPMR3_MOTOR)
          .appendField(new Blockly.FieldDropdown(KS_MS), 'PIN')
          .appendField(" ")
          .appendField(Blockly.MIXLY_STOP);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };
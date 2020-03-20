#ifndef _KS_JOYSTICK_H_
#define _KS_JOYSTICK_H_
#include "Arduino.h"
#include "Ks.h"
class Joystick
{
public:
	Joystick(uint8_t port);
    void init(void);
	int16_t readX(void);
    int16_t readY(void);
   // float   getDistance(void);
private:
	uint8_t _joystick_xpin;
	uint8_t _joystick_ypin;
	int16_t 
    _x_center,
    _y_center;
};

#endif
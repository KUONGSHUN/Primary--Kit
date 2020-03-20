#ifndef _KS_POTENTIOMETER_H_
#define _KS_POTENTIOMETER_H_
#include "Arduino.h"
#include "Ks.h"

class Potentiometer
{
public:
	Potentiometer(uint8_t port);
	int read(void);
private:
	uint8_t _Potentiometer_pin;
};
#endif
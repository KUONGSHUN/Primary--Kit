#ifndef _KS_BUTTON_H_
#define _KS_BUTTON_H_
#include "Arduino.h"
#include "Ks.h"

class Button
{
public:
	Button(uint8_t port);
	bool state(void);
private:
	uint8_t _button_pin;
};

#endif

#ifndef _KS_BUZZER_H_
#define _KS_BUZZER_H_
#include "Arduino.h"
#include "Ks.h"

class Buzzer
{
public:
	Buzzer(uint8_t port);
	void on(void);
	void off(void);
	void tone(uint16_t frequency, uint32_t duration);
    void noTone();
private:
	uint8_t _Buzzer_pin;
};

#endif
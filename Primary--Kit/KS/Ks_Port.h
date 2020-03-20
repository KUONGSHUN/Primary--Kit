#ifndef _KOVA_PORT_H_
#define _KOVA_PORT_H_
#include "Arduino.h"
#include "Ks.h"


class KsPort
{
public:
    KsPort(uint8_t port);
    uint8_t getPin(uint8_t solt);
    uint8_t getPin();
private:
    uint8_t _pin;
    uint8_t _pin_C;
    uint8_t _pin_D;
	uint8_t _pin_E;
    uint8_t _pin_F;
};
#endif
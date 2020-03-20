#include "Ks_LED.h"

LED::LED(uint8_t port)
{
	switch(port)
	  {
	    case C:
	      _led_pin = C_PIN;
	    break;
	    case D:
	      _led_pin = D_PIN;
	    break;
	    case E:
	      _led_pin = E_PIN;
	    break;
	    case F:
	      _led_pin = F_PIN;
	    break;
	    default:
	    break;
	  }
	pinMode(_led_pin, OUTPUT);
}

void LED::on(void)
{
	digitalWrite(_led_pin, LOW);
}

void LED::off(void)
{
	digitalWrite(_led_pin, HIGH);
}

void LED::brightness(uint8_t brightness)
{
   // if ((_led_pin == S1_PIN) || (_led_pin == S2_PIN))
    {
        //brightness = brightness < 0 ? 0 : brightness;
        //brightness = brightness > 100 ? 100 : brightness;
        analogWrite(_led_pin,map(brightness, 0, 100, 255, 0));
    }
}

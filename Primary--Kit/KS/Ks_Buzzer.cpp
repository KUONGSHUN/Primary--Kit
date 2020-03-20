#include "Ks_Buzzer.h"

Buzzer::Buzzer(uint8_t port)
{
	switch(port)
	{
		case C:
			_Buzzer_pin = C_PIN;
		break;
		case D:
			_Buzzer_pin = D_PIN;
		break;
		case E:
			_Buzzer_pin = E_PIN;
		break;
		case F:
			_Buzzer_pin = F_PIN;
		break;
	    default:
	    break;
	}
	
	pinMode(_Buzzer_pin, OUTPUT);
}

void Buzzer::on(void)
{
	digitalWrite(_Buzzer_pin, LOW);
}

void Buzzer::off(void)
{
	digitalWrite(_Buzzer_pin, HIGH);
}

void Buzzer::tone(uint16_t frequency, uint32_t duration) 
{
  int period = 1000000L / frequency;
  int pulse = period / 2;
  pinMode(_Buzzer_pin, OUTPUT);
  
  for (long i = 0; i < duration * 1000L; i += period) 
  {
    digitalWrite(_Buzzer_pin, HIGH);
    delayMicroseconds(pulse);
    digitalWrite(_Buzzer_pin, LOW);
    delayMicroseconds(pulse);
  }
}

void Buzzer::noTone()
{
  pinMode(_Buzzer_pin, OUTPUT);
  digitalWrite(_Buzzer_pin, HIGH);
}
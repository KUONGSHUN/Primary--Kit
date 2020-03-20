#include "Ks_Sound.h"

Sound::Sound(uint8_t pin)
{
	/* switch(port)
	{
		case C:
			_sound_pin = C_PIN;
		break;
		case D:
			_sound_pin = D_PIN;
		break;
		case E:
			_sound_pin = E_PIN;
		break;
		case F:
			_sound_pin = F_PIN;
		break;
		case A0:
	      _sound_pin = A0;
	    break;
	    case A1:
	      _sound_pin = A1;
	    break;
	    
	    default:
	    break;
	}
	
	pinMode(_sound_pin, INPUT); */
	_sound_pin = pin;
}

int Sound::read(void)
{
	return analogRead(_sound_pin);
}


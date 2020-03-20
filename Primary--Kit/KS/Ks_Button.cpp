#include "Ks_Button.h"

Button::Button(uint8_t port)
{

	switch(port)
	{
		case C:
			_button_pin = C_PIN;
		break;
		case D:
			_button_pin = D_PIN;
		break;
		case E:
			_button_pin = E_PIN;
		break;
		case F:
			_button_pin = F_PIN;
		break;
		case A0:
	      _button_pin = A0;
	    break;
	    case A1:
	      _button_pin = A1;
	    break;
	    
	    default:
	    break;
	}
	
	pinMode(_button_pin, INPUT);
}

bool Button::state(void)
{
	if(digitalRead(_button_pin) == HIGH)
	{
		delay(10);
		if(digitalRead(_button_pin) == HIGH)
		{
			return false;
		}
	}
	
	{
		return true;
	}
}
#include "Ks_Joystick.h"
Joystick::Joystick(uint8_t port)
{
switch(port)
	{
		
		break;
		case D:
			_joystick_xpin = A2;
			_joystick_ypin = A3;
		break;
		
		case F:
			_joystick_xpin = A4;
			_joystick_ypin = A5;
		break;
		
	    default:
	    break;
	}
	
	pinMode(_joystick_xpin, INPUT);
	pinMode(_joystick_ypin, INPUT);
}

void Joystick::init(void)
{
   /*  int16_t x_sum = 0,y_sum= 0;
    int16_t i;
    
    for(i=0;i<10;i++)
    {
        x_sum += analogRead(_joystick_xpin);
        y_sum += analogRead(_joystick_xpin);
        delay(10);
    } */
   // _x_center = x_sum/10;
   // _y_center = y_sum/10;   这里是将原有的值500多相减清零
}
int16_t Joystick::readX(void)
{
     return (analogRead(_joystick_xpin));
}

int16_t Joystick::readY(void)
{
    return (analogRead(_joystick_ypin));
}

/* float Joystick::getDistance(void)
{
    long dx   = abs(readX());
    long dy   = abs(readY());
    long distance = dx * dx + dy * dy;
    return sqrt(distance); 
} */



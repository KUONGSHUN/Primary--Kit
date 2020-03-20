#include "Ks_Port.h"

KsPort::KsPort(uint8_t port)
{
    _pin = 0;
    _pin_C = 0;
    _pin_D = 0;
	_pin_E = 0;
    _pin_F = 0;
    
    switch(port)
	  {
	    case C:
	      _pin = C_PIN;
	    break;
	    case D:
	      _pin = D_PIN;
	    break;
	    case E:
	      _pin = E_PIN;
	    break;
	    case F:
	      _pin = F_PIN;
	    break;
        
	    case A0:
	      _pin = A0;
	    break;
	    case A1:
	      _pin = A1;
	    break;
	    
	    
        // case M0:
	      // _pin_S1 = M0_S1;
          // _pin_S2 = M0_S2;
	    // break;
	    // case M1:
	      // _pin_S1 = M1_S1;
          // _pin_S2 = M1_S2;
	    // break;
	    // case M2:
	      // _pin_S1 = M2_S1;
          // _pin_S2 = M2_S2;
	    // break;
	    // case M3:
	      // _pin_S1 = M3_S1;
          // _pin_S2 = M3_S2;
	    // break;
		
		 case C0:
	      _pin_D = C0_D;
          _pin_E = C0_E;
	    break;
	    case C1:
	      _pin_D = C1_D;
          _pin_E = C1_E;
	    break;
       
	    default:
	    break;
	  }
}

uint8_t KsPort::getPin()
{
    return _pin;
}

uint8_t KsPort::getPin(uint8_t solt)
{
    if (solt == D)
    {
        return _pin_D;    
    }
    else if (solt == E)
    {
        return _pin_E;    
    }
}

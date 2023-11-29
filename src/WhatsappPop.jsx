import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Image1 from "./images/1.png"

export default function WhatsappPop (){

  return (
      <FloatingWhatsApp 
      phoneNumber='+243973679401'
      accountName='B.E.E.P.M '  
      chatMessage='Bonjour!'
      avatar={Image1}
      modil
      />
  )
}

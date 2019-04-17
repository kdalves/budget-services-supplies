import React, { Component } from 'react';

class Footer extends Component {
   render(){ 
    return(
            
        <div className="footer">            
          <div className="container"> 
              <div className="row">
                <div className="col-sm-3">                    
                    <div><span className="title-footer-black">E SE ALGO </span><span className="title-footer-orange">DER ERRADO?</span></div>
                    <div className="middle-footer">Conte coma nossa garantia contra danos de até R$5.000,00.</div>
                    <div className="link-footer"><link href="" alt="saiba mais"/>SAIBA MAIS</div>
                </div>
                <div className="col-sm-3">                    
                    <div><span className="title-footer-black">PROFISSIONAIS </span><span className="title-footer-orange">VERIFICADOS</span></div>
                    <div className="middle-footer">verificamos <b>antecedentes criminais</b>, referências profissionais e muito mais.</div>
                    <div className="link-footer"><link href="" alt="saiba mais"/>SAIBA MAIS</div>
                </div>
                <div className="col-sm-3">                    
                    <div><span className="title-footer-black">PAGAMENTO </span><span className="title-footer-orange">NA PLATAFORMA</span></div>
                    <div className="middle-footer">Pague em até 6x no seu cartão de crédito direto no app ou no site!</div>
                    <div className="link-footer"><link href="" alt="saiba mais"/>SAIBA MAIS</div>
                </div>
                <div className="col-sm-3">                    
                    <div><span className="title-footer-black">CENTRAL DE </span><span className="title-footer-orange">AJUDA</span></div>
                    <div className="middle-footer">Te ajudamos antes, durante ou depois do seu pedido, 24 horas por dia.</div>
                    <div className="link-footer"><link href="" alt="saiba mais"/>SAIBA MAIS</div>
                </div>
              </div>
          </div>
          <div className="ps"></div>
        </div>
    );
   }
}

export default Footer;
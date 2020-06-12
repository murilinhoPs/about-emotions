import React from "react";
import ImageContent from "../image-container";
import './styles.css';

export default function ImagesList() {
  return (
    <div className="Images-Container">
      <ImageContent
        url={require("../../assets/images/medo.png")}
        content="Eu me escondo, o que é isso? Parece assustador! Procuro um amigo, um
          protetor! Algo me assusta, não sei bem o quê. Eu só sei que quero
          muito correr! Mas, quando vou ver, é só imaginação. Não é nada
          divertido, ai meu coração! Ficar no escuro ou sozinho me deixa tenso?
          É só ilusão! Estar com os amigos é uma ótima solução!!"
      />
      <ImageContent
        url={require("../../assets/images/raiva.png")}
        content="Aparece quando algo não está legal e nos sentimos desrespeitados. 
        Dá vontade de gritar, esbravejar. Ficamos vermelhos, parecendo uma fera, fazemos caretas e ficamos à espera. 
        À espera de passar e tudo se acalmar, porque a raiva vem e vai, como onda do mar. 
        Quando tenho que fazer o que não quero, ela pode vir e o que eu faço? Vejo ela partir.
         Assim, consigo conversar e solucionar. 
         E depois? Chamar os amigos para brincar!"
      />
      <ImageContent
        url={require("../../assets/images/triste.png")}
        content="Queremos ficar quietos, 
        no nosso cantinho. Um abraço dos amigos vai muito bem, 
        deixa a gente quentinho. 
        Queremos choramingar e parece que esse desânimo não vai passar... 
        Mas a tristeza tem fim e me sentir amado ajuda a superar! 
        Quando o brinquedo que gostamos quebra, sinto vontade de chorar e um carinho da mamãe ajuda isso a passar."
      />
    </div>
  );
}

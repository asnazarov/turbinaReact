import React from 'react'
import AboutForm from "./AboutForm";


const About = () => {

  return (
    <section>
      Яндекс Практикум
      <h2 className="about__header">О ПРОЕКТЕ.</h2>
      <p className="about__text">Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены
      и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка.
      Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.
      Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское творчество
и бессознательное, замеченное родителем, становится общественным культурным достоянием.</p>
      <AboutForm />
    </section>
  )
}

export default About
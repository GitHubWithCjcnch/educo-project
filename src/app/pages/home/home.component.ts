import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  articles = [
    {
      title: 'Esteja com quem tem o mesmo conhecimento que você',
      description:
        'E estude com diversos outros estudantes online. Através das comunidades, interaja e se divirta, com as atividades que são criadas pelos seus colegas de servidor',
      image: '../../../assets/test/575a0322f3b36ca2fecb23ad2c6dd5ad.svg'
    },
    {
      title: 'Sabe quando você não entende a matéria mas um colega te explica tudo?',
      description:
        'Na plataforma Educo você pode tirar dúvidas com os parceiros da comunidade. Seja matemática, ciências, história... A qualquer hora, sempre terá alguém disposto para te ajudar',
      image: '../../../assets/test/46b2132c01604c9493d558de444929f4.svg'
    }
  ];
  constructor(private elementRef: ElementRef) { }
}

import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Iods } from '../models/iods';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  listaods: Iods[] = [
    {
      numero: 1,
      objetivo: 'Erradicação da pobreza',
      desc: 'Erradicar a pobreza em todas as formas e em todos os lugares ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/1.png',
      pagina: '/um',
      favorito: false
    },
    {
      numero: 2,
      objetivo: 'Fome zero e agricultura sustentável ',
      desc: 'Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/2.png',
      pagina: '/dois',
      favorito: false
    },
    {
      numero:  3,
      objetivo: 'Saúde e Bem-Estar',
      desc: 'Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/3.png',
      pagina: '/tres',
      favorito: false
    },
    {
      numero:  4,
      objetivo: 'Educação de qualidade',
      desc: 'Garantir o acesso à educação inclusiva,DeQualidadeeEquitativa,EPromoverOportunidadesDeAprendizagemAo longo da vida para todos',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/4.png',
      pagina: '/quatro',
      favorito: false
    },
    {
      numero:  5,
      objetivo: 'Igualdade de gênero',
      desc: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/5.png',
      pagina: '/cinco',
      favorito: false
    },
    {
      numero:  6,
      objetivo: 'Água potável e saneamento ',
      desc: 'Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/6.png',
      pagina: '/seis',
      favorito: false
    },
    {
      numero:  7,
      objetivo: 'Energia limpa e acessível',
      desc: 'Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/7.png',
      pagina: '/sete',
      favorito: false
    },
    {
      numero:  8,
      objetivo: 'Trabalho decente e crescimento econômico',
      desc: 'Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos  ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/8.png',
      pagina: '/oito',
      favorito: false
    },
    {
      numero:  9,
      objetivo: 'Indústria, inovação e infraestrutura ',
      desc: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/9.png',
      pagina: '/nove',
      favorito: false
    },
    {
      numero:  10,
      objetivo: 'Redução das desigualdades  ',
      desc: 'Reduzir as desigualdades no interior dos países e entre países ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/10.png',
      pagina: '/dez',
      favorito: false
    },
    {
      numero:  11,
      objetivo: 'Cidades e comunidades sustentáveis ',
      desc: 'Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/11.png',
      pagina: '/onze',
      favorito: false
    },
    {
      numero:  12,
      objetivo: 'Consumo e produção responsáveis ',
      desc: 'Garantir padrões de consumo e de produção sustentáveis  ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/12.png',
      pagina: '/doze',
      favorito: false
    },
    {
      numero:  13,
      objetivo: 'Ação contra a mudança global do clima ',
      desc: 'Adotar medidas urgentes para combater as alterações climáticas e os seus impactos ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/13.png',
      pagina: '/treze',
      favorito: false
    },
    {
      numero:  14,
      objetivo: 'Vida na água ',
      desc: 'Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/14.png',
      pagina: '/quatorze',
      favorito: false
    },
    {
      numero:  15,
      objetivo: 'Vida terrestre',
      desc: 'Proteger,RestaurarEPromoverOUsoSustentávelDosEcossistemasTerrestres.',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/15.png',
      pagina: '/quinze',
      favorito: false
    },
    {
      numero:  16,
      objetivo: 'Paz, Justiça e Instituições Eficazes ',
      desc: 'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável.',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/16.png',
      pagina: '/deseseis',
      favorito: false
    },
    {
      numero:  17,
      objetivo: 'Parcerias e meios de implementação ',
      desc: 'Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável ',
      imagem: 'https://www.nossosobjetivos.com.br/wp-content/themes/ods/_assets/images/icon/17.png',
      pagina: '/desesete',
      favorito: false
    }
  ];

  exibirOds(ods: Iods){
    const navigationExtras: NavigationExtras = {state:{paramOds:ods}};
    this.router.navigate(['ods-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ods: Iods) {
    const alert = await this.alertController.create({
      header: 'Ods interesasnte',
      message: 'Deseja colocar essa ods como interessante?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ods.favorito=false;
          }
        }, {
          text: 'Sim',
          handler: () => {
            ods.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'ODS adicionada como interessante...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}

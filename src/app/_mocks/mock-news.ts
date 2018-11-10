import {News} from '../_classes';

const news = [
  {
    title: 'Евро корректируется после шести дней падения',
    content:
      'После шести дней падения с 1,1798 (-335 пунктов) пара евро/доллар стабилизировалась на уровне 1,1463. Доллар США торгуется смешанно в Европе. Британский фунт, йена и евро торгуются против него в плюсе, остальные – в минусе.',
    date: '2018-11-03T15:47:10.214Z',
    viewed: true
  },
  {
    title: 'Международные резервы РФ за неделю снизились на $0,9 млрд‍',
    content:
      'Международные резервы РФ на 28 сентября 2018 года составили $461,1 млрд, что на $0,9 млрд ниже уровня неделей ранее, сообщил Банк России. Как отметил регулятор, сокращение резервов на 0,2% произошло в результате отрицательной переоценки.',
    date: '2018-11-03T12:47:10.214Z',
    viewed: false
  },
  {
    title: 'Международные резервы РФ за неделю снизились на $0,9 млрд‍',
    content:
      'Международные резервы РФ на 28 сентября 2018 года составили $461,1 млрд, что на $0,9 млрд ниже уровня неделей ранее, сообщил Банк России. Как отметил регулятор, сокращение резервов на 0,2% произошло в результате отрицательной переоценки.',
    date: '2018-11-08T16:47:10.214Z',
    viewed: false
  }
];

export const NEWS: News[] = news.map(ns => new News(ns.date, ns.title, ns.content, ns.viewed));

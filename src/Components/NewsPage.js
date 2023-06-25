import { useParams } from "react-router-dom";

const news = [
  <div>
    <h1>Актуальні проблеми дослідження довкілля (Міжнародна)</h1>
    <img
      src={require(`../assets/1.jpg`)}
      alt="image"
      className="news-image"
    ></img>
    <p>
      Що два роки на базі кафедр природничо-географічного факультету проходить
      Міжнародна наукова конференція «Актуальні проблеми дослідження довкілля».
    </p>
    <p>
      <b>Мета проведення заходу</b> – це міжнародна співпраця науковців у різних
      напрямках дослідження довкілля, координація спільної дослідницької
      діяльності, встановлення зв’язків між дослідниками, сприяння їх творчому
      росту і підвищенню їх наукового рівня, вироблення єдиних критеріїв до
      оцінки стану навколишнього середовища, що, в свою чергу, дасть змогу
      оперативно реагувати та прогнозувати негативні тенденції антропогенної
      деградації довкілля. Конференцію започатковано у 2004 році
      природничо-географічним факультетом СумДПУ імені А.С. Макаренка. Починаючи
      з 2015 року постійним співорганізатором даного заходу є Гетьманський
      національний природний парк.
    </p>
    <p>
      <b>Основні напрямки роботи конференції:</b>
    </p>
    <ul>
      <li>
        Вивчення і охорона ландшафтного, ценотичного та видового різноманіття
      </li>
      <li>Геоекологія та раціональне природокористування</li>
      <li>Суспільно-географічні аспекти дослідження довкілля</li>
      <li>Рекреаційно-туристський потенціал регіонів</li>
      <li>Якість довкілля та здоров’я населення</li>
      <li>Проблеми експериментальної біології</li>
      <li>Хіміко-екологічний моніторинг довкілля</li>
      <li>Екологічна безпека</li>
      <li>Математичне моделювання та прогнозування стану довкілля</li>
      <li>Геоінформаційні системи в дослідженнях довкілля</li>
      <li>Методологія, методика та історія екологічної освіти</li>
    </ul>
  </div>,
  <div>
    <h1>Сьогодення біологічної науки (Міжнародна)</h1>
    <img
      src={require(`../assets/2.jpg`)}
      alt="image"
      className="news-image"
    ></img>
    <p>
      У 2018 році на кафедрі біології людини та тварин природничо-географічного
      факультету СумДПУ імені А.С. Макаренка започатковано Міжнародну наукову
      конференцію «Сьогодення біологічної науки», що проводиться у дистанційному
      форматі.
    </p>
    <p>
      <b>Мета проведення заходу</b> – співпраця науковців у галузі різних
      досліджень біологічної тематики, координація міжнародної спільної
      дослідницької діяльності, встановлення зв’язків, обмін досвідом, сприяння
      творчому росту і підвищенню наукового рівня учасників заходу.
    </p>
    <p>
      <b>Основні напрямки роботи конференції:</b>
    </p>
    <ul>
      <li>Вірусологія, мікробіологія, паразитологія;</li>
      <li>Молекулярна біологія, біофізика та біохімія;</li>
      <li>Генетика та біотехнологія;</li>
      <li>Біологія, фізіологія рослин та експериментальна ботаніка;</li>
      <li>Біологія, фізіологія тварин та експериментальна зоологія;</li>
      <li>
        Анатомія, фізіологія людини; механізми адаптації органів і систем тіла
        людини; медико-біологічні аспекти патогенного впливу на організм людини;
      </li>
      <li>Експериментальна біологія, біомедицина, фармакологія;</li>
      <li>Біологічна освіта та методика навчання біологічних дисциплін.</li>
    </ul>
  </div>,
  <div>
    <h1>Сумські наукові географічні читання (Всеукраїнська)</h1>
    <img
      src={require(`../assets/3.jpg`)}
      alt="image"
      className="news-image"
    ></img>
    <p>
      Щороку на базі кафедри загальної та регіональної географії
      природничо-географічного факультету проходить Всеукраїнська наукова
      конференція «Сумські наукові географічні читання», організована спільно із
      Сумським відділом Українського географічного товариства. Конференцію
      започатковано у 2016 році.
    </p>
    <p>
      <b>Мета проведення заходу</b> – співпраця науковців, які працюють у різних
      галузях географії та географічної освіти, координація їх спільної
      дослідницької діяльності, встановлення зв’язків між дослідниками, сприяння
      їхньому творчому й професійному зростанню, підвищення наукового рівня
      досліджень, удосконалення методики навчання географії вироблення підходів
      до географічного вивчення природи, населення та господарства Сумської
      області та інших регіонів України.
    </p>
    <p>
      <b>Основні напрямки роботи конференції:</b>
    </p>
    <ul>
      <li>Регіональні географічні дослідження.</li>
      <li>Географічна наука</li>
      <li>Географічна освіта.</li>
    </ul>
  </div>,
  <div>
    <h1>
      Теоретичні та прикладні аспекти досліджень з біології, географії та хімії
      (Всеукраїнська)
    </h1>
    <img
      src={require(`../assets/4.jpg`)}
      alt="image"
      className="news-image"
    ></img>
    <p>
      З метою активізації та популяризації наукової діяльності молодих науковців
      природничо-географічним факультетом у 2017 році започатковано
      Всеукраїнську наукову конференцію студентів та молодих учених «Теоретичні
      та прикладні аспекти досліджень з біології, географії та хімії».
      Конференція проводиться раз на два роки.
    </p>
    <p>
      <b>Мета проведення заходу</b> – це співпраця молодих науковців у різних
      напрямках досліджень з біології, хімії та географії, координація спільної
      дослідницької діяльності, встановлення зв’язків між дослідниками, сприяння
      їх творчому росту і підвищенню їх наукового рівня.
    </p>
    <p>
      <b>Основні напрямки роботи конференції:</b>
    </p>
    <ul>
      <li>Сучасні аспекти біологічних досліджень.</li>
      <li>Екологія та екологічна безпека.</li>
      <li>Якість довкілля та здоров’я населення.</li>
      <li>Географія та раціональне природокористування.</li>
      <li>Хімічні дослідження: теоретичні та практичні засади.</li>
      <li>Актуальні питання методик навчання природничих дисциплін.</li>
      <li>Історія природничих наук.</li>
    </ul>
  </div>,
  <div>
    <h1>Освітні та наукові виміри природничих наук (Всеукраїнська)</h1>
    <img
      src={require(`../assets/5.jpg`)}
      alt="image"
      className="news-image"
    ></img>
    <p>
      Конференцію започатковано у 2020 році. Її організація і проведення були
      приурочені до 90-річчя заснування природничо-географічного факультету
      Сумського державного педагогічного університету імені А. С. Макаренка.
    </p>
    <p>
      <b>Мета проведення заходу</b> – це співпраця науковців України у галузях
      біології та природничих наук, а також методики їх навчання, координація
      спільної дослідницької діяльності, встановлення зв’язків між дослідниками,
      сприяння їх творчому зростанню й підвищенню рівня наукових досліджень.
    </p>
    <p>
      <b>Основні напрямки роботи конференції:</b>
    </p>
    <ul>
      <li>Вивчення та збереження біорізноманіття у сучасних умовах.</li>
      <li>Екологічна безпека та охорона навколишнього середовища.</li>
      <li>Якість довкілля та здоров’я населення.</li>
      <li>Фізична географія та природокористування.</li>
      <li>Сучасні питання суспільної географії.</li>
      <li>Сучасна хімія та хімічний експеримент.</li>
      <li>Сучасні питання методик навчання природничих дисциплін.</li>
      <li>Історія природничих наук.</li>
    </ul>
  </div>,
];

export default function NewsPage() {
  const { id } = useParams();
  return news[id - 1];
}

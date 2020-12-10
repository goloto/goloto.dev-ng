import { Project } from "./project";
import { TAGS } from "./tags";

export const PROJECTS: Project[] = [
  new Project(
    'vulkana.ru',
    'vulcana',
    'https://www.vulkana.ru/',
    { start: new Date(2020, 7), end: new Date(2020, 8), },
    ['fix displaying prices for non-auth users',],
    [TAGS.backend,],),

  new Project(
    'razo10.ru',
    'razo10',
    'https://razo10.ru/',
    { start: new Date(2020, 7), end: new Date(2020, 8), },
    ['fix H1', 'fix 404-links', 'fix src- and alt-attributes', 'fix layout', 'fix styles',],
    [TAGS.laravel, TAGS.ui, TAGS.seo,],),

  new Project(
    'potencia.expert',
    'potencia',
    'https://potencia.expert/',
    { start: new Date(2020, 6), end: new Date(2020, 7), },
    ['fix templates data output', 'integrate schema.org', 'fix layout', 'fix styles',],
    [TAGS.modx, TAGS.ui, TAGS.backend, TAGS.seo,],),

  new Project(
    'tessa.ru',
    'tessa',
    'http://tessa.ru/',
    { start: new Date(2020, 5), end: new Date(2020, 6), },
    ['develop layout', 'develop forms', 'integrate sliders', 'integrate animations', 'search and integrate icons', 'integrate content into Bitrix CMS',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.features, TAGS.deploy,],),

  new Project(
    'vegatyres-shop.ru',
    'vegatyres-shop',
    'https://vegatyres-shop.ru/',
    { start: new Date(2020, 5), end: new Date(2020, 6), },
    ['develop and integrate new design', 'integrate schema.org', 'fix alt-attributes', 'add content', 'fix content',],
    [TAGS.bitrix, TAGS.ui, TAGS.features, TAGS.seo,],),

  new Project(
    'orgsoft.ru',
    'orgsoft',
    'http://orgsoft.ru/',
    { start: new Date(2020, 5), end: new Date(2020, 6), },
    ['back up and move project to different hosting',],
    [TAGS.bitrix, TAGS.deploy,],),

  new Project(
    'redbee.ru',
    'redbee',
    'https://www.redbee.ru/',
    { start: new Date(2020, 5), end: new Date(2020, 6), },
    ['develop brochure page from design model', 'integrate schema.org', 'develop forms', 'integrate content into Bitrix CMS',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.features,],),

  new Project(
    'acare.ru',
    'acare',
    'https://www.acare.ru/ru/homepage.html#',
    { start: new Date(2020, 4), end: new Date(2020, 5), },
    ['create terms of reference for schema.org integration',],
    [TAGS.bitrix, TAGS.specification,],),

  new Project(
    'dcd.ru',
    'dcd',
    'https://www.dcd.ru/',
    { start: new Date(2020, 4), end: new Date(2020, 5), },
    ['back up and move project to different hosting',],
    [TAGS.bitrix, TAGS.deploy,],),

  new Project(
    'i3d.ru',
    'i3d',
    'https://i3d.ru/',
    { start: new Date(2020, 4), end: new Date(2020, 7), },
    ['fix turbo pages generating', 'optimize scripts and libraries loading', 'fix alt-attributes', 'develop meta-information generating', 'fix 301-, 302-, 404-links', 'integrate schema.org', 'fix layout', 'fix styles',],
    [TAGS.bitrix, TAGS.ui, TAGS.backend, TAGS.seo, TAGS.deploy,],),

  new Project(
    'securitysmokescreen.ru',
    'securitysmokescreen',
    'https://securitysmokescreen.ru/',
    { start: new Date(2020, 4), end: new Date(2020, 8), },
    ['integrate re-captcha', 'add content', 'fix content', 'fix layout', 'fix styles', 'fix analytic counts', 'develop meta-information generating',],
    [TAGS.bitrix, TAGS.ui, TAGS.backend, TAGS.features, TAGS.deploy,],),

  new Project(
    'my-safe.ru',
    'my-safe',
    'https://www.my-safe.ru/',
    { start: new Date(2020, 2), end: new Date(2020, 3), },
    ['develop new service page', 'develop new cost calculator', 'fix layout', 'fix styles', 'add new content',],
    [TAGS.bitrix, TAGS.ui, TAGS.backend, TAGS.features, TAGS.deploy,],),

  new Project(
    'f-karting.ru',
    'f-karting',
    'https://f-karting.ru/',
    { start: new Date(2020, 1), end: new Date(2020, 2), },
    ['integrate schema.org', 'develop forms', 'integrate re-captcha', 'back up and move project to different hosting', 'fix layout', 'fix styles',],
    [TAGS.bitrix, TAGS.ui, TAGS.backend, TAGS.features, TAGS.deploy,],),

  new Project(
    'liston.ru / listonlab.com',
    'liston',
    'https://www.listonlab.com/',
    { start: new Date(2020, 1), end: new Date(2020, 8), },
    ['integrate new design into sliders, forms, basket, news and product pages', 'set up products basket', 'set up breadcrumbs', 'set up analytic counts', 'fix 404 page', 'fix turbo-pages generating', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS', 'back up and move project to different hosting',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.backend, TAGS.deploy,],),

  new Project(
    '1oknaveka.ru',
    '1oknaveka',
    'https://1oknaveka.ru/',
    { start: new Date(2020, 1), end: new Date(2020, 6), },
    ['integrate ~200 html-pages into Bitrix CMS', 'develop and optimize page routes', 'integrate new design', 'integrate 3-level menu', 'develop forms', 'fix 301-, 302-, 404-links', 'delete duplicated pages and set up 301-redirects', 'fix H1', 'develop turbo-pages generating', 'fix content', 'integrate schema.org', 'develop meta-information generating', 'fix layout', 'fix styles', 'back up and move project to different hosting',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.backend, TAGS.seo, TAGS.features,],),

  new Project(
    'cropscience.bayer.ru',
    'cropscience',
    'https://www.cropscience.bayer.ru/',
    { start: new Date(2019, 10), end: new Date(2020, 3), },
    ['create terms of reference for schema.org integration, increasing page speed and turbo-pages integration',],
    [TAGS.bitrix, TAGS.specification,],),

  new Project(
    'bystrumgel.com',
    'bystrumgel',
    'https://www.bystrumgel.com/',
    { start: new Date(2019, 9), end: new Date(2020, 0), },
    ['layout validation', 'integrate schema.org', 'increase page speed', 'add article section and pages', 'fix meta-information', 'fix animations', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.backend, TAGS.seo, TAGS.deploy,],),

  new Project(
    'omez.ru',
    'omez',
    'https://omez.ru/',
    { start: new Date(2019, 9), end: new Date(2020, 8), },
    ['add turbo-pages', 'integrate schema.org', 'increase page speed', 'add article section and pages', 'fix meta-information', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS', 'back up and move project to different hosting',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.backend, TAGS.seo, TAGS.deploy,],),

  new Project(
    'baikalelectronics.ru / baikalelectronics.com',
    'baikalelectronics',
    'https://baikalelectronics.com/',
    { start: new Date(2019, 7), end: new Date(2020, 8), },
    ['develop and integrate new product pages', 'develop and integrate new procurements page', 're-design main page', 'add content', 'fix content', 'fix layout', 'fix styles',],
    [TAGS.bitrix, TAGS.ui, TAGS.features, TAGS.backend, TAGS.deploy,],),

  new Project(
    'aquadetrim.com',
    'aquadetrim',
    'https://aquadetrim.com/',
    { start: new Date(2019, 6), end: new Date(2020, 0), },
    ['add content', 'fix content', 'add article section and pages', 'fix 301-, 302-, 404-links', 'fix breadcrumbs', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.backend, TAGS.features, TAGS.seo,],),

  new Project(
    'fitolizin.ru',
    'fitolizin',
    'https://www.fitolizin.ru/',
    { start: new Date(2019, 6), end: new Date(2020, 0), },
    ['add content', 'fix content', 'fix meta-information', 'develop and integrate article pages', 'fix scrolling', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
    [TAGS.bitrix, TAGS.ui, TAGS.integration, TAGS.features, TAGS.seo,],),
]

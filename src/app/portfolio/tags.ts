export class Tag {
  constructor(public name: string, public code: string) {}
}

export const TAGS = {
  bitrix: new Tag('Bitrix', 'bitrix'),
  modx: new Tag('ModX', 'modx'),
  laravel: new Tag('Laravel', 'laravel'),
  integration: new Tag('CMS integration', 'integration'),
  ui: new Tag('UI fixes', 'ui'),
  backend: new Tag('backend fixes', 'backend'),
  seo: new Tag('SEO', 'seo'),
  features: new Tag('new features', 'features'),
  deploy: new Tag('deploying/backup', 'deploy'),
  specification: new Tag('specification', 'spec')
}

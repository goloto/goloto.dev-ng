export class RedbeeProjectTag {
  constructor(public name: string, public code: string) {}
}

export const RedbeeProjectTags = {
  bitrix: new RedbeeProjectTag('Bitrix', 'bitrix'),
  modx: new RedbeeProjectTag('ModX', 'modx'),
  laravel: new RedbeeProjectTag('Laravel', 'laravel'),
  integration: new RedbeeProjectTag('CMS integration', 'integration'),
  ui: new RedbeeProjectTag('UI fixes', 'ui'),
  backend: new RedbeeProjectTag('backend fixes', 'backend'),
  seo: new RedbeeProjectTag('SEO', 'seo'),
  features: new RedbeeProjectTag('new features', 'features'),
  deploy: new RedbeeProjectTag('deploying/backup', 'deploy'),
  specification: new RedbeeProjectTag('specification', 'spec')
}
